// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableInfoResponseBodyDataClusterInfo } from "./GetTableInfoResponseBodyDataClusterInfo";
import { GetTableInfoResponseBodyDataNativeColumns } from "./GetTableInfoResponseBodyDataNativeColumns";
import { GetTableInfoResponseBodyDataPartitionColumns } from "./GetTableInfoResponseBodyDataPartitionColumns";


export class GetTableInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the materialized view is automatically refreshed. This response parameter is returned when type is set to materializedView.
   * 
   * @example
   * false
   */
  autoRefreshEnabled?: boolean;
  /**
   * @remarks
   * The clustering attribute. This response parameter is returned when the table is a clustered table.
   */
  clusterInfo?: GetTableInfoResponseBodyDataClusterInfo;
  /**
   * @remarks
   * The comments of the table.
   * 
   * @example
   * sale_detail
   */
  comment?: string;
  /**
   * @remarks
   * DDL statement to create a table.
   * 
   * @example
   * create table if not exists sale_detail( shop_name STRING, customer_id STRING, total_price DOUBLE) partitioned by (sale_date STRING, region STRING);
   */
  createTableDDL?: string;
  /**
   * @remarks
   * The creation time.
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
   * project_name.schema_name.table_name
   */
  displayName?: string;
  /**
   * @remarks
   * The number of file of the table.
   * 
   * @example
   * 200
   */
  fileNum?: number;
  /**
   * @remarks
   * Indicates whether the table is an external table. This response parameter is returned when type is set to external.
   * 
   * @example
   * false
   */
  isExternalTable?: boolean;
  /**
   * @remarks
   * Indicates whether data of the materialized view is invalid due to changes in the data of the source table. This response parameter is returned when type is set to materializedView.
   * 
   * @example
   * false
   */
  isOutdated?: boolean;
  /**
   * @remarks
   * The time when data of the table or view was last accessed.
   * 
   * @example
   * 2023-11-21T02:05:56Z
   */
  lastAccessTime?: number;
  /**
   * @remarks
   * The time when the data definition language (DDL) statement of the table or view was last modified.
   * 
   * @example
   * 2023-11-21T02:05:56Z
   */
  lastDDLTime?: number;
  /**
   * @remarks
   * The time when data of the table or view was last modified.
   * 
   * @example
   * 2023-11-21T02:05:56Z
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The lifecycle. Unit: days.
   * 
   * @example
   * -1
   */
  lifecycle?: string;
  /**
   * @remarks
   * The path of the external table. This response parameter is returned when type is set to external.
   * 
   * @example
   * oss://oss-cn-hangzhou-internal.aliyuncs.com/oss-mc-test/Demo1/
   */
  location?: string;
  /**
   * @remarks
   * Indicates whether the table or view is a [materialize view](https://www.alibabacloud.com/help/maxcompute/user-guide/materialized-view-operations).
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
   * The field information.
   */
  nativeColumns?: GetTableInfoResponseBodyDataNativeColumns[];
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the role AliyunODPSDefaultRole in Resource Access Management (RAM). This response parameter is returned when type is set to external.
   * 
   * @example
   * acs:ram::xxxxx:role/aliyunodpsdefaultrole
   */
  odpsPropertiesRolearn?: string;
  /**
   * @remarks
   * Indicates whether the table header is ignored. This response parameter is returned when type is set to external.
   * 
   * @example
   * true
   */
  odpsSqlTextOptionFlushHeader?: boolean;
  /**
   * @remarks
   * The first N rows that were ignored in the table header. This response parameter is returned when type is set to external.
   * 
   * @example
   * 1
   */
  odpsTextOptionHeaderLinesCount?: number;
  /**
   * @remarks
   * The account information of the table or view owner.
   * 
   * @example
   * 188785396123****
   */
  owner?: string;
  /**
   * @remarks
   * The information about partition key columns. This response parameter is returned only for partitioned tables.
   */
  partitionColumns?: GetTableInfoResponseBodyDataPartitionColumns[];
  /**
   * @remarks
   * The physical size of the table.
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
   * projectA
   */
  projectName?: string;
  /**
   * @remarks
   * Indicates whether the query rewrite operation can be performed by using the materialized view. This response parameter is returned when type is set to materializedView.
   * 
   * @example
   * false
   */
  rewriteEnabled?: boolean;
  /**
   * @remarks
   * The name of the schema to which the table or the view belongs.
   * 
   * @example
   * default
   */
  schema?: string;
  /**
   * @remarks
   * The data size of the non-partitioned table. If the table is a partitioned table, the system does not calculate the data size of the table. In this case, the value of this parameter is NULL. The PARTITIONS view includes the data size of each partition in a partitioned table. Unit: bytes.
   * 
   * @example
   * 5372
   */
  size?: number;
  /**
   * @remarks
   * The storage handler of the external table. This response parameter is returned when type is set to external.
   * 
   * @example
   * com.aliyun.odps.CsvStorageHandler
   */
  storageHandler?: string;
  /**
   * @remarks
   * The sensitivity-level label of the table. For more information, see [Label-based access control](https://www.alibabacloud.com/help/maxcompute/user-guide/label-based-access-control).
   * 
   * @example
   * 0
   */
  tableLabel?: string;
  /**
   * @remarks
   * The name of the Tablestore table to be accessed. This response parameter is returned when type is set to external.
   * 
   * @example
   * ots_tpch_orders
   */
  tablesotreTableName?: string;
  /**
   * @remarks
   * The columns of the Tablestore table to be accessed, including the primary key column and attribute column. This response parameter is returned when type is set to external.
   * 
   * @example
   * :o_orderkey,:o_orderdate,o_custkey,o_orderstatus,o_totalprice
   */
  tablestoreColumnsMapping?: string;
  /**
   * @remarks
   * The type of the table or view. Valid values:
   * 
   * *   **internal**: internal table
   * *   **external**: external table
   * *   **view**: view
   * *   **materializedView**: [materialize view](https://www.alibabacloud.com/help/maxcompute/user-guide/materialized-view-operations)
   * 
   * @example
   * internal
   */
  type?: string;
  /**
   * @remarks
   * The statement that generates the view. This response parameter is returned when type is set to view.
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

