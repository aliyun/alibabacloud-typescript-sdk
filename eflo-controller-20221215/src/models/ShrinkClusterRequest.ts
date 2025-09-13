// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShrinkClusterRequestNodeGroupsHyperNodes extends $dara.Model {
  hyperNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      hyperNodeId: 'HyperNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hyperNodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkClusterRequestNodeGroupsNodes extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01poc-cn-zmb2ypjdc01
   */
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkClusterRequestNodeGroups extends $dara.Model {
  hyperNodes?: ShrinkClusterRequestNodeGroupsHyperNodes[];
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * ng-3b6fbd24b1b845a0
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The nodes.
   */
  nodes?: ShrinkClusterRequestNodeGroupsNodes[];
  static names(): { [key: string]: string } {
    return {
      hyperNodes: 'HyperNodes',
      nodeGroupId: 'NodeGroupId',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hyperNodes: { 'type': 'array', 'itemType': ShrinkClusterRequestNodeGroupsHyperNodes },
      nodeGroupId: 'string',
      nodes: { 'type': 'array', 'itemType': ShrinkClusterRequestNodeGroupsNodes },
    };
  }

  validate() {
    if(Array.isArray(this.hyperNodes)) {
      $dara.Model.validateArray(this.hyperNodes);
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

export class ShrinkClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * i15dfa12e8f27c44f4a006c2c8bb
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to allow skipping failed nodes. Default value: False.
   * 
   * @example
   * False
   */
  ignoreFailedNodeTasks?: boolean;
  /**
   * @remarks
   * The node groups.
   */
  nodeGroups?: ShrinkClusterRequestNodeGroups[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ignoreFailedNodeTasks: 'IgnoreFailedNodeTasks',
      nodeGroups: 'NodeGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ignoreFailedNodeTasks: 'boolean',
      nodeGroups: { 'type': 'array', 'itemType': ShrinkClusterRequestNodeGroups },
    };
  }

  validate() {
    if(Array.isArray(this.nodeGroups)) {
      $dara.Model.validateArray(this.nodeGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

