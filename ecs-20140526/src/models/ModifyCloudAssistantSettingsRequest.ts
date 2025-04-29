// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyCloudAssistantSettingsRequestAgentUpgradeConfig } from "./ModifyCloudAssistantSettingsRequestAgentUpgradeConfig";
import { ModifyCloudAssistantSettingsRequestOssDeliveryConfig } from "./ModifyCloudAssistantSettingsRequestOssDeliveryConfig";
import { ModifyCloudAssistantSettingsRequestSlsDeliveryConfig } from "./ModifyCloudAssistantSettingsRequestSlsDeliveryConfig";


export class ModifyCloudAssistantSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations for upgrading Cloud Assistant Agent.
   */
  agentUpgradeConfig?: ModifyCloudAssistantSettingsRequestAgentUpgradeConfig;
  /**
   * @remarks
   * The configurations for delivering records to Object Storage Service (OSS).
   */
  ossDeliveryConfig?: ModifyCloudAssistantSettingsRequestOssDeliveryConfig;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The Cloud Assistant feature. Valid values:
   * 
   * *   SessionManagerDelivery: the Session Record Delivery configurations.
   * *   InvocationDelivery: the Operation Content and Result Delivery configurations.
   * *   AgentUpgradeConfig: the Cloud Assistant Agent Upgrade configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * SessionManagerDelivery
   */
  settingType?: string;
  /**
   * @remarks
   * The configurations for delivering records to Simple Log Service.
   */
  slsDeliveryConfig?: ModifyCloudAssistantSettingsRequestSlsDeliveryConfig;
  static names(): { [key: string]: string } {
    return {
      agentUpgradeConfig: 'AgentUpgradeConfig',
      ossDeliveryConfig: 'OssDeliveryConfig',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      settingType: 'SettingType',
      slsDeliveryConfig: 'SlsDeliveryConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUpgradeConfig: ModifyCloudAssistantSettingsRequestAgentUpgradeConfig,
      ossDeliveryConfig: ModifyCloudAssistantSettingsRequestOssDeliveryConfig,
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      settingType: 'string',
      slsDeliveryConfig: ModifyCloudAssistantSettingsRequestSlsDeliveryConfig,
    };
  }

  validate() {
    if(this.agentUpgradeConfig && typeof (this.agentUpgradeConfig as any).validate === 'function') {
      (this.agentUpgradeConfig as any).validate();
    }
    if(this.ossDeliveryConfig && typeof (this.ossDeliveryConfig as any).validate === 'function') {
      (this.ossDeliveryConfig as any).validate();
    }
    if(this.slsDeliveryConfig && typeof (this.slsDeliveryConfig as any).validate === 'function') {
      (this.slsDeliveryConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

