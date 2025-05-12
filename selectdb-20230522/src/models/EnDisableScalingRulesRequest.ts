// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnDisableScalingRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-nwy3jv1oa02-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The cloud service.
   * 
   * @example
   * selectdb
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable the scheduled scaling policy.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  scalingRulesEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      product: 'Product',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      scalingRulesEnable: 'ScalingRulesEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbInstanceId: 'string',
      product: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
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

