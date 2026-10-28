// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskInstanceEvent extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2023-06-22T00:02:00Z
   */
  gmtEndTime?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * The message content.
   */
  message?: string;
  /**
   * @remarks
   * The name of the pod involved in the task.
   * 
   * @example
   * test
   */
  podName?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * Complete
   */
  status?: string;
  /**
   * @remarks
   * The sub-product type involved in the task.
   * 
   * @example
   * dlc
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      gmtEndTime: 'GmtEndTime',
      gmtStartTime: 'GmtStartTime',
      message: 'Message',
      podName: 'PodName',
      status: 'Status',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtEndTime: 'string',
      gmtStartTime: 'string',
      message: 'string',
      podName: 'string',
      status: 'string',
      workloadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

