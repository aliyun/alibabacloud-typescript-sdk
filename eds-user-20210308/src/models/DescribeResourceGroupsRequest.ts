// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceGroupsRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  needContainResourceGroupWithOfficeSite?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * AliyunConsole
   */
  platform?: string;
  resourceGroupIds?: string[];
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      needContainResourceGroupWithOfficeSite: 'NeedContainResourceGroupWithOfficeSite',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      platform: 'Platform',
      resourceGroupIds: 'ResourceGroupIds',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needContainResourceGroupWithOfficeSite: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      platform: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

