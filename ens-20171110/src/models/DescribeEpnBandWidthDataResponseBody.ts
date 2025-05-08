// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEpnBandWidthDataResponseBodyMonitorData } from "./DescribeEpnBandWidthDataResponseBodyMonitorData";


export class DescribeEpnBandWidthDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring data of the instance.
   */
  monitorData?: DescribeEpnBandWidthDataResponseBodyMonitorData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1D289DAA-F6DA-5FC4-AE47-F5C8B6277BFC
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
      monitorData: DescribeEpnBandWidthDataResponseBodyMonitorData,
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

