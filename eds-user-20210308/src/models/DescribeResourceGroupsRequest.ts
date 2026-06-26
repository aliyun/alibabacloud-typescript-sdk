// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceGroupsRequest extends $dara.Model {
  agentType?: string;
  /**
   * @remarks
   * The cloud platform resource group ID.
   */
  aliyunResourceGroupIds?: string[];
  /**
   * @remarks
   * The channel tag.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 0
   */
  needContainResourceGroupWithOfficeSite?: number;
  /**
   * @remarks
   * The page number.
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
   * > Fixed value: AliyunConsole.
   * > - For Elastic Desktop Service Enterprise Edition, set this parameter to AliyunConsole. Other platforms are not publicly available.
   * 
   * @example
   * AliyunConsole
   */
  platform?: string;
  resourceClassification?: string;
  /**
   * @remarks
   * The list of resource group IDs.
   */
  resourceGroupIds?: string[];
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * 部门A资源组
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      aliyunResourceGroupIds: 'AliyunResourceGroupIds',
      businessChannel: 'BusinessChannel',
      needContainResourceGroupWithOfficeSite: 'NeedContainResourceGroupWithOfficeSite',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      platform: 'Platform',
      resourceClassification: 'ResourceClassification',
      resourceGroupIds: 'ResourceGroupIds',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      aliyunResourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      businessChannel: 'string',
      needContainResourceGroupWithOfficeSite: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      platform: 'string',
      resourceClassification: 'string',
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

