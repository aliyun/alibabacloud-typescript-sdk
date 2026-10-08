// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckTransferInFeasibilityRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name to be validated.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the error message returned by the API. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The transfer-in password for the domain name.
   * 
   * @example
   * test
   */
  transferAuthorizationCode?: string;
  /**
   * @remarks
   * The user IP address. You can set it to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      transferAuthorizationCode: 'TransferAuthorizationCode',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      transferAuthorizationCode: 'string',
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

