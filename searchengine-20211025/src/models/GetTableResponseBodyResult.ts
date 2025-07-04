// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTableResponseBodyResultDataProcessConfig } from "./GetTableResponseBodyResultDataProcessConfig";
import { GetTableResponseBodyResultDataSource } from "./GetTableResponseBodyResultDataSource";
import { GetTableResponseBodyResultVectorIndex } from "./GetTableResponseBodyResultVectorIndex";


export class GetTableResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The configurations about field processing.
   */
  dataProcessConfig?: GetTableResponseBodyResultDataProcessConfig[];
  /**
   * @example
   * 1
   */
  dataProcessorCount?: number;
  dataSource?: GetTableResponseBodyResultDataSource;
  /**
   * @remarks
   * The field. The value is a key-value pair in which the key indicates the field name and value indicates the field type.
   */
  fieldSchema?: { [key: string]: string };
  /**
   * @example
   * test_oss
   */
  name?: string;
  /**
   * @example
   * 1
   */
  partitionCount?: number;
  /**
   * @example
   * id
   */
  primaryKey?: string;
  /**
   * @example
   * {}
   */
  rawSchema?: string;
  /**
   * @remarks
   * The state of the index table. Valid values: NEW, PUBLISH, IN_USE, NOT_USE, STOP_USE, RESTORE_USE, and FAIL. After an index is created in an OpenSearch Retrieval Engine Edition instance, the index enters the IN_USE state. If the first full index fails to be created in an OpenSearch Vector Search Edition instance of the new version, the index is in the FAIL state.
   * 
   * @example
   * IN_USE
   */
  status?: string;
  /**
   * @remarks
   * The index schema.
   */
  vectorIndex?: GetTableResponseBodyResultVectorIndex[];
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
      status: 'status',
      vectorIndex: 'vectorIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataProcessConfig: { 'type': 'array', 'itemType': GetTableResponseBodyResultDataProcessConfig },
      dataProcessorCount: 'number',
      dataSource: GetTableResponseBodyResultDataSource,
      fieldSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      partitionCount: 'number',
      primaryKey: 'string',
      rawSchema: 'string',
      status: 'string',
      vectorIndex: { 'type': 'array', 'itemType': GetTableResponseBodyResultVectorIndex },
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

