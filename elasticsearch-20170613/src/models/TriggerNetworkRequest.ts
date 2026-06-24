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
   * A client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
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

