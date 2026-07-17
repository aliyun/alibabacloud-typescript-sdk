// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLindormFsUsedDetailResponseBodyLStorageUsageList extends $dara.Model {
  /**
   * @remarks
   * The total storage capacity for this storage medium, in bytes.
   * 
   * @example
   * 85899345920
   */
  capacity?: string;
  /**
   * @remarks
   * The storage type of the cluster. Valid values:
   * 
   * - `StandardCloudStorage`: standard cloud storage.
   * 
   * - `PerformanceCloudStorage`: performance cloud storage.
   * 
   * - `CapacityCloudStorage`: capacity cloud storage.
   * 
   * - `LocalSsdStorage`: local SSD.
   * 
   * - `LocalHddStorage`: local HDD.
   * 
   * - `LocalEbsStorage`: local block storage.
   * 
   * @example
   * StandardCloudStorage
   */
  diskType?: string;
  /**
   * @remarks
   * The storage used on this storage medium, in bytes.
   * 
   * @example
   * 33269
   */
  used?: string;
  usedLindormColumn3?: string;
  usedLindormMessage3?: string;
  /**
   * @remarks
   * The storage used by the search engine on this storage medium, in bytes.
   * 
   * @example
   * 33269
   */
  usedLindormSearch?: string;
  /**
   * @remarks
   * The storage used by the compute engine on this storage medium, in bytes.
   * 
   * @example
   * 33269
   */
  usedLindormSpark?: string;
  /**
   * @remarks
   * The storage used by the wide-column engine on this storage medium, in bytes.
   * 
   * @example
   * 33269
   */
  usedLindormTable?: string;
  /**
   * @remarks
   * The storage used by the time series engine on this storage medium, in bytes.
   * 
   * @example
   * 33269
   */
  usedLindormTsdb?: string;
  usedLindormVector3?: string;
  /**
   * @remarks
   * The storage used by other components, such as logs and trash, on this storage medium, in bytes.
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
   * Details on why access was denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The total storage capacity of the cluster, in bytes.
   * 
   * @example
   * 85899345920
   */
  fsCapacity?: string;
  /**
   * @remarks
   * The cold storage capacity of the cluster, in bytes.
   * 
   * @example
   * 85899345920
   */
  fsCapacityCold?: string;
  /**
   * @remarks
   * The hot storage capacity of the cluster, in bytes.
   * 
   * @example
   * 85899345920
   */
  fsCapacityHot?: string;
  /**
   * @remarks
   * The cold storage used by the cluster, in bytes.
   * 
   * @example
   * 33269
   */
  fsUsedCold?: string;
  /**
   * @remarks
   * The cold storage space used by table data of the search engine, in bytes.
   * 
   * @example
   * 33269
   */
  fsUsedColdOnLindormSearch?: string;
  /**
   * @remarks
   * The cold storage space used by table data of the time series engine, in bytes.
   * 
   * @example
   * 33269
   */
  fsUsedColdOnLindormTSDB?: string;
  /**
   * @remarks
   * The cold storage space used by table data of the wide-column engine, in bytes.
   * 
   * @example
   * 33269
   */
  fsUsedColdOnLindormTable?: string;
  /**
   * @remarks
   * The hot storage used by the cluster, in bytes.
   * 
   * @example
   * 33269
   */
  fsUsedHot?: string;
  /**
   * @remarks
   * The hot storage space used by table data of the search engine, in bytes.
   * 
   * @example
   * 33269
   */
  fsUsedHotOnLindormSearch?: string;
  /**
   * @remarks
   * The hot storage space used by table data of the time series engine, in bytes.
   * 
   * @example
   * 33269
   */
  fsUsedHotOnLindormTSDB?: string;
  /**
   * @remarks
   * The hot storage space used by table data of the wide-column engine, in bytes.
   * 
   * @example
   * 33269
   */
  fsUsedHotOnLindormTable?: string;
  /**
   * @remarks
   * The storage space used by the search engine in the cluster, in bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormSearch?: string;
  /**
   * @remarks
   * The storage space used by the time series engine in the cluster, in bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormTSDB?: string;
  /**
   * @remarks
   * The storage space used by the wide-column engine in the cluster, in bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormTable?: string;
  /**
   * @remarks
   * The storage space used by table data of the wide-column engine, in bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormTableData?: string;
  /**
   * @remarks
   * The storage space used by log data of the wide-column engine, in bytes.
   * 
   * @example
   * 33269
   */
  fsUsedOnLindormTableWAL?: string;
  /**
   * @remarks
   * For clusters that run storage engine v4.1.9 or later, this parameter provides authoritative storage details categorized by storage medium.
   */
  LStorageUsageList?: GetLindormFsUsedDetailResponseBodyLStorageUsageList[];
  /**
   * @remarks
   * The ID of the request. This unique identifier is generated by Alibaba Cloud for each request and is used for troubleshooting.
   * 
   * @example
   * 4F23D50C-400C-592C-9486-9D1E10179065
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the response is valid. A value of `false` indicates that an error occurred, and you must provide the request ID for troubleshooting.
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

