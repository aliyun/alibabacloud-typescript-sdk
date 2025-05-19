// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeStatusListResponseBodyNodeStatusListNodeStatus } from "./NodeStatusListResponseBodyNodeStatusListNodeStatus";


export class NodeStatusListResponseBodyNodeStatusList extends $dara.Model {
  nodeStatus?: NodeStatusListResponseBodyNodeStatusListNodeStatus[];
  static names(): { [key: string]: string } {
    return {
      nodeStatus: 'NodeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeStatus: { 'type': 'array', 'itemType': NodeStatusListResponseBodyNodeStatusListNodeStatus },
    };
  }

  validate() {
    if(Array.isArray(this.nodeStatus)) {
      $dara.Model.validateArray(this.nodeStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

