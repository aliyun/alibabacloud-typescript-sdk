// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SingleScriptSyncTranslateRequest extends $dara.Model {
  sourceDialect?: string;
  sourceSqlScript?: string;
  tableMapping?: string[];
  targetDialect?: string;
  static names(): { [key: string]: string } {
    return {
      sourceDialect: 'sourceDialect',
      sourceSqlScript: 'sourceSqlScript',
      tableMapping: 'tableMapping',
      targetDialect: 'targetDialect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceDialect: 'string',
      sourceSqlScript: 'string',
      tableMapping: { 'type': 'array', 'itemType': 'string' },
      targetDialect: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tableMapping)) {
      $dara.Model.validateArray(this.tableMapping);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

