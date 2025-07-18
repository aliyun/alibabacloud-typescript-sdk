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
  /**
   * @remarks
   * The time windows during which Cloud Assistant Agent can be upgraded.
   */
  allowedUpgradeWindows?: DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfigAllowedUpgradeWindows;
  /**
   * @remarks
   * Indicates whether custom upgrade is enabled for Cloud Assistant Agent. If the value is false or empty, an upgrade attempt is performed for Cloud Assistant Agent every 30 minutes.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time zone of the time windows.
   * 
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      allowedUpgradeWindows: 'AllowedUpgradeWindows',
      enabled: 'Enabled',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedUpgradeWindows: DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfigAllowedUpgradeWindows,
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
   * The type of items to be delivered. Valid values:
   * 
   * *   SessionManager: session records.
   * *   Invocation: task execution records.
   * 
   * @example
   * SessionManager
   */
  deliveryType?: string;
  /**
   * @remarks
   * Indicates whether to deliver the specified items to OSS.
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
   * *   KMS: server-side encryption with Key Management Service (SSE-KMS).
   * 
   * @example
   * Inherit
   */
  encryptionType?: string;
  /**
   * @remarks
   * The prefix of the OSS bucket directory.
   * 
   * @example
   * sessionmanager/audit
   */
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

export class DescribeCloudAssistantSettingsResponseBodySessionManagerConfig extends $dara.Model {
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
  /**
   * @remarks
   * The type of items to be delivered. Valid values:
   * 
   * *   SessionManager: session records.
   * *   Invocation: task execution records.
   * 
   * @example
   * SessionManager
   */
  deliveryType?: string;
  /**
   * @remarks
   * Indicates whether to deliver the specified items to Simple Log Service.
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
   * The configurations for upgrading Cloud Assistant Agent.
   */
  agentUpgradeConfig?: DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfig;
  /**
   * @remarks
   * The configurations for delivering items to Object Storage Service (OSS).
   */
  ossDeliveryConfigs?: DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigs;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  sessionManagerConfig?: DescribeCloudAssistantSettingsResponseBodySessionManagerConfig;
  /**
   * @remarks
   * The configurations for delivering items to Simple Log Service.
   */
  slsDeliveryConfigs?: DescribeCloudAssistantSettingsResponseBodySlsDeliveryConfigs;
  static names(): { [key: string]: string } {
    return {
      agentUpgradeConfig: 'AgentUpgradeConfig',
      ossDeliveryConfigs: 'OssDeliveryConfigs',
      requestId: 'RequestId',
      sessionManagerConfig: 'SessionManagerConfig',
      slsDeliveryConfigs: 'SlsDeliveryConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentUpgradeConfig: DescribeCloudAssistantSettingsResponseBodyAgentUpgradeConfig,
      ossDeliveryConfigs: DescribeCloudAssistantSettingsResponseBodyOssDeliveryConfigs,
      requestId: 'string',
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

