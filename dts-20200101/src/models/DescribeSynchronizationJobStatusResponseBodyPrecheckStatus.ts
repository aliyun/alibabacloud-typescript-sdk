// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSynchronizationJobStatusResponseBodyPrecheckStatusDetail } from "./DescribeSynchronizationJobStatusResponseBodyPrecheckStatusDetail";


export class DescribeSynchronizationJobStatusResponseBodyPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The result of each precheck item.
   */
  detail?: DescribeSynchronizationJobStatusResponseBodyPrecheckStatusDetail[];
  /**
   * @remarks
   * The precheck progress. Unit: %.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The precheck result. Valid values:
   * 
   * *   **Success**: The task passed the precheck.
   * *   **Failed**: The task failed to pass the precheck.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': DescribeSynchronizationJobStatusResponseBodyPrecheckStatusDetail },
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

