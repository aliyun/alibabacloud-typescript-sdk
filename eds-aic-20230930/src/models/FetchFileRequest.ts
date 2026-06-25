// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchFileRequest extends $dara.Model {
  /**
   * @remarks
   * A list of cloud phone instance IDs.
   * 
   * This parameter is required.
   */
  androidInstanceIdList?: string[];
  /**
   * @remarks
   * A client-generated token, up to 100 characters long, that ensures the idempotency of the request.
   * 
   * @example
   * 425F351C-3F8E-5218-A520-B6311D0D****
   */
  clientToken?: string;
  /**
   * @remarks
   * The path of the file or folder to fetch from the cloud phone.
   * 
   * This parameter is required.
   * 
   * @example
   * /data/a.txt
   */
  sourceFilePath?: string;
  /**
   * @remarks
   * The endpoint for uploading files to OSS.
   * 
   * > If the cloud phone and the destination OSS bucket are in the same region, you can use an internal endpoint to accelerate the transfer and avoid public network charges. For example, in the China (Hangzhou) region, use `oss-cn-hangzhou-internal.aliyuncs.com`. For a complete list of endpoints, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html).
   * 
   * This parameter is required.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
  uploadEndpoint?: string;
  /**
   * @remarks
   * The type of storage service for the fetched file.
   * 
   * > Currently, only Object Storage Service (OSS) is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  uploadType?: string;
  /**
   * @remarks
   * The destination URL in OSS.
   * 
   * > The destination bucket name must be prefixed with `cloudphone-saved-bucket-`. For example, `cloudphone-saved-bucket-example`. You must also create a folder in the bucket to serve as the destination directory. The `UploadUrl` must follow the format: `oss://<bucket_name>/<folder_name>`.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://cloudphone-saved-bucket-example/received
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIdList: 'AndroidInstanceIdList',
      clientToken: 'ClientToken',
      sourceFilePath: 'SourceFilePath',
      uploadEndpoint: 'UploadEndpoint',
      uploadType: 'UploadType',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      sourceFilePath: 'string',
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

