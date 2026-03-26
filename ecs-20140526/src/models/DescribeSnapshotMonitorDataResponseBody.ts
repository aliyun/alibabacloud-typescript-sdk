// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSnapshotMonitorDataResponseBodyMonitorDataDataPoint extends $dara.Model {
  size?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      size: 'Size',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotMonitorDataResponseBodyMonitorData extends $dara.Model {
  dataPoint?: DescribeSnapshotMonitorDataResponseBodyMonitorDataDataPoint[];
  static names(): { [key: string]: string } {
    return {
      dataPoint: 'DataPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataPoint: { 'type': 'array', 'itemType': DescribeSnapshotMonitorDataResponseBodyMonitorDataDataPoint },
    };
  }

  validate() {
    if(Array.isArray(this.dataPoint)) {
      $dara.Model.validateArray(this.dataPoint);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotMonitorDataResponseBody extends $dara.Model {
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

