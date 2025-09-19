// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileDetectRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to decompress or not. Valid values:
   * 
   * - true: To decompress.
   * - false: Not to decompress.
   * 
   * @example
   * false
   */
  decompress?: boolean;
  /**
   * @remarks
   * The maximum number of files for decompression. The minimum value is 1, and the maximum value is 1000. If the decompression level exceeds the maximum, the decompression operation will be terminated, but the detection of decompressed files will not be affected.
   * 
   * @example
   * 100
   */
  decompressMaxFileCount?: number;
  /**
   * @remarks
   * The maximum level of decompression when dealing with nested compressed files with multiple levels. The minimum value is 1, and the maximum value is 5. If the decompression level exceeds the maximum, the decompression operation will be terminated, but the detection of decompressed files will not be affected.
   * 
   * @example
   * 1
   */
  decompressMaxLayer?: number;
  /**
   * @remarks
   * The URL that is used to download the file. You can specify this parameter to trigger file detection without the need to upload the file in advance.
   * 
   * @example
   * https://xxxxxxxx.oss-cn-hangzhou-1.aliyuncs.com/xxxxx/xxxxxxxxxxxxxx?Expires=1671448125&OSSAccessKeyId=xxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The identifier of the file. Only MD5 hash values are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 0a212417e65c26ff133cfff28f6c****
   */
  hashKey?: string;
  /**
   * @remarks
   * The key of the file that is stored in the Object Storage Service (OSS) bucket. You can call the [CreateFileDetectUploadUrl](~~CreateFileDetectUploadUrl~~) operation to query the keys of files.
   * 
   * @example
   * 1/2022/06/23/15/41/16559701077444693a0c6-33b2-4cc2-a99f-9f38b8b8****
   */
  ossKey?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 115.213.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the file. Valid values:
   * 
   * *   **0**: unknown files
   * *   **1**: binary files
   * *   **2**: webshell files
   * *   **4**: script files
   * 
   * >  If you do not know the type of the file, set this parameter to 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      decompress: 'Decompress',
      decompressMaxFileCount: 'DecompressMaxFileCount',
      decompressMaxLayer: 'DecompressMaxLayer',
      downloadUrl: 'DownloadUrl',
      hashKey: 'HashKey',
      ossKey: 'OssKey',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      decompress: 'boolean',
      decompressMaxFileCount: 'number',
      decompressMaxLayer: 'number',
      downloadUrl: 'string',
      hashKey: 'string',
      ossKey: 'string',
      sourceIp: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

