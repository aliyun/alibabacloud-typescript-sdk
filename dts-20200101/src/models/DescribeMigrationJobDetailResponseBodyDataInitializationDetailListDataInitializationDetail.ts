// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrationJobDetailResponseBodyDataInitializationDetailListDataInitializationDetail extends $dara.Model {
  /**
   * @remarks
   * The status of full data migration. Valid values:
   * 
   * - **NotStarted**: Full data migration is not started.
   * - **Migrating**: Full data migration is in progress.
   * - **Failed**: Full data migration failed.
   * - **Finished**: Full data migration is completed.
   * 
   * @example
   * dtstestdata
   */
  destinationOwnerDBName?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The details of full data migration.
   * 
   * @example
   * 200001
   */
  finishRowNum?: string;
  /**
   * @remarks
   * The name of the database to which the migration object in the source instance belongs.
   * 
   * @example
   * 0.0
   */
  migrationTime?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * dtstestdata
   */
  sourceOwnerDBName?: string;
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * customer
   */
  tableName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * 201477
   */
  totalRowNum?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      finishRowNum: 'FinishRowNum',
      migrationTime: 'MigrationTime',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
      tableName: 'TableName',
      totalRowNum: 'TotalRowNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      finishRowNum: 'string',
      migrationTime: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
      tableName: 'string',
      totalRowNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

