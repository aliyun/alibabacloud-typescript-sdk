// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MiguSourceUploadDTO extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the upload URL in RFC 3339 format.
   * 
   * @example
   * 2026-08-28T12:00:00Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The type of the source file (uppercase). Valid values: VIDEO, IMAGE, AUDIO, and TEXT.
   * 
   * @example
   * VIDEO
   */
  fileType?: string;
  /**
   * @remarks
   * The unique identifier of the source file, used for subsequent generation tasks and downloads.
   * 
   * @example
   * 3f2a1b9c8d7e4f60a1b2c3d4e5f6a7b8
   */
  sourceId?: string;
  /**
   * @remarks
   * The OSS pre-signed upload URL. Use the PUT method to upload the file.
   * 
   * @example
   * https://bucket.oss-cn-beijing.aliyuncs.com/pipeline/source/xxx.mp4?Expires=1700000000&Signature=xxx
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      expiresAt: 'expiresAt',
      fileType: 'fileType',
      sourceId: 'sourceId',
      uploadUrl: 'uploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiresAt: 'string',
      fileType: 'string',
      sourceId: 'string',
      uploadUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

