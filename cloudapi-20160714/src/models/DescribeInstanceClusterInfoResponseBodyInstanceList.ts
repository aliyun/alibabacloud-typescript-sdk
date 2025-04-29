// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceClusterInfoResponseBodyInstanceListInstance } from "./DescribeInstanceClusterInfoResponseBodyInstanceListInstance";


export class DescribeInstanceClusterInfoResponseBodyInstanceList extends $dara.Model {
  instance?: DescribeInstanceClusterInfoResponseBodyInstanceListInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeInstanceClusterInfoResponseBodyInstanceListInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

