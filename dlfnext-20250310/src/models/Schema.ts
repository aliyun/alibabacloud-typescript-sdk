// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataField } from "./DataField";


export class Schema extends $dara.Model {
  /**
   * @remarks
   * The comment for the table.
   * 
   * @example
   * description
   */
  comment?: string;
  /**
   * @remarks
   * A list of table column definitions.
   */
  fields?: DataField[];
  /**
   * @remarks
   * A list of table configuration options.
   */
  options?: { [key: string]: string };
  /**
   * @remarks
   * A list of partition column names.
   */
  partitionKeys?: string[];
  /**
   * @remarks
   * A list of primary key column names.
   */
  primaryKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      fields: 'fields',
      options: 'options',
      partitionKeys: 'partitionKeys',
      primaryKeys: 'primaryKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      fields: { 'type': 'array', 'itemType': DataField },
      options: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      partitionKeys: { 'type': 'array', 'itemType': 'string' },
      primaryKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(this.options) {
      $dara.Model.validateMap(this.options);
    }
    if(Array.isArray(this.partitionKeys)) {
      $dara.Model.validateArray(this.partitionKeys);
    }
    if(Array.isArray(this.primaryKeys)) {
      $dara.Model.validateArray(this.primaryKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

