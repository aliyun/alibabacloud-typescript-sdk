// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetworkInterfaces } from "./DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetworkInterfaces";


export class DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetwork extends $dara.Model {
  /**
   * @remarks
   * The monitoring data of network interface controllers (NICs).
   */
  interfaces?: DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetworkInterfaces[];
  static names(): { [key: string]: string } {
    return {
      interfaces: 'Interfaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interfaces: { 'type': 'array', 'itemType': DescribeMultiContainerGroupMetricResponseBodyMonitorDatasRecordsNetworkInterfaces },
    };
  }

  validate() {
    if(Array.isArray(this.interfaces)) {
      $dara.Model.validateArray(this.interfaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

