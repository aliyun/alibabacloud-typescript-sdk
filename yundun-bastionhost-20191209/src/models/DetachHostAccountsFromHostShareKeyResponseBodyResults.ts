// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachHostAccountsFromHostShareKeyResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The error code returned. If **OK** is returned, the disassociation was successful. If a different error code is returned, the disassociation failed.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The ID of the host account.
   * 
   * @example
   * 12407
   */
  hostAccountId?: string;
  /**
   * @remarks
   * The ID of the shared key.
   * 
   * @example
   * 11
   */
  hostShareKeyId?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The host account does not exist
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountId: 'HostAccountId',
      hostShareKeyId: 'HostShareKeyId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountId: 'string',
      hostShareKeyId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

