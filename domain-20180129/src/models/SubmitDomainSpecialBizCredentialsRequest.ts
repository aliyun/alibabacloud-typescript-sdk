// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitDomainSpecialBizCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * 219
   */
  bizId?: number;
  /**
   * @remarks
   * The certificate information.
   */
  credentials?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {\\"addTransferLock\\":true}
   */
  extend?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      credentials: 'Credentials',
      extend: 'Extend',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'number',
      credentials: 'string',
      extend: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

