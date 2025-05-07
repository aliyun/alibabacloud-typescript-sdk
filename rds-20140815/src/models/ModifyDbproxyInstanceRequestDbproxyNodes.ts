// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBProxyInstanceRequestDBProxyNodes extends $dara.Model {
  /**
   * @remarks
   * The number of cpu cores for the node, valid values: **1** to **16**.
   * >This parameter is required when selecting **DBProxyNodes**.
   * 
   * @example
   * 1
   */
  cpuCores?: string;
  /**
   * @remarks
   * The number of proxy nodes in the availability zone, valid values: **1** to **16**.
   * >This parameter is required when selecting **DBProxyNodes**.
   * 
   * @example
   * 2
   */
  nodeCounts?: string;
  /**
   * @remarks
   * The id of the availability zone where the node is located.
   * >This parameter is required when selecting **DBProxyNodes**.
   * 
   * @example
   * cn-hagnzhou-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      nodeCounts: 'nodeCounts',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'string',
      nodeCounts: 'string',
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

