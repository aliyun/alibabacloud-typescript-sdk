// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ICE media asset ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
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

