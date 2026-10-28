// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrationJobsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can call the [ListTagResources](https://help.aliyun.com/document_detail/191187.html) operation to query the tag key.
   * 
   * > - N specifies the sequence number of the tag key. For example, Tag.1.Key specifies the key of the first tag, and Tag.2.Key specifies the key of the second tag. You can specify 1 to 20 tag keys at a time.
   * - You cannot specify an empty string for this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can call the [ListTagResources](https://help.aliyun.com/document_detail/191187.html) operation to query the tag value.
   * > - N specifies the sequence number of the tag value. For example, Tag.1.Value specifies the value of the first tag, and Tag.2.Value specifies the value of the second tag. You can specify 1 to 20 tag values at a time.
   * - You can specify an empty string for this parameter.
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

export class DescribeMigrationJobsRequest extends $dara.Model {
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
   * The name of the data migration instance. Fuzzy match is supported.
   * 
   * @example
   * MySQL Migration
   */
  migrationJobName?: string;
  ownerId?: string;
  /**
   * @remarks
   * The page number. Valid values: an integer greater than **0** and up to the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of data migration instance records to return on each page. Valid values: **10**, **20**, and **30**. Default value: **30**. Maximum value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the data migration instances. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
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
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the data migration instances used as a filter. If this parameter is specified, only instances with the specified tags are returned.
   */
  tag?: DescribeMigrationJobsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      migrationJobName: 'MigrationJobName',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      migrationJobName: 'string',
      ownerId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeMigrationJobsRequestTag },
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

