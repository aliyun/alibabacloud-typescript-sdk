// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadMediaResponseBody extends $dara.Model {
  /**
   * @example
   * abcd1234
   */
  mediaId?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * abcd-1234-wxyz-9876
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'mediaId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

