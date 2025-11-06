// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDomainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test**.xin
   */
  domainName?: string;
  /**
   * @example
   * create
   */
  feeCommand?: string;
  /**
   * @example
   * USD
   */
  feeCurrency?: string;
  /**
   * @example
   * 1
   */
  feePeriod?: number;
  /**
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

