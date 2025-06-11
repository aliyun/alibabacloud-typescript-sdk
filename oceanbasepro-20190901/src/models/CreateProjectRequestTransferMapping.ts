// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectRequestTransferMappingDatabases } from "./CreateProjectRequestTransferMappingDatabases";
import { CreateProjectRequestTransferMappingDatabasesBlack } from "./CreateProjectRequestTransferMappingDatabasesBlack";


export class CreateProjectRequestTransferMapping extends $dara.Model {
  databases?: CreateProjectRequestTransferMappingDatabases[];
  databasesBlack?: CreateProjectRequestTransferMappingDatabasesBlack[];
  /**
   * @example
   * SPCEIFIC
   */
  mode?: string;
  tableAndViewBlackList?: string[];
  tableAndViewWhiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      databasesBlack: 'DatabasesBlack',
      mode: 'Mode',
      tableAndViewBlackList: 'TableAndViewBlackList',
      tableAndViewWhiteList: 'TableAndViewWhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabases },
      databasesBlack: { 'type': 'array', 'itemType': CreateProjectRequestTransferMappingDatabasesBlack },
      mode: 'string',
      tableAndViewBlackList: { 'type': 'array', 'itemType': 'string' },
      tableAndViewWhiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    if(Array.isArray(this.databasesBlack)) {
      $dara.Model.validateArray(this.databasesBlack);
    }
    if(Array.isArray(this.tableAndViewBlackList)) {
      $dara.Model.validateArray(this.tableAndViewBlackList);
    }
    if(Array.isArray(this.tableAndViewWhiteList)) {
      $dara.Model.validateArray(this.tableAndViewWhiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

