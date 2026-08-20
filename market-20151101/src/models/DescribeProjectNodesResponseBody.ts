// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectNodesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether rollback to the previous flow node is allowed.
   * 
   * @example
   * false
   */
  allowRollbackNode?: boolean;
  /**
   * @remarks
   * Indicates whether the node automatically completes upon timeout.
   * 
   * @example
   * false
   */
  autoFinishNode?: boolean;
  /**
   * @remarks
   * The sequence number of the final flow node.
   * 
   * @example
   * 4
   */
  finalStepNo?: number;
  /**
   * @remarks
   * The timeout time of the flow node (UNIX timestamp).
   * 
   * @example
   * 1588834325000
   */
  gmtExpired?: number;
  /**
   * @remarks
   * The completion time of the flow node (UNIX timestamp).
   * 
   * @example
   * 1588834325000
   */
  gmtFinished?: number;
  /**
   * @remarks
   * The start time of the flow node (UNIX timestamp).
   * 
   * @example
   * 1588834325000
   */
  gmtStart?: number;
  /**
   * @remarks
   * Indicates whether uploading an attachment is mandatory.
   * 
   * @example
   * false
   */
  needAttachment?: boolean;
  /**
   * @remarks
   * The ID of the next flow node.
   * 
   * @example
   * 8472
   */
  nextNodeId?: number;
  /**
   * @remarks
   * The flow node ID.
   * 
   * @example
   * 8471
   */
  nodeId?: number;
  /**
   * @remarks
   * The node name.
   * 
   * @example
   * 分配服务商节点
   */
  nodeName?: string;
  /**
   * @remarks
   * The execution status of the node. Valid values:
   * - NotStart: not started.
   * - Starting: in progress.
   * - Cancel: canceled.
   * - Finish: completed.
   * 
   * @example
   * Finish
   */
  nodeStatus?: string;
  /**
   * @remarks
   * The role of the operator. Valid values:
   * 
   * - System: system.
   * - Custom: customer.
   * - Provider: service provider.
   * 
   * @example
   * System
   */
  operatorRole?: string;
  /**
   * @remarks
   * The ID of the parent flow node.
   * 
   * @example
   * 0
   */
  parentNodeId?: number;
  /**
   * @remarks
   * The ID of the previous flow node.
   * 
   * @example
   * 8470
   */
  previousNodeId?: number;
  /**
   * @remarks
   * The sequence number of the flow node.
   * 
   * @example
   * 2
   */
  stepNo?: number;
  /**
   * @remarks
   * The form content of the flow node.
   * 
   * @example
   * [ {"fieldKey": "TFD0","isRequired": true,"maxLength": 50, "placeHolder": "姓名","stepNum": 0,"title": "收货人姓名","type": "text" },{ "fieldKey": "TFD1","isRequired": true,"maxLength": 50,"placeHolder": "手机号码","stepNum": 1,"title": "收货人电话","type": "text"},{"fieldKey": "TFD2","isRequired": true,"maxLength": 50,"placeHolder": "省市区街道门牌号码","stepNum": 2,"title": "详细收货地址","type": "textarea"}]
   */
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 937fee1f-26bb-4b6e-8def-977a6bdaa1e5
   */
  requestId?: string;
  /**
   * @remarks
   * None.
   */
  result?: DescribeProjectNodesResponseBodyResult[];
  /**
   * @remarks
   * The success status identifier.
   * 
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

