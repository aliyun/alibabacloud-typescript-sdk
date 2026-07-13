// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
   * The storage duration of normalized data.
   * 
   * @example
   * 180
   */
  logStoreTtl?: number;
  static names(): { [key: string]: string } {
    return {
      logStoreName: 'LogStoreName',
      logStoreTtl: 'LogStoreTtl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreName: 'string',
      logStoreTtl: 'number',
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
   * The number of times the normalized dataset is referenced in the threat analysis access center.
   * 
   * @example
   * 3
   */
  detectionRuleReferenceCount?: number;
  /**
   * @remarks
   * The product IDs in the threat analysis access center.
   */
  detectionRuleReferenceProductIds?: string[];
  /**
   * @remarks
   * JSON Array ["key":"product_code", "value":"ctdr"]
   * 
   * @example
   * [{\\"SCHEMA\\":\\"AZURE_ACTIVE_DIRECTORY_AUDIT_ACTIVITY\\"}]
   */
  logSearchConditions?: string;
  /**
   * @remarks
   * The Logstore where threat analysis stores normalized logs.
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

export class GetDataStorageResponseBodyDataSasLogStores extends $dara.Model {
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
   * - host: host logs.
   * - security: security logs.
   * 
   * @example
   * host
   */
  logDeliveryGroup?: string;
  /**
   * @remarks
   * Indicates whether log delivery is allowed. Log delivery is not available if the service is not purchased. Valid values:
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
   * The time of the most recent log delivery operation.
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
   * JSON Array ["key":"product_code", "value":"ctdr"]
   * 
   * @example
   * [{\\"__topic__\\":\\"sas-net-block\\"}]
   */
  logSearchConditions?: string;
  /**
   * @remarks
   * Indicates whether the Logstore where the log resides exists. Valid values:
   * - true: The Logstore exists.
   * - false: The Logstore does not exist.
   * 
   * @example
   * true
   */
  logStoreExisted?: boolean;
  /**
   * @remarks
   * The name of the Logstore where the log resides.
   * 
   * @example
   * sas-security-log
   */
  logStoreName?: string;
  /**
   * @remarks
   * The storage duration of the Logstore where the log resides. Logs are stored for at least 30 days.
   * 
   * @example
   * 180
   */
  logStoreTtl?: number;
  static names(): { [key: string]: string } {
    return {
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
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * The cold storage capacity used by user logs.
   * 
   * @example
   * 100.0
   */
  coldStorageUsedCapacity?: number;
  /**
   * @remarks
   * The storage region of user-side logs.
   * 
   * @example
   * cn-shanghai
   */
  dataStorageRegionId?: string;
  /**
   * @remarks
   * Indicates whether the storage region can be modified. By default, the storage region cannot be modified. Contact your product manager to reset the region. The region can be reset only once. Valid values:
   * - allow: The storage region can be modified.
   * - deny: The storage region cannot be modified.
   * 
   * @example
   * deny
   */
  dataStorageRegionPermission?: string;
  /**
   * @remarks
   * The storage capacity purchased in the upfront billing scenario.
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
   * The storage usage details for log management users.
   * 
   * @example
   * {\\"purchasedHotStorageCapacity\\":1000,\\"usedHotStorageCapacity\\":4.2,\\"usedHotStorageCapacityDetail\\":{\\"ap-southeast-1\\":4.2,\\"cn-shenzhen\\":0.0,\\"cn-shanghai\\":0.0}}
   */
  dataStorageUsedCapacityDetail?: string;
  /**
   * @remarks
   * The name of the Simple Log Service (SLS) project that stores user logs.
   * 
   * @example
   * aliyun-cloudsiem-data-171835723111****-cn-shanghai
   */
  logProject?: string;
  /**
   * @remarks
   * The details of Logstores for normalized data.
   */
  normalizationLogStores?: GetDataStorageResponseBodyDataNormalizationLogStores[];
  /**
   * @remarks
   * The details of normalized datasets.
   */
  normalizationLogViews?: GetDataStorageResponseBodyDataNormalizationLogViews[];
  /**
   * @remarks
   * The details of raw log storage for Security Center.
   */
  sasLogStores?: GetDataStorageResponseBodyDataSasLogStores[];
  static names(): { [key: string]: string } {
    return {
      coldStorageUsedCapacity: 'ColdStorageUsedCapacity',
      dataStorageRegionId: 'DataStorageRegionId',
      dataStorageRegionPermission: 'DataStorageRegionPermission',
      dataStorageTotalCapacity: 'DataStorageTotalCapacity',
      dataStorageUsedCapacity: 'DataStorageUsedCapacity',
      dataStorageUsedCapacityDetail: 'DataStorageUsedCapacityDetail',
      logProject: 'LogProject',
      normalizationLogStores: 'NormalizationLogStores',
      normalizationLogViews: 'NormalizationLogViews',
      sasLogStores: 'SasLogStores',
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
      logProject: 'string',
      normalizationLogStores: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataNormalizationLogStores },
      normalizationLogViews: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataNormalizationLogViews },
      sasLogStores: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataSasLogStores },
    };
  }

  validate() {
    if(Array.isArray(this.normalizationLogStores)) {
      $dara.Model.validateArray(this.normalizationLogStores);
    }
    if(Array.isArray(this.normalizationLogViews)) {
      $dara.Model.validateArray(this.normalizationLogViews);
    }
    if(Array.isArray(this.sasLogStores)) {
      $dara.Model.validateArray(this.sasLogStores);
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
   * The returned details.
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

