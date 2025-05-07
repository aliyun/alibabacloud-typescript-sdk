// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDBInstanceTopologyResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * rm-m5ezban**********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The ID of the dedicated cluster.
   * 
   * > : If the instance does not reside in the specified dedicated cluster, no value is returned.
   * 
   * @example
   * dhg-4n*****
   */
  dedicatedHostGroupId?: string;
  /**
   * @remarks
   * The host ID of the instance in the dedicated cluster.
   * 
   * > : If the instance does not reside in the specified dedicated cluster, no value is returned.
   * 
   * @example
   * i-bpxxxxxxx
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > : The value \\*\\*-1\\*\\* is returned for an instance that does not reside in a dedicated cluster.
   * 
   * @example
   * 349054
   */
  nodeId?: string;
  /**
   * @remarks
   * The type of the node. The following result is returned:
   * 
   * *   **Master**: a primary node
   * *   **Slave**: a secondary node
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-qingdao-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      dedicatedHostGroupId: 'DedicatedHostGroupId',
      dedicatedHostId: 'DedicatedHostId',
      nodeId: 'NodeId',
      role: 'Role',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      dedicatedHostGroupId: 'string',
      dedicatedHostId: 'string',
      nodeId: 'string',
      role: 'string',
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

