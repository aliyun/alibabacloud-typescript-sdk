// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceGroupRequest extends $dara.Model {
  agentType?: string;
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  enableAliyunResourceGroup?: boolean;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 0
   */
  isResourceGroupWithOfficeSite?: number;
  /**
   * @remarks
   * For WUYING Workspace Enterprise Edition, set this parameter to `AliyunConsole`. Other platforms are not supported.
   * 
   * @example
   * AliyunConsole
   */
  platform?: string;
  resourceClassification?: string;
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
      businessChannel: 'BusinessChannel',
      enableAliyunResourceGroup: 'EnableAliyunResourceGroup',
      isResourceGroupWithOfficeSite: 'IsResourceGroupWithOfficeSite',
      platform: 'Platform',
      resourceClassification: 'ResourceClassification',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      businessChannel: 'string',
      enableAliyunResourceGroup: 'boolean',
      isResourceGroupWithOfficeSite: 'number',
      platform: 'string',
      resourceClassification: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

