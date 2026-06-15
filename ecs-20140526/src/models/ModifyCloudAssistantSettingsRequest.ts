// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudAssistantSettingsRequestAgentUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * A list of time windows during which the agent is allowed to be upgraded. The time windows are accurate to minutes and are in UTC by default.
   * 
   * The interval between two consecutive time windows must be at least 1 hour.
   * 
   * Format: StartTime(HH:mm)-EndTime(HH:mm).
   * 
   * For example, [
   * "02:00-03:00",
   * "05:00-06:00"
   * ]
   * indicates that the agent can be upgraded from 2:00 to 3:00 and from 5:00 to 6:00 every day in UTC.
   */
  allowedUpgradeWindow?: string[];
  /**
   * @remarks
   * Specifies whether to immediately check the version and perform an update when the Cloud Assistant agent is started. Default value: true.
   * 
   * This setting takes effect only when the version of the Cloud Assistant agent is not earlier than the following versions:
   * 
   * - Windows: 2.1.4.1065
   * 
   * - Linux: 2.2.4.1065
   * 
   * @example
   * true
   */
  bootstrapUpgrade?: boolean;
  /**
   * @remarks
   * Specifies whether to disallow the Cloud Assistant agent to check for or perform updates. Default value: false.
   * 
   * This setting takes effect only when the version of the Cloud Assistant agent is not earlier than the following versions:
   * 
   * - Windows: 2.1.4.1065
   * 
   * - Linux: 2.2.4.1065
   * 
   * @example
   * false
   */
  disableUpgrade?: boolean;
  /**
   * @remarks
   * Specifies whether to enable custom upgrade configurations for the agent. If you set this parameter to false, the agent attempts to upgrade every 30 minutes by default.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time zone of the time windows for agent upgrade. Default value: UTC.
   * The following formats are supported for the time zone:
   * 
   * - Time zone name: for example, Asia/Shanghai (China/Shanghai time) and America/Los_Angeles (US/Los Angeles time).
   * 
   * - Offset from Greenwich Mean Time (GMT): for example, GMT+8:00 (UTC+8) and GMT-7:00 (UTC-7). The hour part cannot have a leading zero.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      allowedUpgradeWindow: 'AllowedUpgradeWindow',
      bootstrapUpgrade: 'BootstrapUpgrade',
      disableUpgrade: 'DisableUpgrade',
      enabled: 'Enabled',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedUpgradeWindow: { 'type': 'array', 'itemType': 'string' },
      bootstrapUpgrade: 'boolean',
      disableUpgrade: 'boolean',
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
   * Specifies whether to enable the feature of delivering records to OSS. Default value: false.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The OSS encryption algorithm. Valid values:
   * 
   * - AES256
   * 
   * - SM4
   * 
   * @example
   * AES256
   */
  encryptionAlgorithm?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK) when KMS encryption is used.
   * 
   * @example
   * a807****7a70e
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * The OSS encryption mode. Valid values:
   * 
   * - Inherit: inherits the bucket encryption.
   * 
   * - OssManaged: uses OSS-managed server-side encryption.
   * 
   * - KMS: uses KMS encryption.
   * 
   * @example
   * Inherit
   */
  encryptionType?: string;
  /**
   * @remarks
   * The prefix of the directory in the OSS bucket. The following limits apply:
   * 
   * - The prefix can be up to 254 characters in length.
   * 
   * - The prefix cannot start with a forward slash (/) or a backslash ().
   * 
   * Note: If you want to deliver records to the root directory of the bucket, enter "". To clear the prefix that is previously set, enter "".
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

export class ModifyCloudAssistantSettingsRequestResourceUsageConfig extends $dara.Model {
  /**
   * @remarks
   * The maximum CPU usage that is allowed for the main process of the Cloud Assistant agent.
   * 
   * - Unit: %.
   * 
   * - Valid values: 10 to 95.
   * 
   * - Default value: 20.
   * 
   * @example
   * 20
   */
  cpuLimit?: number;
  /**
   * @remarks
   * Specifies whether to retain the script file of a command in the Cloud Assistant directory after the command execution is complete.
   * Default value: false.
   * 
   * @example
   * false
   */
  keepScriptFile?: boolean;
  /**
   * @remarks
   * The maximum number of Cloud Assistant log files that can be retained.
   * 
   * - Default value: 30.
   * 
   * - Minimum value: 7.
   * 
   * - Maximum value: 365.
   * 
   * @example
   * 30
   */
  logFileCountLimit?: number;
  /**
   * @remarks
   * The maximum size of a single Cloud Assistant log file. You must specify a unit (B, KB, or MB).
   * 
   * - Default value: 100 MB.
   * 
   * - Minimum value: 10 MB.
   * 
   * - Maximum value: 1024 MB.
   * 
   * @example
   * 10MB
   */
  logSizeLimit?: string;
  /**
   * @remarks
   * The maximum memory usage that is allowed for the main process of the Cloud Assistant agent. You must specify a unit (B, KB, or MB).
   * 
   * - Default value: 50 MB.
   * 
   * - Minimum value: 35 MB.
   * 
   * - Maximum value: 1024 MB.
   * 
   * @example
   * 50MB
   */
  memoryLimit?: string;
  /**
   * @remarks
   * The maximum number of consecutive times that CPU or memory usage can exceed the specified limits. If the limits are consecutively exceeded for the specified number of times, the Cloud Assistant agent is automatically stopped.
   * 
   * - Default value: 3.
   * 
   * - Minimum value: 3.
   * 
   * @example
   * 3
   */
  overloadLimit?: number;
  static names(): { [key: string]: string } {
    return {
      cpuLimit: 'CpuLimit',
      keepScriptFile: 'KeepScriptFile',
      logFileCountLimit: 'LogFileCountLimit',
      logSizeLimit: 'LogSizeLimit',
      memoryLimit: 'MemoryLimit',
      overloadLimit: 'OverloadLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuLimit: 'number',
      keepScriptFile: 'boolean',
      logFileCountLimit: 'number',
      logSizeLimit: 'string',
      memoryLimit: 'string',
      overloadLimit: 'number',
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
   * The switch for the Session Manager feature. Valid values:
   * 
   * - true: enables the feature.
   * 
   * - false: disables the feature.
   * 
   * Note:
   * 
   * - After you enable or disable the Session Manager feature, the setting takes effect for all regions.
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
   * Specifies whether to enable the feature of delivering records to SLS.
   * Default value: false.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the SLS Logstore.
   * 
   * @example
   * example-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The name of the SLS project.
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
   * The configurations of upgrading the Cloud Assistant agent.
   */
  agentUpgradeConfig?: ModifyCloudAssistantSettingsRequestAgentUpgradeConfig;
  /**
   * @remarks
   * The configurations of delivering records to OSS.
   */
  ossDeliveryConfig?: ModifyCloudAssistantSettingsRequestOssDeliveryConfig;
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
  resourceUsageConfig?: ModifyCloudAssistantSettingsRequestResourceUsageConfig;
  /**
   * @remarks
   * The configurations of the Session Manager feature.
   */
  sessionManagerConfig?: ModifyCloudAssistantSettingsRequestSessionManagerConfig;
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
      resourceUsageConfig: 'ResourceUsageConfig',
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
      resourceUsageConfig: ModifyCloudAssistantSettingsRequestResourceUsageConfig,
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
    if(this.resourceUsageConfig && typeof (this.resourceUsageConfig as any).validate === 'function') {
      (this.resourceUsageConfig as any).validate();
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

