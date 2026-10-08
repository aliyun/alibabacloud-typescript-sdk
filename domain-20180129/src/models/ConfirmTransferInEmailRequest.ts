// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfirmTransferInEmailRequest extends $dara.Model {
  /**
   * @remarks
   * Domain name list
   * 
   * This parameter is required.
   * 
   * @example
   * abc.com
   */
  domainName?: string[];
  /**
   * @remarks
   * Mailbox
   * 
   * This parameter is required.
   * 
   * @example
   * test@test.com
   */
  email?: string;
  /**
   * @remarks
   * Language of the error message returned by the API. Valid enumeration values: zh (Chinese); en (English). Default value is en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * User IP
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      email: 'Email',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: { 'type': 'array', 'itemType': 'string' },
      email: 'string',
      lang: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainName)) {
      $dara.Model.validateArray(this.domainName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

