// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTableRequestDataProcessConfig } from "./CreateTableRequestDataProcessConfig";
import { CreateTableRequestDataSource } from "./CreateTableRequestDataSource";
import { CreateTableRequestVectorIndex } from "./CreateTableRequestVectorIndex";


export class CreateTableRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations about field processing.
   */
  dataProcessConfig?: CreateTableRequestDataProcessConfig[];
  /**
   * @remarks
   * The number of resources used for data update.
   * 
   * @example
   * 1
   */
  dataProcessorCount?: number;
  /**
   * @remarks
   * The configurations of the data source.
   */
  dataSource?: CreateTableRequestDataSource;
  /**
   * @remarks
   * The fields.
   */
  fieldSchema?: { [key: string]: string };
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * index_1
   */
  name?: string;
  /**
   * @remarks
   * The number of data shards.
   * 
   * @example
   * 1
   */
  partitionCount?: number;
  /**
   * @remarks
   * The primary key field.
   * 
   * @example
   * id
   */
  primaryKey?: string;
  /**
   * @remarks
   * The instance schema. If this parameter is specified, the parameters about the index are not required.
   * 
   * @example
   * {}
   */
  rawSchema?: string;
  scene?: string;
  /**
   * @remarks
   * The index schema.
   */
  vectorIndex?: CreateTableRequestVectorIndex[];
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. The system only checks the validity of the data source. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataProcessConfig: 'dataProcessConfig',
      dataProcessorCount: 'dataProcessorCount',
      dataSource: 'dataSource',
      fieldSchema: 'fieldSchema',
      name: 'name',
      partitionCount: 'partitionCount',
      primaryKey: 'primaryKey',
      rawSchema: 'rawSchema',
      scene: 'scene',
      vectorIndex: 'vectorIndex',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProcessConfig: { 'type': 'array', 'itemType': CreateTableRequestDataProcessConfig },
      dataProcessorCount: 'number',
      dataSource: CreateTableRequestDataSource,
      fieldSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      partitionCount: 'number',
      primaryKey: 'string',
      rawSchema: 'string',
      scene: 'string',
      vectorIndex: { 'type': 'array', 'itemType': CreateTableRequestVectorIndex },
      dryRun: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.dataProcessConfig)) {
      $dara.Model.validateArray(this.dataProcessConfig);
    }
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(this.fieldSchema) {
      $dara.Model.validateMap(this.fieldSchema);
    }
    if(Array.isArray(this.vectorIndex)) {
      $dara.Model.validateArray(this.vectorIndex);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

