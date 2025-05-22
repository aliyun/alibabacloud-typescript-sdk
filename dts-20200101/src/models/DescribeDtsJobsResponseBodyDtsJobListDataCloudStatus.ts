// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsResponseBodyDtsJobListDataCloudStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * framework: DTS-31009: In process of processing data ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance needs to be upgraded. Valid values:
   * 
   * - **true** 
   * - **false**
   * 
   * @example
   * false
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The progress of the task. Unit: percentage.
   * 
   * @example
   * 85
   */
  percent?: string;
  /**
   * @remarks
   * The number of tables that have been migrated.
   * 
   * @example
   * 1
   */
  progress?: string;
  /**
   * @remarks
   * The state of the task. For more information about the valid values, see the description of the request parameter **Status**.
   * 
   * @example
   * Migrating
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

