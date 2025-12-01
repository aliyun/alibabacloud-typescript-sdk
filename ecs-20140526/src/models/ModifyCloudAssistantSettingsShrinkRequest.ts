// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudAssistantSettingsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations for upgrading Cloud Assistant Agent.
   */
  agentUpgradeConfigShrink?: string;
  /**
   * @remarks
   * The configurations for delivering records to Object Storage Service (OSS).
   */
  ossDeliveryConfigShrink?: string;
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
   * Cloud Assistant Session Manager configuration.
   */
  sessionManagerConfigShrink?: string;
  /**
   * @remarks
   * The Cloud Assistant feature. Set SettingType to one of the following valid values:
   * 
   * *   SessionManagerDelivery: the Session Record Delivery configurations.
   * *   InvocationDelivery: the Operation Content and Result Delivery configurations.
   * *   AgentUpgradeConfig: the Cloud Assistant Agent Upgrade configurations.
   * *   SessionManagerConfig: Cloud Assistant the SessionManager configuration.
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
  slsDeliveryConfigShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentUpgradeConfigShrink: 'AgentUpgradeConfig',
      ossDeliveryConfigShrink: 'OssDeliveryConfig',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionManagerConfigShrink: 'SessionManagerConfig',
      settingType: 'SettingType',
      slsDeliveryConfigShrink: 'SlsDeliveryConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUpgradeConfigShrink: 'string',
      ossDeliveryConfigShrink: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionManagerConfigShrink: 'string',
      settingType: 'string',
      slsDeliveryConfigShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

