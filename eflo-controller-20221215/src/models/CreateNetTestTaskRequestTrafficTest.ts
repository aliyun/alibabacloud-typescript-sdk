// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateNetTestTaskRequestTrafficTestClients } from "./CreateNetTestTaskRequestTrafficTestClients";
import { CreateNetTestTaskRequestTrafficTestServers } from "./CreateNetTestTaskRequestTrafficTestServers";


export class CreateNetTestTaskRequestTrafficTest extends $dara.Model {
  /**
   * @remarks
   * Resource ID.
   */
  clients?: CreateNetTestTaskRequestTrafficTestClients[];
  /**
   * @remarks
   * The duration of the workflow task in seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Enter True/False when the protocol is RDMA, 
   * this field is empty when the protocol is TCP.
   * 
   * @example
   * False
   */
  GDR?: boolean;
  /**
   * @remarks
   * Network protocol, either RDMA or TCP.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * Enter the number of concurrent connections when the protocol is TCP, or enter the configured QP value when the protocol is RDMA.
   * 
   * @example
   * 1
   */
  QP?: number;
  /**
   * @remarks
   * Service list
   */
  servers?: CreateNetTestTaskRequestTrafficTestServers[];
  /**
   * @remarks
   * Traffic model, either MTON or Fullmesh.
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

