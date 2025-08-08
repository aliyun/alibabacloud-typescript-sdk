// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectNodesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * false
   */
  allowRollbackNode?: boolean;
  /**
   * @example
   * false
   */
  autoFinishNode?: boolean;
  /**
   * @example
   * 4
   */
  finalStepNo?: number;
  /**
   * @example
   * 1588834325000
   */
  gmtExpired?: number;
  /**
   * @example
   * 1588834325000
   */
  gmtFinished?: number;
  /**
   * @example
   * 1588834325000
   */
  gmtStart?: number;
  /**
   * @example
   * false
   */
  needAttachment?: boolean;
  /**
   * @example
   * 8472
   */
  nextNodeId?: number;
  /**
   * @example
   * 8471
   */
  nodeId?: number;
  nodeName?: string;
  /**
   * @example
   * Finish
   */
  nodeStatus?: string;
  /**
   * @example
   * System
   */
  operatorRole?: string;
  /**
   * @example
   * 0
   */
  parentNodeId?: number;
  /**
   * @example
   * 8470
   */
  previousNodeId?: number;
  /**
   * @example
   * 2
   */
  stepNo?: number;
  templateForm?: string;
  static names(): { [key: string]: string } {
    return {
      allowRollbackNode: 'AllowRollbackNode',
      autoFinishNode: 'AutoFinishNode',
      finalStepNo: 'FinalStepNo',
      gmtExpired: 'GmtExpired',
      gmtFinished: 'GmtFinished',
      gmtStart: 'GmtStart',
      needAttachment: 'NeedAttachment',
      nextNodeId: 'NextNodeId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeStatus: 'NodeStatus',
      operatorRole: 'OperatorRole',
      parentNodeId: 'ParentNodeId',
      previousNodeId: 'PreviousNodeId',
      stepNo: 'StepNo',
      templateForm: 'TemplateForm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRollbackNode: 'boolean',
      autoFinishNode: 'boolean',
      finalStepNo: 'number',
      gmtExpired: 'number',
      gmtFinished: 'number',
      gmtStart: 'number',
      needAttachment: 'boolean',
      nextNodeId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      nodeStatus: 'string',
      operatorRole: 'string',
      parentNodeId: 'number',
      previousNodeId: 'number',
      stepNo: 'number',
      templateForm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectNodesResponseBody extends $dara.Model {
  /**
   * @example
   * 937fee1f-26bb-4b6e-8def-977a6bdaa1e5
   */
  requestId?: string;
  result?: DescribeProjectNodesResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeProjectNodesResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

