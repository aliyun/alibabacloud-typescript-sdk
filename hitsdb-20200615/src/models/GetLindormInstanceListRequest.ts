// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormInstanceListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. Valid values of N: 1 to 20.
   * 
   * > You can specify multiple tag keys. For example, the first Key specifies the first tag key, and the second Key specifies the second tag key.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: 1 to 20.
   * 
   * > You can specify multiple tag values. For example, the first Value specifies the first tag value, and the second Value specifies the second tag value.
   * 
   * @example
   * 2.2.18
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class GetLindormInstanceListRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page for paging in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword used to perform a fuzzy search by instance name.
   * 
   * @example
   * test
   */
  queryStr?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/426062.html) operation to query the region ID.
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
   * rg-aek3b63arvg27vi
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - **lindorm**: Lindorm single-zone instance
   * - **lindorm_multizone**: Lindorm multi-zone instance
   * - **serverless_lindorm**: Lindorm Serverless instance
   * - **lindorm_standalone**: Lindorm single-node instance
   * - **lts**: Lindorm Tunnel Service
   * 
   * @example
   * lindorm
   */
  serviceType?: string;
  /**
   * @remarks
   * The data engine types supported by the instance. Valid values:
   * 
   * - **1**: Search engine
   * - **2**: LindormTSDB
   * - **4**: LindormTable
   * - **8**: File engine
   * 
   * > For example, if the value is 15 (15 = 8 + 4 + 2 + 1), the instance supports the search engine, LindormTSDB, LindormTable, and file engine. If the value is 6 (6 = 4 + 2), the instance supports LindormTSDB and LindormTable.
   * 
   * @example
   * 6
   */
  supportEngine?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: GetLindormInstanceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryStr: 'QueryStr',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      serviceType: 'ServiceType',
      supportEngine: 'SupportEngine',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryStr: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      serviceType: 'string',
      supportEngine: 'number',
      tag: { 'type': 'array', 'itemType': GetLindormInstanceListRequestTag },
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

