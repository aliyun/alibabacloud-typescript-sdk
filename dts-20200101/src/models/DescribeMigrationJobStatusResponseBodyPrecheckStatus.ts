// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrationJobStatusResponseBodyPrecheckStatusDetail } from "./DescribeMigrationJobStatusResponseBodyPrecheckStatusDetail";


export class DescribeMigrationJobStatusResponseBodyPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The result of each precheck item.
   */
  detail?: DescribeMigrationJobStatusResponseBodyPrecheckStatusDetail;
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
   * The precheck status. Valid values:
   * 
   * *   **NotStarted**
   * *   **Suspending**:
   * *   **Checking**
   * *   **Failed**
   * *   **Finished**
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
      detail: DescribeMigrationJobStatusResponseBodyPrecheckStatusDetail,
      percent: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

