// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEipMonitorDataResponseBodyEipMonitorDatas } from "./DescribeEipMonitorDataResponseBodyEipMonitorDatas";


export class DescribeEipMonitorDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the monitoring data of the EIP.
   */
  eipMonitorDatas?: DescribeEipMonitorDataResponseBodyEipMonitorDatas;
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
      eipMonitorDatas: 'EipMonitorDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipMonitorDatas: DescribeEipMonitorDataResponseBodyEipMonitorDatas,
      requestId: 'string',
    };
  }

  validate() {
    if(this.eipMonitorDatas && typeof (this.eipMonitorDatas as any).validate === 'function') {
      (this.eipMonitorDatas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

