// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The agent subtype of the DesktopAgent resource group. Valid values: JVSClaw and HermesAgent.
   * 
   * @example
   * JVSClaw
   */
  agentType?: string;
  /**
   * @remarks
   * The IDs of the cloud platform resource groups.
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
   * > - For Wuying Enterprise Edition, set this parameter to AliyunConsole. Other platforms are not publicly available.
   * 
   * @example
   * AliyunConsole
   */
  platform?: string;
  /**
   * @remarks
   * The resource classification in the resource group.
   * 
   * @example
   * Default
   */
  resourceClassification?: string;
  /**
   * @remarks
   * The IDs of the resource groups.
   */
  resourceGroupIds?: string[];
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * Department A resource group
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

