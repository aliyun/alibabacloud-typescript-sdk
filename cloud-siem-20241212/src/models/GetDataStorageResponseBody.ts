// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataStorageResponseBodyDataDeliverySettingsAccounts extends $dara.Model {
  /**
   * @remarks
   * The UID of the source Alibaba Cloud account, which is a decimal string.
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
   * Specifies whether the account has the authorization required for log delivery. This parameter must be set to true when you add a selected member.
   * 
   * @example
   * true
   */
  authorized?: boolean;
  /**
   * @remarks
   * Specifies whether the account is the current management and delivery target account, which is the current account.
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
   * The UID of the source account for this delivery record, which is a decimal string.
   * 
   * @example
   * 1234567890123457
   */
  accountId?: string;
  /**
   * @remarks
   * A reserved compatibility field. The current implementation does not populate historical execution error codes, so this field is usually empty or not returned. If execution fails, read the error code returned by the corresponding write operation.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The recorded delivery status. RUNNING indicates that the status is recorded as enabled after the last successful operation. STOPPED indicates that the status is recorded as disabled. This field does not indicate real-time log arrival.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The last update time of the delivery status, which is a UNIX timestamp in milliseconds. This field is empty or not returned if the record has no update time.
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
   * Specifies whether to automatically add subsequent new and available managed members to the selection scope of this log type.
   * 
   * @example
   * true
   */
  autoIncludeNewAccounts?: boolean;
  /**
   * @remarks
   * The status list of existing source delivery records for this log type.
   * 
   * @example
   * []
   */
  executions?: GetDataStorageResponseBodyDataDeliverySettingsTypesExecutions[];
  /**
   * @remarks
   * The unique identifier of the log type, which corresponds to UpdateDataStorageDelivery.LogCode.
   * 
   * @example
   * aegis-log-client
   */
  logCode?: string;
  /**
   * @remarks
   * The array of UIDs of the selected source accounts for this log type, including the current account. The response is a JSON string array. When you write an array(simple) request, you must serialize it into comma-separated values.
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
   * The account directory of the current account and managed member accounts.
   * 
   * @example
   * [{"AccountId":"1234567890123456","AccountName":"1234567890123456","DaAccount":true,"Authorized":true}]
   */
  accounts?: GetDataStorageResponseBodyDataDeliverySettingsAccounts[];
  /**
   * @remarks
   * Specifies whether the current account meets the conditions for delivery setting operations. This is determined based on authorization, target project availability, capacity orders, and the current account identity. The PrerequisiteEnabled parameter must also be met.
   * 
   * @example
   * true
   */
  canConfigure?: boolean;
  /**
   * @remarks
   * The current version of the delivery settings. When you modify multi-account configurations or specify member delivery, pass this value back as ConfigurationVersion. You must query this value again after each modification and cannot use a fixed example value.
   * 
   * @example
   * 1
   */
  configurationVersion?: number;
  /**
   * @remarks
   * The UID of the current management and delivery target account, which is a decimal string. This is also the current account that is permanently retained in the account selection list.
   * 
   * @example
   * 1234567890123456
   */
  daAccountId?: string;
  /**
   * @remarks
   * The master switch for the saved multi-account centralized delivery. A value of true indicates that the switch is turned on. A value of false indicates that the switch is turned off.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Specifies whether the initialization of the account scope and automatic inclusion settings is completed when the feature is enabled for the first time.
   * 
   * @example
   * true
   */
  initialized?: boolean;
  /**
   * @remarks
   * Specifies whether the prerequisite of enabling multi-account security management in Security Center is met.
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
   * The reason code for being unconfigurable. Valid values: DA_UNAUTHORIZED (the management account is not authorized), TARGET_PROJECT_UNAVAILABLE (the target project is unavailable), LOG_CAPACITY_UNAVAILABLE (no valid capacity order exists), and NOT_CURRENT_ACCOUNT (the operation is not performed by the current account). This field is empty or not returned if the conditions are met.
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
   * The name of the Logstore that stores normalized data.
   * 
   * @example
   * vulnerability-activity
   */
  logStoreName?: string;
  /**
   * @remarks
   * The storage duration of the normalized data.
   * 
   * @example
   * 180
   */
  logStoreTtl?: number;
  /**
   * @remarks
   * The amount of hot storage used.
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

export class GetDataStorageResponseBodyDataNormalizationLogViews extends $dara.Model {
  /**
   * @remarks
   * The log type of the normalized logs.
   * 
   * @example
   * API security risk log
   */
  activityName?: string;
  /**
   * @remarks
   * The category of the normalized logs.
   * 
   * @example
   * Security Category
   */
  categoryName?: string;
  /**
   * @remarks
   * The number of times this normalized dataset is referenced in Threat Analysis and Response.
   * 
   * @example
   * 3
   */
  detectionRuleReferenceCount?: number;
  /**
   * @remarks
   * The list of products that reference this normalized dataset in Threat Analysis and Response.
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
   * The Logstore where Threat Analysis and Response stores normalized logs.
   * 
   * @example
   * risk-activity
   */
  logStoreName?: string;
  /**
   * @remarks
   * Specifies whether the normalized dataset exists. Valid values:
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
   * The UID of the source cloud account. This field is an int64 number.
   * 
   * @example
   * 1234567890123456
   */
  accountId?: number;
  /**
   * @remarks
   * The display name of the source account. If the name is not obtained, the account UID string is used.
   * 
   * @example
   * 1234567890123456
   */
  accountName?: string;
  /**
   * @remarks
   * Indicates whether the account is the current management or target account (the current account). A value of true indicates the current account. A value of false indicates a member source account.
   * 
   * @example
   * true
   */
  isDaAccount?: boolean;
  /**
   * @remarks
   * The recorded delivery status of the source account. Valid values:
   * - enable: Enabled.
   * - disable: Disabled.
   * 
   * @example
   * enable
   */
  logDeliveryStatus?: string;
  /**
   * @remarks
   * The last update time of the delivery status for the source account. If no record is generated, this field is empty or not returned.
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
   * The delivery records of this log type expanded by source account, including the current account and member accounts with existing records.
   * 
   * @example
   * [{"AccountId":1234567890123456,"AccountName":"1234567890123456","LogDeliveryStatus":"enable","LogDeliveryUpdateTime":"2026-10-19T14:00:00Z","IsDaAccount":true}]
   */
  accountDeliveries?: GetDataStorageResponseBodyDataSasLogStoresAccountDeliveries[];
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
   * Specifies whether the log delivery switch can be operated. Log delivery is unavailable if the service is not purchased. Valid values:
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
   * - enable: Log delivery is enabled.
   * - disable: Log delivery is disabled.
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
   * The default query conditions for the log. When multiple logs are stored in a single Logstore, you must use query conditions to perform a log query for a specific log.
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
   * The amount of hot storage used.
   * 
   * @example
   * 10.333
   */
  usedCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      accountDeliveries: 'AccountDeliveries',
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
   * The amount of hot storage used.
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
   * The storage region of user logs.
   * 
   * @example
   * cn-shanghai
   */
  dataStorageRegionId?: string;
  /**
   * @remarks
   * Specifies whether the storage region can be modified. By default, the region cannot be modified. You can contact the product manager to reset the region, and the region can be reset only once. Valid values:
   * - allow: The region can be modified.
   * - deny: The region cannot be modified.
   * 
   * @example
   * deny
   */
  dataStorageRegionPermission?: string;
  /**
   * @remarks
   * The storage capacity purchased for subscription.
   * 
   * @example
   * 100
   */
  dataStorageTotalCapacity?: number;
  /**
   * @remarks
   * The amount of storage used in user log management.
   * 
   * @example
   * 100.0
   */
  dataStorageUsedCapacity?: number;
  /**
   * @remarks
   * The storage usage details of the log management user.
   * 
   * @example
   * {\\"purchasedHotStorageCapacity\\":1000,\\"usedHotStorageCapacity\\":4.2,\\"usedHotStorageCapacityDetail\\":{\\"ap-southeast-1\\":4.2,\\"cn-shenzhen\\":0.0,\\"cn-shanghai\\":0.0}}
   */
  dataStorageUsedCapacityDetail?: string;
  /**
   * @remarks
   * The multi-account delivery settings for the current storage resources. Returned when the query is successful. If the read operation fails, see DeliverySettingsError.
   * 
   * @example
   * {"PrerequisiteEnabled":true,"CanConfigure":true,"Enabled":true,"Initialized":true,"DaAccountId":"1234567890123456","TargetProject":"aliyun-cloudsiem-data-1234567890123456-cn-shanghai","TargetRegion":"cn-shanghai","ConfigurationVersion":1,"Accounts":[{"AccountId":"1234567890123456","AccountName":"1234567890123456","DaAccount":true,"Authorized":true}],"Types":[{"LogCode":"aegis-log-client","SelectedAccountIds":["1234567890123456"],"AutoIncludeNewAccounts":true,"Executions":[]}]}
   */
  deliverySettings?: GetDataStorageResponseBodyDataDeliverySettings;
  /**
   * @remarks
   * The read error code for the optional multi-account delivery settings. If the read operation fails, DELIVERY_SETTINGS_UNAVAILABLE is returned. If the read operation is successful, this field is empty or not returned, and does not affect other storage fields.
   * 
   * @example
   * DELIVERY_SETTINGS_UNAVAILABLE
   */
  deliverySettingsError?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project where user logs are stored.
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
   * Specifies whether the status of the log project can be changed.
   * 
   * @example
   * true
   */
  logProjectStateChangeAllowed?: boolean;
  /**
   * @remarks
   * Specifies whether Simple Log Service is disabled.
   * 
   * @example
   * false
   */
  logServiceDisabled?: boolean;
  /**
   * @remarks
   * The details of the Logstores for normalized data.
   * 
   * @example
   * [{"LogStoreName":"host-activity","LogStoreTtl":180,"UsedCapacity":10.3}]
   */
  normalizationLogStores?: GetDataStorageResponseBodyDataNormalizationLogStores[];
  /**
   * @remarks
   * The details of the normalized datasets.
   * 
   * @example
   * [{"CategoryName":"Endpoint security","ActivityName":"Host activity","LogViewName":"host_activity","LogStoreName":"host-activity","DetectionRuleReferenceCount":1,"DetectionRuleReferenceProductIds":["sas"],"LogSearchConditions":"[{\\"SCHEMA\\":\\"host-activity\\"}]","LogViewExisted":true}]
   */
  normalizationLogViews?: GetDataStorageResponseBodyDataNormalizationLogViews[];
  /**
   * @remarks
   * The list of Record Logstores.
   * 
   * @example
   * [{"LogStoreName":"alert-record","LogStoreTtl":180,"UsedCapacity":10.3}]
   */
  recordLogStores?: GetDataStorageResponseBodyDataRecordLogStores[];
  /**
   * @remarks
   * The storage details of raw logs in Security Center.
   * 
   * @example
   * [{"LogName":"Client events","LogStoreName":"aegis-log-client","LogDeliveryStatus":"enable","LogStoreTtl":180,"LogDeliveryUpdateTime":"2026-10-19T14:00:00","LogDeliveryPermission":"allow","LogDeliveryGroup":"host","LogSearchConditions":"[{\\"__topic__\\":\\"aegis-log-client\\"}]","LogCode":"aegis-log-client","LogStoreExisted":true,"UsedCapacity":10.3,"AccountDeliveries":[{"AccountId":1234567890123456,"AccountName":"1234567890123456","LogDeliveryStatus":"enable","LogDeliveryUpdateTime":"2026-10-19T14:00:00Z","IsDaAccount":true}]}]
   */
  sasLogStores?: GetDataStorageResponseBodyDataSasLogStores[];
  /**
   * @remarks
   * The list of legacy Logstores in SIEM V1.
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
   * The detailed information returned.
   * 
   * @example
   * {"DataStorageRegionId":"cn-shanghai","DataStorageTotalCapacity":1000,"DataStorageUsedCapacity":41.2,"LogProject":"aliyun-cloudsiem-data-1234567890123456-cn-shanghai","SasLogStores":[{"LogName":"Client events","LogStoreName":"aegis-log-client","LogDeliveryStatus":"enable","LogStoreTtl":180,"LogDeliveryUpdateTime":"2026-10-19T14:00:00","LogDeliveryPermission":"allow","LogDeliveryGroup":"host","LogSearchConditions":"[{\\"__topic__\\":\\"aegis-log-client\\"}]","LogCode":"aegis-log-client","LogStoreExisted":true,"UsedCapacity":10.3,"AccountDeliveries":[{"AccountId":1234567890123456,"AccountName":"1234567890123456","LogDeliveryStatus":"enable","LogDeliveryUpdateTime":"2026-10-19T14:00:00Z","IsDaAccount":true}]}],"NormalizationLogStores":[{"LogStoreName":"host-activity","LogStoreTtl":180,"UsedCapacity":10.3}],"UnusedLogStores":[{"LogStoreName":"cloud-siem","LogStoreTtl":180,"UsedCapacity":10.3}],"RecordLogStores":[{"LogStoreName":"alert-record","LogStoreTtl":180,"UsedCapacity":10.3}],"NormalizationLogViews":[{"CategoryName":"Endpoint security","ActivityName":"Host activity","LogViewName":"host_activity","LogStoreName":"host-activity","DetectionRuleReferenceCount":1,"DetectionRuleReferenceProductIds":["sas"],"LogSearchConditions":"[{\\"SCHEMA\\":\\"host-activity\\"}]","LogViewExisted":true}],"ColdStorageUsedCapacity":0.0,"DataStorageUsedCapacityDetail":"{\\"purchasedHotStorageCapacity\\":1000,\\"usedHotStorageCapacity\\":41.2,\\"usedColdStorageCapacity\\":0.0,\\"usedHotStorageCapacityDetail\\":{\\"cn-shanghai\\":41.2},\\"usedColdStorageCapacityDetail\\":{\\"cn-shanghai\\":0.0}}","DataStorageRegionPermission":"allow","LogServiceDisabled":false,"LogProjectStateChangeAllowed":true,"LogProjectState":"ACTIVE","DeliverySettings":{"PrerequisiteEnabled":true,"CanConfigure":true,"Enabled":true,"Initialized":true,"DaAccountId":"1234567890123456","TargetProject":"aliyun-cloudsiem-data-1234567890123456-cn-shanghai","TargetRegion":"cn-shanghai","ConfigurationVersion":1,"Accounts":[{"AccountId":"1234567890123456","AccountName":"1234567890123456","DaAccount":true,"Authorized":true}],"Types":[{"LogCode":"aegis-log-client","SelectedAccountIds":["1234567890123456"],"AutoIncludeNewAccounts":true,"Executions":[]}]}}
   */
  data?: GetDataStorageResponseBodyData;
  /**
   * @remarks
   * The request ID.
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

