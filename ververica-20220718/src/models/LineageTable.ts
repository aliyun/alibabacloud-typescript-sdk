// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageColumn } from "./LineageColumn";


export class LineageTable extends $dara.Model {
  columns?: LineageColumn[];
  id?: string;
  properties?: { [key: string]: any };
  tableName?: string;
  with?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      id: 'id',
      properties: 'properties',
      tableName: 'tableName',
      with: 'with',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': LineageColumn },
      id: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tableName: 'string',
      with: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(this.with) {
      $dara.Model.validateMap(this.with);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

