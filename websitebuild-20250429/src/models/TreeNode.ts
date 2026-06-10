// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TreeNode extends $dara.Model {
  children?: TreeNode[];
  finalStepNo?: number;
  finishTime?: number;
  isContainerNode?: boolean;
  nodeId?: string;
  nodeName?: string;
  nodeStatus?: string;
  operatorRole?: string;
  parentNodeId?: string;
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

