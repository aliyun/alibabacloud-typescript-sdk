// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudAssistantSettingsRequestAgentUpgradeConfig extends $dara.Model {
  /**
   * @remarks
   * The list of time windows allowed for upgrades, accurate to the minute. The default time zone is UTC. The interval between time windows cannot be less than 1 hour. Format: start time (HH:mm)-end time (HH:mm). For example, ["02:00-03:00", "05:00-06:00"] indicates that upgrades are allowed every day from 02:00 to 03:00 and from 05:00 to 06:00 in the UTC time zone.
   */
  allowedUpgradeWindow?: string[];
  /**
   * @remarks
   * Specifies whether to check the version and perform updates immediately when the Cloud Assistant Agent starts. Default value: true. This parameter takes effect only when the Cloud Assistant Agent version is not earlier than the following versions:
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
   * Specifies whether to disable the Cloud Assistant Agent from checking and performing updates. Default value: false. Precautions:
   * 1. Fully evaluate the security risks and business impacts caused by disabling upgrades or continuing to run an earlier version of the Agent. You are responsible for the resulting risks and impacts.
   * 2. The disable upgrade configuration takes effect at the account level. It applies to all ECS instances under the account and does not support individual exemptions by instance. Therefore, the aforementioned risks cover all instances within the account.
   * 3. This parameter takes effect only when the Cloud Assistant Agent version is not earlier than the following versions:
   *    - Windows: 2.1.4.1065
   *    - Linux: 2.2.4.1065
   * 
   * @example
   * false
   */
  disableUpgrade?: boolean;
  /**
   * @remarks
   * Specifies whether to enable the custom Agent upgrade configuration. If set to false, the system attempts to upgrade the Agent every 30 minutes by default. Default value: false.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time zone for the allowed upgrade time windows. The default time zone is UTC. The time zone supports the following two formats:
   * - Full time zone name: such as Asia/Shanghai (China/Shanghai time) and America/Los_Angeles (US/Los Angeles time).
   * - Time zone offset from Greenwich Mean Time (GMT): such as GMT+8:00 (UTC+8) and GMT-7:00 (UTC-7). Leading zeros are not supported for the hour value.
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
   * Specifies whether to enable delivery to OSS. Default value: false.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The OSS encryption algorithm. Valid values:
   * - AES256
   * - SM4
   * 
   * @example
   * AES256
   */
  encryptionAlgorithm?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK) when the encryption method is KMS.
   * 
   * @example
   * a807****7a70e
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * The OSS encryption method. Valid values:
   * - Inherit: inherit from the bucket
   * - OssManaged: fully managed by OSS
   * - KMS: KMS encryption
   * 
   * @example
   * Inherit
   */
  encryptionType?: string;
  /**
   * @remarks
   * The directory prefix of the OSS bucket. Constraints:
   * - The length cannot exceed 254 characters.
   * - It cannot start with a forward slash (/) or a backslash (\\).
   * 
   * Note: Pass an empty string ("") if no directory prefix is required. If a directory prefix was previously set and is no longer needed, pass an empty string ("") to clear it.
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
   * The maximum allowed CPU usage limit for the main process of the Cloud Assistant Agent.
   * 
   * - Unit: percentage.
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
   * Specifies whether to retain the script file in the Cloud Assistant directory after the command execution is completed. Default value: false.
   * 
   * @example
   * false
   */
  keepScriptFile?: boolean;
  /**
   * @remarks
   * The maximum number of Cloud Assistant log files to retain.
   * - Default value: 30.
   * - Minimum value: 7.
   * - Maximum value: 365.
   * 
   * @example
   * 30
   */
  logFileCountLimit?: number;
  /**
   * @remarks
   * The size limit for a single Cloud Assistant log file. A unit (B, KB, or MB) must be specified.
   * - Default value: 100MB.
   * - Minimum value: 10MB.
   * - Maximum value: 1024MB.
   * 
   * @example
   * 10MB
   */
  logSizeLimit?: string;
  /**
   * @remarks
   * The maximum allowed memory usage limit for the main process of the Cloud Assistant Agent. A unit (B, KB, or MB) must be specified.
   * - Default value: 50MB.
   * - Minimum value: 35MB.
   * - Maximum value: 1024MB.
   * 
   * @example
   * 50MB
   */
  memoryLimit?: string;
  /**
   * @remarks
   * The maximum number of consecutive times that the usage of CPU or memory resources exceeds the limit. When this limit is reached, the Cloud Assistant Agent automatically stops.
   * - Default value: 3.
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
   * Specifies whether to enable the Cloud Assistant session feature. Valid values:
   * * true: enabled
   * * false: disabled
   * 
   * Precautions:
   * * Enabling or disabling the session feature takes effect in all regions.
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
   * Specifies whether to enable delivery to SLS. Default value: false.
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
   * The Cloud Assistant Agent upgrade configuration.
   */
  agentUpgradeConfig?: ModifyCloudAssistantSettingsRequestAgentUpgradeConfig;
  /**
   * @remarks
   * The OSS delivery configuration.
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
   * The Cloud Assistant resource usage configuration. This parameter takes effect only when the Cloud Assistant Agent version is not earlier than the following versions:
   * 
   * - Windows: 2.1.4.1065
   * 
   * - Linux: 2.2.4.1065
   */
  resourceUsageConfig?: ModifyCloudAssistantSettingsRequestResourceUsageConfig;
  /**
   * @remarks
   * The Cloud Assistant session feature configuration.
   */
  sessionManagerConfig?: ModifyCloudAssistantSettingsRequestSessionManagerConfig;
  /**
   * @remarks
   * The service configuration type. Valid values:
   * - SessionManagerDelivery: session operation record delivery
   * - InvocationDelivery: task execution record delivery
   * - AgentUpgradeConfig: Cloud Assistant Agent upgrade configuration
   * - SessionManagerConfig: Cloud Assistant SessionManager configuration
   * 
   * This parameter is required.
   * 
   * @example
   * SessionManagerDelivery
   */
  settingType?: string;
  /**
   * @remarks
   * The SLS delivery configuration.
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

