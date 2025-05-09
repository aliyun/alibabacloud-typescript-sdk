// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableDataKeyVO extends $dara.Model {
  colName?: string;
  dbName?: string;
  mekId?: number;
  schemaName?: string;
  tblName?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      colName: 'ColName',
      dbName: 'DbName',
      mekId: 'MekId',
      schemaName: 'SchemaName',
      tblName: 'TblName',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colName: 'string',
      dbName: 'string',
      mekId: 'number',
      schemaName: 'string',
      tblName: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

