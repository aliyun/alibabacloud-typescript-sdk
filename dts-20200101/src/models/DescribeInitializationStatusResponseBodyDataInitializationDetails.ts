// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInitializationStatusResponseBodyDataInitializationDetails extends $dara.Model {
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
   * The error message returned if initial full data synchronization failed.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The total number of rows that are actually synchronized.
   * 
   * >  This parameter indicates the total number of actually synchronized rows. In contrast, the value of the **TotalRowNum** parameter is calculated based on the system tables in the source database. The values of the two parameters may be different due to time difference.
   * 
   * @example
   * 9993
   */
  finishRowNum?: string;
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
   * The status of initial full data synchronization. Valid values:
   * 
   * *   **NotStarted**
   * *   **Migrating**
   * *   **Failed**
   * *   **Finished**
   * 
   * @example
   * Finished
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
  /**
   * @remarks
   * The total number of rows that are supposed to be synchronized.
   * 
   * >  The value of this parameter is calculated based on the system tables in the source database. In contrast, the **FinishRowNum** parameter indicates the total number of actually synchronized rows. The values of the two parameters may be different due to time difference.
   * 
   * @example
   * 9981
   */
  totalRowNum?: string;
  /**
   * @remarks
   * The time spent on full data synchronization.
   * 
   * @example
   * 0.0
   */
  usedTime?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      finishRowNum: 'FinishRowNum',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
      tableName: 'TableName',
      totalRowNum: 'TotalRowNum',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      finishRowNum: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
      tableName: 'string',
      totalRowNum: 'string',
      usedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

