// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupMetricResponseBodyRecordsNetworkInterfaces } from "./DescribeContainerGroupMetricResponseBodyRecordsNetworkInterfaces";


export class DescribeContainerGroupMetricResponseBodyRecordsNetwork extends $dara.Model {
  /**
   * @remarks
   * The monitoring data of network interface controllers (NICs).
   */
  interfaces?: DescribeContainerGroupMetricResponseBodyRecordsNetworkInterfaces[];
  static names(): { [key: string]: string } {
    return {
      interfaces: 'Interfaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interfaces: { 'type': 'array', 'itemType': DescribeContainerGroupMetricResponseBodyRecordsNetworkInterfaces },
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

