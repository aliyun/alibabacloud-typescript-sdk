// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInitializationStatusResponseBodyDataSynchronizationDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the database to which the object in the destination instance belongs.
   * 
   * @example
   * dtstestdata
   */
  destinationOwnerDBName?: string;
  /**
   * @remarks
   * The error message returned if incremental data synchronization failed.
   * 
   * @example
   * The task has failed for too long and cannot be repaired
   */
  errorMessage?: string;
  /**
   * @remarks
   * The name of the database to which the object in the source instance belongs.
   * 
   * @example
   * dtstestdata
   */
  sourceOwnerDBName?: string;
  /**
   * @remarks
   * The status of incremental data synchronization. Valid values:
   * 
   * *   **NotStarted**
   * *   **Migrating**
   * *   **Failed**
   * *   **Finished**
   * 
   * @example
   * Migrating
   */
  status?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * customer
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

