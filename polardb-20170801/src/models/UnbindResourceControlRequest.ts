// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindResourceControlRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp10gr51qasnl****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID.
   * >You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource control name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-rc
   */
  resourceControlName?: string;
  /**
   * @remarks
   * The target instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  targetType?: string;
  /**
   * @remarks
   * The target value. This parameter applies to target tracking rules and prediction rules. The value of TargetValue can contain up to three decimal places and must be greater than 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 44abc95973e24ae9838713598f673535
   */
  targetValue?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      regionId: 'RegionId',
      resourceControlName: 'ResourceControlName',
      targetType: 'TargetType',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      regionId: 'string',
      resourceControlName: 'string',
      targetType: 'string',
      targetValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

