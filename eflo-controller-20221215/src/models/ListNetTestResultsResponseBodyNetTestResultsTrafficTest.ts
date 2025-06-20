// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNetTestResultsResponseBodyNetTestResultsTrafficTestClients } from "./ListNetTestResultsResponseBodyNetTestResultsTrafficTestClients";
import { ListNetTestResultsResponseBodyNetTestResultsTrafficTestServers } from "./ListNetTestResultsResponseBodyNetTestResultsTrafficTestServers";


export class ListNetTestResultsResponseBodyNetTestResultsTrafficTest extends $dara.Model {
  /**
   * @remarks
   * The clients.
   */
  clients?: ListNetTestResultsResponseBodyNetTestResultsTrafficTestClients[];
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
   * If the protocol is RDMA, can be True or False. If the protocol is TCP, this field is empty.
   * 
   * @example
   * True
   */
  GDR?: string;
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
   * If the protocol is TCP, the number of concurrent connections. If the protocol is RDMA, the configured QP value.
   * 
   * @example
   * RDMA
   */
  QP?: number;
  /**
   * @remarks
   * If the TrafficModel is Fullmesh, this parameter is empty.
   */
  servers?: ListNetTestResultsResponseBodyNetTestResultsTrafficTestServers[];
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
      clients: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResultsTrafficTestClients },
      duration: 'number',
      GDR: 'string',
      protocol: 'string',
      QP: 'number',
      servers: { 'type': 'array', 'itemType': ListNetTestResultsResponseBodyNetTestResultsTrafficTestServers },
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

