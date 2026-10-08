// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCustinsResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The adjustment time.
   * 
   * @example
   * 2022-12-31 23:59:06
   */
  adjustDeadline?: string;
  /**
   * @remarks
   * The instance ID. You can call [DescribeDBInstances](https://help.aliyun.com/document_detail/610396.html) to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-j5ekvfeengm******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The increase ratio. Unit: %.
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
   * The original value. This parameter is required when **ResourceType** is set to **instance**.
   * 
   * @example
   * 200
   */
  restoreOriginalSpecification?: string;
  /**
   * @remarks
   * The target value. This parameter is applicable to target tracking rules and predictive rules. The value of TargetValue can contain up to three decimal places and must be greater than 0.
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

