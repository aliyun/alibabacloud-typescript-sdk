// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Schema } from "./Schema";


export class Table extends $dara.Model {
  /**
   * @remarks
   * The comment.
   */
  comment?: string;
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * order-test
   */
  name?: string;
  /**
   * @remarks
   * The partition key column.
   */
  partitionKeys?: string[];
  /**
   * @remarks
   * The parameter configurations of the table.
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The schema information about the table.
   */
  schema?: Schema;
  /**
   * @remarks
   * TABLE;
   *   MATERIALIZED_TABLE;
   *   VIEW;
   * 
   * This parameter is required.
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      metadata: 'metadata',
      name: 'name',
      partitionKeys: 'partitionKeys',
      properties: 'properties',
      schema: 'schema',
      tableType: 'tableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      partitionKeys: { 'type': 'array', 'itemType': 'string' },
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      schema: Schema,
      tableType: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.partitionKeys)) {
      $dara.Model.validateArray(this.partitionKeys);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

