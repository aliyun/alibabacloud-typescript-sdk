// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceTopologyResponseBodyTopologys } from "./DescribeInstanceTopologyResponseBodyTopologys";


export class DescribeInstanceTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the topology.
   */
  topologys?: DescribeInstanceTopologyResponseBodyTopologys;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topologys: 'Topologys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topologys: DescribeInstanceTopologyResponseBodyTopologys,
    };
  }

  validate() {
    if(this.topologys && typeof (this.topologys as any).validate === 'function') {
      (this.topologys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

