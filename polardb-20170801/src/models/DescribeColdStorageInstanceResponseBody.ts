// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColdStorageInstanceResponseBodyOssClusterInfoList extends $dara.Model {
  /**
   * @example
   * 2023-05-10T17:01:16Z
   */
  createdTime?: string;
  /**
   * @example
   * pc-*****************
   */
  ossClusterId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
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
   * @example
   * img/1728554006462.png
   */
  objectName?: string;
  /**
   * @example
   * File
   */
  objectType?: string;
  /**
   * @example
   * 10
   */
  size?: string;
  /**
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
  childObjects?: DescribeColdStorageInstanceResponseBodyTablesChildObjects[];
  /**
   * @example
   * test_db
   */
  DB?: string;
  /**
   * @example
   * test_db
   */
  DBName?: string;
  /**
   * @example
   * user
   */
  fieldName?: string;
  /**
   * @example
   * pc-*****************
   */
  ossClusterId?: string;
  /**
   * @example
   * 202509
   */
  partion?: string;
  /**
   * @example
   * 30
   */
  size?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * user
   */
  table?: string;
  /**
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
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @example
   * c2FpXzIwMjIwNjI5X2Jhay9zYWlfc3VtbWVyX3RyZWFzdXJlX3Bvb2xfbG9nLkNTVg==
   */
  nextToken?: string;
  /**
   * @example
   * TABLE
   */
  objectType?: string;
  /**
   * @example
   * true
   */
  ossClusterEnabled?: string;
  ossClusterInfoList?: DescribeColdStorageInstanceResponseBodyOssClusterInfoList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * C7A8EA8E-A140-5226-90D7-5BCB304D3DB6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  supportOssCluster?: string;
  tables?: DescribeColdStorageInstanceResponseBodyTables[];
  /**
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

