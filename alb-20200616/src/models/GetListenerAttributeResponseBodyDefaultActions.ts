// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig } from "./GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig";


export class GetListenerAttributeResponseBodyDefaultActions extends $dara.Model {
  /**
   * @remarks
   * The configuration of the ForwardGroup action. This parameter is returned and takes effect when Type is set to **ForwardGroup**.
   */
  forwardGroupConfig?: GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig;
  /**
   * @remarks
   * The type of the action.
   * 
   * If **ForwardGroup** is returned, requests are forwarded to multiple vServer groups.
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
      forwardGroupConfig: GetListenerAttributeResponseBodyDefaultActionsForwardGroupConfig,
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

