// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Schema } from "./Schema";


export class Table extends $dara.Model {
  comment?: string;
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  partitionKeys?: string[];
  properties?: { [key: string]: any };
  schema?: Schema;
  /**
   * @remarks
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

