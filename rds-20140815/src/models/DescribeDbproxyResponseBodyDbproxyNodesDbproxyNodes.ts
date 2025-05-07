// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyResponseBodyDBProxyNodesDBProxyNodes extends $dara.Model {
  /**
   * @remarks
   * The number of cpu cores for the node.
   * 
   * @example
   * 2
   */
  cpuCores?: string;
  /**
   * @remarks
   * The proxy node id.
   * 
   * @example
   * pn-xxxxxxx01
   */
  nodeId?: string;
  /**
   * @remarks
   * The id of the availability zone where the node is located.
   * 
   * @example
   * cn-hangzhou-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      nodeId: 'nodeId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'string',
      nodeId: 'string',
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

