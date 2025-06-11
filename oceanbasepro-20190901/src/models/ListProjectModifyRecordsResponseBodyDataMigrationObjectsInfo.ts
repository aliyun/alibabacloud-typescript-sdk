// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTables } from "./ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTables";
import { ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTablesBlack } from "./ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTablesBlack";
import { ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoViews } from "./ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoViews";
import { ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoViewsBlack } from "./ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoViewsBlack";


export class ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfo extends $dara.Model {
  tables?: ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTables[];
  tablesBlack?: ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTablesBlack[];
  views?: ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoViews[];
  viewsBlack?: ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoViewsBlack[];
  /**
   * @example
   * true
   */
  wildcardMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      tables: 'Tables',
      tablesBlack: 'TablesBlack',
      views: 'Views',
      viewsBlack: 'ViewsBlack',
      wildcardMode: 'WildcardMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tables: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTables },
      tablesBlack: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoTablesBlack },
      views: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoViews },
      viewsBlack: { 'type': 'array', 'itemType': ListProjectModifyRecordsResponseBodyDataMigrationObjectsInfoViewsBlack },
      wildcardMode: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    if(Array.isArray(this.tablesBlack)) {
      $dara.Model.validateArray(this.tablesBlack);
    }
    if(Array.isArray(this.views)) {
      $dara.Model.validateArray(this.views);
    }
    if(Array.isArray(this.viewsBlack)) {
      $dara.Model.validateArray(this.viewsBlack);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

