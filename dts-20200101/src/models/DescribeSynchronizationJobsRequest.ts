// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSynchronizationJobsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can query tag keys by calling the [ListTagResources](https://help.aliyun.com/document_detail/191187.html) operation.
   * > - N specifies the sequence number of the tag key. For example, Tag.1.Key specifies the key of the first tag, and Tag.2.Key specifies the key of the second tag. You can specify 1 to 20 tag keys at a time.
   * - This parameter cannot be set to an empty string.
   * 
   * This parameter is required.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can query tag values by calling the [ListTagResources](https://help.aliyun.com/document_detail/191187.html) operation.
   * >- N specifies the sequence number of the tag value. For example, Tag.1.Value specifies the value of the first tag, and Tag.2.Value specifies the value of the second tag. You can specify 1 to 20 tag values at a time.
   * - This parameter can be set to an empty string.
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

export class DescribeSynchronizationJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You do not need to specify this parameter because it will be discontinued.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The **ClientToken** parameter can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe63****
   */
  clientToken?: string;
  ownerId?: string;
  /**
   * @remarks
   * The page number. The value must be an integer greater than **0** and must not exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of records per page. Valid values: **10**, **20**, and **30**. Default value: **30**. Maximum value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the data synchronization instance. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the synchronization instance.
   * > Fuzzy match is supported.
   * 
   * @example
   * MySQL同步
   */
  synchronizationJobName?: string;
  /**
   * @remarks
   * The tags of the data synchronization instance. The tags are used as filter conditions. If you specify this parameter, only instances that have the specified tags are returned.
   */
  tag?: DescribeSynchronizationJobsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      synchronizationJobName: 'SynchronizationJobName',
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
      synchronizationJobName: 'string',
      tag: { 'type': 'array', 'itemType': DescribeSynchronizationJobsRequestTag },
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

