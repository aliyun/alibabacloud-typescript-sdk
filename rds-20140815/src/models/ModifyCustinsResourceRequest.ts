// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustinsResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The deadline for the modification.
   * 
   * @example
   * 2022-12-31 23:59:06
   */
  adjustDeadline?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/26232.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-j5ekvfeengm******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The increase rate in percentage.
   * 
   * @example
   * 10
   */
  increaseRatio?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Memory
   */
  resourceType?: string;
  /**
   * @remarks
   * The original value. This parameter must be specified when the **ResourceType** parameter is set to **instance**.
   * 
   * @example
   * 200
   */
  restoreOriginalSpecification?: string;
  /**
   * @remarks
   * The target value. This parameter is available only if you set the ScalingRuleType parameter to TargetTrackingScalingRule or PredictiveScalingRule. The value must be greater than 0 and can contain up to three decimal places.
   * 
   * @example
   * 3000
   */
  targetValue?: number;
  static names(): { [key: string]: string } {
    return {
      adjustDeadline: 'AdjustDeadline',
      DBInstanceId: 'DBInstanceId',
      increaseRatio: 'IncreaseRatio',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      restoreOriginalSpecification: 'RestoreOriginalSpecification',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustDeadline: 'string',
      DBInstanceId: 'string',
      increaseRatio: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      restoreOriginalSpecification: 'string',
      targetValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

