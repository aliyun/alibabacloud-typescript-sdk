// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetTestTaskRequestDelayTestHosts extends $dara.Model {
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
   * 125.210.225.48
   */
  IP?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-fou43an0a05
   */
  nodeId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * e01-cn-bcd3u1aee06
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * NQU
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

