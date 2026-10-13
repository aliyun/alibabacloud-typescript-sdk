// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableInfoResponseBodyDataClusterInfoSortCols extends $dara.Model {
  /**
   * @remarks
   * The name of the sort column.
   * 
   * @example
   * col_2
   */
  name?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * DESC
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      order: 'order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponseBodyDataClusterInfo extends $dara.Model {
  /**
   * @remarks
   * The number of buckets in the clustered table. This is an optional field. A value of 0 indicates that the number of buckets is dynamically determined during job execution.
   * 
   * @example
   * 1024
   */
  bucketNum?: number;
  /**
   * @remarks
   * The cluster key.
   */
  clusterCols?: string[];
  /**
   * @remarks
   * The clustering type of the table. MaxCompute currently supports <props="china">[Hash Clustering](https://www.alibabacloud.com/help/en/maxcompute/use-cases/hash-clustering)
   * <props="intl">[Hash Clustering](https://www.alibabacloud.com/help/maxcompute/use-cases/hash-clustering) and
   * <props="china"> [Range Clustering](https://www.alibabacloud.com/help/en/maxcompute/use-cases/hash-clustering)
   * <props="intl">[Range Clustering](https://www.alibabacloud.com/help/maxcompute/use-cases/range-clustering).
   * 
   * @example
   * Hash
   */
  clusterType?: string;
  /**
   * @remarks
   * The sort columns.
   */
  sortCols?: GetTableInfoResponseBodyDataClusterInfoSortCols[];
  static names(): { [key: string]: string } {
    return {
      bucketNum: 'bucketNum',
      clusterCols: 'clusterCols',
      clusterType: 'clusterType',
      sortCols: 'sortCols',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketNum: 'number',
      clusterCols: { 'type': 'array', 'itemType': 'string' },
      clusterType: 'string',
      sortCols: { 'type': 'array', 'itemType': GetTableInfoResponseBodyDataClusterInfoSortCols },
    };
  }

  validate() {
    if(Array.isArray(this.clusterCols)) {
      $dara.Model.validateArray(this.clusterCols);
    }
    if(Array.isArray(this.sortCols)) {
      $dara.Model.validateArray(this.sortCols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponseBodyDataNativeColumns extends $dara.Model {
  /**
   * @remarks
   * The column comment.
   * 
   * @example
   * Store name
   */
  comment?: string;
  /**
   * @remarks
   * The sensitivity level label of the column. For more information, see <props="china">[Label-based access control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/label-based-access-control)
   * <props="intl">[Label-based access control](https://www.alibabacloud.com/help/maxcompute/user-guide/label-based-access-control).
   * 
   * @example
   * 0
   */
  label?: string;
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * shop_name
   */
  name?: string;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * STRING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      label: 'label',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      label: 'string',
      name: 'string',
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

export class GetTableInfoResponseBodyDataPartitionColumns extends $dara.Model {
  /**
   * @remarks
   * The partition column comment.
   * 
   * @example
   * Sale date
   */
  comment?: string;
  /**
   * @remarks
   * The sensitivity level label of the column. For more information, see <props="china">[Label-based access control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/label-based-access-control)
   * <props="intl">[Label-based access control](https://www.alibabacloud.com/help/maxcompute/user-guide/label-based-access-control).
   * 
   * @example
   * 0
   */
  label?: string;
  /**
   * @remarks
   * The partition name.
   * 
   * @example
   * ds=\\"20190130\\"
   */
  name?: string;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * STRING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      label: 'label',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      label: 'string',
      name: 'string',
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

export class GetTableInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic refresh of the materialized view is enabled. This parameter is returned only when the type is materialized view.
   * 
   * @example
   * false
   */
  autoRefreshEnabled?: boolean;
  /**
   * @remarks
   * The clustering properties. This parameter is returned only when the table type is clustered table.
   */
  clusterInfo?: GetTableInfoResponseBodyDataClusterInfo;
  /**
   * @remarks
   * The table comment.
   * 
   * @example
   * sale_detail
   */
  comment?: string;
  /**
   * @remarks
   * The DDL statement used to create the table.
   * 
   * @example
   * create table if not exists sale_detail( shop_name STRING, customer_id STRING, total_price DOUBLE) partitioned by (sale_date STRING, region STRING);
   */
  createTableDDL?: string;
  /**
   * @remarks
   * The creation time. The time is in ISO 8601 format and in the UTC time zone.
   * 
   * @example
   * 2022-01-17T07:07:47Z
   */
  creationTime?: number;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * odps_project.default.sale_detail
   */
  displayName?: string;
  /**
   * @remarks
   * The number of files.
   * 
   * @example
   * 200
   */
  fileNum?: number;
  /**
   * @remarks
   * Indicates whether the table is an external table. This parameter is returned only when the type is table.
   * 
   * @example
   * false
   */
  isExternalTable?: boolean;
  /**
   * @remarks
   * Indicates whether the data in the materialized view is invalid due to changes in the source table data. This parameter is returned only when the type is materialized view.
   * 
   * @example
   * false
   */
  isOutdated?: boolean;
  /**
   * @remarks
   * The time when the data of the table or view was last accessed. This parameter is returned only when the table is a non-partitioned table.
   * > This data has been gradually collected since July 2023. If the table has not been accessed after the upgrade, or if it is accessed through ALGO jobs or Hologres direct read, the last_access_time cannot be collected.
   * 
   * @example
   * 2023-11-21T02:05:56Z
   */
  lastAccessTime?: number;
  /**
   * @remarks
   * The time when the DDL statement of the table or view was last modified.
   * 
   * @example
   * 2023-11-21T02:05:56Z
   */
  lastDDLTime?: number;
  /**
   * @remarks
   * The time when the data of the table or view was last modified. The time is in ISO 8601 format and in the UTC time zone.
   * 
   * @example
   * 2023-11-21T02:05:56Z
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The lifecycle in days.
   * 
   * @example
   * -1
   */
  lifecycle?: string;
  /**
   * @remarks
   * The external table location. This parameter is returned only when the type is external table.
   * 
   * @example
   * oss://oss-cn-hangzhou-internal.aliyuncs.com/oss-mc-test/Demo1/
   */
  location?: string;
  /**
   * @remarks
   * Indicates whether the table is a <props="china">[materialized view](https://www.alibabacloud.com/help/en/maxcompute/user-guide/materialized-view-operations)
   * <props="intl">[materialized view](https://www.alibabacloud.com/help/maxcompute/user-guide/materialized-view-operations).
   * 
   * @example
   * false
   */
  materializedView?: boolean;
  /**
   * @remarks
   * The name of the table or view.
   * 
   * @example
   * sale_detail
   */
  name?: string;
  /**
   * @remarks
   * The column information.
   */
  nativeColumns?: GetTableInfoResponseBodyDataNativeColumns[];
  /**
   * @remarks
   * The ARN of AliyunODPSDefaultRole in RAM. This parameter is returned only when the type is external table.
   * 
   * @example
   * acs:ram::xxxxx:role/aliyunodpsdefaultrole
   */
  odpsPropertiesRolearn?: string;
  /**
   * @remarks
   * Indicates whether to ignore the header. This parameter is returned only when the type is external table.
   * 
   * @example
   * true
   */
  odpsSqlTextOptionFlushHeader?: boolean;
  /**
   * @remarks
   * The number of header lines to ignore. This parameter is returned only when the type is external table.
   * 
   * @example
   * 1
   */
  odpsTextOptionHeaderLinesCount?: number;
  /**
   * @remarks
   * The account information of the owner of the table or view.
   * 
   * @example
   * ALIYUN$odps****@aliyunid.com
   */
  owner?: string;
  /**
   * @remarks
   * The partition column information. This parameter is returned only for partitioned tables.
   */
  partitionColumns?: GetTableInfoResponseBodyDataPartitionColumns[];
  /**
   * @remarks
   * The physical size.
   * 
   * @example
   * 2763
   */
  physicalSize?: number;
  /**
   * @remarks
   * The name of the project to which the table or view belongs.
   * 
   * @example
   * odps_project
   */
  projectName?: string;
  /**
   * @remarks
   * Indicates whether query rewrite through the materialized view is allowed. This parameter is returned only when the type is materialized view.
   * 
   * @example
   * false
   */
  rewriteEnabled?: boolean;
  /**
   * @remarks
   * The name of the schema to which the table or view belongs.
   * 
   * @example
   * default
   */
  schema?: string;
  /**
   * @remarks
   * The data size of the table. If the table is a non-partitioned table, the value is the data size of the table. If the table is a partitioned table, the system does not calculate the data size of the table, and the value is NULL. The PARTITIONS view contains the data size of each partition in the partitioned table. Unit: bytes.
   * 
   * @example
   * 5372
   */
  size?: number;
  /**
   * @remarks
   * The external table parser. This parameter is returned only when the type is external table.
   * 
   * @example
   * com.aliyun.odps.CsvStorageHandler
   */
  storageHandler?: string;
  /**
   * @remarks
   * The sensitivity level label of the table. For more information, see <props="china">[Label-based access control](https://www.alibabacloud.com/help/en/maxcompute/user-guide/label-based-access-control)
   * <props="intl">[Label-based access control](https://www.alibabacloud.com/help/maxcompute/user-guide/label-based-access-control).
   * 
   * @example
   * 0
   */
  tableLabel?: string;
  /**
   * @remarks
   * The name of the Tablestore table to be accessed. This parameter is returned only when the type is external table.
   * 
   * @example
   * ots_tpch_orders
   */
  tablesotreTableName?: string;
  /**
   * @remarks
   * The columns of the Tablestore table to be accessed by MaxCompute, including the primary key columns and attribute columns. This parameter is returned only when the type is external table.
   * 
   * @example
   * o_orderkey,o_orderdate,o_custkey,o_orderstatus,o_totalprice
   */
  tablestoreColumnsMapping?: string;
  /**
   * @remarks
   * The type of the table or view. Valid values:
   * - **internal**: Internal table.
   * - **external**: External table.
   * - **view**: View.
   * - **materializedView**: <props="china">[Materialized view](https://www.alibabacloud.com/help/en/maxcompute/user-guide/materialized-view-operations)
   * <props="intl">[Materialized view](https://www.alibabacloud.com/help/maxcompute/user-guide/materialized-view-operations).
   * 
   * @example
   * internal
   */
  type?: string;
  /**
   * @remarks
   * The statement used to create the view. This parameter is returned only when the type is view.
   * 
   * @example
   * select shop_name, sum(total_price) from sale_detail group by shop_name
   */
  viewText?: string;
  static names(): { [key: string]: string } {
    return {
      autoRefreshEnabled: 'autoRefreshEnabled',
      clusterInfo: 'clusterInfo',
      comment: 'comment',
      createTableDDL: 'createTableDDL',
      creationTime: 'creationTime',
      displayName: 'displayName',
      fileNum: 'fileNum',
      isExternalTable: 'isExternalTable',
      isOutdated: 'isOutdated',
      lastAccessTime: 'lastAccessTime',
      lastDDLTime: 'lastDDLTime',
      lastModifiedTime: 'lastModifiedTime',
      lifecycle: 'lifecycle',
      location: 'location',
      materializedView: 'materializedView',
      name: 'name',
      nativeColumns: 'nativeColumns',
      odpsPropertiesRolearn: 'odpsPropertiesRolearn',
      odpsSqlTextOptionFlushHeader: 'odpsSqlTextOptionFlushHeader',
      odpsTextOptionHeaderLinesCount: 'odpsTextOptionHeaderLinesCount',
      owner: 'owner',
      partitionColumns: 'partitionColumns',
      physicalSize: 'physicalSize',
      projectName: 'projectName',
      rewriteEnabled: 'rewriteEnabled',
      schema: 'schema',
      size: 'size',
      storageHandler: 'storageHandler',
      tableLabel: 'tableLabel',
      tablesotreTableName: 'tablesotreTableName',
      tablestoreColumnsMapping: 'tablestoreColumnsMapping',
      type: 'type',
      viewText: 'viewText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRefreshEnabled: 'boolean',
      clusterInfo: GetTableInfoResponseBodyDataClusterInfo,
      comment: 'string',
      createTableDDL: 'string',
      creationTime: 'number',
      displayName: 'string',
      fileNum: 'number',
      isExternalTable: 'boolean',
      isOutdated: 'boolean',
      lastAccessTime: 'number',
      lastDDLTime: 'number',
      lastModifiedTime: 'number',
      lifecycle: 'string',
      location: 'string',
      materializedView: 'boolean',
      name: 'string',
      nativeColumns: { 'type': 'array', 'itemType': GetTableInfoResponseBodyDataNativeColumns },
      odpsPropertiesRolearn: 'string',
      odpsSqlTextOptionFlushHeader: 'boolean',
      odpsTextOptionHeaderLinesCount: 'number',
      owner: 'string',
      partitionColumns: { 'type': 'array', 'itemType': GetTableInfoResponseBodyDataPartitionColumns },
      physicalSize: 'number',
      projectName: 'string',
      rewriteEnabled: 'boolean',
      schema: 'string',
      size: 'number',
      storageHandler: 'string',
      tableLabel: 'string',
      tablesotreTableName: 'string',
      tablestoreColumnsMapping: 'string',
      type: 'string',
      viewText: 'string',
    };
  }

  validate() {
    if(this.clusterInfo && typeof (this.clusterInfo as any).validate === 'function') {
      (this.clusterInfo as any).validate();
    }
    if(Array.isArray(this.nativeColumns)) {
      $dara.Model.validateArray(this.nativeColumns);
    }
    if(Array.isArray(this.partitionColumns)) {
      $dara.Model.validateArray(this.partitionColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response result.
   */
  data?: GetTableInfoResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0a06dd4516687375802853481ec9fd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTableInfoResponseBodyData,
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

