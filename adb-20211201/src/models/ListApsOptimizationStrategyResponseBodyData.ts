// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApsOptimizationStrategyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-23xxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The status of the lifecycle management policy. Valid values:
   * 
   * 1.  on: enabled.
   * 2.  off: disabled.
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * The description of the lifecycle management policy.
   * 
   * @example
   * test
   */
  strategyDesc?: string;
  /**
   * @remarks
   * The name of the lifecycle management policy.
   * 
   * @example
   * test
   */
  strategyName?: string;
  /**
   * @remarks
   * The type of the lifecycle management policy. Only StrategyValue is returned.
   * 
   * @example
   * StrategyValue
   */
  strategyType?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      status: 'Status',
      strategyDesc: 'StrategyDesc',
      strategyName: 'StrategyName',
      strategyType: 'StrategyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      status: 'string',
      strategyDesc: 'string',
      strategyName: 'string',
      strategyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

