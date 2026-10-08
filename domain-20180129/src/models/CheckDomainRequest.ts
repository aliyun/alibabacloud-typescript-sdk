// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDomainRequest extends $dara.Model {
  /**
   * @remarks
   * Domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * test**.xin
   */
  domainName?: string;
  /**
   * @remarks
   * Operation command. Valid values:  
   * - **create**: Purchase.  
   * - **renew**: Renewal.  
   * - **transfer**: Transfer-in.  
   * - **restore**: Redeem.
   * 
   * @example
   * create
   */
  feeCommand?: string;
  /**
   * @remarks
   * Currency type. Valid value: **USD** (US Dollar).
   * 
   * @example
   * USD
   */
  feeCurrency?: string;
  /**
   * @remarks
   * Registration period in years. Unit: **year**. Valid range: **1** to **10** years.
   * 
   * @example
   * 1
   */
  feePeriod?: number;
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
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      feeCommand: 'FeeCommand',
      feeCurrency: 'FeeCurrency',
      feePeriod: 'FeePeriod',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      feeCommand: 'string',
      feeCurrency: 'string',
      feePeriod: 'number',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

