// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormFsUsedDetailResponseBodyLStorageUsageList extends $dara.Model {
  /**
   * @remarks
   * The total storage capacity. Unit: bytes.
   * 
   * @example
   * 85899345920
   */
  capacity?: string;
  /**
   * @remarks
   * The storage type of the cluster. Valid values:
   * 
   * *   StandardCloudStorage
   * *   PerformanceCloudStorage
   * *   CapacityCloudStorage
   * *   LocalSsdStorage
   * *   LocalHddStorage
   * *   LocalEbsStorage
   * 
   * @example
   * StandardCloudStorage
   */
  diskType?: string;
  /**
   * @remarks
   * The storage usage. Unit: bytes.
   * 
   * @example
   * 33269
   */
  used?: string;
  usedLindormColumn3?: string;
  usedLindormMessage3?: string;
  /**
   * @remarks
   * The storage usage of the search engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  usedLindormSearch?: string;
  /**
   * @remarks
   * The storage usage of the compute engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  usedLindormSpark?: string;
  /**
   * @remarks
   * The storage usage of the wide table engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  usedLindormTable?: string;
  /**
   * @remarks
   * The storage usage of the time series engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  usedLindormTsdb?: string;
  usedLindormVector3?: string;
  /**
   * @remarks
   * The storage usage of other resources, such as logs and recycle bins. Unit: bytes.
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
   * The detailed reason why the access was denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The total storage space of the cluster. Unit: bytes.
   * 
   * @example
   * 85899345920
   */
  fsCapacity?: string;
  /**
   * @remarks
   * The cold storage space of the cluster. Unit: bytes.
   * 
   * @example
   * 85899345920
   */
  fsCapacityCold?: string;
  /**
   * @remarks
   * The hot storage space of the cluster. Unit: bytes.
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
   * The cold storage usage of the table data of the search engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedColdOnLindormSearch?: string;
  /**
   * @remarks
   * The cold storage usage of the table data of the time series engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedColdOnLindormTSDB?: string;
  /**
   * @remarks
   * The cold storage usage of the table data of the wide table engine. Unit: bytes.
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
   * The hot storage usage of the table data of the search engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedHotOnLindormSearch?: string;
  /**
   * @remarks
   * The hot storage usage of the table data of the time series engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedHotOnLindormTSDB?: string;
  /**
   * @remarks
   * The hot storage usage of the table data of the wide table engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedHotOnLindormTable?: string;
  /**
   * @remarks
   * The storage usage of the search engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormSearch?: string;
  /**
   * @remarks
   * The storage usage of the time series engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormTSDB?: string;
  /**
   * @remarks
   * The space usage of the wide table engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormTable?: string;
  /**
   * @remarks
   * The storage usage of the table data of the wide table engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormTableData?: string;
  /**
   * @remarks
   * The storage usage of the log data of the wide table engine. Unit: bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormTableWAL?: string;
  /**
   * @remarks
   * If the version of the underlying storage engine is 4.1.9 or later, the storage usage values returned for the LStorageUsageList parameter prevail. Storage details are returned based on the storage type.
   */
  LStorageUsageList?: GetLindormFsUsedDetailResponseBodyLStorageUsageList[];
  /**
   * @remarks
   * The request ID. Each request has a unique ID. You can use the request ID to locate and troubleshoot issues.
   * 
   * @example
   * 4F23D50C-400C-592C-9486-9D1E10179065
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the return value is valid. Valid values: true and false. If a value of false is returned, you must provide the request ID for troubleshooting.
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

