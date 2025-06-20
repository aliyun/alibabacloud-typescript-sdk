// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetTestTaskRequestTrafficTestServers extends $dara.Model {
  /**
   * @remarks
   * The bonding of network interface card.
   * 
   * @example
   * bond1
   */
  bond?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 47.121.110.190
   */
  IP?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-tw-bqisacl3z6l
   */
  nodeId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * e01-cn-wwo3etaqu0b
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * xMv
   */
  serverName?: string;
  static names(): { [key: string]: string } {
    return {
      bond: 'Bond',
      IP: 'IP',
      nodeId: 'NodeId',
      resourceId: 'ResourceId',
      serverName: 'ServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bond: 'string',
      IP: 'string',
      nodeId: 'string',
      resourceId: 'string',
      serverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

