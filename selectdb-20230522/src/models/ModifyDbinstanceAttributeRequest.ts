// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The instance parameter to be modified. Valid values:
   * 
   * *   **MaintainTime**: Modify the maintenance window of the instance in the hh:mm-hh:mm format.
   * *   **DBInstanceDescription**: Modify the description of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * DBInstanceDescription
   */
  instanceAttributeType?: string;
  /**
   * @remarks
   * The region ID of the instance.
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
   * The new value of the instance parameter to be modified. Examples:
   * 
   * *   If InstanceAttributeType is set to MaintainTime, you can set Value to 00:00-06:00.
   * *   If InstanceAttributeType is set to DBInstanceDescription, you can set Value to testdb.
   * 
   * This parameter is required.
   * 
   * @example
   * testdb01
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      instanceAttributeType: 'InstanceAttributeType',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      instanceAttributeType: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

