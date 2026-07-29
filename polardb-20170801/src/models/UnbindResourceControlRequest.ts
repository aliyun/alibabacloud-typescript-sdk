// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindResourceControlRequest extends $dara.Model {
  /**
   * @remarks
   * The PolarDB cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The region ID of the PolarDB cluster.
   * >You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query region IDs.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the resource control rule. The name must be 1 to 63 ASCII bytes in length, start with a letter, and can contain only letters, digits, and underscores.
   * 
   * This parameter is required.
   * 
   * @example
   * test_rc
   */
  resourceControlName?: string;
  /**
   * @remarks
   * The type of the target to unbind. Valid values: USER, DATABASE, QUERY, CONNECTION. The value is case-insensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * USER
   */
  targetType?: string;
  /**
   * @remarks
   * The value of the target to unbind. The format is the same as the TargetValue for the corresponding target type in the BindResourceControl operation.
   * 
   * This parameter is required.
   * 
   * @example
   * app_user
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

