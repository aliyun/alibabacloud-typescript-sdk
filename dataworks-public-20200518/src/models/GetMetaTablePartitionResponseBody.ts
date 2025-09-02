// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTablePartitionResponseBodyDataDataEntityList extends $dara.Model {
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The time when the partition was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1590032868000
   */
  createTime?: number;
  /**
   * @remarks
   * The size of the partition. Unit: bytes.
   * 
   * @example
   * 19
   */
  dataSize?: number;
  /**
   * @remarks
   * The time when the partition was modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1590032868000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The GUID of the partition.
   * 
   * @example
   * odps.engine_name.table_name.pt=20170614
   */
  partitionGuid?: string;
  /**
   * @remarks
   * The location of the Hive partition.
   * 
   * @example
   * abc
   */
  partitionLocation?: string;
  /**
   * @remarks
   * The name of the partition.
   * 
   * @example
   * pt=20170614
   */
  partitionName?: string;
  /**
   * @remarks
   * The path of the partition.
   * 
   * @example
   * abc
   */
  partitionPath?: string;
  /**
   * @remarks
   * The type of the partition.
   * 
   * @example
   * abc
   */
  partitionType?: string;
  /**
   * @remarks
   * The number of entries in the partition.
   * 
   * @example
   * 233
   */
  recordCount?: number;
  /**
   * @remarks
   * The unique identifier of the metatable.
   * 
   * @example
   * odps.engine_name.table_name
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      dataSize: 'DataSize',
      modifiedTime: 'ModifiedTime',
      partitionGuid: 'PartitionGuid',
      partitionLocation: 'PartitionLocation',
      partitionName: 'PartitionName',
      partitionPath: 'PartitionPath',
      partitionType: 'PartitionType',
      recordCount: 'RecordCount',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      dataSize: 'number',
      modifiedTime: 'number',
      partitionGuid: 'string',
      partitionLocation: 'string',
      partitionName: 'string',
      partitionPath: 'string',
      partitionType: 'string',
      recordCount: 'number',
      tableGuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of partitions.
   */
  dataEntityList?: GetMetaTablePartitionResponseBodyDataDataEntityList[];
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
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of partitions.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTablePartitionResponseBodyDataDataEntityList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataEntityList)) {
      $dara.Model.validateArray(this.dataEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTablePartitionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: GetMetaTablePartitionResponseBodyData;
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * Invalid.Tenant.ConnectionNotExists
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The connection does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc1ec92159376
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaTablePartitionResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

