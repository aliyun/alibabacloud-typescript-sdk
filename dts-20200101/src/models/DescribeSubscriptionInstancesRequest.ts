// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubscriptionInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * > - N specifies the sequence number of the tag key. For example, Tag.1.Key specifies the key of the first tag, and Tag.2.Key specifies the key of the second tag. You can query 1 to 20 tag keys at a time.
   * - Empty strings are not allowed.
   * 
   * This parameter is required.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * >- N specifies the sequence number of the tag value. For example, Tag.1.Value specifies the value of the first tag, and Tag.2.Value specifies the value of the second tag. You can query 1 to 20 tag values at a time.
   * - Empty strings are allowed.
   * 
   * @example
   * testvalue1
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

export class DescribeSubscriptionInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because it will be deprecated.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. **ClientToken** can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The page number. The value must be an integer greater than **0** and cannot exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of records per page. Valid values: **30**, **50**, and **100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the change tracking instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/49442.html).
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
   * rg-aekz4us4iruleja
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the change tracking instance.
   * > If you specify this parameter, DTS returns the change tracking instances that contain the specified name in the response.
   * 
   * @example
   * MySQL订阅
   */
  subscriptionInstanceName?: string;
  /**
   * @remarks
   * The tags of the data migration instance. These tags are used as filter conditions. If this parameter is specified, only instances that have the specified tags are returned.
   */
  tag?: DescribeSubscriptionInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      subscriptionInstanceName: 'SubscriptionInstanceName',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      clientToken: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      subscriptionInstanceName: 'string',
      tag: { 'type': 'array', 'itemType': DescribeSubscriptionInstancesRequestTag },
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

