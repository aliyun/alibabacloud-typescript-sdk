// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadResponseBodyUploadResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the SourceMap file.
   * 
   * @example
   * 123
   */
  fid?: string;
  /**
   * @remarks
   * The name of the SourceMap file.
   * 
   * @example
   * test.js.map
   */
  fileName?: string;
  /**
   * @remarks
   * The time when the file was uploaded.
   * 
   * @example
   * 1650272251
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      fid: 'Fid',
      fileName: 'FileName',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fid: 'string',
      fileName: 'string',
      uploadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5EC8221-08F2-4C95-9AF1-49FD998C****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned data.
   */
  uploadResult?: UploadResponseBodyUploadResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      uploadResult: 'UploadResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      uploadResult: UploadResponseBodyUploadResult,
    };
  }

  validate() {
    if(this.uploadResult && typeof (this.uploadResult as any).validate === 'function') {
      (this.uploadResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

