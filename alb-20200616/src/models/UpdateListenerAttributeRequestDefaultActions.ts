// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig } from "./UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig";


export class UpdateListenerAttributeRequestDefaultActions extends $dara.Model {
  /**
   * @remarks
   * The forwarding action. This parameter takes effect only when you set **Type** to **ForwardGroup**. You can specify at most 20 actions.
   */
  forwardGroupConfig?: UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig;
  /**
   * @remarks
   * The action type. You can specify only one type.
   * 
   * Set the value to **ForwardGroup**, which specifies that requests are forwarded to multiple server groups.
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
      forwardGroupConfig: UpdateListenerAttributeRequestDefaultActionsForwardGroupConfig,
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

