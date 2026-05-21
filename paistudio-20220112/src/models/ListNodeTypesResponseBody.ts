// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeType } from "./NodeType";
import { NodeTypeStatistic } from "./NodeTypeStatistic";


export class ListNodeTypesResponseBody extends $dara.Model {
  nodeTypes?: NodeType[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  statistics?: NodeTypeStatistic[];
  static names(): { [key: string]: string } {
    return {
      nodeTypes: 'NodeTypes',
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeTypes: { 'type': 'array', 'itemType': NodeType },
      requestId: 'string',
      statistics: { 'type': 'array', 'itemType': NodeTypeStatistic },
    };
  }

  validate() {
    if(Array.isArray(this.nodeTypes)) {
      $dara.Model.validateArray(this.nodeTypes);
    }
    if(Array.isArray(this.statistics)) {
      $dara.Model.validateArray(this.statistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

