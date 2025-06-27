// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDnsGtmAccessModeRequest extends $dara.Model {
  /**
   * @remarks
   * The switchover policy for primary and secondary address pool sets. Valid values:
   * 
   * *   AUTO: performs automatic switchover between the primary and secondary address pool sets upon failures.
   * *   DEFAULT: the primary address pool set
   * *   FAILOVER: the secondary address pool set
   * 
   * This parameter is required.
   * 
   * @example
   * auto
   */
  accessMode?: string;
  /**
   * @remarks
   * The language of the values for specific response parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * This parameter is required.
   * 
   * @example
   * strategyId
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

