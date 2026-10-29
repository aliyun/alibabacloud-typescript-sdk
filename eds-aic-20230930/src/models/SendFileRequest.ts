// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendFileRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instances.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * Specifies whether to automatically install the uploaded application.
   * 
   * @example
   * true
   */
  autoInstall?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. The token can be up to 100 characters in length.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  clientToken?: string;
  /**
   * @remarks
   * The MD5 value of the input file.
   */
  fileMd5?: string;
  /**
   * @remarks
   * The upload path inside the cloud phone to which the file is uploaded.
   * 
   * > If UploadType is OSS or OSS_BRIDGED, the upload path SourceFilePath inside the cloud phone must be a directory, such as /sdcard/Download. If UploadType is DOWNLOAD_URL, the upload path SourceFilePath inside the cloud phone must be a file, such as /sdcard/Download/MyFile.txt.
   * >
   * 
   * This parameter is required.
   * 
   * @example
   * /sdcard/Download
   */
  sourceFilePath?: string;
  /**
   * @remarks
   * The name of the file uploaded from OSS to the cloud phone.
   * 
   * > If UploadType is OSS or OSS_BRIDGED, the TargetFileName parameter is optional. If TargetFileName is empty, the original file name is retained when the OSS file is uploaded to the cloud phone. If TargetFileName is not empty, the file name in the SourceFilePath directory on the cloud phone is set to the value of TargetFileName. If UploadType is DOWNLOAD_URL, the TargetFileName parameter does not take effect.
   * >
   * 
   * @example
   * test.txt
   */
  targetFileName?: string;
  /**
   * @remarks
   * The service domain name for uploading files to OSS. This parameter is required when UploadType is set to OSS or OSS_BRIDGED.
   * 
   * > If the cloud phone and the OSS bucket are in the same region, you can use an internal endpoint to accelerate the transmission speed and avoid Internet traffic fees. For example, the internal endpoint for the China (Hangzhou) region is `oss-cn-hangzhou-internal.aliyuncs.com`. For more information about the mapping between regions and endpoints, see [Regions and endpoints](https://help.aliyun.com/document_detail/31837.html).
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * The storage type of the file to be uploaded.
   * 
   * - OSS: The file to be uploaded is an OSS resource.
   * - DOWNLOAD_URL: The file to be uploaded is a public download URL.
   * - OSS_BRIDGED: The file is synchronized to OSS through a public download URL and then distributed to cloud phone instances over the OSS internal network.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  /**
   * @remarks
   * - If UploadType is OSS, UploadUrl is the cloud address of the file uploaded to OSS.
   * > The OSS bucket name must start with the prefix "cloudphone-saved-bucket-", such as "cloudphone-saved-bucket-example". You must create an OSS folder as the backup directory. The format of UploadUrl is "oss://" + "Bucket name" + "/" + "Folder name" + "Uploaded file name".
   * - If UploadType is DOWNLOAD or OSS_BRIDGED, UploadUrl is the public download URL of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://cloudphone-saved-bucket-example/send/a.txt
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      autoInstall: 'AutoInstall',
      clientToken: 'ClientToken',
      fileMd5: 'FileMd5',
      sourceFilePath: 'SourceFilePath',
      targetFileName: 'TargetFileName',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      autoInstall: 'boolean',
      clientToken: 'string',
      fileMd5: 'string',
      sourceFilePath: 'string',
      targetFileName: 'string',
      uploadEndpoint: 'string',
      uploadType: 'string',
      uploadUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIdList)) {
      $dara.Model.validateArray(this.androidInstanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

