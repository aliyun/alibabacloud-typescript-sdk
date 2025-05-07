// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyItemsDBInstanceAttributeDBClusterNodesDBClusterNode extends $dara.Model {
  /**
   * @remarks
   * The node specification.
   * 
   * @example
   * mysql.n2.medium.xc
   */
  classCode?: string;
  /**
   * @remarks
   * The node type. Default value: true. Valid values:
   * 
   * *   d: dedicated node type
   * *   x: general-purpose node type
   * 
   * @example
   * x
   */
  classType?: string;
  /**
   * @remarks
   * The number of CPU cores of the node.
   * 
   * @example
   * 4
   */
  cpu?: string;
  /**
   * @remarks
   * The memory capacity of the node. Unit: MB.
   * 
   * @example
   * 4096
   */
  memory?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * rn-****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  nodeRegionId?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   **primary**
   * *   **secondary**
   * 
   * @example
   * primary
   */
  nodeRole?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-h
   */
  nodeZoneId?: string;
  /**
   * @remarks
   * The node status. Valid values:
   * 
   * *   active
   * *   creating
   * *   deleting
   * *   classchanging
   * *   restarting
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      classType: 'ClassType',
      cpu: 'Cpu',
      memory: 'Memory',
      nodeId: 'NodeId',
      nodeRegionId: 'NodeRegionId',
      nodeRole: 'NodeRole',
      nodeZoneId: 'NodeZoneId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      classType: 'string',
      cpu: 'string',
      memory: 'string',
      nodeId: 'string',
      nodeRegionId: 'string',
      nodeRole: 'string',
      nodeZoneId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

