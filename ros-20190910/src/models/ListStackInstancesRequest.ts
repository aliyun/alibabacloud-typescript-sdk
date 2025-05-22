// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStackInstancesRequest extends $dara.Model {
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
   * The name of the stack group. The name must be unique within a region.\\
   * The name can be up to 255 characters in length, and can contain digits, letters, hyphens (-), and underscores (_). It must start with a digit or letter.
   * 
   * This parameter is required.
   * 
   * @example
   * MyStackGroup
   */
  stackGroupName?: string;
  /**
   * @remarks
   * The ID of the destination account to which the stack belongs.
   * 
   * *   If the stack group is granted self-managed permissions, the stack belongs to an Alibaba Cloud account.
   * *   If the stack group is granted service-managed permissions, the stack belongs to a member in a resource directory.
   * 
   * > For more information about the destination account, see [Overview](https://help.aliyun.com/document_detail/154578.html).
   * 
   * @example
   * 156552876021****
   */
  stackInstanceAccountId?: string;
  /**
   * @remarks
   * The region ID of the stack.
   * 
   * @example
   * cn-beijing
   */
  stackInstanceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      stackGroupName: 'StackGroupName',
      stackInstanceAccountId: 'StackInstanceAccountId',
      stackInstanceRegionId: 'StackInstanceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      stackGroupName: 'string',
      stackInstanceAccountId: 'string',
      stackInstanceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

