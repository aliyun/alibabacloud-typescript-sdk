// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiskMonitorDataResponseBodyMonitorData } from "./DescribeDiskMonitorDataResponseBodyMonitorData";


export class DescribeDiskMonitorDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring data of the disk.
   */
  monitorData?: DescribeDiskMonitorDataResponseBodyMonitorData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of monitoring data entries returned.
   * 
   * @example
   * 3
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
      monitorData: DescribeDiskMonitorDataResponseBodyMonitorData,
      requestId: 'string',
      totalCount: 'number',
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

