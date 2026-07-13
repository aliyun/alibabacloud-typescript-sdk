// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceTicketRequest extends $dara.Model {
  /**
   * @remarks
   * The customer business ID.
   * 
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @remarks
   * The Client ID of the device for which you want to revoke the access credential.
   * 
   * @example
   * d566aaf2-7c88-40a4-982f-6abef0be13c9
   */
  clientId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      clientId: 'ClientId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      clientId: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

