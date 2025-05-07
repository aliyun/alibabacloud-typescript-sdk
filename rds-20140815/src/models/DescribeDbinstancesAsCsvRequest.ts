// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesAsCsvRequest extends $dara.Model {
  /**
   * @remarks
   * A deprecated parameter. You do not need to configure this parameter.
   * 
   * @example
   * API
   */
  cachedAsync?: boolean;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the IDs of instances.
   * 
   * @example
   * rm-uf6wjk5xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * A deprecated parameter. You do not need to configure this parameter.
   * 
   * @example
   * API
   */
  exportKey?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cachedAsync: 'CachedAsync',
      DBInstanceId: 'DBInstanceId',
      exportKey: 'ExportKey',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cachedAsync: 'boolean',
      DBInstanceId: 'string',
      exportKey: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
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

