// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesByPerformanceRequestTag } from "./DescribeDbinstancesByPerformanceRequestTag";


export class DescribeDBInstancesByPerformanceRequest extends $dara.Model {
  tag?: DescribeDBInstancesByPerformanceRequestTag[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-uf6wjk5xxxxxx
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Valid values: any non-zero positive integer.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **5** to **100**.
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the most recent region list.
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
  /**
   * @remarks
   * The sorting basis.
   * 
   * @example
   * CPU_Usage
   */
  sortKey?: string;
  /**
   * @remarks
   * The sorting method.
   * 
   * @example
   * ASC
   */
  sortMethod?: string;
  /**
   * @remarks
   * The tags that are added to the instances. Each tag is a key-value pair that consists of two parts: TagKey and TagValue. Format: `{"key1":"value1"}`.
   * 
   * @example
   * {"key1":"value1"}
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the proxy mode.
   * 
   * @example
   * API
   */
  proxyId?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sortKey: 'SortKey',
      sortMethod: 'SortMethod',
      tags: 'Tags',
      proxyId: 'proxyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBInstancesByPerformanceRequestTag },
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sortKey: 'string',
      sortMethod: 'string',
      tags: 'string',
      proxyId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

