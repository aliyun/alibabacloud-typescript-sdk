// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadStreamByURLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The OSS URL of the file.
   * 
   * @example
   * http://outin-***.oss-cn-shanghai.aliyuncs.com/stream/48555e8b-181dd5a8c07/48555e8b-181dd5a8c07.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The ID of the upload job.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 411bed50018971edb60b0764a0ec6***
   */
  mediaId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******89-C21D-4B78-AE24-3788B8******
   */
  requestId?: string;
  /**
   * @remarks
   * The URL of the source file that is uploaded in the upload job.
   * 
   * @example
   * https://example.com/sample-stream.mp4
   */
  sourceURL?: string;
  static names(): { [key: string]: string } {
    return {
      fileURL: 'FileURL',
      jobId: 'JobId',
      mediaId: 'MediaId',
      requestId: 'RequestId',
      sourceURL: 'SourceURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileURL: 'string',
      jobId: 'string',
      mediaId: 'string',
      requestId: 'string',
      sourceURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

