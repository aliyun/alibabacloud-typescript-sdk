// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataStorageResponseBodyDataDeliverySettingsAccounts extends $dara.Model {
  /**
   * @remarks
   * The UID of the source cloud account. The value is a decimal string.
   * 
   * @example
   * 1234567890123456
   */
  accountId?: string;
  /**
   * @remarks
   * The display name of the account. If the name is missing, the UID string is returned.
   * 
   * @example
   * 1234567890123456
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the account has the authorization required for log delivery. This parameter must be set to true when you add a member.
   * 
   * @example
   * true
   */
  authorized?: boolean;
  /**
   * @remarks
   * Indicates whether the account is the current management and delivery target account, which is the local account.
   * 
   * @example
   * true
   */
  daAccount?: boolean;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      authorized: 'Authorized',
      daAccount: 'DaAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      authorized: 'boolean',
      daAccount: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataStorageResponseBodyDataDeliverySettingsTypesExecutions extends $dara.Model {
  /**
   * @remarks
   * The UID of the source account for this delivery record. The value is a decimal string.
   * 
   * @example
   * 1234567890123457
   */
  accountId?: string;
  /**
   * @remarks
   * A reserved compatibility field. The current implementation does not populate historical execution error codes. This field is usually empty or not returned. If execution fails, read the error code returned by the corresponding write operation.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The recorded delivery status. Valid values:
   * - RUNNING: The delivery is recorded as enabled after the last successful operation.
   * - STOPPED: The delivery is recorded as disabled.
   * This field does not indicate real-time log arrival.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The time when the delivery status was last updated. The value is a UNIX timestamp in milliseconds. If the record has no update time, this field is empty or not returned.
   * 
   * @example
   * 1792399200000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      errorCode: 'ErrorCode',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      errorCode: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataStorageResponseBodyDataDeliverySettingsTypes extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to automatically add subsequent new and available managed members to the selection scope of this log type.
   * 
   * @example
   * true
   */
  autoIncludeNewAccounts?: boolean;
  /**
   * @remarks
   * The list of statuses for existing source delivery records of this log type.
   * 
   * @example
   * []
   */
  executions?: GetDataStorageResponseBodyDataDeliverySettingsTypesExecutions[];
  /**
   * @remarks
   * The unique identifier of the log type. This corresponds to UpdateDataStorageDelivery.LogCode.
   * 
   * @example
   * aegis-log-client
   */
  logCode?: string;
  /**
   * @remarks
   * The array of UIDs of the source accounts selected for this log type, including the local account. The response is a JSON string array. When you write an array(simple) request, serialize the value as comma-separated values.
   * 
   * @example
   * ["1234567890123456"]
   */
  selectedAccountIds?: string[];
  static names(): { [key: string]: string } {
    return {
      autoIncludeNewAccounts: 'AutoIncludeNewAccounts',
      executions: 'Executions',
      logCode: 'LogCode',
      selectedAccountIds: 'SelectedAccountIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncludeNewAccounts: 'boolean',
      executions: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataDeliverySettingsTypesExecutions },
      logCode: 'string',
      selectedAccountIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.executions)) {
      $dara.Model.validateArray(this.executions);
    }
    if(Array.isArray(this.selectedAccountIds)) {
      $dara.Model.validateArray(this.selectedAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataStorageResponseBodyDataDeliverySettings extends $dara.Model {
  /**
   * @remarks
   * The account directory of the current local account and managed members.
   * 
   * @example
   * [{"AccountId":"1234567890123456","AccountName":"1234567890123456","DaAccount":true,"Authorized":true}]
   */
  accounts?: GetDataStorageResponseBodyDataDeliverySettingsAccounts[];
  /**
   * @remarks
   * Indicates whether the current account meets the conditions for configuring delivery settings. This is determined based on authorization, target project availability, capacity orders, and the current account identity. The PrerequisiteEnabled parameter must also be set to true.
   * 
   * @example
   * true
   */
  canConfigure?: boolean;
  /**
   * @remarks
   * The version of the current delivery settings. When you modify multi-account configurations or specify member delivery, pass this value back as the ConfigurationVersion parameter. Query this value again after each modification. Do not use a fixed sample value.
   * 
   * @example
   * 1
   */
  configurationVersion?: number;
  /**
   * @remarks
   * The UID of the current management and delivery target account. The value is a decimal string. This account is also the fixed local account in the account selection list.
   * 
   * @example
   * 1234567890123456
   */
  daAccountId?: string;
  /**
   * @remarks
   * The master switch for saved multi-account centralized delivery. A value of true indicates that the switch is turned on. A value of false indicates that the switch is turned off.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether the initialization of the account scope and automatic inclusion settings upon the first enabling is complete.
   * 
   * @example
   * true
   */
  initialized?: boolean;
  /**
   * @remarks
   * Indicates whether the prerequisite of enabling multi-account security management in Security Center is met.
   * 
   * @example
   * true
   */
  prerequisiteEnabled?: boolean;
  /**
   * @remarks
   * The name of the current Simple Log Service project for centralized delivery. When you modify multi-account settings or specify member delivery, pass this value back as the TargetProject request parameter.
   * 
   * @example
   * aliyun-cloudsiem-data-1234567890123456-cn-shanghai
   */
  targetProject?: string;
  /**
   * @remarks
   * The region ID of the current Simple Log Service project for centralized delivery.
   * 
   * @example
   * cn-shanghai
   */
  targetRegion?: string;
  /**
   * @remarks
   * The account selection, automatic inclusion settings, and existing delivery status categorized by log type.
   * 
   * @example
   * [{"LogCode":"aegis-log-client","SelectedAccountIds":["1234567890123456"],"AutoIncludeNewAccounts":true,"Executions":[]}]
   */
  types?: GetDataStorageResponseBodyDataDeliverySettingsTypes[];
  /**
   * @remarks
   * The reason code for why the configuration is unavailable. Valid values:
   * - DA_UNAUTHORIZED: The management account is not authorized.
   * - TARGET_PROJECT_UNAVAILABLE: The target project is unavailable.
   * - LOG_CAPACITY_UNAVAILABLE: No valid capacity order exists.
   * - NOT_CURRENT_ACCOUNT: The operation is not performed by the current account.
   * If the conditions are met, this parameter is empty or not returned.
   * 
   * @example
   * DA_UNAUTHORIZED
   */
  unavailableReason?: string;
  static names(): { [key: string]: string } {
    return {
      accounts: 'Accounts',
      canConfigure: 'CanConfigure',
      configurationVersion: 'ConfigurationVersion',
      daAccountId: 'DaAccountId',
      enabled: 'Enabled',
      initialized: 'Initialized',
      prerequisiteEnabled: 'PrerequisiteEnabled',
      targetProject: 'TargetProject',
      targetRegion: 'TargetRegion',
      types: 'Types',
      unavailableReason: 'UnavailableReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accounts: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataDeliverySettingsAccounts },
      canConfigure: 'boolean',
      configurationVersion: 'number',
      daAccountId: 'string',
      enabled: 'boolean',
      initialized: 'boolean',
      prerequisiteEnabled: 'boolean',
      targetProject: 'string',
      targetRegion: 'string',
      types: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataDeliverySettingsTypes },
      unavailableReason: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accounts)) {
      $dara.Model.validateArray(this.accounts);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataStorageResponseBodyDataNormalizationLogStores extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic index discovery is enabled for the full-text index of the Logstore in Simple Log Service. This field is returned only when WithAutoKeyDetect=true is specified in the request, and is not returned if the read operation fails.
   * 
   * @example
   * true
   */
  autoKeyDetect?: boolean;
  /**
   * @remarks
   * Indicates whether the corresponding Logstore in Simple Log Service exists. A value of true indicates that the Logstore exists. A value of false indicates that the Logstore is not created and delivery is not enabled. In this case, automatic index discovery cannot be configured. This field is returned only when WithAutoKeyDetect=true is specified in the request.
   * 
   * @example
   * true
   */
  logStoreExisted?: boolean;
  /**
   * @remarks
   * The name of the Logstore that stores normalized data.
   * 
   * @example
   * vulnerability-activity
   */
  logStoreName?: string;
  /**
   * @remarks
   * The storage duration for normalized data.
   * 
   * @example
   * 180
   */
  logStoreTtl?: number;
  /**
   * @remarks
   * The used capacity of hot storage.
   * 
   * @example
   * 10.333
   */
  usedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      autoKeyDetect: 'AutoKeyDetect',
      logStoreExisted: 'LogStoreExisted',
      logStoreName: 'LogStoreName',
      logStoreTtl: 'LogStoreTtl',
      usedCapacity: 'UsedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoKeyDetect: 'boolean',
      logStoreExisted: 'boolean',
      logStoreName: 'string',
      logStoreTtl: 'number',
      usedCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataStorageResponseBodyDataNormalizationLogViews extends $dara.Model {
  /**
   * @remarks
   * The log type of the normalized log.
   * 
   * @example
   * API security risk log
   */
  activityName?: string;
  /**
   * @remarks
   * The category of the normalized log.
   * 
   * @example
   * Security Category
   */
  categoryName?: string;
  /**
   * @remarks
   * The number of times the normalized dataset is referenced in the threat analysis integration center.
   * 
   * @example
   * 3
   */
  detectionRuleReferenceCount?: number;
  /**
   * @remarks
   * The list of products that reference the normalized dataset in the threat analysis integration center.
   * 
   * @example
   * ["sas"]
   */
  detectionRuleReferenceProductIds?: string[];
  /**
   * @remarks
   * The query statement used to query log types in the normalized dataset.
   * 
   * @example
   * [{\\"SCHEMA\\":\\"AZURE_ACTIVE_DIRECTORY_AUDIT_ACTIVITY\\"}]
   */
  logSearchConditions?: string;
  /**
   * @remarks
   * The Logstore in threat analysis that stores normalized logs.
   * 
   * @example
   * risk-activity
   */
  logStoreName?: string;
  /**
   * @remarks
   * Indicates whether the normalized dataset exists. Valid values:
   * - true: The dataset exists.
   * - false: The dataset does not exist.
   * 
   * @example
   * true
   */
  logViewExisted?: boolean;
  /**
   * @remarks
   * The name of the normalized dataset.
   * 
   * @example
   * risk_activity
   */
  logViewName?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      categoryName: 'CategoryName',
      detectionRuleReferenceCount: 'DetectionRuleReferenceCount',
      detectionRuleReferenceProductIds: 'DetectionRuleReferenceProductIds',
      logSearchConditions: 'LogSearchConditions',
      logStoreName: 'LogStoreName',
      logViewExisted: 'LogViewExisted',
      logViewName: 'LogViewName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      categoryName: 'string',
      detectionRuleReferenceCount: 'number',
      detectionRuleReferenceProductIds: { 'type': 'array', 'itemType': 'string' },
      logSearchConditions: 'string',
      logStoreName: 'string',
      logViewExisted: 'boolean',
      logViewName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detectionRuleReferenceProductIds)) {
      $dara.Model.validateArray(this.detectionRuleReferenceProductIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataStorageResponseBodyDataRecordLogStores extends $dara.Model {
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * alert-record
   */
  logStoreName?: string;
  /**
   * @remarks
   * The TTL of the Logstore.
   * 
   * @example
   * 90
   */
  logStoreTtl?: number;
  /**
   * @remarks
   * The used capacity of the Logstore.
   * 
   * @example
   * 11.111
   */
  usedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      logStoreName: 'LogStoreName',
      logStoreTtl: 'LogStoreTtl',
      usedCapacity: 'UsedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreName: 'string',
      logStoreTtl: 'number',
      usedCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataStorageResponseBodyDataSasLogStoresAccountDeliveries extends $dara.Model {
  /**
   * @remarks
   * The UID of the source Alibaba Cloud account for the logs. This field is an int64 number.
   * 
   * @example
   * 1234567890123456
   */
  accountId?: number;
  /**
   * @remarks
   * The display name of the source account. If the name is unavailable, the account UID string is used.
   * 
   * @example
   * 1234567890123456
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the account is the current management or target account. A value of true indicates the current account, and a value of false indicates a member source account.
   * 
   * @example
   * true
   */
  isDaAccount?: boolean;
  /**
   * @remarks
   * The recorded delivery status for the source account. Valid values: enable (enabled) and disable (disabled).
   * 
   * @example
   * enable
   */
  logDeliveryStatus?: string;
  /**
   * @remarks
   * The last update time of the delivery status for the source account. This field is empty or not returned if no records are generated.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2026-10-19T14:00:00Z
   */
  logDeliveryUpdateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      isDaAccount: 'IsDaAccount',
      logDeliveryStatus: 'LogDeliveryStatus',
      logDeliveryUpdateTime: 'LogDeliveryUpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      isDaAccount: 'boolean',
      logDeliveryStatus: 'string',
      logDeliveryUpdateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataStorageResponseBodyDataSasLogStores extends $dara.Model {
  /**
   * @remarks
   * The delivery records of the log type expanded by source account, including the current account and member accounts with existing records.
   * 
   * @example
   * [{"AccountId":1234567890123456,"AccountName":"1234567890123456","LogDeliveryStatus":"enable","LogDeliveryUpdateTime":"2026-10-19T14:00:00Z","IsDaAccount":true}]
   */
  accountDeliveries?: GetDataStorageResponseBodyDataSasLogStoresAccountDeliveries[];
  /**
   * @remarks
   * Indicates whether automatic index discovery is enabled for the full-text index of the Logstore in Simple Log Service. This field is returned only when WithAutoKeyDetect=true is specified in the request, and is not returned if the read operation fails.
   * 
   * @example
   * true
   */
  autoKeyDetect?: boolean;
  /**
   * @remarks
   * The log code.
   * 
   * @example
   * sas-net-block
   */
  logCode?: string;
  /**
   * @remarks
   * The group to which the log belongs. Valid values:
   * - host: Host logs.
   * - security: Security logs.
   * 
   * @example
   * host
   */
  logDeliveryGroup?: string;
  /**
   * @remarks
   * Specifies whether you are allowed to toggle the log delivery switch. Log delivery is unavailable if the service is not purchased. Valid values:
   * - allow: Allowed.
   * - deny: Not allowed.
   * 
   * @example
   * deny
   */
  logDeliveryPermission?: string;
  /**
   * @remarks
   * The log delivery status. Valid values:
   * - enable: Delivery is enabled for the log.
   * - disable: Delivery is disabled for the log.
   * 
   * @example
   * enable
   */
  logDeliveryStatus?: string;
  /**
   * @remarks
   * The time of the last log delivery operation. The format is YYYY-MM-DDTHH:mm:ss.
   * 
   * @example
   * 2025-07-16T15:10:29
   */
  logDeliveryUpdateTime?: string;
  /**
   * @remarks
   * The log name.
   * 
   * @example
   * Process Snapshot
   */
  logName?: string;
  /**
   * @remarks
   * The default query conditions for the log. When multiple logs are stored in a single Logstore, you must use query conditions to perform a log query.
   * 
   * @example
   * [{\\"__topic__\\":\\"sas-net-block\\"}]
   */
  logSearchConditions?: string;
  /**
   * @remarks
   * Indicates whether the Logstore where the log is stored exists. Valid values:
   * - true: Exists.
   * - false: Does not exist.
   * 
   * @example
   * true
   */
  logStoreExisted?: boolean;
  /**
   * @remarks
   * The name of the Logstore where the log is stored.
   * 
   * @example
   * sas-security-log
   */
  logStoreName?: string;
  /**
   * @remarks
   * The storage duration of the Logstore where the log is stored. The minimum storage duration is 30 days.
   * 
   * @example
   * 180
   */
  logStoreTtl?: number;
  /**
   * @remarks
   * The used capacity of hot storage.
   * 
   * @example
   * 10.333
   */
  usedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      accountDeliveries: 'AccountDeliveries',
      autoKeyDetect: 'AutoKeyDetect',
      logCode: 'LogCode',
      logDeliveryGroup: 'LogDeliveryGroup',
      logDeliveryPermission: 'LogDeliveryPermission',
      logDeliveryStatus: 'LogDeliveryStatus',
      logDeliveryUpdateTime: 'LogDeliveryUpdateTime',
      logName: 'LogName',
      logSearchConditions: 'LogSearchConditions',
      logStoreExisted: 'LogStoreExisted',
      logStoreName: 'LogStoreName',
      logStoreTtl: 'LogStoreTtl',
      usedCapacity: 'UsedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountDeliveries: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataSasLogStoresAccountDeliveries },
      autoKeyDetect: 'boolean',
      logCode: 'string',
      logDeliveryGroup: 'string',
      logDeliveryPermission: 'string',
      logDeliveryStatus: 'string',
      logDeliveryUpdateTime: 'string',
      logName: 'string',
      logSearchConditions: 'string',
      logStoreExisted: 'boolean',
      logStoreName: 'string',
      logStoreTtl: 'number',
      usedCapacity: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accountDeliveries)) {
      $dara.Model.validateArray(this.accountDeliveries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataStorageResponseBodyDataUnusedLogStores extends $dara.Model {
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * cloud-siem
   */
  logStoreName?: string;
  /**
   * @remarks
   * The data retention period.
   * 
   * @example
   * 180
   */
  logStoreTtl?: number;
  /**
   * @remarks
   * The used capacity of hot storage.
   * 
   * @example
   * 10.333
   */
  usedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      logStoreName: 'LogStoreName',
      logStoreTtl: 'LogStoreTtl',
      usedCapacity: 'UsedCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreName: 'string',
      logStoreTtl: 'number',
      usedCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataStorageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The amount of cold storage used for user logs.
   * 
   * @example
   * 100.0
   */
  coldStorageUsedCapacity?: number;
  /**
   * @remarks
   * The storage region for user-side logs.
   * 
   * @example
   * cn-shanghai
   */
  dataStorageRegionId?: string;
  /**
   * @remarks
   * Indicates whether the storage region can be modified. By default, modification is not allowed. Contact the product manager to reset the region. The region can be reset only once. Valid values:
   * - allow: The storage region can be modified.
   * - deny: The storage region cannot be modified.
   * 
   * @example
   * deny
   */
  dataStorageRegionPermission?: string;
  /**
   * @remarks
   * The storage capacity purchased in subscription scenarios.
   * 
   * @example
   * 100
   */
  dataStorageTotalCapacity?: number;
  /**
   * @remarks
   * The storage capacity used in user log management.
   * 
   * @example
   * 100.0
   */
  dataStorageUsedCapacity?: number;
  /**
   * @remarks
   * The details of storage usage by log management users.
   * 
   * @example
   * {\\"purchasedHotStorageCapacity\\":1000,\\"usedHotStorageCapacity\\":4.2,\\"usedHotStorageCapacityDetail\\":{\\"ap-southeast-1\\":4.2,\\"cn-shenzhen\\":0.0,\\"cn-shanghai\\":0.0}}
   */
  dataStorageUsedCapacityDetail?: string;
  /**
   * @remarks
   * The multi-account delivery settings for the current storage resource. This parameter is returned when the query is successful. If the read operation fails, refer to DeliverySettingsError.
   * 
   * @example
   * {"PrerequisiteEnabled":true,"CanConfigure":true,"Enabled":true,"Initialized":true,"DaAccountId":"1234567890123456","TargetProject":"aliyun-cloudsiem-data-1234567890123456-cn-shanghai","TargetRegion":"cn-shanghai","ConfigurationVersion":1,"Accounts":[{"AccountId":"1234567890123456","AccountName":"1234567890123456","DaAccount":true,"Authorized":true}],"Types":[{"LogCode":"aegis-log-client","SelectedAccountIds":["1234567890123456"],"AutoIncludeNewAccounts":true,"Executions":[]}]}
   */
  deliverySettings?: GetDataStorageResponseBodyDataDeliverySettings;
  /**
   * @remarks
   * The read fault code for optional multi-account delivery settings. If the read failed, DELIVERY_SETTINGS_UNAVAILABLE is returned. If the read is successful, this field is empty or not returned and does not affect other storage fields.
   * 
   * @example
   * DELIVERY_SETTINGS_UNAVAILABLE
   */
  deliverySettingsError?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project that stores user logs.
   * 
   * @example
   * aliyun-cloudsiem-data-171835723111****-cn-shanghai
   */
  logProject?: string;
  /**
   * @remarks
   * The status of the log project.
   * 
   * @example
   * ACTIVE
   */
  logProjectState?: string;
  /**
   * @remarks
   * Indicates whether the status of the log project can be changed.
   * 
   * @example
   * true
   */
  logProjectStateChangeAllowed?: boolean;
  /**
   * @remarks
   * Indicates whether the log service is disabled.
   * 
   * @example
   * false
   */
  logServiceDisabled?: boolean;
  /**
   * @remarks
   * The Logstore details for normalized data.
   * 
   * @example
   * [{"LogStoreName":"host-activity","LogStoreTtl":180,"UsedCapacity":10.3}]
   */
  normalizationLogStores?: GetDataStorageResponseBodyDataNormalizationLogStores[];
  /**
   * @remarks
   * The details of normalized datasets.
   * 
   * @example
   * [{"CategoryName":"Endpoint security","ActivityName":"Host activity","LogViewName":"host_activity","LogStoreName":"host-activity","DetectionRuleReferenceCount":1,"DetectionRuleReferenceProductIds":["sas"],"LogSearchConditions":"[{\\"SCHEMA\\":\\"host-activity\\"}]","LogViewExisted":true}]
   */
  normalizationLogViews?: GetDataStorageResponseBodyDataNormalizationLogViews[];
  /**
   * @remarks
   * The list of record Logstores.
   * 
   * @example
   * [{"LogStoreName":"alert-record","LogStoreTtl":180,"UsedCapacity":10.3}]
   */
  recordLogStores?: GetDataStorageResponseBodyDataRecordLogStores[];
  /**
   * @remarks
   * The storage details of raw logs from Security Center.
   * 
   * @example
   * [{"LogName":"Client events","LogStoreName":"aegis-log-client","LogDeliveryStatus":"enable","LogStoreTtl":180,"LogDeliveryUpdateTime":"2026-10-19T14:00:00","LogDeliveryPermission":"allow","LogDeliveryGroup":"host","LogSearchConditions":"[{\\"__topic__\\":\\"aegis-log-client\\"}]","LogCode":"aegis-log-client","LogStoreExisted":true,"UsedCapacity":10.3,"AccountDeliveries":[{"AccountId":1234567890123456,"AccountName":"1234567890123456","LogDeliveryStatus":"enable","LogDeliveryUpdateTime":"2026-10-19T14:00:00Z","IsDaAccount":true}]}]
   */
  sasLogStores?: GetDataStorageResponseBodyDataSasLogStores[];
  /**
   * @remarks
   * The list of legacy SIEM V1 Logstores.
   * 
   * @example
   * [{"LogStoreName":"cloud-siem","LogStoreTtl":180,"UsedCapacity":10.3}]
   */
  unusedLogStores?: GetDataStorageResponseBodyDataUnusedLogStores[];
  static names(): { [key: string]: string } {
    return {
      coldStorageUsedCapacity: 'ColdStorageUsedCapacity',
      dataStorageRegionId: 'DataStorageRegionId',
      dataStorageRegionPermission: 'DataStorageRegionPermission',
      dataStorageTotalCapacity: 'DataStorageTotalCapacity',
      dataStorageUsedCapacity: 'DataStorageUsedCapacity',
      dataStorageUsedCapacityDetail: 'DataStorageUsedCapacityDetail',
      deliverySettings: 'DeliverySettings',
      deliverySettingsError: 'DeliverySettingsError',
      logProject: 'LogProject',
      logProjectState: 'LogProjectState',
      logProjectStateChangeAllowed: 'LogProjectStateChangeAllowed',
      logServiceDisabled: 'LogServiceDisabled',
      normalizationLogStores: 'NormalizationLogStores',
      normalizationLogViews: 'NormalizationLogViews',
      recordLogStores: 'RecordLogStores',
      sasLogStores: 'SasLogStores',
      unusedLogStores: 'UnusedLogStores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldStorageUsedCapacity: 'number',
      dataStorageRegionId: 'string',
      dataStorageRegionPermission: 'string',
      dataStorageTotalCapacity: 'number',
      dataStorageUsedCapacity: 'number',
      dataStorageUsedCapacityDetail: 'string',
      deliverySettings: GetDataStorageResponseBodyDataDeliverySettings,
      deliverySettingsError: 'string',
      logProject: 'string',
      logProjectState: 'string',
      logProjectStateChangeAllowed: 'boolean',
      logServiceDisabled: 'boolean',
      normalizationLogStores: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataNormalizationLogStores },
      normalizationLogViews: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataNormalizationLogViews },
      recordLogStores: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataRecordLogStores },
      sasLogStores: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataSasLogStores },
      unusedLogStores: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataUnusedLogStores },
    };
  }

  validate() {
    if(this.deliverySettings && typeof (this.deliverySettings as any).validate === 'function') {
      (this.deliverySettings as any).validate();
    }
    if(Array.isArray(this.normalizationLogStores)) {
      $dara.Model.validateArray(this.normalizationLogStores);
    }
    if(Array.isArray(this.normalizationLogViews)) {
      $dara.Model.validateArray(this.normalizationLogViews);
    }
    if(Array.isArray(this.recordLogStores)) {
      $dara.Model.validateArray(this.recordLogStores);
    }
    if(Array.isArray(this.sasLogStores)) {
      $dara.Model.validateArray(this.sasLogStores);
    }
    if(Array.isArray(this.unusedLogStores)) {
      $dara.Model.validateArray(this.unusedLogStores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataStorageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed response content.
   * 
   * @example
   * {"DataStorageRegionId":"cn-shanghai","DataStorageTotalCapacity":1000,"DataStorageUsedCapacity":41.2,"LogProject":"aliyun-cloudsiem-data-1234567890123456-cn-shanghai","SasLogStores":[{"LogName":"Client events","LogStoreName":"aegis-log-client","LogDeliveryStatus":"enable","LogStoreTtl":180,"LogDeliveryUpdateTime":"2026-10-19T14:00:00","LogDeliveryPermission":"allow","LogDeliveryGroup":"host","LogSearchConditions":"[{\\"__topic__\\":\\"aegis-log-client\\"}]","LogCode":"aegis-log-client","LogStoreExisted":true,"UsedCapacity":10.3,"AccountDeliveries":[{"AccountId":1234567890123456,"AccountName":"1234567890123456","LogDeliveryStatus":"enable","LogDeliveryUpdateTime":"2026-10-19T14:00:00Z","IsDaAccount":true}]}],"NormalizationLogStores":[{"LogStoreName":"host-activity","LogStoreTtl":180,"UsedCapacity":10.3}],"UnusedLogStores":[{"LogStoreName":"cloud-siem","LogStoreTtl":180,"UsedCapacity":10.3}],"RecordLogStores":[{"LogStoreName":"alert-record","LogStoreTtl":180,"UsedCapacity":10.3}],"NormalizationLogViews":[{"CategoryName":"Endpoint security","ActivityName":"Host activity","LogViewName":"host_activity","LogStoreName":"host-activity","DetectionRuleReferenceCount":1,"DetectionRuleReferenceProductIds":["sas"],"LogSearchConditions":"[{\\"SCHEMA\\":\\"host-activity\\"}]","LogViewExisted":true}],"ColdStorageUsedCapacity":0.0,"DataStorageUsedCapacityDetail":"{\\"purchasedHotStorageCapacity\\":1000,\\"usedHotStorageCapacity\\":41.2,\\"usedColdStorageCapacity\\":0.0,\\"usedHotStorageCapacityDetail\\":{\\"cn-shanghai\\":41.2},\\"usedColdStorageCapacityDetail\\":{\\"cn-shanghai\\":0.0}}","DataStorageRegionPermission":"allow","LogServiceDisabled":false,"LogProjectStateChangeAllowed":true,"LogProjectState":"ACTIVE","DeliverySettings":{"PrerequisiteEnabled":true,"CanConfigure":true,"Enabled":true,"Initialized":true,"DaAccountId":"1234567890123456","TargetProject":"aliyun-cloudsiem-data-1234567890123456-cn-shanghai","TargetRegion":"cn-shanghai","ConfigurationVersion":1,"Accounts":[{"AccountId":"1234567890123456","AccountName":"1234567890123456","DaAccount":true,"Authorized":true}],"Types":[{"LogCode":"aegis-log-client","SelectedAccountIds":["1234567890123456"],"AutoIncludeNewAccounts":true,"Executions":[]}]}}
   */
  data?: GetDataStorageResponseBodyData;
  /**
   * @remarks
   * The request message ID.
   * 
   * @example
   * 81FB0DEA-52C1-55A0-8631-8E1B9A9D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataStorageResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

