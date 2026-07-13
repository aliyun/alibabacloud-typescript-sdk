// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDnsGtmAccessModeRequest extends $dara.Model {
  /**
   * @remarks
   * The switchover policy for the address pool collection:
   * 
   * - AUTO: Automatic switchover
   * 
   * - DEFAULT: The primary address pool collection
   * 
   * - FAILOVER: The secondary address pool collection
   * 
   * This parameter is required.
   * 
   * @example
   * AUTO
   */
  accessMode?: string;
  /**
   * @remarks
   * The language of certain response parameters. Default: en. Valid values: en, zh, and ja.
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
   * hr**zb
   */
  strategyId?: string;
  static names(): { [key: string]: string } {
    return {
      accessMode: 'AccessMode',
      lang: 'Lang',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessMode: 'string',
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

