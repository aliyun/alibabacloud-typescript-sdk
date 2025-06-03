// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableMetaInfoRequest extends $dara.Model {
  sourceDialect?: string;
  sourceSqlScript?: string;
  targetDialect?: string;
  static names(): { [key: string]: string } {
    return {
      sourceDialect: 'sourceDialect',
      sourceSqlScript: 'sourceSqlScript',
      targetDialect: 'targetDialect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceDialect: 'string',
      sourceSqlScript: 'string',
      targetDialect: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

