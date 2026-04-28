// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataStorageResponseBodyDataNormalizationLogStores extends $dara.Model {
  /**
   * @example
   * vulnerability-activity
   */
  logStoreName?: string;
  /**
   * @example
   * 180
   */
  logStoreTtl?: number;
  /**
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
   * @example
   * API security risk log
   */
  activityName?: string;
  /**
   * @example
   * Security Category
   */
  categoryName?: string;
  /**
   * @example
   * 3
   */
  detectionRuleReferenceCount?: number;
  detectionRuleReferenceProductIds?: string[];
  /**
   * @example
   * [{\\"SCHEMA\\":\\"AZURE_ACTIVE_DIRECTORY_AUDIT_ACTIVITY\\"}]
   */
  logSearchConditions?: string;
  /**
   * @example
   * risk-activity
   */
  logStoreName?: string;
  /**
   * @example
   * true
   */
  logViewExisted?: boolean;
  /**
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
   * @example
   * sas-net-block
   */
  logCode?: string;
  /**
   * @example
   * host
   */
  logDeliveryGroup?: string;
  /**
   * @example
   * deny
   */
  logDeliveryPermission?: string;
  /**
   * @example
   * enable
   */
  logDeliveryStatus?: string;
  /**
   * @example
   * 2025-07-16T15:10:29
   */
  logDeliveryUpdateTime?: string;
  /**
   * @example
   * Process Snapshot
   */
  logName?: string;
  /**
   * @example
   * [{\\"__topic__\\":\\"sas-net-block\\"}]
   */
  logSearchConditions?: string;
  /**
   * @example
   * true
   */
  logStoreExisted?: boolean;
  /**
   * @example
   * sas-security-log
   */
  logStoreName?: string;
  /**
   * @example
   * 180
   */
  logStoreTtl?: number;
  /**
   * @example
   * 10.333
   */
  usedCapacity?: number;
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
      usedCapacity: 'UsedCapacity',
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

export class GetDataStorageResponseBodyDataUnusedLogStores extends $dara.Model {
  /**
   * @example
   * cloud-siem
   */
  logStoreName?: string;
  /**
   * @example
   * 180
   */
  logStoreTtl?: number;
  /**
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
   * @example
   * 100.0
   */
  coldStorageUsedCapacity?: number;
  /**
   * @example
   * cn-shanghai
   */
  dataStorageRegionId?: string;
  /**
   * @example
   * deny
   */
  dataStorageRegionPermission?: string;
  /**
   * @example
   * 100
   */
  dataStorageTotalCapacity?: number;
  /**
   * @example
   * 100.0
   */
  dataStorageUsedCapacity?: number;
  /**
   * @example
   * {\\"purchasedHotStorageCapacity\\":1000,\\"usedHotStorageCapacity\\":4.2,\\"usedHotStorageCapacityDetail\\":{\\"ap-southeast-1\\":4.2,\\"cn-shenzhen\\":0.0,\\"cn-shanghai\\":0.0}}
   */
  dataStorageUsedCapacityDetail?: string;
  /**
   * @example
   * aliyun-cloudsiem-data-171835723111****-cn-shanghai
   */
  logProject?: string;
  normalizationLogStores?: GetDataStorageResponseBodyDataNormalizationLogStores[];
  normalizationLogViews?: GetDataStorageResponseBodyDataNormalizationLogViews[];
  sasLogStores?: GetDataStorageResponseBodyDataSasLogStores[];
  unusedLogStores?: GetDataStorageResponseBodyDataUnusedLogStores[];
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
      logProject: 'string',
      normalizationLogStores: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataNormalizationLogStores },
      normalizationLogViews: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataNormalizationLogViews },
      sasLogStores: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataSasLogStores },
      unusedLogStores: { 'type': 'array', 'itemType': GetDataStorageResponseBodyDataUnusedLogStores },
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
  data?: GetDataStorageResponseBodyData;
  /**
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

