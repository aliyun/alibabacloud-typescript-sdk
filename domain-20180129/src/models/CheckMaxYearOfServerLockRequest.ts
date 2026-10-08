// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckMaxYearOfServerLockRequest extends $dara.Model {
  /**
   * @remarks
   * Type of purchase operation. Valid values:
   * 
   * - activate: new registration
   * - renew: renewal
   * 
   * This parameter is required.
   * 
   * @example
   * activate
   */
  checkAction?: string;
  /**
   * @remarks
   * The domain name to be checked.
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
   * 
   * - zh: Chinese
   * - en: English
   * 
   * Default value: en.
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
      checkAction: 'CheckAction',
      domainName: 'DomainName',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkAction: 'string',
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

