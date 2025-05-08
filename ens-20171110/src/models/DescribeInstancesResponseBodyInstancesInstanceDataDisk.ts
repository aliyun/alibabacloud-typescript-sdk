// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceDataDiskDataDisk } from "./DescribeInstancesResponseBodyInstancesInstanceDataDiskDataDisk";


export class DescribeInstancesResponseBodyInstancesInstanceDataDisk extends $dara.Model {
  dataDisk?: DescribeInstancesResponseBodyInstancesInstanceDataDiskDataDisk[];
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesInstanceDataDiskDataDisk },
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

