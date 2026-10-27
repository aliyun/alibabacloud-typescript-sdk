// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferResourcesOutofGroupRequestResources extends $dara.Model {
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * ecd-1shc5sk0vo****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * DESKTOP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferResourcesOutofGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The software blacklists and whitelists rule ID to associate with the resources after they are moved out of the resource group. This parameter is used only for pure move-out operations and cannot be set together with TargetResourceGroupId. If this parameter is left empty, no rule is associated.
   * 
   * @example
   * bwr-47wdwfe5x3ql7qwf4
   */
  appRuleId?: string;
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
   * > Fixed value: AliyunConsole.
   * > - For Wuying Enterprise Edition, set this parameter to AliyunConsole. Other platforms are not publicly available.
   * 
   * @example
   * AliyunConsole
   */
  platform?: string;
  /**
   * @remarks
   * The policy ID to associate with the resources after they are moved out of the resource group. This parameter is used only for pure move-out operations and cannot be specified together with TargetResourceGroupId. If this parameter is left empty, the system default behavior is used.
   * 
   * @example
   * system-all-enabled-policy
   */
  policyId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-66konqltcpx43****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of resources.
   */
  resources?: TransferResourcesOutofGroupRequestResources[];
  /**
   * @remarks
   * The ID of the target resource group to which you want to move the resources.
   * 
   * @example
   * rg-hcjo6dugpo1****
   */
  targetResourceGroupId?: string;
  /**
   * @remarks
   * The scheduled task ID to associate with the resources after they are moved out of the resource group. This parameter is used only for pure move-out operations and cannot be specified together with TargetResourceGroupId. If this parameter is left empty, no scheduled task is associated.
   * 
   * @example
   * ccg-0bf5d87dtipve4aqt
   */
  timerId?: string;
  static names(): { [key: string]: string } {
    return {
      appRuleId: 'AppRuleId',
      businessChannel: 'BusinessChannel',
      platform: 'Platform',
      policyId: 'PolicyId',
      resourceGroupId: 'ResourceGroupId',
      resources: 'Resources',
      targetResourceGroupId: 'TargetResourceGroupId',
      timerId: 'TimerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appRuleId: 'string',
      businessChannel: 'string',
      platform: 'string',
      policyId: 'string',
      resourceGroupId: 'string',
      resources: { 'type': 'array', 'itemType': TransferResourcesOutofGroupRequestResources },
      targetResourceGroupId: 'string',
      timerId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

