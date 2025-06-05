// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateRunning } from "./DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateRunning";
import { DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateTerminated } from "./DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateTerminated";
import { DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateWaiting } from "./DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateWaiting";


export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastState extends $dara.Model {
  /**
   * @remarks
   * The container is created and running.
   */
  running?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateRunning;
  /**
   * @remarks
   * The container is terminated and exits after a successful or failed running.
   */
  terminated?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateTerminated;
  /**
   * @remarks
   * The container is waiting for being created.
   */
  waiting?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateWaiting;
  static names(): { [key: string]: string } {
    return {
      running: 'Running',
      terminated: 'Terminated',
      waiting: 'Waiting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      running: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateRunning,
      terminated: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateTerminated,
      waiting: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesLastStateWaiting,
    };
  }

  validate() {
    if(this.running && typeof (this.running as any).validate === 'function') {
      (this.running as any).validate();
    }
    if(this.terminated && typeof (this.terminated as any).validate === 'function') {
      (this.terminated as any).validate();
    }
    if(this.waiting && typeof (this.waiting as any).validate === 'function') {
      (this.waiting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

