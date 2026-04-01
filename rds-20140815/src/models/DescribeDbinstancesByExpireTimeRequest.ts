// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesByExpireTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of remaining days for which the instances are available. Valid values: **0 to 180**.
   * 
   * @example
   * 180
   */
  expirePeriod?: number;
  /**
   * @remarks
   * Specifies whether to query instances that have expired. Valid values:
   * 
   * *   **True**: queries instances that have expired.
   * *   **False**: does not query instances that have expired.
   * 
   * @example
   * True
   */
  expired?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Valid values: any **non-zero** positive integer.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1 to 100**.
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. You can call the DescribeDBInstanceAttribute operation to obtain the resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag that is added to the instance. Each tag is a key-value pair that consists of two parts: TagKey and TagValue. You can specify a maximum of five tags in the following format for each request: `{"key1":"value1","key2":"value2"...}`.
   * 
   * @example
   * {"key1":"value1"}
   */
  tags?: string;
  /**
   * @remarks
   * A deprecated parameter. You do not need to configure this parameter.
   * 
   * @example
   * None
   */
  proxyId?: string;
  static names(): { [key: string]: string } {
    return {
      expirePeriod: 'ExpirePeriod',
      expired: 'Expired',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
      proxyId: 'proxyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expirePeriod: 'number',
      expired: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
      proxyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

