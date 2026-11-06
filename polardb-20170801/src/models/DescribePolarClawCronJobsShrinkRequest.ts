// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawCronJobsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * Specifies whether to include disabled jobs. Default value: true.
   * 
   * @example
   * true
   */
  includeDisabled?: boolean;
  /**
   * @remarks
   * Specifies whether to include the run history. Default value: false.
   * 
   * @example
   * true
   */
  includeRuns?: boolean;
  /**
   * @remarks
   * Filters the results by a list of job IDs.
   * 
   * @example
   * 0ee00f56-f467-4d41-858c-ca4ede2c770e,1ee00f56-f467-4d41-858c-ca4ede2c770f
   */
  jobIdListShrink?: string;
  /**
   * @remarks
   * The maximum number of run history records per job. Default value: 10.
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
      jobIdListShrink: 'JobIdList',
      runLimit: 'RunLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      includeDisabled: 'boolean',
      includeRuns: 'boolean',
      jobIdListShrink: 'string',
      runLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

