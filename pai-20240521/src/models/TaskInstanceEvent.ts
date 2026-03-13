// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskInstanceEvent extends $dara.Model {
  gmtEndTime?: string;
  gmtStartTime?: string;
  message?: string;
  podName?: string;
  status?: string;
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

