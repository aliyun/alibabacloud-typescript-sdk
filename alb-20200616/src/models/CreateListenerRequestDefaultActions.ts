// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateListenerRequestDefaultActionsForwardGroupConfig } from "./CreateListenerRequestDefaultActionsForwardGroupConfig";


export class CreateListenerRequestDefaultActions extends $dara.Model {
  /**
   * @remarks
   * The configuration of the forwarding action. You can specify at most 20 actions.
   * 
   * This parameter is required.
   */
  forwardGroupConfig?: CreateListenerRequestDefaultActionsForwardGroupConfig;
  /**
   * @remarks
   * The action type. You can specify only one action type. Valid value:
   * 
   * **ForwardGroup**: forwards requests to multiple Server groups.
   * 
   * This parameter is required.
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
      forwardGroupConfig: CreateListenerRequestDefaultActionsForwardGroupConfig,
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

