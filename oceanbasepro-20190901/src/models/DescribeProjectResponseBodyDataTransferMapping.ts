// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProjectResponseBodyDataTransferMappingDatabases } from "./DescribeProjectResponseBodyDataTransferMappingDatabases";
import { DescribeProjectResponseBodyDataTransferMappingDatabasesBlack } from "./DescribeProjectResponseBodyDataTransferMappingDatabasesBlack";


export class DescribeProjectResponseBodyDataTransferMapping extends $dara.Model {
  databases?: DescribeProjectResponseBodyDataTransferMappingDatabases[];
  databasesBlack?: DescribeProjectResponseBodyDataTransferMappingDatabasesBlack[];
  /**
   * @example
   * SPECIFIC
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
      databases: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabases },
      databasesBlack: { 'type': 'array', 'itemType': DescribeProjectResponseBodyDataTransferMappingDatabasesBlack },
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

