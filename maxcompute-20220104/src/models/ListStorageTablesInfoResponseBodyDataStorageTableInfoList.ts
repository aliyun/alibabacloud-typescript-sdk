// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStorageTablesInfoResponseBodyDataStorageTableInfoList extends $dara.Model {
  /**
   * @remarks
   * The date on which the statistics are collected. This value is not returned.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * Indicates whether the table is a partitioned table.
   * 
   * @example
   * false
   */
  isPartitioned?: boolean;
  /**
   * @remarks
   * The time when the table was last accessed. This value is returned when the table is a non-partitioned table.
   * 
   * >  The data collection method is upgraded from July 2023. If the data is not accessed after the upgrade or is accessed by using ALGO jobs or the direct read method of Hologres, the last access time cannot be collected.
   * 
   * @example
   * 1694589365
   */
  lastAccessTime?: number;
  /**
   * @remarks
   * The storage usage at the long-term storage tier.
   * 
   * @example
   * 0
   */
  longTermStorage?: number;
  /**
   * @remarks
   * The number of long-term storage files.
   * 
   * @example
   * 0
   */
  longTermStorageFileCount?: number;
  /**
   * @remarks
   * The unit of the storage usage at the long-term storage tier.
   * 
   * @example
   * B
   */
  longTermStorageUnit?: string;
  /**
   * @remarks
   * The storage usage at the low-frequency tier.
   * 
   * @example
   * 0
   */
  lowFreqStorage?: number;
  /**
   * @remarks
   * The number of low-frequency storage files.
   * 
   * @example
   * 0
   */
  lowFreqStorageFileCount?: number;
  /**
   * @remarks
   * The unit of the storage usage at the low-frequency storage tier.
   * 
   * @example
   * B
   */
  lowFreqStorageUnit?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * odps_project
   */
  projectName?: string;
  /**
   * @remarks
   * The change rate of the total storage usage compared with that of the recent {$recentDays} days.
   * 
   * @example
   * 0
   */
  rate?: number;
  /**
   * @remarks
   * The schema name.
   * 
   * @example
   * schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The storage usage at the standard storage tier.
   * 
   * @example
   * 600
   */
  standardStorage?: number;
  /**
   * @remarks
   * The number of standard storage files.
   * 
   * @example
   * 2
   */
  standardStorageFileCount?: number;
  /**
   * @remarks
   * The unit of the storage usage at the standard storage tier.
   * 
   * @example
   * KB
   */
  standardStorageUnit?: string;
  /**
   * @remarks
   * The table storage type.
   * 
   * *   standard
   * *   lowfrequency
   * *   longterm
   * *   unknown: This value is returned when the table is a partitioned table. You can call the ListStoragePartitionsInfo operation to query the storage type of each partition.
   * 
   * @example
   * standard
   */
  storageType?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * bank_data
   */
  tableName?: string;
  /**
   * @remarks
   * The access frequency.
   * 
   * > 
   * 
   * *   Access behaviors include:
   * 
   * *   The table is used as the input table of an SQL task.
   * *   The table is downloaded by Tunnel.
   * *   The table is read by calling the Storage API. The partition granularity of the partitioned table is not available. Each time an access operation is performed, the access frequency is incremented by 1.
   * 
   * *   The data collection method is upgraded from July 2023. If the data is not accessed after the upgrade or is accessed by using ALGO jobs or the direct read method of Hologres, the access frequency cannot be collected.
   * 
   * @example
   * 10
   */
  totalFrequency?: number;
  /**
   * @remarks
   * The total amount of accessed data.
   * 
   * >  The amount of data that is read by all access behaviors.
   * 
   * @example
   * 1
   */
  totalInputAmount?: number;
  /**
   * @remarks
   * The unit of the total amount of accessed data.
   * 
   * @example
   * GB
   */
  totalInputAmountUnit?: string;
  /**
   * @remarks
   * The total storage usage. For a partitioned table, this parameter indicates the sum of the storage usage of all partitions. If the storage types of partitions are different, the value is the sum of the storage usage of each storage type.
   * 
   * @example
   * 600
   */
  totalStorage?: number;
  /**
   * @remarks
   * The total number of files.
   * 
   * @example
   * 2
   */
  totalStorageFileCount?: number;
  /**
   * @remarks
   * The unit of storage usage.
   * 
   * @example
   * KB
   */
  totalStorageUnit?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      isPartitioned: 'isPartitioned',
      lastAccessTime: 'lastAccessTime',
      longTermStorage: 'longTermStorage',
      longTermStorageFileCount: 'longTermStorageFileCount',
      longTermStorageUnit: 'longTermStorageUnit',
      lowFreqStorage: 'lowFreqStorage',
      lowFreqStorageFileCount: 'lowFreqStorageFileCount',
      lowFreqStorageUnit: 'lowFreqStorageUnit',
      projectName: 'projectName',
      rate: 'rate',
      schemaName: 'schemaName',
      standardStorage: 'standardStorage',
      standardStorageFileCount: 'standardStorageFileCount',
      standardStorageUnit: 'standardStorageUnit',
      storageType: 'storageType',
      tableName: 'tableName',
      totalFrequency: 'totalFrequency',
      totalInputAmount: 'totalInputAmount',
      totalInputAmountUnit: 'totalInputAmountUnit',
      totalStorage: 'totalStorage',
      totalStorageFileCount: 'totalStorageFileCount',
      totalStorageUnit: 'totalStorageUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      isPartitioned: 'boolean',
      lastAccessTime: 'number',
      longTermStorage: 'number',
      longTermStorageFileCount: 'number',
      longTermStorageUnit: 'string',
      lowFreqStorage: 'number',
      lowFreqStorageFileCount: 'number',
      lowFreqStorageUnit: 'string',
      projectName: 'string',
      rate: 'number',
      schemaName: 'string',
      standardStorage: 'number',
      standardStorageFileCount: 'number',
      standardStorageUnit: 'string',
      storageType: 'string',
      tableName: 'string',
      totalFrequency: 'number',
      totalInputAmount: 'number',
      totalInputAmountUnit: 'string',
      totalStorage: 'number',
      totalStorageFileCount: 'number',
      totalStorageUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

