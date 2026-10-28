// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubscriptionInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * > - N specifies the sequence number of the tag key. For example, Tag.1.Key specifies the first tag key, and Tag.2.Key specifies the second tag key. You can specify 1 to 20 tag keys at a time.
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
   * The tag value.
   * >- N specifies the sequence number of the tag value. For example, Tag.1.Value specifies the first tag value, and Tag.2.Value specifies the second tag value. You can specify 1 to 20 tag values at a time.
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
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because it will be deprecated soon.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the value from your client. Make sure that the value is unique across different requests. **ClientToken** supports only ASCII characters and can be up to 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The page number. The value must be greater than **0** and no more than the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30**, **50**, and **100**. Default value: **30**.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-aekz4us4iruleja
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the change tracking instance.
   * > If you specify this parameter, DTS returns the change tracking instances whose names contain the specified value.
   * 
   * @example
   * MySQL change tracking
   */
  subscriptionInstanceName?: string;
  /**
   * @remarks
   * The tags of the data migration instances. This parameter is used as a filter. If this parameter is specified, only instances that have the specified tags are returned.
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

