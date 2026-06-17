// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColdStorageInstanceResponseBodyOssClusterInfoList extends $dara.Model {
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2023-05-10T17:01:16Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The ID of the cold storage instance.
   * 
   * @example
   * pc-*****************
   */
  ossClusterId?: string;
  /**
   * @remarks
   * The ID of the region where the task is located.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The size of the cold storage table. Unit: GB.
   * 
   * @example
   * 50
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      ossClusterId: 'OssClusterId',
      region: 'Region',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      ossClusterId: 'string',
      region: 'string',
      size: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColdStorageInstanceResponseBodyTablesChildObjects extends $dara.Model {
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * img/1728554006462.png
   */
  objectName?: string;
  /**
   * @remarks
   * The object type.
   * 
   * @example
   * File
   */
  objectType?: string;
  /**
   * @remarks
   * The disk size. Unit: GiB.
   * 
   * @example
   * 10
   */
  size?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * - **Scheduled**: The task is waiting to be executed.
   * 
   * - **Running**: The task is in progress.
   * 
   * - **Succeed**: The task is successful.
   * 
   * - **Cancelling**: The task is being stopped.
   * 
   * - **Canceled**: The task is stopped.
   * 
   * - **Waiting**: The task is waiting for a preset time.
   * 
   * To query multiple statuses, separate them with commas (,). If you do not specify this parameter, all statuses are queried.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectName: 'string',
      objectType: 'string',
      size: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColdStorageInstanceResponseBodyTables extends $dara.Model {
  /**
   * @remarks
   * The list of child objects.
   */
  childObjects?: DescribeColdStorageInstanceResponseBodyTablesChildObjects[];
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * test_db
   */
  DB?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * test_db
   */
  DBName?: string;
  /**
   * @remarks
   * The name of the large object (LOB) field.
   * 
   * @example
   * user
   */
  fieldName?: string;
  /**
   * @remarks
   * The ID of the OSS-based cluster.
   * 
   * @example
   * pc-*****************
   */
  ossClusterId?: string;
  /**
   * @remarks
   * The partition of the cold storage instance.
   * 
   * @example
   * 202509
   */
  partion?: string;
  /**
   * @remarks
   * The disk size of the cold storage instance. Unit: GiB.
   * 
   * @example
   * 30
   */
  size?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * user
   */
  table?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      childObjects: 'ChildObjects',
      DB: 'DB',
      DBName: 'DBName',
      fieldName: 'FieldName',
      ossClusterId: 'OssClusterId',
      partion: 'Partion',
      size: 'Size',
      status: 'Status',
      table: 'Table',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childObjects: { 'type': 'array', 'itemType': DescribeColdStorageInstanceResponseBodyTablesChildObjects },
      DB: 'string',
      DBName: 'string',
      fieldName: 'string',
      ossClusterId: 'string',
      partion: 'string',
      size: 'string',
      status: 'string',
      table: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childObjects)) {
      $dara.Model.validateArray(this.childObjects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeColdStorageInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned. Default value: 10.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If this parameter is not returned, all results have been returned.
   * 
   * @example
   * c2FpXzIwMjIwNjI5X2Jhay9zYWlfc3VtbWVyX3RyZWFzdXJlX3Bvb2xfbG9nLkNTVg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The object type.
   * 
   * @example
   * TABLE
   */
  objectType?: string;
  /**
   * @remarks
   * Indicates whether the OSS bucket is enabled.
   * 
   * - **true**: enabled
   * 
   * - **false**: disabled
   * 
   * @example
   * true
   */
  ossClusterEnabled?: string;
  /**
   * @remarks
   * The list of OSS addresses for the cold storage instances.
   */
  ossClusterInfoList?: DescribeColdStorageInstanceResponseBodyOssClusterInfoList[];
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
   * The number of entries on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7A8EA8E-A140-5226-90D7-5BCB304D3DB6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the cluster supports cold storage. If the cluster does not support cold storage, the switch is not displayed on the console.
   * 
   * @example
   * true
   */
  supportOssCluster?: string;
  /**
   * @remarks
   * The list of cold storage instances.
   */
  tables?: DescribeColdStorageInstanceResponseBodyTables[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalRecord?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      objectType: 'ObjectType',
      ossClusterEnabled: 'OssClusterEnabled',
      ossClusterInfoList: 'OssClusterInfoList',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      supportOssCluster: 'SupportOssCluster',
      tables: 'Tables',
      totalRecord: 'TotalRecord',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      objectType: 'string',
      ossClusterEnabled: 'string',
      ossClusterInfoList: { 'type': 'array', 'itemType': DescribeColdStorageInstanceResponseBodyOssClusterInfoList },
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      supportOssCluster: 'string',
      tables: { 'type': 'array', 'itemType': DescribeColdStorageInstanceResponseBodyTables },
      totalRecord: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ossClusterInfoList)) {
      $dara.Model.validateArray(this.ossClusterInfoList);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

