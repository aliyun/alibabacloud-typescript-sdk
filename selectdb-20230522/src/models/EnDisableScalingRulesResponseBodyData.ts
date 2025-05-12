// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnDisableScalingRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * selectdb-cn-pe33jc1nd01-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * Indicates whether the scheduled scaling policy is enabled.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  scalingRulesEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      scalingRulesEnable: 'ScalingRulesEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbInstanceId: 'string',
      scalingRulesEnable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

