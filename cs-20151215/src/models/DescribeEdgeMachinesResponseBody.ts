// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEdgeMachinesResponseBodyEdgeMachines } from "./DescribeEdgeMachinesResponseBodyEdgeMachines";
import { DescribeEdgeMachinesResponseBodyPageInfo } from "./DescribeEdgeMachinesResponseBodyPageInfo";


export class DescribeEdgeMachinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cloud-native boxes.
   */
  edgeMachines?: DescribeEdgeMachinesResponseBodyEdgeMachines[];
  /**
   * @remarks
   * The paging information.
   */
  pageInfo?: DescribeEdgeMachinesResponseBodyPageInfo;
  static names(): { [key: string]: string } {
    return {
      edgeMachines: 'edge_machines',
      pageInfo: 'page_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edgeMachines: { 'type': 'array', 'itemType': DescribeEdgeMachinesResponseBodyEdgeMachines },
      pageInfo: DescribeEdgeMachinesResponseBodyPageInfo,
    };
  }

  validate() {
    if(Array.isArray(this.edgeMachines)) {
      $dara.Model.validateArray(this.edgeMachines);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

