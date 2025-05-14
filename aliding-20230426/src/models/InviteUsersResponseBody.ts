// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InviteUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  vendorRequestId?: string;
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

