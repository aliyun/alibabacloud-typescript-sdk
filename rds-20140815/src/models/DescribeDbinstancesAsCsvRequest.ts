// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesAsCsvRequest extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to configure it.
   * 
   * @example
   * API
   */
  cachedAsync?: boolean;
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to obtain the instance ID.
   * 
   * @example
   * rm-uf6wjk5****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You do not need to configure it.
   * 
   * @example
   * API
   */
  exportKey?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy****
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

