// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableKnowledgeVO extends $dara.Model {
  assetCreatedGmt?: string;
  assetDescription?: string;
  assetModifiedGmt?: string;
  dbId?: number;
  dbName?: string;
  dbType?: string;
  description?: string;
  envType?: string;
  hotLevel?: number;
  instanceId?: number;
  instanceName?: string;
  level?: number;
  levelType?: string;
  logic?: boolean;
  numRows?: number;
  schemaName?: string;
  size?: number;
  summary?: string;
  tableId?: number;
  tableName?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      assetCreatedGmt: 'AssetCreatedGmt',
      assetDescription: 'AssetDescription',
      assetModifiedGmt: 'AssetModifiedGmt',
      dbId: 'DbId',
      dbName: 'DbName',
      dbType: 'DbType',
      description: 'Description',
      envType: 'EnvType',
      hotLevel: 'HotLevel',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      level: 'Level',
      levelType: 'LevelType',
      logic: 'Logic',
      numRows: 'NumRows',
      schemaName: 'SchemaName',
      size: 'Size',
      summary: 'Summary',
      tableId: 'TableId',
      tableName: 'TableName',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetCreatedGmt: 'string',
      assetDescription: 'string',
      assetModifiedGmt: 'string',
      dbId: 'number',
      dbName: 'string',
      dbType: 'string',
      description: 'string',
      envType: 'string',
      hotLevel: 'number',
      instanceId: 'number',
      instanceName: 'string',
      level: 'number',
      levelType: 'string',
      logic: 'boolean',
      numRows: 'number',
      schemaName: 'string',
      size: 'number',
      summary: 'string',
      tableId: 'number',
      tableName: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

