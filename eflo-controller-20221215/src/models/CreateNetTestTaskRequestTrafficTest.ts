// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetTestTaskRequestTrafficTestClients } from "./CreateNetTestTaskRequestTrafficTestClients";
import { CreateNetTestTaskRequestTrafficTestServers } from "./CreateNetTestTaskRequestTrafficTestServers";


export class CreateNetTestTaskRequestTrafficTest extends $dara.Model {
  /**
   * @remarks
   * The client IDs.
   */
  clients?: CreateNetTestTaskRequestTrafficTestClients[];
  /**
   * @remarks
   * The running duration of the pipeline job. Unit: seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * If the protocol is RDMA, enter True or False. If the protocol is TCP, leave this field empty.
   * 
   * @example
   * False
   */
  GDR?: boolean;
  /**
   * @remarks
   * The network protocol, which can be RDMA or TCP.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * If the protocol is TCP, enter the number of concurrent connections. If the protocol is RDMA, enter the configured QP value.
   * 
   * @example
   * 1
   */
  QP?: number;
  /**
   * @remarks
   * The services.
   */
  servers?: CreateNetTestTaskRequestTrafficTestServers[];
  /**
   * @remarks
   * The traffic model, which can be MTON or Fullmesh.
   * 
   * @example
   * Fullmesh
   */
  trafficModel?: string;
  static names(): { [key: string]: string } {
    return {
      clients: 'Clients',
      duration: 'Duration',
      GDR: 'GDR',
      protocol: 'Protocol',
      QP: 'QP',
      servers: 'Servers',
      trafficModel: 'TrafficModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clients: { 'type': 'array', 'itemType': CreateNetTestTaskRequestTrafficTestClients },
      duration: 'number',
      GDR: 'boolean',
      protocol: 'string',
      QP: 'number',
      servers: { 'type': 'array', 'itemType': CreateNetTestTaskRequestTrafficTestServers },
      trafficModel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clients)) {
      $dara.Model.validateArray(this.clients);
    }
    if(Array.isArray(this.servers)) {
      $dara.Model.validateArray(this.servers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

