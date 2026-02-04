// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceTicketRequest extends $dara.Model {
  /**
   * @remarks
   * Customer business ID
   * 
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @remarks
   * Client ID of the device that needs to revoke the access token.
   * 
   * @example
   * d566aaf2-7c88-40a4-982f-6abef0be13c9
   */
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      clientId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

