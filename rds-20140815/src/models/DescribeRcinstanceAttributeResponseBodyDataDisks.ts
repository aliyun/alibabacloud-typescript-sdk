// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceAttributeResponseBodyDataDisksDataDisk } from "./DescribeRcinstanceAttributeResponseBodyDataDisksDataDisk";


export class DescribeRCInstanceAttributeResponseBodyDataDisks extends $dara.Model {
  dataDisk?: DescribeRCInstanceAttributeResponseBodyDataDisksDataDisk[];
  static names(): { [key: string]: string } {
    return {
      dataDisk: 'DataDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisk: { 'type': 'array', 'itemType': DescribeRCInstanceAttributeResponseBodyDataDisksDataDisk },
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

