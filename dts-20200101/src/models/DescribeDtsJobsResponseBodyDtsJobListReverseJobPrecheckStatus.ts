// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatusDetail } from "./DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatusDetail";


export class DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The result of each precheck item.
   */
  detail?: DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned if the precheck failed.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The precheck progress. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The precheck state. Valid values:
   * 
   * - **NotStarted**: The precheck is not started. 
   * - **Suspending**: The precheck is paused. 
   * - **Checking**: The precheck is in progress. 
   * - **Failed**: The precheck failed. 
   * - **Finished**: The precheck is complete.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListReverseJobPrecheckStatusDetail },
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

