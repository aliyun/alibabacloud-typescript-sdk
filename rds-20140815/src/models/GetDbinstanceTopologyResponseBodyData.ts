// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDBInstanceTopologyResponseBodyDataConnections } from "./GetDbinstanceTopologyResponseBodyDataConnections";
import { GetDBInstanceTopologyResponseBodyDataNodes } from "./GetDbinstanceTopologyResponseBodyDataNodes";


export class GetDBInstanceTopologyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The network connection information of the instance.
   */
  connections?: GetDBInstanceTopologyResponseBodyDataConnections[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-m5ezban**********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The queried nodes.
   */
  nodes?: GetDBInstanceTopologyResponseBodyDataNodes[];
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      DBInstanceName: 'DBInstanceName',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': GetDBInstanceTopologyResponseBodyDataConnections },
      DBInstanceName: 'string',
      nodes: { 'type': 'array', 'itemType': GetDBInstanceTopologyResponseBodyDataNodes },
    };
  }

  validate() {
    if(Array.isArray(this.connections)) {
      $dara.Model.validateArray(this.connections);
    }
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

