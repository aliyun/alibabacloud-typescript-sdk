// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatusDetail } from "./DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatusDetail";


export class DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatus extends $dara.Model {
  /**
   * @remarks
   * The result of each precheck item.
   */
  detail?: DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatusDetail[];
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
   * The precheck status.
   * 
   * @example
   * Finished
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
      detail: { 'type': 'array', 'itemType': DescribeSynchronizationObjectModifyStatusResponseBodyPrecheckStatusDetail },
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

