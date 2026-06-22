// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileDetectRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to decompress the archive for detection. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * > This parameter is not supported when `Type` is set to `6`.
   * 
   * @example
   * false
   */
  decompress?: boolean;
  /**
   * @remarks
   * The maximum number of files that can be decompressed from an archive. The maximum value is 1000.
   * 
   * This parameter is required if you set `Decompress` to `true`.
   * 
   * > This parameter is not supported when `Type` is set to `6`.
   * 
   * @example
   * 100
   */
  decompressMaxFileCount?: number;
  /**
   * @remarks
   * The maximum number of decompression layers for nested archives. The maximum value is 5.
   * 
   * This parameter is required if you set `Decompress` to `true`.
   * 
   * > This parameter is not supported when `Type` is set to `6`.
   * 
   * @example
   * 1
   */
  decompressMaxLayer?: number;
  /**
   * @remarks
   * The download link for the file. You can provide a public URL to trigger file detection without uploading the file.
   * 
   * > Skill archives can be submitted only by providing a download link. Therefore, this parameter is required when `Type` is set to `6`.
   * 
   * @example
   * https://xxxxxxxx.oss-cn-hangzhou-1.aliyuncs.com/xxxxx/xxxxxxxxxxxxxx?Expires=1671448125&OSSAccessKeyId=xxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The unique identifier of the file.
   * 
   * This parameter is required if `Type` is `0`. Its value must be the MD5 or SHA-256 hash of the file.
   * 
   * If you set `Type` to `6`, you do not need to specify this parameter. The operation returns the file\\"s unique identifier in the response.
   * 
   * @example
   * 0a212417e65c26ff133cfff28f6c****
   */
  hashKey?: string;
  /**
   * @remarks
   * The storage key of the file in an Object Storage Service (OSS) bucket.
   * 
   * If you submit the file by using the `DownloadUrl` parameter, you can leave this parameter empty. To obtain the value of this parameter, call the [CreateFileDetectUploadUrl](~~CreateFileDetectUploadUrl~~) operation.
   * 
   * > This parameter is not supported when `Type` is set to `6`.
   * 
   * @example
   * 1/2022/06/23/15/41/16559701077444693a0c6-33b2-4cc2-a99f-9f38b8b8****
   */
  ossKey?: string;
  /**
   * @remarks
   * The IP address of the source.
   * 
   * @example
   * 115.213.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of the file to detect. Valid values:
   * 
   * - **0**: Malicious file detection
   * 
   * - **6**: Skill archive detection
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

