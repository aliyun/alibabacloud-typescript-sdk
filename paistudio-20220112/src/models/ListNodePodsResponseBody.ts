// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodePodInfo } from "./NodePodInfo";


export class ListNodePodsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The node pod information.
   */
  nodePodInfos?: NodePodInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodePodInfos: 'NodePodInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodePodInfos: { 'type': 'array', 'itemType': NodePodInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodePodInfos)) {
      $dara.Model.validateArray(this.nodePodInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

