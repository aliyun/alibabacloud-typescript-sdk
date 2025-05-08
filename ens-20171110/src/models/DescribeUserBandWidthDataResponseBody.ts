// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserBandWidthDataResponseBodyMonitorData } from "./DescribeUserBandWidthDataResponseBodyMonitorData";


export class DescribeUserBandWidthDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. 0 indicates that the request was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The monitoring data.
   */
  monitorData?: DescribeUserBandWidthDataResponseBodyMonitorData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 50373E71-7710-4620-8AAB-133CCE49451C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      monitorData: 'MonitorData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      monitorData: DescribeUserBandWidthDataResponseBodyMonitorData,
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

