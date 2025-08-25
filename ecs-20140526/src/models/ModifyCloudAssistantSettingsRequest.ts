// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudAssistantSettingsRequestAgentUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * The time windows during which Cloud Assistant Agent can be upgraded. The time windows can be accurate to minutes. The Coordinated Universal Time (UTC) time zone is used by default.
   * 
   * Make sure that the upgrade windows specified by this parameter are not shorter than 1 hour.
   * 
   * Specify each upgrade window in the following format: \\<Start time in the HH:mm format>-\\<End time in the HH:mm format>.
   * 
   * For example, [ "02:00-03:00", "05:00-06:00" ] specifies that Cloud Assistant Agent can be upgraded from 2:00:00 to 3:00:00 and from 5:00:00 to 6:00:00 every day in the UTC time zone.
   */
  allowedUpgradeWindow?: string[];
  /**
   * @remarks
   * Specifies whether to enable custom upgrade for Cloud Assistant Agent. If you set this parameter to false, an upgrade attempt is performed for Cloud Assistant Agent every 30 minutes.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time zone of the time windows. Default value: UTC. You can specify a time zone in the following forms:
   * 
   * *   The time zone name. Examples: Asia/Shanghai and America/Los_Angeles.
   * *   The time offset from GMT. Examples: GMT+8:00 (UTC+8) and GMT-7:00 (UTC-7). You cannot add leading zeros to the hour value.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      allowedUpgradeWindow: 'AllowedUpgradeWindow',
      enabled: 'Enabled',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedUpgradeWindow: { 'type': 'array', 'itemType': 'string' },
      enabled: 'boolean',
      timeZone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedUpgradeWindow)) {
      $dara.Model.validateArray(this.allowedUpgradeWindow);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudAssistantSettingsRequestOssDeliveryConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * example-bucket
   */
  bucketName?: string;
  /**
   * @remarks
   * Specifies whether to deliver records to OSS. Default value: false.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The OSS encryption algorithm. Valid values:
   * 
   * *   AES256
   * *   SM4
   * 
   * @example
   * AES256
   */
  encryptionAlgorithm?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK) when EncryptionType is set to KMS.
   * 
   * @example
   * a807****7a70e
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * The OSS encryption method. Valid values:
   * 
   * *   Inherit: the encryption method used by the specified bucket.
   * *   OssManaged: server-side encryption by using OSS-managed keys (SSE-OSS).
   * *   KMS: server-side encryption by using Key Management Service managed keys (SSE-KMS).
   * 
   * @example
   * Inherit
   */
  encryptionType?: string;
  /**
   * @remarks
   * The prefix of the OSS bucket directory. The prefix must meet the following requirements:
   * 
   * *   The prefix can be up to 254 characters in length.
   * *   The prefix cannot start with a forward slash (/) or a backslash (\\\\).
   * 
   * Note: If you do not need a directory prefix, specify a pair of double quotation marks ("") for this parameter to clear the directory prefix that you specified.
   * 
   * @example
   * sessionmanager/audit
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      enabled: 'Enabled',
      encryptionAlgorithm: 'EncryptionAlgorithm',
      encryptionKeyId: 'EncryptionKeyId',
      encryptionType: 'EncryptionType',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      enabled: 'boolean',
      encryptionAlgorithm: 'string',
      encryptionKeyId: 'string',
      encryptionType: 'string',
      prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudAssistantSettingsRequestSessionManagerConfig extends $dara.Model {
  /**
   * @remarks
   * Specify whether to enable Cloud Assistant Session Manager. Valid values:
   * 
   * *   true: Enables the feature.
   * *   false: Disables the feature.
   * 
   * Notes:
   * 
   * *   The feature applies to all regions.
   * 
   * @example
   * true
   */
  sessionManagerEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      sessionManagerEnabled: 'SessionManagerEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionManagerEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudAssistantSettingsRequestSlsDeliveryConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to deliver records to Simple Log Service. Default value: false.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * example-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * example-project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      logstoreName: 'LogstoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      logstoreName: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * Cloud Assistant Session Manager configuration.
   */
  sessionManagerConfig?: ModifyCloudAssistantSettingsRequestSessionManagerConfig;
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
      sessionManagerConfig: 'SessionManagerConfig',
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
      sessionManagerConfig: ModifyCloudAssistantSettingsRequestSessionManagerConfig,
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
    if(this.sessionManagerConfig && typeof (this.sessionManagerConfig as any).validate === 'function') {
      (this.sessionManagerConfig as any).validate();
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

