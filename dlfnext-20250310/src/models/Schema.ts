// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataField } from "./DataField";


export class Schema extends $dara.Model {
  comment?: string;
  fields?: DataField[];
  options?: { [key: string]: string };
  partitionKeys?: string[];
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

