// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructMvDetailModelBaseTableInfos extends $dara.Model {
  baseTableIsMv?: boolean;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      baseTableIsMv: 'BaseTableIsMv',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseTableIsMv: 'boolean',
      schemaName: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

