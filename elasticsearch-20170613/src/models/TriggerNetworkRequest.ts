// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The action type. Valid values:
   * 
   * - CLOSE: disable.
   * - OPEN: enable.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN
   */
  actionType?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - PUBLIC: public network.
   * - PRIVATE: private network.
   * 
   * This parameter is required.
   * 
   * @example
   * PUBLIC
   */
  networkType?: string;
  /**
   * @remarks
   * The instance type. Valid values:
   * 
   * - KIBANA: Kibana cluster.
   * - WORKER: Elasticsearch cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * KIBANA
   */
  nodeType?: string;
  /**
   * @remarks
   * A unique token used to ensure idempotence of the request. The client generates this value. The value must be unique among different requests and cannot exceed 64 ASCII characters in length.
   * 
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

