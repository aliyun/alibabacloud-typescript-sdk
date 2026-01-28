// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OneMetaTableColumnEngineMeta } from "./OneMetaTableColumnEngineMeta";


export class OneMetaTableColumn extends $dara.Model {
  columnName?: string;
  columnType?: string;
  description?: string;
  engineMeta?: OneMetaTableColumnEngineMeta;
  position?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      description: 'Description',
      engineMeta: 'EngineMeta',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnType: 'string',
      description: 'string',
      engineMeta: OneMetaTableColumnEngineMeta,
      position: 'number',
    };
  }

  validate() {
    if(this.engineMeta && typeof (this.engineMeta as any).validate === 'function') {
      (this.engineMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

