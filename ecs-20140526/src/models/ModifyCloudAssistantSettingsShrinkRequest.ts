// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudAssistantSettingsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The Cloud Assistant Agent upgrade configuration.
   */
  agentUpgradeConfigShrink?: string;
  /**
   * @remarks
   * The OSS delivery configuration.
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
   * The Cloud Assistant resource usage configuration. This parameter takes effect only when the Cloud Assistant Agent version meets the following minimum requirements:
   * 
   * - Windows: 2.1.4.1065
   * 
   * - Linux: 2.2.4.1065
   */
  resourceUsageConfigShrink?: string;
  /**
   * @remarks
   * The Cloud Assistant session feature configuration.
   */
  sessionManagerConfigShrink?: string;
  /**
   * @remarks
   * The service configuration type. Valid values:
   * - SessionManagerDelivery: session operation log delivery.
   * - InvocationDelivery: task execution log delivery.
   * - AgentUpgradeConfig: Cloud Assistant Agent upgrade configuration.
   * - SessionManagerConfig: Cloud Assistant SessionManager configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * SessionManagerDelivery
   */
  settingType?: string;
  /**
   * @remarks
   * The Simple Log Service (SLS) delivery configuration.
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

