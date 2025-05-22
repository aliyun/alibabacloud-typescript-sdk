// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsResponseBodyEtlDemoListStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if schema migration or initial schema synchronization failed.
   * 
   * @example
   * DTS-1020042 Execute sql error sql: ERROR: type "geometry" does not exist;
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of schema migration or initial schema synchronization. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables that have been migrated or synchronized during schema migration or initial schema synchronization.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The state of schema migration or initial schema synchronization. Valid values:
   * 
   * - **NotStarted**: The task is not started. 
   * - **Migrating**: The task is in progress. 
   * - **Failed**: The task failed. 
   * - **Finished**: The task is complete.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      percent: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

