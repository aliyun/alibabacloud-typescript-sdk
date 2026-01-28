// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OneMetaTableIndex extends $dara.Model {
  columnNames?: string[];
  description?: string;
  indexName?: string;
  indexType?: string;
  static names(): { [key: string]: string } {
    return {
      columnNames: 'ColumnNames',
      description: 'Description',
      indexName: 'IndexName',
      indexType: 'IndexType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNames: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      indexName: 'string',
      indexType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnNames)) {
      $dara.Model.validateArray(this.columnNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

