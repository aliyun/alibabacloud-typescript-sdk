// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OneMetaTableIndex extends $dara.Model {
  columnNames?: string[];
  description?: string;
  indexName?: string;
  indexType?: string;
  primary?: boolean;
  realColumnNames?: string[];
  unique?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnNames: 'ColumnNames',
      description: 'Description',
      indexName: 'IndexName',
      indexType: 'IndexType',
      primary: 'Primary',
      realColumnNames: 'RealColumnNames',
      unique: 'Unique',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNames: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      indexName: 'string',
      indexType: 'string',
      primary: 'boolean',
      realColumnNames: { 'type': 'array', 'itemType': 'string' },
      unique: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.columnNames)) {
      $dara.Model.validateArray(this.columnNames);
    }
    if(Array.isArray(this.realColumnNames)) {
      $dara.Model.validateArray(this.realColumnNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

