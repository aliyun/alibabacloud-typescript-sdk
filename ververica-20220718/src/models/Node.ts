// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageTable } from "./LineageTable";


export class Node extends $dara.Model {
  catalogName?: string;
  connector?: string;
  databaseName?: string;
  id?: string;
  isTemporary?: boolean;
  tables?: LineageTable[];
  static names(): { [key: string]: string } {
    return {
      catalogName: 'catalogName',
      connector: 'connector',
      databaseName: 'databaseName',
      id: 'id',
      isTemporary: 'isTemporary',
      tables: 'tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      connector: 'string',
      databaseName: 'string',
      id: 'string',
      isTemporary: 'boolean',
      tables: { 'type': 'array', 'itemType': LineageTable },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

