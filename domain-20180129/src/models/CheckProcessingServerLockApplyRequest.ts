// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckProcessingServerLockApplyRequest extends $dara.Model {
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
   * Registration period in years. Unit: **year(s)**. Valid range: **1 to 10** years.
   * 
   * @example
   * 1
   */
  feePeriod?: number;
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
   * User IP address. You can set it to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      feePeriod: 'FeePeriod',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      feePeriod: 'number',
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

