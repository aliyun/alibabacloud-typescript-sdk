// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintList } from "./DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintList";


export class DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetail extends $dara.Model {
  /**
   * @remarks
   * The schema of the migration object.
   */
  constraintList?: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintList;
  /**
   * @remarks
   * The status of schema migration. Valid values:
   * 
   * - **NotStarted**: Schema migration is not started.
   * - **Migrating**: Schema migration is in progress.
   * - **Failed**: Schema migration failed.
   * - **Finished**: Schema migration is completed.
   * 
   * @example
   * dtstestdata
   */
  destinationOwnerDBName?: string;
  /**
   * @remarks
   * The details of schema migration.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: DTS-1020042 Execute sql error sql: ERROR: column \\"id\\" named in key does not exist
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task has failed for too long and cannot be restored
   * 
   * @example
   * CREATE TABLE `dtstestdata`.`customer` (\\n`runoob_id`  int(10) unsigned   auto_increment  COMMENT \\"\\"   NOT NULL   , \\n`runoob_title`  varchar(100)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT \\"\\"   NOT NULL   , \\n`runoob_author1216`  varchar(40)  CHARSET `utf8` COLLATE `utf8_general_ci`    COMMENT \\"\\"   NOT NULL   , \\n`submission_date1216`  date     COMMENT \\"\\"   NULL   \\n, PRIMARY KEY (`runoob_id`)) engine=InnoDB AUTO_INCREMENT=200001 DEFAULT CHARSET=`utf8` DEFAULT COLLATE `utf8_general_ci` ROW_FORMAT= Dynamic comment = \\"\\" ;\\n
   */
  objectDefinition?: string;
  /**
   * @remarks
   * The name of the database to which the migration object in the source instance belongs.
   * 
   * @example
   * customer
   */
  objectName?: string;
  /**
   * @remarks
   * The name of the database to which the migration object in the destination instance belongs.
   * 
   * @example
   * Table
   */
  objectType?: string;
  /**
   * @remarks
   * The error message returned if incremental data migration failed.
   * 
   * @example
   * dtstestdata
   */
  sourceOwnerDBName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      constraintList: 'ConstraintList',
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      objectDefinition: 'ObjectDefinition',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraintList: DescribeMigrationJobDetailResponseBodyStructureInitializationDetailListStructureInitializationDetailConstraintList,
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      objectDefinition: 'string',
      objectName: 'string',
      objectType: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.constraintList && typeof (this.constraintList as any).validate === 'function') {
      (this.constraintList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

