// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBEClusterAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-xxxb9f2w-be
   */
  DBClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The attribute type of the instance. Set this parameter to DBInstanceDescription.
   * 
   * Valid values:
   * 
   * *   MaintainTime
   * *   DBInstanceDescription
   * 
   * This parameter is required.
   * 
   * @example
   * DBInstanceDescription
   */
  instanceAttributeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The new name of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * testdb
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBInstanceId: 'DBInstanceId',
      instanceAttributeType: 'InstanceAttributeType',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
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

