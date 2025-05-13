// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN
   */
  actionType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PUBLIC
   */
  networkType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * KIBANA
   */
  nodeType?: string;
  /**
   * @example
   * 407d02b74c49beb5bfdac7ec8bde2488
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'actionType',
      networkType: 'networkType',
      nodeType: 'nodeType',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      networkType: 'string',
      nodeType: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

