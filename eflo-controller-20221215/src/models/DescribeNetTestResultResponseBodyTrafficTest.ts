// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetTestResultResponseBodyTrafficTestClients } from "./DescribeNetTestResultResponseBodyTrafficTestClients";
import { DescribeNetTestResultResponseBodyTrafficTestServers } from "./DescribeNetTestResultResponseBodyTrafficTestServers";


export class DescribeNetTestResultResponseBodyTrafficTest extends $dara.Model {
  clients?: DescribeNetTestResultResponseBodyTrafficTestClients[];
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * False
   */
  GDR?: string;
  /**
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @example
   * 1
   */
  QP?: number;
  servers?: DescribeNetTestResultResponseBodyTrafficTestServers[];
  /**
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

