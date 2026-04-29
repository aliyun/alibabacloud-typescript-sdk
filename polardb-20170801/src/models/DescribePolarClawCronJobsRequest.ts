// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawCronJobsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @example
   * true
   */
  includeDisabled?: boolean;
  /**
   * @example
   * true
   */
  includeRuns?: boolean;
  /**
   * @example
   * 0ee00f56-f467-4d41-858c-ca4ede2c770e,1ee00f56-f467-4d41-858c-ca4ede2c770f
   */
  jobIdList?: string[];
  /**
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

