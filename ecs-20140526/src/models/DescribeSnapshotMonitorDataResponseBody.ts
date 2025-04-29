// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnapshotMonitorDataResponseBodyMonitorData } from "./DescribeSnapshotMonitorDataResponseBodyMonitorData";


export class DescribeSnapshotMonitorDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring data of snapshot sizes.
   */
  monitorData?: DescribeSnapshotMonitorDataResponseBodyMonitorData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9F8163A8-F5DE-47A2-A572-4E062D223E09
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorData: 'MonitorData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorData: DescribeSnapshotMonitorDataResponseBodyMonitorData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.monitorData && typeof (this.monitorData as any).validate === 'function') {
      (this.monitorData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

