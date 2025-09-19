// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpaStrategyDetailNewRequest extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * >  You can call the [ListOpaClusterStrategyNew](https://help.aliyun.com/document_detail/2623574.html) operation to query the rule ID.
   * 
   * @example
   * 1349
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

