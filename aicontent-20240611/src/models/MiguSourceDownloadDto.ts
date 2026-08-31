// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MiguSourceDownloadDTO extends $dara.Model {
  /**
   * @remarks
   * The OSS pre-signed download URL.
   * 
   * @example
   * https://bucket.oss-cn-beijing.aliyuncs.com/pipeline/source/xxx.mp4?Expires=1700000000&Signature=xxx
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The expiration time of the download URL, in RFC 3339 format.
   * 
   * @example
   * 2026-08-28T12:00:00Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * The download request method. The value is fixed to GET.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The unique identifier of the source file.
   * 
   * @example
   * 3f2a1b9c8d7e4f60a1b2c3d4e5f6a7b8
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'downloadUrl',
      expiresAt: 'expiresAt',
      method: 'method',
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      expiresAt: 'string',
      method: 'string',
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

