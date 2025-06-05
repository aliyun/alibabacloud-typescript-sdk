// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateRunning } from "./DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateRunning";
import { DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateTerminated } from "./DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateTerminated";
import { DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateWaiting } from "./DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateWaiting";


export class DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesState extends $dara.Model {
  /**
   * @remarks
   * The container is created and running.
   */
  running?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateRunning;
  /**
   * @remarks
   * The container is terminated and exits after a successful or failed running.
   */
  terminated?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateTerminated;
  /**
   * @remarks
   * The container is waiting for being created.
   */
  waiting?: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateWaiting;
  static names(): { [key: string]: string } {
    return {
      running: 'Running',
      terminated: 'Terminated',
      waiting: 'Waiting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      running: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateRunning,
      terminated: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateTerminated,
      waiting: DescribeContainerGroupStatusResponseBodyDataPodStatusContainerStatusesStateWaiting,
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

