// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDomainBackupRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * test.aliyun.com
   */
  domainName?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The backup cycle. Valid values:
   * 
   * *   DAY: backs up data on a daily basis.
   * *   HOUR: backs up data on an hourly basis.
   * 
   * This parameter is required.
   * 
   * @example
   * HOUR
   */
  periodType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      periodType: 'PeriodType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      periodType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

