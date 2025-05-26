// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructMvBaseTableDetailModel extends $dara.Model {
  dataVolumn?: string;
  enableBinlog?: boolean;
  schemaName?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dataVolumn: 'DataVolumn',
      enableBinlog: 'EnableBinlog',
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataVolumn: 'string',
      enableBinlog: 'boolean',
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

