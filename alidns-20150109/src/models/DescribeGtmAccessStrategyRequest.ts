// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmAccessStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The language used by the user.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the access policy that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * hra0hs
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

