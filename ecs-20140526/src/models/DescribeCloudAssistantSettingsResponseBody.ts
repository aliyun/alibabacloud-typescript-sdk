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
   * Indicates whether Cloud Assistant Agent checks for and performs updates immediately upon startup.
   * 
   * @example
   * true
   */
  bootstrapUpgrade?: boolean;
  /**
   * @remarks
   * Indicates whether Cloud Assistant Agent is prohibited from checking for and performing updates.
   * 
   * @example
   * true
   */
  disableUpgrade?: boolean;
  /**
   * @remarks
   * Indicates whether the custom Agent upgrade configuration is enabled. If the value is false or empty, the default behavior is to attempt an upgrade every 30 minutes.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time zone of the allowed upgrade time windows.
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
   * The maximum CPU usage allowed for the Cloud Assistant Agent main process.
   * 
   * @example
   * 20
   */
  cpuLimit?: number;
  /**
   * @remarks
   * Indicates whether the script file is retained in the Cloud Assistant directory after command execution is complete.
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
   * The size limit of Cloud Assistant log files.
   * 
   * @example
   * 100MB
   */
  logSizeLimit?: string;
  /**
   * @remarks
   * The maximum memory usage allowed for the Cloud Assistant Agent main process.
   * 
   * @example
   * 35MB
   */
  memoryLimit?: string;
  /**
   * @remarks
   * The maximum number of consecutive times that CPU or memory resources usage can exceed the limit. When this limit is reached, Cloud Assistant Agent automatically stops running.
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
   * Specifies whether the Cloud Assistant session feature is enabled. Valid values:
   * * true: Enabled.
   * * false: Disabled.
   * 
   * Note:
   * * Enabling or disabling the session feature takes effect across all regions.
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
   * The Cloud Assistant Agent upgrade configuration.
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
   * The Cloud Assistant resource usage configuration.
   */
  resourceUsageConfig?: DescribeCloudAssistantSettingsResponseBodyResourceUsageConfig;
  /**
   * @remarks
   * The Cloud Assistant session feature configuration.
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

