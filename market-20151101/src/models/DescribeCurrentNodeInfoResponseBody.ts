// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCurrentNodeInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether rollback to the previous process node is allowed.
   * 
   * @example
   * false
   */
  allowRollbackNode?: boolean;
  /**
   * @remarks
   * Indicates whether the node is automatically completed.
   * 
   * @example
   * false
   */
  autoFinishNode?: boolean;
  /**
   * @remarks
   * The sequence number of the last node.
   * 
   * @example
   * 4
   */
  finalStepNo?: number;
  /**
   * @remarks
   * The timeout of the process node. The value is a UNIX timestamp.
   * 
   * @example
   * 1588920725000
   */
  gmtExpired?: number;
  /**
   * @remarks
   * The completion time of the process node. The value is a UNIX timestamp.
   * 
   * @example
   * 1588920725000
   */
  gmtFinished?: number;
  /**
   * @remarks
   * The start time of the process node. The value is a UNIX timestamp.
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
   * The ID of the next process node.
   * 
   * @example
   * 8473
   */
  nextNodeId?: number;
  /**
   * @remarks
   * The ID of the process node.
   * 
   * @example
   * 8472
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * 等待服务开通
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
   * Starting
   */
  nodeStatus?: string;
  /**
   * @remarks
   * The role of the operator for the process node. Valid values:
   * - system: system.
   * - custom: user.
   * 
   * @example
   * Provider
   */
  operatorRole?: string;
  /**
   * @remarks
   * The ID of the parent process node.
   * 
   * @example
   * 0
   */
  parentNodeId?: number;
  /**
   * @remarks
   * The ID of the previous process node.
   * 
   * @example
   * 8471
   */
  previousNodeId?: number;
  /**
   * @remarks
   * The sequence number of the process node.
   * 
   * @example
   * 3
   */
  stepNo?: number;
  /**
   * @remarks
   * The form content of the process node in JSON format.
   * Sample code:
   * `[ { "fieldKey": "TFD0", //form key "isRequired": true, //whether the field is required "maxLength": 50, //maximum length "placeHolder": "姓名", //form value description "stepNum": 0, //sort value (ascending) "title": "收货人姓名", //form title "type": "text" //form type }, { "fieldKey": "TFD1", "isRequired": true, "maxLength": 50, "placeHolder": "手机号码", "stepNum": 1, "title": "收货人电话", "type": "text" }, { "fieldKey": "TFD2", "isRequired": true, "maxLength": 50, "placeHolder": "省市区街道门牌号码", "stepNum": 2, "title": "详细收货地址", "type": "textarea" } ]`.
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

export class DescribeCurrentNodeInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 00eb4de1-6cff-4f56-833e-7b1e070e398d
   */
  requestId?: string;
  /**
   * @remarks
   * The process node information returned upon success.
   */
  result?: DescribeCurrentNodeInfoResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful.
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

