// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileDetectRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to identify and decompress compressed files. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  decompress?: boolean;
  /**
   * @remarks
   * The maximum number of files to decompress. Maximum value: 1000.
   * 
   * This parameter is required when Decompress is set to true.
   * 
   * @example
   * 100
   */
  decompressMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of decompression layers when compressed files are nested within a compressed package. Maximum value: 5.
   * 
   * This parameter is required when Decompress is set to true.
   * 
   * @example
   * 1
   */
  decompressMaxLayer?: number;
  /**
   * @remarks
   * The download URL of the file. You can pass in a file download URL (public URL) to directly trigger file detection without uploading the file in advance.
   * 
   * @example
   * https://xxxxxxxx.oss-cn-hangzhou-1.aliyuncs.com/xxxxx/xxxxxxxxxxxxxx?Expires=1671448125&OSSAccessKeyId=xxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The unique identifier of the file. This parameter is required and must be the MD5 or SHA-256 of the file.
   * 
   * @example
   * 0a212417e65c26ff133cfff28f6c****
   */
  hashKey?: string;
  /**
   * @remarks
   * The storage key of the file in the OSS bucket.
   * 
   * If you push the file for detection by using DownloadUrl, this parameter is optional. This parameter is obtained from the [CreateFileDetectUploadUrl](~~CreateFileDetectUploadUrl~~) operation.
   * 
   * @example
   * 1/2022/06/23/15/41/16559701077444693a0c6-33b2-4cc2-a99f-9f38b8b8****
   */
  ossKey?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 115.213.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of file to detect. Valid values:
   * 
   * - **0**: malicious file detection
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

