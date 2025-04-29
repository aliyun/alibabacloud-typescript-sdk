// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTopologyResponseBodyTopologysTopology } from "./DescribeInstanceTopologyResponseBodyTopologysTopology";


export class DescribeInstanceTopologyResponseBodyTopologys extends $dara.Model {
  topology?: DescribeInstanceTopologyResponseBodyTopologysTopology[];
  static names(): { [key: string]: string } {
    return {
      topology: 'Topology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topology: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyTopologysTopology },
    };
  }

  validate() {
    if(Array.isArray(this.topology)) {
      $dara.Model.validateArray(this.topology);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

