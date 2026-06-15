// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudAssistantSettingsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of upgrading the Cloud Assistant agent.
   */
  agentUpgradeConfigShrink?: string;
  /**
   * @remarks
   * The configurations of delivering records to OSS.
   */
  ossDeliveryConfigShrink?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region.
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
   * The configurations of resource usage for Cloud Assistant. This setting takes effect only when the version of the Cloud Assistant agent is not earlier than the following versions:
   * 
   * - Windows: 2.1.4.1065
   * 
   * - Linux: 2.2.4.1065
   */
  resourceUsageConfigShrink?: string;
  /**
   * @remarks
   * The configurations of the Session Manager feature.
   */
  sessionManagerConfigShrink?: string;
  /**
   * @remarks
   * The type of the service configurations. Valid values:
   * 
   * - `SessionManagerDelivery`: the configurations of delivering session records.
   * 
   * - `InvocationDelivery`: the configurations of delivering command execution records.
   * 
   * - `AgentUpgradeConfig`: the configurations of upgrading the Cloud Assistant agent.
   * 
   * - `SessionManagerConfig`: the configurations of Cloud Assistant Session Manager.
   * 
   * This parameter is required.
   * 
   * @example
   * SessionManagerDelivery
   */
  settingType?: string;
  /**
   * @remarks
   * The configurations of delivering records to SLS.
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
      resourceUsageConfigShrink: 'ResourceUsageConfig',
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
      resourceUsageConfigShrink: 'string',
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

