// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDtsJobsResponseBodyDtsJobListPrecheckStatusDetail } from "./DescribeDtsJobsResponseBodyDtsJobListPrecheckStatusDetail";


export class DescribeDtsJobsResponseBodyDtsJobListPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The result of each precheck item.
   */
  detail?: DescribeDtsJobsResponseBodyDtsJobListPrecheckStatusDetail[];
  /**
   * @remarks
   * The cause of the precheck failure.
   * 
   * @example
   * CHECK__ERROR_SAME_OBJ.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The precheck progress. This is expressed as a percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The precheck status. Valid values:
   * 
   * *   **NotStarted**
   * *   **Suspending**:
   * *   **Checking**
   * *   **Failed**
   * *   **Finished**
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
      detail: { 'type': 'array', 'itemType': DescribeDtsJobsResponseBodyDtsJobListPrecheckStatusDetail },
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

