// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormFsUsedDetailResponseBodyLStorageUsageList extends $dara.Model {
  /**
   * @remarks
   * The total storage capacity for the storage medium type. Unit: bytes.
   * 
   * @example
   * 85899345920
   */
  capacity?: string;
  /**
   * @remarks
   * The storage type of the cluster. Valid values:
   * - StandardCloudStorage: standard cloud storage.
   * - PerformanceCloudStorage: performance cloud storage.
   * - CapacityCloudStorage: capacity cloud storage.
   * - LocalSsdStorage: local SSD.
   * - LocalHddStorage: local HDD.
   * - LocalEbsStorage: local cloud storage.
   * 
   * @example
   * StandardCloudStorage
   */
  diskType?: string;
  /**
   * @remarks
   * The storage usage for the storage medium type. Unit: bytes.
   * 
   * @example
   * 33269
   */
  used?: string;
  /**
   * @remarks
   * The column store engine storage usage for the storage medium type. Unit: bytes.
   * 
   * @example
   * 688935
   */
  usedLindormColumn3?: string;
  /**
   * @remarks
   * The message engine storage usage for the storage medium type. Unit: bytes.
   * 
   * @example
   * 0
   */
  usedLindormMessage3?: string;
  /**
   * @remarks
   * The search index DPI engine storage usage for the storage medium type. Unit: bytes.
   * 
   * @example
   * 33269
   */
  usedLindormSearch?: string;
  /**
   * @remarks
   * The compute engine storage usage for the storage medium type. Unit: bytes.
   * 
   * @example
   * 33269
   */
  usedLindormSpark?: string;
  /**
   * @remarks
   * The LindormTable engine storage usage for the storage medium type. Unit: bytes.
   * 
   * @example
   * 33269
   */
  usedLindormTable?: string;
  /**
   * @remarks
   * The LindormTSDB engine storage usage for the storage medium type. Unit: bytes.
   * 
   * @example
   * 33269
   */
  usedLindormTsdb?: string;
  /**
   * @remarks
   * The vector engine storage usage for the storage medium type. Unit: bytes.
   * 
   * @example
   * 595054865855
   */
  usedLindormVector3?: string;
  /**
   * @remarks
   * The storage usage for other purposes under the storage medium type, such as logs and the recycle bin. Unit: bytes.
   * 
   * @example
   * 33269
   */
  usedOther?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      diskType: 'DiskType',
      used: 'Used',
      usedLindormColumn3: 'UsedLindormColumn3',
      usedLindormMessage3: 'UsedLindormMessage3',
      usedLindormSearch: 'UsedLindormSearch',
      usedLindormSpark: 'UsedLindormSpark',
      usedLindormTable: 'UsedLindormTable',
      usedLindormTsdb: 'UsedLindormTsdb',
      usedLindormVector3: 'UsedLindormVector3',
      usedOther: 'UsedOther',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      diskType: 'string',
      used: 'string',
      usedLindormColumn3: 'string',
      usedLindormMessage3: 'string',
      usedLindormSearch: 'string',
      usedLindormSpark: 'string',
      usedLindormTable: 'string',
      usedLindormTsdb: 'string',
      usedLindormVector3: 'string',
      usedOther: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLindormFsUsedDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access was denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The total storage capacity of the cluster. Unit: bytes.
   * 
   * @example
   * 85899345920
   */
  fsCapacity?: string;
  /**
   * @remarks
   * The cold storage capacity of the cluster. Unit: bytes.
   * 
   * @example
   * 85899345920
   */
  fsCapacityCold?: string;
  /**
   * @remarks
   * The hot storage capacity of the cluster. Unit: bytes.
   * 
   * @example
   * 85899345920
   */
  fsCapacityHot?: string;
  /**
   * @remarks
   * The cold storage usage of the cluster. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedCold?: string;
  /**
   * @remarks
   * The cold storage usage of table data in the search index DPI engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedColdOnLindormSearch?: string;
  /**
   * @remarks
   * The cold storage usage of table data in the LindormTSDB engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedColdOnLindormTSDB?: string;
  /**
   * @remarks
   * The cold storage usage of table data in the LindormTable engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedColdOnLindormTable?: string;
  /**
   * @remarks
   * The hot storage usage of the cluster. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedHot?: string;
  /**
   * @remarks
   * The hot storage usage of table data in the search index DPI engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedHotOnLindormSearch?: string;
  /**
   * @remarks
   * The hot storage usage of table data in the LindormTSDB engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedHotOnLindormTSDB?: string;
  /**
   * @remarks
   * The hot storage usage of table data in the LindormTable engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedHotOnLindormTable?: string;
  /**
   * @remarks
   * The storage usage of the search index DPI engine in the cluster. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormSearch?: string;
  /**
   * @remarks
   * The storage usage of the LindormTSDB engine in the cluster. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormTSDB?: string;
  /**
   * @remarks
   * The storage usage of the LindormTable engine in the cluster. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormTable?: string;
  /**
   * @remarks
   * The storage usage of table data in the LindormTable engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormTableData?: string;
  /**
   * @remarks
   * The storage usage of write-ahead log (wal) data in the LindormTable engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormTableWAL?: string;
  /**
   * @remarks
   * For clusters with an underlying storage DPI engine version of 4.1.9 or later, this field is the authoritative source for storage details, categorized by storage medium categorization.
   */
  LStorageUsageList?: GetLindormFsUsedDetailResponseBodyLStorageUsageList[];
  /**
   * @remarks
   * The request ID. It is a unique identifier generated by Alibaba Cloud for the request and can be used to troubleshoot and locate issues.
   * 
   * @example
   * 4F23D50C-400C-592C-9486-9D1E10179065
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the return value is valid. true indicates that the value is valid. false indicates that an exception occurred. Provide the request ID to troubleshoot the issue.
   * 
   * @example
   * true
   */
  valid?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      fsCapacity: 'FsCapacity',
      fsCapacityCold: 'FsCapacityCold',
      fsCapacityHot: 'FsCapacityHot',
      fsUsedCold: 'FsUsedCold',
      fsUsedColdOnLindormSearch: 'FsUsedColdOnLindormSearch',
      fsUsedColdOnLindormTSDB: 'FsUsedColdOnLindormTSDB',
      fsUsedColdOnLindormTable: 'FsUsedColdOnLindormTable',
      fsUsedHot: 'FsUsedHot',
      fsUsedHotOnLindormSearch: 'FsUsedHotOnLindormSearch',
      fsUsedHotOnLindormTSDB: 'FsUsedHotOnLindormTSDB',
      fsUsedHotOnLindormTable: 'FsUsedHotOnLindormTable',
      fsUsedOnLindormSearch: 'FsUsedOnLindormSearch',
      fsUsedOnLindormTSDB: 'FsUsedOnLindormTSDB',
      fsUsedOnLindormTable: 'FsUsedOnLindormTable',
      fsUsedOnLindormTableData: 'FsUsedOnLindormTableData',
      fsUsedOnLindormTableWAL: 'FsUsedOnLindormTableWAL',
      LStorageUsageList: 'LStorageUsageList',
      requestId: 'RequestId',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      fsCapacity: 'string',
      fsCapacityCold: 'string',
      fsCapacityHot: 'string',
      fsUsedCold: 'string',
      fsUsedColdOnLindormSearch: 'string',
      fsUsedColdOnLindormTSDB: 'string',
      fsUsedColdOnLindormTable: 'string',
      fsUsedHot: 'string',
      fsUsedHotOnLindormSearch: 'string',
      fsUsedHotOnLindormTSDB: 'string',
      fsUsedHotOnLindormTable: 'string',
      fsUsedOnLindormSearch: 'string',
      fsUsedOnLindormTSDB: 'string',
      fsUsedOnLindormTable: 'string',
      fsUsedOnLindormTableData: 'string',
      fsUsedOnLindormTableWAL: 'string',
      LStorageUsageList: { 'type': 'array', 'itemType': GetLindormFsUsedDetailResponseBodyLStorageUsageList },
      requestId: 'string',
      valid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.LStorageUsageList)) {
      $dara.Model.validateArray(this.LStorageUsageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

