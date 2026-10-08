// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFailReasonForDomainRealNameVerificationRequest extends $dara.Model {
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
   * Review Type. Valid values:  
   * - **ACTIVATE**: New registration.  
   * - **CHGHOLDER**: Change of holder.  
   * - **TRANSFER**: Transfer-in.
   * 
   * This parameter is required.
   * 
   * @example
   * ACTIVATE
   */
  realNameVerificationAction?: string;
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
      domainName: 'DomainName',
      lang: 'Lang',
      realNameVerificationAction: 'RealNameVerificationAction',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      realNameVerificationAction: 'string',
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

