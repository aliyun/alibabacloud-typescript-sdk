// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSnapshotMonitorDataResponseBodyMonitorDataDataPoint } from "./DescribeSnapshotMonitorDataResponseBodyMonitorDataDataPoint";


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

