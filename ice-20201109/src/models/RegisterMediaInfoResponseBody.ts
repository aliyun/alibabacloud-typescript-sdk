// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterMediaInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset in IMS.
   * 
   * @example
   * ******b48fb04483915d4f2cd8******
   */
  mediaId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******5A-CAAC-4850-A3AF-B74606******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      requestId: 'RequestId',
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

