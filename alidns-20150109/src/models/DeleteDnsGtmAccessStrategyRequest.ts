// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDnsGtmAccessStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The language to return some response parameters. Default value: en. Valid values: en, zh, and ja.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the access policy.
   * 
   * This parameter is required.
   * 
   * @example
   * testStrategyId1
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

