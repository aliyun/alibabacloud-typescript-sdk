// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceGroupsRequest extends $dara.Model {
  aliyunResourceGroupIds?: string[];
  /**
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 0
   */
  needContainResourceGroupWithOfficeSite?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * >  Set the value to AliyunConsole.
   * 
   * *   This parameter is not publicly available on other platforms.
   * 
   * @example
   * AliyunConsole
   */
  platform?: string;
  /**
   * @remarks
   * The IDs of the resource groups that you want to query.
   */
  resourceGroupIds?: string[];
  /**
   * @remarks
   * The name of the resource group.
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunResourceGroupIds: 'AliyunResourceGroupIds',
      businessChannel: 'BusinessChannel',
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
      aliyunResourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      businessChannel: 'string',
      needContainResourceGroupWithOfficeSite: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      platform: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliyunResourceGroupIds)) {
      $dara.Model.validateArray(this.aliyunResourceGroupIds);
    }
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

