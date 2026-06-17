// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawCronJobsRequest extends $dara.Model {
  /**
   * @remarks
   * Application ID
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * Include disabled tasks. Default is true.
   * 
   * @example
   * true
   */
  includeDisabled?: boolean;
  /**
   * @remarks
   * Include run history. Default is false.
   * 
   * @example
   * true
   */
  includeRuns?: boolean;
  /**
   * @remarks
   * Filter by Job ID list
   * 
   * @example
   * 0ee00f56-f467-4d41-858c-ca4ede2c770e,1ee00f56-f467-4d41-858c-ca4ede2c770f
   */
  jobIdList?: string[];
  /**
   * @remarks
   * Maximum number of run history entries per task. Default is 10.
   * 
   * @example
   * 10
   */
  runLimit?: number;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      includeDisabled: 'IncludeDisabled',
      includeRuns: 'IncludeRuns',
      jobIdList: 'JobIdList',
      runLimit: 'RunLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      includeDisabled: 'boolean',
      includeRuns: 'boolean',
      jobIdList: { 'type': 'array', 'itemType': 'string' },
      runLimit: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobIdList)) {
      $dara.Model.validateArray(this.jobIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

