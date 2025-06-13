// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListListenersResponseBodyListenersDefaultActionsForwardGroupConfigServerGroupTuples } from "./ListListenersResponseBodyListenersDefaultActionsForwardGroupConfigServerGroupTuples";


export class ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The server groups to which requests are forwarded.
   */
  serverGroupTuples?: ListListenersResponseBodyListenersDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersDefaultActionsForwardGroupConfigServerGroupTuples },
    };
  }

  validate() {
    if(Array.isArray(this.serverGroupTuples)) {
      $dara.Model.validateArray(this.serverGroupTuples);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

