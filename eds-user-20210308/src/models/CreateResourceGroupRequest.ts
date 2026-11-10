// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceGroupRequest extends $dara.Model {
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
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * Specifies whether to create an Alibaba Cloud resource group at the same time. This is supported only for resource groups in the Default category.
   */
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
   * For Elastic Desktop Service Enterprise Edition, set the value to `AliyunConsole`. Other platforms are not supported.
   * 
   * @example
   * AliyunConsole
   */
  platform?: string;
  /**
   * @remarks
   * The category of the resource.
   * 
   * @example
   * Default
   */
  resourceClassification?: string;
  /**
   * @remarks
   * The description of the resource group. This parameter is optional. The description can be up to 500 characters in length and is saved as-is.
   * 
   * @example
   * Department A resource group
   */
  resourceGroupDescription?: string;
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
      businessChannel: 'BusinessChannel',
      enableAliyunResourceGroup: 'EnableAliyunResourceGroup',
      isResourceGroupWithOfficeSite: 'IsResourceGroupWithOfficeSite',
      platform: 'Platform',
      resourceClassification: 'ResourceClassification',
      resourceGroupDescription: 'ResourceGroupDescription',
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
      resourceGroupDescription: 'string',
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

