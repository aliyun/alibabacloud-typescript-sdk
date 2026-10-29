// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceReplicationSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp*****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable the native replication mode. Valid values:
   * - **ON**: enables the native replication mode.
   * - **OFF**: disables the native replication mode.
   * 
   * This parameter is required.
   * 
   * @example
   * ON
   */
  externalReplication?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. This parameter can be left empty.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      externalReplication: 'ExternalReplication',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      externalReplication: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

