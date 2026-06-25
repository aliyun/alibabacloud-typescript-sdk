// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendFileRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of one or more cloud phone instances.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * Specifies whether to automatically install the application after the file is uploaded.
   * 
   * @example
   * true
   */
  autoInstall?: boolean;
  /**
   * @remarks
   * A client-generated token that ensures request idempotence and prevents duplicate submissions. The token can contain up to 100 characters.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  clientToken?: string;
  fileMd5?: string;
  /**
   * @remarks
   * The destination path on the cloud phone.
   * 
   * > If `UploadType` is `OSS` or `OSS_BRIDGED`, `SourceFilePath` must specify a directory, for example, `/sdcard/Download/`. If `UploadType` is `DOWNLOAD_URL`, `SourceFilePath` must specify a full file path, for example, `/sdcard/Download/MyFile.txt`.
   * 
   * This parameter is required.
   * 
   * @example
   * /sdcard/Download
   */
  sourceFilePath?: string;
  /**
   * @remarks
   * The name for the destination file on the cloud phone.
   * 
   * > This parameter is optional and takes effect only when `UploadType` is set to `OSS` or `OSS_BRIDGED`. If you specify this parameter, the file is saved with this name in the path specified by `SourceFilePath`. If you leave this parameter empty, the source file name is used. This parameter is ignored when `UploadType` is set to `DOWNLOAD_URL`.
   * 
   * @example
   * test.txt
   */
  targetFileName?: string;
  /**
   * @remarks
   * The service endpoint of Object Storage Service (OSS). This parameter is required if `UploadType` is `OSS` or `OSS_BRIDGED`.
   * 
   * > If the cloud phone instance and the OSS bucket are in the same region, you can specify an internal endpoint to accelerate data transfer and avoid public data transfer costs. For example, the internal endpoint for the China (Hangzhou) region is `oss-cn-hangzhou-internal.aliyuncs.com`. For a complete list of endpoints, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html).
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * The storage type of the source file. Valid values:
   * 
   * - **OSS**: The file is stored in Object Storage Service (OSS).
   * 
   * - **DOWNLOAD_URL**: The file is accessible via a public download link.
   * 
   * - **OSS_BRIDGED**: The service first downloads the file from a public download link to an internal OSS bucket, and then distributes it to the cloud phone instances over the internal network.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  /**
   * @remarks
   * - If `UploadType` is `OSS`, this parameter specifies the URI of the source object in Object Storage Service (OSS).
   * 
   * > The URI must be in the `oss://<bucket-name>/<object-key>` format. The specified OSS bucket name must have the `cloudphone-saved-bucket-` prefix, for example, `cloudphone-saved-bucket-example`.
   * 
   * - If `UploadType` is `DOWNLOAD_URL` or `OSS_BRIDGED`, this parameter specifies the public download link of the source file.
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

