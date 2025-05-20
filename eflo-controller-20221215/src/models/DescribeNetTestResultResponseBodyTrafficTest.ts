// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetTestResultResponseBodyTrafficTestClients } from "./DescribeNetTestResultResponseBodyTrafficTestClients";
import { DescribeNetTestResultResponseBodyTrafficTestServers } from "./DescribeNetTestResultResponseBodyTrafficTestServers";


export class DescribeNetTestResultResponseBodyTrafficTest extends $dara.Model {
  /**
   * @remarks
   * Resource ID.
   */
  clients?: DescribeNetTestResultResponseBodyTrafficTestClients[];
  /**
   * @remarks
   * Duration of the workflow task in seconds.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * For RDMA, enter True/False; for TCP, this field is empty.
   * 
   * @example
   * False
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
   * For TCP, enter the number of concurrent test connections; for RDMA, enter the configured QP value.
   * 
   * @example
   * 1
   */
  QP?: number;
  /**
   * @remarks
   * List of servers
   */
  servers?: DescribeNetTestResultResponseBodyTrafficTestServers[];
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
      clients: { 'type': 'array', 'itemType': DescribeNetTestResultResponseBodyTrafficTestClients },
      duration: 'number',
      GDR: 'string',
      protocol: 'string',
      QP: 'number',
      servers: { 'type': 'array', 'itemType': DescribeNetTestResultResponseBodyTrafficTestServers },
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

