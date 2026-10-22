// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TreeNode extends $dara.Model {
  /**
   * @remarks
   * The list of child nodes.
   */
  children?: TreeNode[];
  /**
   * @remarks
   * The final step number.
   * 
   * @example
   * 1
   */
  finalStepNo?: number;
  /**
   * @remarks
   * The completion time.
   */
  finishTime?: number;
  /**
   * @remarks
   * Specifies whether the node is a container node.
   */
  isContainerNode?: boolean;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * 2927b500-c4e2-4241-bacf-0a2991c4be12
   */
  nodeId?: string;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * Single output
   */
  nodeName?: string;
  /**
   * @remarks
   * The node status.
   * 
   * @example
   * UP
   */
  nodeStatus?: string;
  /**
   * @remarks
   * The operator role.
   * 
   * @example
   * System
   */
  operatorRole?: string;
  /**
   * @remarks
   * The parent node ID.
   * 
   * @example
   * dpYLaezmVNRMGX56Cg4gLjrrVrMqPxX6
   */
  parentNodeId?: string;
  /**
   * @remarks
   * The step number.
   * 
   * @example
   * 1
   */
  stepNo?: number;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      finalStepNo: 'FinalStepNo',
      finishTime: 'FinishTime',
      isContainerNode: 'IsContainerNode',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeStatus: 'NodeStatus',
      operatorRole: 'OperatorRole',
      parentNodeId: 'ParentNodeId',
      stepNo: 'StepNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': TreeNode },
      finalStepNo: 'number',
      finishTime: 'number',
      isContainerNode: 'boolean',
      nodeId: 'string',
      nodeName: 'string',
      nodeStatus: 'string',
      operatorRole: 'string',
      parentNodeId: 'string',
      stepNo: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

