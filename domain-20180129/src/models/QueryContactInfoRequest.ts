// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContactInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The contact type. Valid values:  
   * - **registrant**: Domain name registrant.  
   * - **tech**: Technical contact.  
   * - **admin**: Administrative contact.  
   * - **billing**: Billing contact.
   * 
   * This parameter is required.
   * 
   * @example
   * admin
   */
  contactType?: string;
  /**
   * @remarks
   * Domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values:  
   * - **zh**: Chinese.  
   * - **en**: English.  
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
      contactType: 'ContactType',
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactType: 'string',
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

