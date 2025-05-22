// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobStructureInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * Error message indicating task failure.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Whether to display upgrade specifications, return value:
   * 
   * - True: Yes.
   * - False: No.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * Initialization progress of library table structure, measured in percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables that have completed library table structure initialization.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The initialization status of the library table structure includes:
   * 
   * - NotStarted: Not started.
   * - Migration: In the process of initialization.
   * - Failed: Initialization failed.
   * - Finished: Initialization completed.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
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

