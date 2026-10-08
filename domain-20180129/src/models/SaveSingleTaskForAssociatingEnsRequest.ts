// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForAssociatingEnsRequest extends $dara.Model {
  /**
   * @remarks
   * ENS address.
   * 
   * This parameter is required.
   * 
   * @example
   * 0x1234567890123456789012345678901234567890
   */
  address?: string;
  /**
   * @remarks
   * Domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * test.luxe
   */
  domainName?: string;
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:
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
   * User IP address.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      domainName: 'string',
      lang: 'string',
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

