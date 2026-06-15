// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfigAllowedUpgradeWindows extends $dara.Model {
  allowedUpgradeWindow?: string[];
  static names(): { [key: string]: string } {
    return {
      allowedUpgradeWindow: 'AllowedUpgradeWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedUpgradeWindow: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfig extends $dara.Model {
  allowedUpgradeWindows?: DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfigAllowedUpgradeWindows;
  /**
   * @remarks
   * Indicates whether the Cloud Assistant agent checks for and applies updates upon startup.
   * 
   * @example
   * true
   */
  bootstrapUpgrade?: boolean;
  /**
   * @remarks
   * Indicates whether to prevent the Cloud Assistant agent from automatically updating.
   * 
   * @example
   * true
   */
  disableUpgrade?: boolean;
  /**
   * @remarks
   * Indicates whether custom agent upgrade settings are enabled. If this parameter is not specified or is set to `false`, the system attempts to upgrade the agent every 30 minutes by default.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time zone of the allowed upgrade windows.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      allowedUpgradeWindows: 'AllowedUpgradeWindows',
      bootstrapUpgrade: 'BootstrapUpgrade',
      disableUpgrade: 'DisableUpgrade',
      enabled: 'Enabled',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedUpgradeWindows: DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfigAllowedUpgradeWindows,
      bootstrapUpgrade: 'boolean',
      disableUpgrade: 'boolean',
      enabled: 'boolean',
      timeZone: 'string',
    };
  }

  validate() {
    if(this.allowedUpgradeWindows && typeof (this.allowedUpgradeWindows as any).validate === 'function') {
      (this.allowedUpgradeWindows as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigsOssDeliveryConfig extends $dara.Model {
  bucketName?: string;
  deliveryType?: string;
  enabled?: boolean;
  encryptionAlgorithm?: string;
  encryptionKeyId?: string;
  encryptionType?: string;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      deliveryType: 'DeliveryType',
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
      deliveryType: 'string',
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

export class DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigs extends $dara.Model {
  ossDeliveryConfig?: DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigsOssDeliveryConfig[];
  static names(): { [key: string]: string } {
    return {
      ossDeliveryConfig: 'OssDeliveryConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossDeliveryConfig: { 'type': 'array', 'itemType': DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigsOssDeliveryConfig },
    };
  }

  validate() {
    if(Array.isArray(this.ossDeliveryConfig)) {
      $dara.Model.validateArray(this.ossDeliveryConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantSettingsResponseBodyResourceUsageConfig extends $dara.Model {
  /**
   * @remarks
   * The maximum CPU usage limit for the main process of the Cloud Assistant agent.
   * 
   * @example
   * 20
   */
  cpuLimit?: number;
  /**
   * @remarks
   * Indicates whether to retain the script file in the Cloud Assistant directory after a command invocation is complete.
   * 
   * @example
   * false
   */
  keepScriptFile?: boolean;
  /**
   * @remarks
   * The maximum number of Cloud Assistant log files to retain.
   * 
   * @example
   * 30
   */
  logFileCountLimit?: number;
  /**
   * @remarks
   * The maximum size for a single Cloud Assistant log file.
   * 
   * @example
   * 100MB
   */
  logSizeLimit?: string;
  /**
   * @remarks
   * The maximum memory usage limit for the main process of the Cloud Assistant agent.
   * 
   * @example
   * 35MB
   */
  memoryLimit?: string;
  /**
   * @remarks
   * The number of consecutive times CPU or memory usage can exceed the configured limits before the Cloud Assistant agent process is terminated.
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

export class DescribeCloudAssistantSettingsResponseBodySessionManagerConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Session Manager feature is enabled. Valid values:
   * 
   * - `true`: enabled
   * 
   * - `false`: disabled
   * 
   * **Note**:
   * 
   * - This setting takes effect in all regions.
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

export class DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigsSlsDeliveryConfig extends $dara.Model {
  deliveryType?: string;
  enabled?: boolean;
  logstoreName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      deliveryType: 'DeliveryType',
      enabled: 'Enabled',
      logstoreName: 'LogstoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryType: 'string',
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

export class DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigs extends $dara.Model {
  slsDeliveryConfig?: DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigsSlsDeliveryConfig[];
  static names(): { [key: string]: string } {
    return {
      slsDeliveryConfig: 'SlsDeliveryConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsDeliveryConfig: { 'type': 'array', 'itemType': DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigsSlsDeliveryConfig },
    };
  }

  validate() {
    if(Array.isArray(this.slsDeliveryConfig)) {
      $dara.Model.validateArray(this.slsDeliveryConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudAssistantSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The upgrade settings for the Cloud Assistant agent.
   */
  agentUpgradeConfig?: DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfig;
  ossDeliveryConfigs?: DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigs;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The resource usage settings for the Cloud Assistant agent.
   */
  resourceUsageConfig?: DescribeCloudAssistantSettingsResponseBodyResourceUsageConfig;
  /**
   * @remarks
   * Configurations for the Session Manager feature.
   */
  sessionManagerConfig?: DescribeCloudAssistantSettingsResponseBodySessionManagerConfig;
  slsDeliveryConfigs?: DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigs;
  static names(): { [key: string]: string } {
    return {
      agentUpgradeConfig: 'AgentUpgradeConfig',
      ossDeliveryConfigs: 'OssDeliveryConfigs',
      requestId: 'RequestId',
      resourceUsageConfig: 'ResourceUsageConfig',
      sessionManagerConfig: 'SessionManagerConfig',
      slsDeliveryConfigs: 'SlsDeliveryConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUpgradeConfig: DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfig,
      ossDeliveryConfigs: DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigs,
      requestId: 'string',
      resourceUsageConfig: DescribeCloudAssistantSettingsResponseBodyResourceUsageConfig,
      sessionManagerConfig: DescribeCloudAssistantSettingsResponseBodySessionManagerConfig,
      slsDeliveryConfigs: DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigs,
    };
  }

  validate() {
    if(this.agentUpgradeConfig && typeof (this.agentUpgradeConfig as any).validate === 'function') {
      (this.agentUpgradeConfig as any).validate();
    }
    if(this.ossDeliveryConfigs && typeof (this.ossDeliveryConfigs as any).validate === 'function') {
      (this.ossDeliveryConfigs as any).validate();
    }
    if(this.resourceUsageConfig && typeof (this.resourceUsageConfig as any).validate === 'function') {
      (this.resourceUsageConfig as any).validate();
    }
    if(this.sessionManagerConfig && typeof (this.sessionManagerConfig as any).validate === 'function') {
      (this.sessionManagerConfig as any).validate();
    }
    if(this.slsDeliveryConfigs && typeof (this.slsDeliveryConfigs as any).validate === 'function') {
      (this.slsDeliveryConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

