// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormInstanceListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N of the instances you want to query. You can specify 1 to 20 tag keys.
   * 
   * > You can specify the keys of multiple tags. For example, you can specify the key of the first tag in the first key-value pair contained in the value of this parameter and specify the key of the second tag in the second key-value pair.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N of the instances you want to query. You can specify 1 to 20 tag values.
   * 
   * > You can specify the values of multiple tags. For example, you can specify the value of the first tag in the first key-value pair contained in the value of this parameter and specify the value of the second tag in the second key-value pair.
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
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of instances to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword contained in the names of Lindorm instances you want to query. Fuzzy queries based on the keyword is supported.
   * 
   * @example
   * test
   */
  queryStr?: string;
  /**
   * @remarks
   * The ID of the region in which the instances that you want to query is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/426062.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
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
   * The series of instances that you want to query. Valid values:
   * 
   * *   **lindorm**: The instance is a single-zone Lindorm instance.
   * *   **lindorm_multizone**: The instance is a multi-zone Lindorm instance.
   * *   **serverless_lindorm**: The instance is a Lindorm Serverless instance.
   * *   **lindorm_standalone**: The instance is a single-node Lindorm instance.
   * *   **lts**: The instance is an LTS instance.
   * 
   * @example
   * lindorm
   */
  serviceType?: string;
  /**
   * @remarks
   * The engine supported by the instances that you want to query. The engines are indicated by different numbers:
   * 
   * *   **1**: LindormSearch.
   * *   **2**: LindormTSDB
   * *   **4**: LindormTable
   * *   **8**: LindormDFS
   * 
   * >  The value of this parameter is the sum of all numbers that indicate the engines supported by the instance. For example, if you set the value of this parameter to 15, which is the sum of 1, 2, 4, and 8, this operation queries instances that support all four engines. If you set the value of this parameter to 6, which is the sum of 2 and 4, this operation queries instances that support LindormTSDB and LindormTable.
   * 
   * @example
   * 15
   */
  supportEngine?: number;
  /**
   * @remarks
   * The list of tags associated with the specified instances.
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

