// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatusDetail } from "./DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatusDetail";


export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The result of each precheck item.
   */
  detail?: DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatusDetail[];
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
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
   * *   **NotStarted**: The task is not started.
   * *   **Prechecking**: The task is in precheck.
   * *   **PrecheckFailed**: The task failed to pass the precheck.
   * *   **Finished**: The task is complete.
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
      detail: { 'type': 'array', 'itemType': DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobPrecheckStatusDetail },
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

