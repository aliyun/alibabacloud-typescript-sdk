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
   * Indicates whether the table is a partitioned table. This operation returns the partition information. You do not need to take note of this parameter.
   * 
   * @example
   * false
   */
  isPartitioned?: boolean;
  /**
   * @remarks
   * The time when the partition data was last accessed.
   * 
   * >  The data collection method is upgraded from July 2023. If the data is not accessed after the upgrade or is accessed by using ALGO jobs or the direct read method of Hologres, the last access time cannot be collected.
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
   * The change rate of the total storage usage compared with that of the recent {$recentDays} days. No value is returned.
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
   * The storage type.
   * 
   * *   standard
   * *   lowfrequency
   * *   longterm
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
   * The date on which the statistics are collected.
   * 
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @remarks
   * The page number.
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
   * The partition storage information.
   */
  storagePartitionInfoList?: ListStoragePartitionsInfoResponseBodyDataStoragePartitionInfoList[];
  /**
   * @remarks
   * The total number of returned entries.
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
   * The data returned.
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
   * The HTTP status code.
   * 
   * *   1xx: informational response. The request is received and is being processed.
   * *   2xx: success. The request is successfully received, understood, and accepted by the server.
   * *   3xx: redirection. The request is redirected, and further actions are required to complete the request.
   * *   4xx: client error. The request contains invalid request parameters and syntaxes, or specific request conditions cannot be met.
   * *   5xx: server error. The server cannot meet requirements due to other reasons.
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

