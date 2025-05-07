// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBProxyRequestDBProxyNodes extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores of the node. Valid values: **1** to **16**.
   * 
   * >  This parameter is required when you configure the **DBProxyNodes** parameter.
   * 
   * @example
   * 1
   */
  cpuCores?: string;
  /**
   * @remarks
   * The number of proxy nodes in the zone. Valid values: **1** and **2**.
   * 
   * >  This parameter is required when you configure the **DBProxyNodes** parameter.
   * 
   * @example
   * 2
   */
  nodeCounts?: string;
  /**
   * @remarks
   * The ID of the zone in which the node resides.
   * 
   * >  This parameter is required when you configure the **DBProxyNodes** parameter.
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

