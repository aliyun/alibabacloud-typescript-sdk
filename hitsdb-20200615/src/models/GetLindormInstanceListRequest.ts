// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormInstanceListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * > You can pass in keys for multiple tags. For example, the Key in the first pair represents the key for the first tag. The Key in the second pair represents the key for the second tag.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * > You can provide values for multiple tags. For example, the Value in the first pair is the value for the first tag. The Value in the second pair is the value for the second tag.
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
   * The page number to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * A keyword for a fuzzy search on instance names.
   * 
   * @example
   * test
   */
  queryStr?: string;
  /**
   * @remarks
   * The ID of the region where the instance is located. Call [DescribeRegions](https://help.aliyun.com/document_detail/426062.html) to obtain the region ID.
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
   * rg-aek3b63arvg27vi
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The type of the instance. Valid values:
   * 
   * - **lindorm**: a single-zone Lindorm instance.
   * 
   * - **lindorm_multizone**: a multi-zone Lindorm instance.
   * 
   * - **serverless_lindorm**: a Lindorm Serverless instance.
   * 
   * - **lindorm_standalone**: a Lindorm standalone instance.
   * 
   * - **lts**: the Lindorm Tunnel Service (LTS) type.
   * 
   * @example
   * lindorm
   */
  serviceType?: string;
  /**
   * @remarks
   * The type of the engine supported by the instance that you want to query. Valid values:
   * 
   * - **1**: search engine.
   * 
   * - **2**: LindormTSDB.
   * 
   * - **4**: LindormTable.
   * 
   * - **8**: file engine.
   * 
   * > For example, a value of 15 (8 + 4 + 2 + 1) indicates that the instance supports the file engine, LindormTable, LindormTSDB, and the search engine. A value of 6 (4 + 2) indicates that the instance supports LindormTSDB and LindormTable.
   * 
   * @example
   * 15
   */
  supportEngine?: number;
  /**
   * @remarks
   * A list of tags. You can specify up to 20 tags.
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

