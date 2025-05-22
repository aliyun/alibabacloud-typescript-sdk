// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObjectTableList } from "./DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObjectTableList";


export class DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObject extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the migration object in the source instance belongs.
   * 
   * @example
   * dtstestdata
   */
  databaseName?: string;
  /**
   * @remarks
   * The names of the migrated tables.
   */
  tableList?: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObjectTableList;
  /**
   * @remarks
   * Indicates whether an entire database is migrated. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  wholeDatabase?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      tableList: 'TableList',
      wholeDatabase: 'WholeDatabase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      tableList: DescribeMigrationJobsResponseBodyMigrationJobsMigrationJobMigrationObjectSynchronousObjectTableList,
      wholeDatabase: 'string',
    };
  }

  validate() {
    if(this.tableList && typeof (this.tableList as any).validate === 'function') {
      (this.tableList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

