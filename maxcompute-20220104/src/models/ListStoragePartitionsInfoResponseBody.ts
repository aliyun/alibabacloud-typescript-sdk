// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStoragePartitionsInfoResponseBodyDataStoragePartitionInfoList extends $dara.Model {
  /**
   * @remarks
   * The number of files.
   * 
   * @example
   * 2
   */
  fileCount?: number;
  /**
   * @remarks
   * The storage size.
   * 
   * @example
   * 1
   */
  fileSize?: number;
  /**
   * @remarks
   * The unit of the storage size.
   * 
   * @example
   * GB
   */
  fileSizeUnit?: string;
  /**
   * @remarks
   * Indicates whether the table is partitioned. This API operation returns only partition information. You can ignore this field.
   * 
   * @example
   * false
   */
  isPartitioned?: boolean;
  /**
   * @remarks
   * The last access time of the data in the partition.
   * > The collection of this data has been gradually upgraded since July 2023. The last_access_time cannot be collected if the partition has not been accessed after the upgrade or if it is accessed through ALGO jobs or Hologres direct read.
   * 
   * @example
   * 1694589365
   */
  lastAccessTime?: number;
  /**
   * @remarks
   * The partition name.
   * 
   * @example
   * ds=20241201
   */
  partition?: string;
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
   * The year-over-year comparison of the total storage capacity over the recent {$recentDays} days. This API operation does not return this value.
   * 
   * @example
   * 1%
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
   * The storage type. Valid values:
   * - standard: Standard storage.
   * - lowfrequency: Low-frequency storage.
   * - longterm: Long-term storage.
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
   * > - Access behaviors include:
   * >> - The table is used as an input table in SQL computing tasks.
   * >> - The table is downloaded by using Tunnel.
   * >> - The table is read by calling the Read operation of StorageAPI (partition-level data for partitioned tables is currently unavailable). The access frequency increases by 1 for each additional access.
   * > - The statistics for this data have been gradually upgraded since July 2023. Accesses that did not occur after the upgrade or accesses made through ALGO jobs or Hologres direct read cannot be counted in the access frequency.
   * 
   * @example
   * 10
   */
  totalFrequency?: number;
  /**
   * @remarks
   * The total amount of accessed data.
   * > The amount of data read by all access behaviors.
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
   * The type.
   * 
   * @example
   * PARTITION
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileCount: 'fileCount',
      fileSize: 'fileSize',
      fileSizeUnit: 'fileSizeUnit',
      isPartitioned: 'isPartitioned',
      lastAccessTime: 'lastAccessTime',
      partition: 'partition',
      projectName: 'projectName',
      rate: 'rate',
      schemaName: 'schemaName',
      storageType: 'storageType',
      tableName: 'tableName',
      totalFrequency: 'totalFrequency',
      totalInputAmount: 'totalInputAmount',
      totalInputAmountUnit: 'totalInputAmountUnit',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileCount: 'number',
      fileSize: 'number',
      fileSizeUnit: 'string',
      isPartitioned: 'boolean',
      lastAccessTime: 'number',
      partition: 'string',
      projectName: 'string',
      rate: 'number',
      schemaName: 'string',
      storageType: 'string',
      tableName: 'string',
      totalFrequency: 'number',
      totalInputAmount: 'number',
      totalInputAmountUnit: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStoragePartitionsInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The statistical date. The format is YYYYMMDD.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of partition storage information.
   */
  storagePartitionInfoList?: ListStoragePartitionsInfoResponseBodyDataStoragePartitionInfoList[];
  /**
   * @remarks
   * The total number of returned results.
   * 
   * @example
   * 57
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      storagePartitionInfoList: 'storagePartitionInfoList',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      storagePartitionInfoList: { 'type': 'array', 'itemType': ListStoragePartitionsInfoResponseBodyDataStoragePartitionInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.storagePartitionInfoList)) {
      $dara.Model.validateArray(this.storagePartitionInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStoragePartitionsInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: ListStoragePartitionsInfoResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * OBJECT_NOT_EXIST
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * This object does not exist.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * - 1xx: Informational response. The request was received and is being processed.
   * - 2xx: Success. The request was successfully received, understood, and accepted by the server.
   * - 3xx: Redirection. The request was redirected, and further action is required to complete it.
   * - 4xx: Client error. The request contains bad syntax, invalid parameters, or cannot be fulfilled.
   * - 5xx: Server error. The server failed to fulfill the request due to other reasons.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0be3e0bd16661643917136451ebf55
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListStoragePartitionsInfoResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
      httpCode: 'number',
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

