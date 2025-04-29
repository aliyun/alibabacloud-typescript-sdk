// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiskMonitorDataResponseBodyMonitorData } from "./DescribeDiskMonitorDataResponseBodyMonitorData";


export class DescribeDiskMonitorDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The near real-time monitoring data of the disk.
   */
  monitorData?: DescribeDiskMonitorDataResponseBodyMonitorData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      monitorData: 'MonitorData',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorData: { 'type': 'array', 'itemType': DescribeDiskMonitorDataResponseBodyMonitorData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.monitorData)) {
      $dara.Model.validateArray(this.monitorData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

