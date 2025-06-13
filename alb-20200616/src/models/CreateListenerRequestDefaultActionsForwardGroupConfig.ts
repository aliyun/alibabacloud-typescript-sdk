// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateListenerRequestDefaultActionsForwardGroupConfigServerGroupTuples } from "./CreateListenerRequestDefaultActionsForwardGroupConfigServerGroupTuples";


export class CreateListenerRequestDefaultActionsForwardGroupConfig extends $dara.Model {
  /**
   * @remarks
   * The destination server group to which requests are forwarded.
   * 
   * This parameter is required.
   */
  serverGroupTuples?: CreateListenerRequestDefaultActionsForwardGroupConfigServerGroupTuples[];
  static names(): { [key: string]: string } {
    return {
      serverGroupTuples: 'ServerGroupTuples',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serverGroupTuples: { 'type': 'array', 'itemType': CreateListenerRequestDefaultActionsForwardGroupConfigServerGroupTuples },
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

