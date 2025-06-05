// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMultiContainerGroupMetricResponseBodyMonitorDatas } from "./DescribeMultiContainerGroupMetricResponseBodyMonitorDatas";


export class DescribeMultiContainerGroupMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring data of the elastic container instances.
   */
  monitorDatas?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B8756BA0-6452-419C-9727-37A6209C85E0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorDatas: 'MonitorDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorDatas: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatas },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.monitorDatas)) {
      $dara.Model.validateArray(this.monitorDatas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

