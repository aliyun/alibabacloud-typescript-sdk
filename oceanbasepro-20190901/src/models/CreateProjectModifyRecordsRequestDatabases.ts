// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateProjectModifyRecordsRequestDatabasesSpecificTables } from "./CreateProjectModifyRecordsRequestDatabasesSpecificTables";
import { CreateProjectModifyRecordsRequestDatabasesSpecificViews } from "./CreateProjectModifyRecordsRequestDatabasesSpecificViews";
import { CreateProjectModifyRecordsRequestDatabasesTables } from "./CreateProjectModifyRecordsRequestDatabasesTables";
import { CreateProjectModifyRecordsRequestDatabasesViews } from "./CreateProjectModifyRecordsRequestDatabasesViews";


export class CreateProjectModifyRecordsRequestDatabases extends $dara.Model {
  /**
   * @example
   * db_id
   */
  id?: string;
  /**
   * @example
   * mapped_db
   */
  mappedName?: string;
  /**
   * @example
   * db_name
   */
  name?: string;
  specificTables?: CreateProjectModifyRecordsRequestDatabasesSpecificTables[];
  specificViews?: CreateProjectModifyRecordsRequestDatabasesSpecificViews[];
  tables?: CreateProjectModifyRecordsRequestDatabasesTables[];
  views?: CreateProjectModifyRecordsRequestDatabasesViews[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      mappedName: 'MappedName',
      name: 'Name',
      specificTables: 'SpecificTables',
      specificViews: 'SpecificViews',
      tables: 'Tables',
      views: 'Views',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      mappedName: 'string',
      name: 'string',
      specificTables: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestDatabasesSpecificTables },
      specificViews: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestDatabasesSpecificViews },
      tables: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestDatabasesTables },
      views: { 'type': 'array', 'itemType': CreateProjectModifyRecordsRequestDatabasesViews },
    };
  }

  validate() {
    if(Array.isArray(this.specificTables)) {
      $dara.Model.validateArray(this.specificTables);
    }
    if(Array.isArray(this.specificViews)) {
      $dara.Model.validateArray(this.specificViews);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    if(Array.isArray(this.views)) {
      $dara.Model.validateArray(this.views);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

