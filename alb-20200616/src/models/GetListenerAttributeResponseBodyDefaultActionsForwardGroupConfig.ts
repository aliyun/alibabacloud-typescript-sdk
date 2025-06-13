// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfigServerGroupTuples } from "./GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfigServerGroupTuples";


export class GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The server group to which requests are forwarded.
   */
  serverGroupTuples?: GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfigServerGroupTuples },
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

