// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceMonitorDataResponseBodyMonitorData } from "./DescribeInstanceMonitorDataResponseBodyMonitorData";


export class DescribeInstanceMonitorDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. A value of 0 indicates that the operation was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The set of InstanceMonitorDataType data.
   */
  monitorData?: DescribeInstanceMonitorDataResponseBodyMonitorData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C8B26B44-0189-443E-9816-D951F59623A9
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
      monitorData: DescribeInstanceMonitorDataResponseBodyMonitorData,
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

