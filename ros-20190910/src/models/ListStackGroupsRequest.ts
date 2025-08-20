// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackGroupsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag that is added to the stack group.
   * 
   * > Tags is optional. If you specify Tags, you must specify Tags.N.Key.
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag that is added to the stack group.
   * 
   * @example
   * test
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

export class ListStackGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * *   Pages start from page 1.
   * *   Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * *   Valid values: 1 to 50.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the stack group. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. If you do not specify this parameter, the stack groups in all the resource groups are queried.
   * 
   * > To obtain the resource group ID, go to the **Resource Group** page in the **Resource Management** console. For more information, see [View the basic information about a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmzawhxxcj****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The state of the stack group. If you do not specify this parameter, the stack groups in all states in the specified region are queried.
   * 
   * Valid values:
   * 
   * *   ACTIVE
   * *   DELETED
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The tags that are added to the stack group.
   */
  tags?: ListStackGroupsRequestTags[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListStackGroupsRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

