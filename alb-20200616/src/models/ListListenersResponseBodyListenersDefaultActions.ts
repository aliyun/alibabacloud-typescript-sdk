// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig } from "./ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig";


export class ListListenersResponseBodyListenersDefaultActions extends $dara.Model {
  /**
   * @remarks
   * The configuration of the forwarding rule action. This parameter takes effect only when the action is **ForwardGroup**.
   */
  forwardGroupConfig?: ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig;
  /**
   * @remarks
   * The action. **ForwardGroup**: forwards requests to multiple server groups.
   * 
   * @example
   * ForwardGroup
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      forwardGroupConfig: 'ForwardGroupConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardGroupConfig: ListListenersResponseBodyListenersDefaultActionsForwardGroupConfig,
      type: 'string',
    };
  }

  validate() {
    if(this.forwardGroupConfig && typeof (this.forwardGroupConfig as any).validate === 'function') {
      (this.forwardGroupConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

