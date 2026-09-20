// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResizeNodeCountRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-bp16o0pd52e3y****
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of core nodes in the cluster.
   * 
   * You can add up to 50 nodes at a time, and the total number of nodes can be scaled up to 250. If you have additional requirements, submit a ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  nodeCount?: number;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp191otqj1ssyl****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodeCount: 'NodeCount',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodeCount: 'number',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

