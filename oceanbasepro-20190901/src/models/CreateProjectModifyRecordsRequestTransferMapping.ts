// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectModifyRecordsRequestTransferMappingBlackTableRules } from "./CreateProjectModifyRecordsRequestTransferMappingBlackTableRules";
import { CreateProjectModifyRecordsRequestTransferMappingBlackViewRules } from "./CreateProjectModifyRecordsRequestTransferMappingBlackViewRules";
import { CreateProjectModifyRecordsRequestTransferMappingDatabases } from "./CreateProjectModifyRecordsRequestTransferMappingDatabases";
import { CreateProjectModifyRecordsRequestTransferMappingDatabasesBlack } from "./CreateProjectModifyRecordsRequestTransferMappingDatabasesBlack";
import { CreateProjectModifyRecordsRequestTransferMappingSchemas } from "./CreateProjectModifyRecordsRequestTransferMappingSchemas";
import { CreateProjectModifyRecordsRequestTransferMappingWhiteTableRules } from "./CreateProjectModifyRecordsRequestTransferMappingWhiteTableRules";
import { CreateProjectModifyRecordsRequestTransferMappingWhiteViewRules } from "./CreateProjectModifyRecordsRequestTransferMappingWhiteViewRules";


export class CreateProjectModifyRecordsRequestTransferMapping extends $dara.Model {
  blackTableRules?: CreateProjectModifyRecordsRequestTransferMappingBlackTableRules[];
  blackViewRules?: CreateProjectModifyRecordsRequestTransferMappingBlackViewRules[];
  databases?: CreateProjectModifyRecordsRequestTransferMappingDatabases[];
  databasesBlack?: CreateProjectModifyRecordsRequestTransferMappingDatabasesBlack[];
  /**
   * @example
   * SPCEIFIC
   */
  mode?: string;
  schemas?: CreateProjectModifyRecordsRequestTransferMappingSchemas[];
  tableAndViewBlackList?: string[];
  tableAndViewWhiteList?: string[];
  whiteTableRules?: CreateProjectModifyRecordsRequestTransferMappingWhiteTableRules[];
  whiteViewRules?: CreateProjectModifyRecordsRequestTransferMappingWhiteViewRules[];
  static names(): { [key: string]: string } {
    return {
      blackTableRules: 'BlackTableRules',
      blackViewRules: 'BlackViewRules',
      databases: 'Databases',
      databasesBlack: 'DatabasesBlack',
      mode: 'Mode',
      schemas: 'Schemas',
      tableAndViewBlackList: 'TableAndViewBlackList',
      tableAndViewWhiteList: 'TableAndViewWhiteList',
      whiteTableRules: 'WhiteTableRules',
      whiteViewRules: 'WhiteViewRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackTableRules: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingBlackTableRules },
      blackViewRules: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingBlackViewRules },
      databases: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingDatabases },
      databasesBlack: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingDatabasesBlack },
      mode: 'string',
      schemas: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingSchemas },
      tableAndViewBlackList: { 'type': 'array', 'itemType': 'string' },
      tableAndViewWhiteList: { 'type': 'array', 'itemType': 'string' },
      whiteTableRules: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingWhiteTableRules },
      whiteViewRules: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestTransferMappingWhiteViewRules },
    };
  }

  validate() {
    if(Array.isArray(this.blackTableRules)) {
      $dara.Model.validateArray(this.blackTableRules);
    }
    if(Array.isArray(this.blackViewRules)) {
      $dara.Model.validateArray(this.blackViewRules);
    }
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    if(Array.isArray(this.databasesBlack)) {
      $dara.Model.validateArray(this.databasesBlack);
    }
    if(Array.isArray(this.schemas)) {
      $dara.Model.validateArray(this.schemas);
    }
    if(Array.isArray(this.tableAndViewBlackList)) {
      $dara.Model.validateArray(this.tableAndViewBlackList);
    }
    if(Array.isArray(this.tableAndViewWhiteList)) {
      $dara.Model.validateArray(this.tableAndViewWhiteList);
    }
    if(Array.isArray(this.whiteTableRules)) {
      $dara.Model.validateArray(this.whiteTableRules);
    }
    if(Array.isArray(this.whiteViewRules)) {
      $dara.Model.validateArray(this.whiteViewRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

