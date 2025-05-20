// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNetTestResultsResponseBodyNetTestResultsTrafficTestClients } from "./ListNetTestResultsResponseBodyNetTestResultsTrafficTestClients";
import { ListNetTestResultsResponseBodyNetTestResultsTrafficTestServers } from "./ListNetTestResultsResponseBodyNetTestResultsTrafficTestServers";


export class ListNetTestResultsResponseBodyNetTestResultsTrafficTest extends $dara.Model {
  /**
   * @remarks
   * Clients
   */
  clients?: ListNetTestResultsResponseBodyNetTestResultsTrafficTestClients[];
  /**
   * @remarks
   * Duration of the workflow task, in seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * 协议为RDMA时，填写True/False，
   * 协议为TCP时，此字段为空。
   * 
   * @example
   * True
   */
  GDR?: string;
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
   * For TCP, enter the number of concurrent connections; for RDMA, enter the configured QP value.
   * 
   * @example
   * RDMA
   */
  QP?: number;
  /**
   * @remarks
   * This field is empty when the traffic model (TrafficModel) is Fullmesh.
   */
  servers?: ListNetTestResultsResponseBodyNetTestResultsTrafficTestServers[];
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

