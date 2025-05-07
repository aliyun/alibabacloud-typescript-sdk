// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores of the node.
   * 
   * @example
   * 2
   */
  cpuCores?: string;
  /**
   * @remarks
   * The ID of the node in the zone.
   * 
   * @example
   * pn-xxxxxxx01
   */
  nodeId?: string;
  /**
   * @remarks
   * The zone ID of the node.
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

