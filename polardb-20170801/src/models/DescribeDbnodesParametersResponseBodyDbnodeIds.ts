// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBNodesParametersResponseBodyDBNodeIdsRunningParameters } from "./DescribeDbnodesParametersResponseBodyDbnodeIdsRunningParameters";


export class DescribeDBNodesParametersResponseBodyDBNodeIds extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * pi-bp1r4qe3s534*****
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The parameters of the current node.
   */
  runningParameters?: DescribeDBNodesParametersResponseBodyDBNodeIdsRunningParameters[];
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      runningParameters: { 'type': 'array', 'itemType': DescribeDBNodesParametersResponseBodyDBNodeIdsRunningParameters },
    };
  }

  validate() {
    if(Array.isArray(this.runningParameters)) {
      $dara.Model.validateArray(this.runningParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

