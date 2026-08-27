// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackGroupsRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the stack group.
   * 
   * > Tags is optional. If you specify Tags, Tags.N.Key is required.
   * 
   * This parameter is required.
   * 
   * @example
   * usage
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the stack group.
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
   * The page number.
   * 
   * - Starts from 1.
   * 
   * - Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * - Valid values: 1 to 50.
   * 
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the stack group. Call [DescribeRegions](https://help.aliyun.com/document_detail/131035.html) to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. If not specified, stack groups in all resource groups are returned.
   * 
   * > You can find the resource group ID on the **Resource Groups** page in the **Resource Management** console. [View the basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmzawhxxcj****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the stack group. If not specified, stack groups in all states are returned.
   * 
   * Valid values:
   * 
   * - ACTIVE: The stack group is active.
   * 
   * - DELETED: The stack group is deleted.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The tags of the stack group.
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

