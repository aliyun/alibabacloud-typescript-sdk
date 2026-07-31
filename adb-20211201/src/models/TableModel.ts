// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FieldSchemaModel } from "./FieldSchemaModel";
import { CstoreIndexModel } from "./CstoreIndexModel";
import { StorageDescriptorModel } from "./StorageDescriptorModel";


export class TableModel extends $dara.Model {
  /**
   * @remarks
   * The archive type.
   * 
   * @example
   * ArchiveType
   */
  archiveType?: string;
  /**
   * @remarks
   * The block size.
   * 
   * @example
   * 64
   */
  blockSize?: number;
  /**
   * @remarks
   * The bucket ID.
   * 
   * @example
   * 16
   */
  bucket?: number;
  /**
   * @remarks
   * The number of buckets.
   * 
   * @example
   * 16
   */
  bucketCount?: number;
  /**
   * @remarks
   * The column information.
   */
  cols?: FieldSchemaModel[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description
   */
  comment?: string;
  /**
   * @remarks
   * The compression method.
   * 
   * @example
   * Compression
   */
  compression?: string;
  /**
   * @remarks
   * The time when the table was created.
   * 
   * @example
   * 2023-01-05 13:17:55
   */
  createTime?: string;
  createdBySource?: string;
  createdByUser?: string;
  /**
   * @remarks
   * The current version.
   * 
   * @example
   * 2
   */
  currentVersion?: number;
  /**
   * @remarks
   * The name of the logical database.
   * 
   * @example
   * example
   */
  dbName?: string;
  /**
   * @remarks
   * Indicates whether the dictionary is encrypted.
   * 
   * @example
   * false
   */
  dictEncode?: boolean;
  /**
   * @remarks
   * The distribution columns.
   */
  distributeColumns?: FieldSchemaModel[];
  /**
   * @remarks
   * The distribution type.
   * 
   * @example
   * DistributeType
   */
  distributeType?: string;
  /**
   * @remarks
   * Indicates whether DFS is allowed.
   * 
   * @example
   * false
   */
  enableDfs?: boolean;
  /**
   * @remarks
   * The number of hot partitions.
   * 
   * @example
   * 32
   */
  hotPartitionCount?: number;
  /**
   * @remarks
   * The indexes.
   */
  indexes?: CstoreIndexModel[];
  /**
   * @remarks
   * Indicates whether the index is a full index.
   * 
   * @example
   * true
   */
  isAllIndex?: boolean;
  /**
   * @remarks
   * Indicates whether the table is a full-text index dictionary.
   * 
   * @example
   * false
   */
  isFulltextDict?: boolean;
  /**
   * @remarks
   * The maximum column ID.
   * 
   * @example
   * MaxColumnId
   */
  maxColumnId?: number;
  /**
   * @remarks
   * The parameters.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The information about the partition key column.
   * 
   * @example
   * colName
   */
  partitionColumn?: string;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 16
   */
  partitionCount?: number;
  /**
   * @remarks
   * The partition keys.
   */
  partitionKeys?: FieldSchemaModel[];
  /**
   * @remarks
   * The partition type.
   * 
   * @example
   * PartitionType
   */
  partitionType?: string;
  /**
   * @remarks
   * The name of the physical database.
   * 
   * @example
   * physicalDatabaseName
   */
  physicalDatabaseName?: string;
  /**
   * @remarks
   * The name of the physical table.
   * 
   * @example
   * physicalTableName
   */
  physicalTableName?: string;
  /**
   * @remarks
   * The previous version.
   * 
   * @example
   * 1
   */
  previousVersion?: number;
  /**
   * @remarks
   * The raw table name.
   * 
   * @example
   * RawTableName
   */
  rawTableName?: string;
  /**
   * @remarks
   * The routing columns.
   */
  routeColumns?: FieldSchemaModel[];
  /**
   * @remarks
   * The effective routing column.
   */
  routeEffectiveColumn?: FieldSchemaModel;
  /**
   * @remarks
   * The routing type.
   * 
   * @example
   * routeType
   */
  routeType?: string;
  /**
   * @remarks
   * The routing engine type.
   * 
   * @example
   * RtEngineType
   */
  rtEngineType?: string;
  /**
   * @remarks
   * Indicates whether to route all indexes.
   * 
   * @example
   * false
   */
  rtIndexAll?: boolean;
  /**
   * @remarks
   * The routing mode type.
   * 
   * @example
   * RtModeType
   */
  rtModeType?: string;
  /**
   * @remarks
   * The description of the storage.
   */
  sd?: StorageDescriptorModel;
  /**
   * @remarks
   * The storage policy.
   * 
   * @example
   * StoragePolicy
   */
  storagePolicy?: string;
  /**
   * @remarks
   * The information about the subpartition column.
   * 
   * @example
   * SubpartitionColumn
   */
  subpartitionColumn?: string;
  /**
   * @remarks
   * The number of subpartitions.
   * 
   * @example
   * 64
   */
  subpartitionCount?: number;
  /**
   * @remarks
   * The subpartition type.
   * 
   * @example
   * SubpartitionColumn
   */
  subpartitionType?: string;
  /**
   * @remarks
   * The name of the table engine.
   * 
   * @example
   * hive
   */
  tableEngineName?: string;
  /**
   * @remarks
   * The name of the logical table.
   * 
   * @example
   * tableName
   */
  tableName?: string;
  /**
   * @remarks
   * The table type.
   * 
   * @example
   * external_table
   */
  tableType?: string;
  /**
   * @remarks
   * The table ID.
   * 
   * @example
   * 123
   */
  tblId?: number;
  /**
   * @remarks
   * Indicates whether the table is a temporary table.
   * 
   * @example
   * false
   */
  temporary?: boolean;
  /**
   * @remarks
   * The time when the table was last updated.
   * 
   * @example
   * 2023-01-05 13:17:55
   */
  updateTime?: string;
  /**
   * @remarks
   * The normalized SQL statement that is used to create the view.
   * 
   * @example
   * ViewExpandedText
   */
  viewExpandedText?: string;
  /**
   * @remarks
   * The SQL statement used to create the view.
   * 
   * @example
   * ViewOriginalText
   */
  viewOriginalText?: string;
  /**
   * @remarks
   * The security mode of the view.
   * 
   * @example
   * ViewSecurityMode
   */
  viewSecurityMode?: string;
  static names(): { [key: string]: string } {
    return {
      archiveType: 'ArchiveType',
      blockSize: 'BlockSize',
      bucket: 'Bucket',
      bucketCount: 'BucketCount',
      cols: 'Cols',
      comment: 'Comment',
      compression: 'Compression',
      createTime: 'CreateTime',
      createdBySource: 'CreatedBySource',
      createdByUser: 'CreatedByUser',
      currentVersion: 'CurrentVersion',
      dbName: 'DbName',
      dictEncode: 'DictEncode',
      distributeColumns: 'DistributeColumns',
      distributeType: 'DistributeType',
      enableDfs: 'EnableDfs',
      hotPartitionCount: 'HotPartitionCount',
      indexes: 'Indexes',
      isAllIndex: 'IsAllIndex',
      isFulltextDict: 'IsFulltextDict',
      maxColumnId: 'MaxColumnId',
      parameters: 'Parameters',
      partitionColumn: 'PartitionColumn',
      partitionCount: 'PartitionCount',
      partitionKeys: 'PartitionKeys',
      partitionType: 'PartitionType',
      physicalDatabaseName: 'PhysicalDatabaseName',
      physicalTableName: 'PhysicalTableName',
      previousVersion: 'PreviousVersion',
      rawTableName: 'RawTableName',
      routeColumns: 'RouteColumns',
      routeEffectiveColumn: 'RouteEffectiveColumn',
      routeType: 'RouteType',
      rtEngineType: 'RtEngineType',
      rtIndexAll: 'RtIndexAll',
      rtModeType: 'RtModeType',
      sd: 'Sd',
      storagePolicy: 'StoragePolicy',
      subpartitionColumn: 'SubpartitionColumn',
      subpartitionCount: 'SubpartitionCount',
      subpartitionType: 'SubpartitionType',
      tableEngineName: 'TableEngineName',
      tableName: 'TableName',
      tableType: 'TableType',
      tblId: 'TblId',
      temporary: 'Temporary',
      updateTime: 'UpdateTime',
      viewExpandedText: 'ViewExpandedText',
      viewOriginalText: 'ViewOriginalText',
      viewSecurityMode: 'ViewSecurityMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveType: 'string',
      blockSize: 'number',
      bucket: 'number',
      bucketCount: 'number',
      cols: { 'type': 'array', 'itemType': FieldSchemaModel },
      comment: 'string',
      compression: 'string',
      createTime: 'string',
      createdBySource: 'string',
      createdByUser: 'string',
      currentVersion: 'number',
      dbName: 'string',
      dictEncode: 'boolean',
      distributeColumns: { 'type': 'array', 'itemType': FieldSchemaModel },
      distributeType: 'string',
      enableDfs: 'boolean',
      hotPartitionCount: 'number',
      indexes: { 'type': 'array', 'itemType': CstoreIndexModel },
      isAllIndex: 'boolean',
      isFulltextDict: 'boolean',
      maxColumnId: 'number',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitionColumn: 'string',
      partitionCount: 'number',
      partitionKeys: { 'type': 'array', 'itemType': FieldSchemaModel },
      partitionType: 'string',
      physicalDatabaseName: 'string',
      physicalTableName: 'string',
      previousVersion: 'number',
      rawTableName: 'string',
      routeColumns: { 'type': 'array', 'itemType': FieldSchemaModel },
      routeEffectiveColumn: FieldSchemaModel,
      routeType: 'string',
      rtEngineType: 'string',
      rtIndexAll: 'boolean',
      rtModeType: 'string',
      sd: StorageDescriptorModel,
      storagePolicy: 'string',
      subpartitionColumn: 'string',
      subpartitionCount: 'number',
      subpartitionType: 'string',
      tableEngineName: 'string',
      tableName: 'string',
      tableType: 'string',
      tblId: 'number',
      temporary: 'boolean',
      updateTime: 'string',
      viewExpandedText: 'string',
      viewOriginalText: 'string',
      viewSecurityMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cols)) {
      $dara.Model.validateArray(this.cols);
    }
    if(Array.isArray(this.distributeColumns)) {
      $dara.Model.validateArray(this.distributeColumns);
    }
    if(Array.isArray(this.indexes)) {
      $dara.Model.validateArray(this.indexes);
    }
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(Array.isArray(this.partitionKeys)) {
      $dara.Model.validateArray(this.partitionKeys);
    }
    if(Array.isArray(this.routeColumns)) {
      $dara.Model.validateArray(this.routeColumns);
    }
    if(this.routeEffectiveColumn && typeof (this.routeEffectiveColumn as any).validate === 'function') {
      (this.routeEffectiveColumn as any).validate();
    }
    if(this.sd && typeof (this.sd as any).validate === 'function') {
      (this.sd as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

