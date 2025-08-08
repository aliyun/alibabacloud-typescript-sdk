// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCurrentNodeInfoResponseBodyResult extends $dara.Model {
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
   * 1588920725000
   */
  gmtExpired?: number;
  /**
   * @example
   * 1588920725000
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
   * 8473
   */
  nextNodeId?: number;
  /**
   * @example
   * 8472
   */
  nodeId?: number;
  nodeName?: string;
  /**
   * @example
   * Starting
   */
  nodeStatus?: string;
  /**
   * @example
   * Provider
   */
  operatorRole?: string;
  /**
   * @example
   * 0
   */
  parentNodeId?: number;
  /**
   * @example
   * 8471
   */
  previousNodeId?: number;
  /**
   * @example
   * 3
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

export class DescribeCurrentNodeInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 00eb4de1-6cff-4f56-833e-7b1e070e398d
   */
  requestId?: string;
  result?: DescribeCurrentNodeInfoResponseBodyResult;
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
      result: DescribeCurrentNodeInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

