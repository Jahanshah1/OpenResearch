import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Web3Storage } from 'web3.storage'

function Application() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  // Construct with token and endpoint
  const client = new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDZGMEVFNzVDOTAyRThFQjAzMDk4OTdCYThkMEJlNzU1Y0UzNTBmOEYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzQyNDE4MjMzNTksIm5hbWUiOiJPcGVuUmVzZWFyY2gifQ._cWizBU7_2dkxy-4GLjpgMS65n5QSHwyVlSYREAJ_YQ'});
  const onDrop = async acceptedFiles => {
    setLoading(true);
    // Pack files into a CAR and send to web3.storage
    const rootCid = await client.put(acceptedFiles) // Promise<CIDString>
    // Get info on the Filecoin deals that the CID is stored in
    const info = await client.status(rootCid) // Promise<Status | undefined>
    // Fetch and verify files from web3.storage
    const res = await client.get(rootCid) // Promise<Web3Response | null>
    const files = await res.files() // Promise<Web3File[]>
    setFiles(files.map(file => ({
      cid: file.cid,
      name: file.name,
      size: file.size,
      preview: URL.createObjectURL(file)
    })));
    setLoading(false);
  };

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: 'application/pdf'});

  return (
    <div className="h-screen bg-[#222629] flex flex-col">
        <div className="flex justify-between">
            <div className="w-1/2">
                <div {...getRootProps()} className={`dropzone border border-[#fff] text-xl font-poppins text-white p-20 ${isDragActive && 'dropzone--isActive'}`} style={{marginTop:'370px', marginLeft:'40px'}}>
                    <input {...getInputProps()} />
                    {
                      isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some PDF files here, or click here to select files...</p>
                    }
                </div>
                {loading && <p className="mt-3 text-white spinner" style={{marginLeft:'60px', marginTop:'45px'}}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  
                  
                  </p>}
                <div className="mt-3 text-white" style={{marginLeft:'20px'}}>
                    <ul>
                      {files.map(file => (
                        <li key={file.cid}>
                           {file.name}
                           {file.size} bytes - CID: {file.cid}
                           <a href={`https://ipfs.io/ipfs/${file.cid}`} onClick={() => window.open(`https://ipfs.io/ipfs/${file.cid}`,'_blank')} style={{marginLeft:'20px'}} className='cyberpunk-button'>View the file</a>


                           
                        </li>
                        
                      ))}
                    </ul>
                </div>
            </div>

            <div className="w-1/2 text-white mt-5">
              
                <div class="typewriter" style={{marginLeft:'355px', marginTop:'365px'}}>
                    <div class="slide"><i></i></div>
                    <div class="paper"></div>
                    <div class="keyboard"></div>
                </div>
            </div>
        </div>
    </div>
  );
}




export default Application;

