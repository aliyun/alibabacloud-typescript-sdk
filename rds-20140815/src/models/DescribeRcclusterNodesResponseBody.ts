// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCClusterNodesResponseBodyNodes } from "./DescribeRcclusterNodesResponseBodyNodes";
import { DescribeRCClusterNodesResponseBodyPage } from "./DescribeRcclusterNodesResponseBodyPage";


export class DescribeRCClusterNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the nodes.
   */
  nodes?: DescribeRCClusterNodesResponseBodyNodes[];
  /**
   * @remarks
   * The pagination information.
   */
  page?: DescribeRCClusterNodesResponseBodyPage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16C62438-491B-5C02-9B49-BA924A1372A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      page: 'Page',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeRCClusterNodesResponseBodyNodes },
      page: DescribeRCClusterNodesResponseBodyPage,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

