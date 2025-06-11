// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTopologyResponseBodyInstanceTopology } from "./DescribeInstanceTopologyResponseBodyInstanceTopology";


export class DescribeInstanceTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The topology of the cluster.
   */
  instanceTopology?: DescribeInstanceTopologyResponseBodyInstanceTopology;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE205C00-30E4-****-****-87E3A8A2AA0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTopology: 'InstanceTopology',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTopology: DescribeInstanceTopologyResponseBodyInstanceTopology,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceTopology && typeof (this.instanceTopology as any).validate === 'function') {
      (this.instanceTopology as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

