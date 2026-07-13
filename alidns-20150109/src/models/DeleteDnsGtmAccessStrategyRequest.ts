// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDnsGtmAccessStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the access policy. Call [DescribeDnsGtmAccessStrategies](https://help.aliyun.com/document_detail/2357191.html) to obtain the policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * testSt******
   */
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      strategyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

