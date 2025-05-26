// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FieldSchemaModel } from "./FieldSchemaModel";
import { CstoreIndexModel } from "./CstoreIndexModel";
import { StorageDescriptorModel } from "./StorageDescriptorModel";


export class TableModel extends $dara.Model {
  archiveType?: string;
  blockSize?: number;
  bucket?: number;
  bucketCount?: number;
  cols?: FieldSchemaModel[];
  comment?: string;
  compression?: string;
  createTime?: string;
  currentVersion?: number;
  dbName?: string;
  dictEncode?: boolean;
  distributeColumns?: FieldSchemaModel[];
  distributeType?: string;
  enableDfs?: boolean;
  hotPartitionCount?: number;
  indexes?: CstoreIndexModel[];
  isAllIndex?: boolean;
  isFulltextDict?: boolean;
  maxColumnId?: number;
  parameters?: { [key: string]: string };
  partitionColumn?: string;
  partitionCount?: number;
  partitionKeys?: FieldSchemaModel[];
  partitionType?: string;
  physicalDatabaseName?: string;
  physicalTableName?: string;
  previousVersion?: number;
  rawTableName?: string;
  routeColumns?: FieldSchemaModel[];
  routeEffectiveColumn?: FieldSchemaModel;
  routeType?: string;
  rtEngineType?: string;
  rtIndexAll?: boolean;
  rtModeType?: string;
  sd?: StorageDescriptorModel;
  storagePolicy?: string;
  subpartitionColumn?: string;
  subpartitionCount?: number;
  subpartitionType?: string;
  tableEngineName?: string;
  tableName?: string;
  tableType?: string;
  tblId?: number;
  temporary?: boolean;
  updateTime?: string;
  viewExpandedText?: string;
  viewOriginalText?: string;
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

