// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateDetectConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BF75EF50-955D-5E1F-AB23-A657C2C6D3C7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

