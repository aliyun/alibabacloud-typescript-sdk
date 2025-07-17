// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableDesignProjectFlowResponseBodyProjectFlowFlowNodeArray extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the ticket can be returned to the schema design node. Valid values:
   * 
   * *   **1**: The ticket can be returned to the schema design node.
   * *   **0**: The ticket cannot be returned to the schema design node. This value can be returned only for the PUBLISH node.
   * 
   * @example
   * 1
   */
  backToDesign?: boolean;
  /**
   * @remarks
   * Indicates whether the current node can be skipped. Valid values:
   * 
   * *   **1**: The current node can be skipped.
   * *   **0**: The current node cannot be skipped. This value can be returned only for the PUBLISH node.
   * 
   * @example
   * 0
   */
  canSkip?: boolean;
  /**
   * @remarks
   * The role of the node in the process.
   * 
   * *   START: The ticket was created.
   * *   DESIGN: The schema is being created.
   * *   PUBLISH: The schema is published.
   * *   END: The ticket is complete.
   * 
   * @example
   * DESIGN
   */
  nodeRole?: string;
  /**
   * @remarks
   * The title of the node.
   */
  nodeTitle?: string;
  /**
   * @remarks
   * The position of the node in the process. The value starts from 1.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * Indicates whether the node is the anchor node. A schema design process has only one anchor node, on which the schema is published. After the schema is published on the anchor node, a post-publish image is generated and the DDL metadata lock is released.
   * 
   * @example
   * false
   */
  publishAnchor?: boolean;
  /**
   * @remarks
   * The available publishing strategies.
   */
  publishStrategies?: string[];
  static names(): { [key: string]: string } {
    return {
      backToDesign: 'BackToDesign',
      canSkip: 'CanSkip',
      nodeRole: 'NodeRole',
      nodeTitle: 'NodeTitle',
      position: 'Position',
      publishAnchor: 'PublishAnchor',
      publishStrategies: 'PublishStrategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backToDesign: 'boolean',
      canSkip: 'boolean',
      nodeRole: 'string',
      nodeTitle: 'string',
      position: 'number',
      publishAnchor: 'boolean',
      publishStrategies: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.publishStrategies)) {
      $dara.Model.validateArray(this.publishStrategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDesignProjectFlowResponseBodyProjectFlow extends $dara.Model {
  /**
   * @remarks
   * The position of the current node in the process.
   * 
   * @example
   * 2
   */
  currentPosition?: number;
  /**
   * @remarks
   * The nodes in the process.
   */
  flowNodeArray?: GetTableDesignProjectFlowResponseBodyProjectFlowFlowNodeArray[];
  /**
   * @remarks
   * The description of the security rule set that is applied to the schema design ticket.
   * 
   * @example
   * mysq_test
   */
  ruleComment?: string;
  /**
   * @remarks
   * The name of the security rule set that is applied to the schema design ticket.
   * 
   * @example
   * mysql default
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPosition: 'CurrentPosition',
      flowNodeArray: 'FlowNodeArray',
      ruleComment: 'RuleComment',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPosition: 'number',
      flowNodeArray: { 'type': 'array', 'itemType': GetTableDesignProjectFlowResponseBodyProjectFlowFlowNodeArray },
      ruleComment: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.flowNodeArray)) {
      $dara.Model.validateArray(this.flowNodeArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableDesignProjectFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The information about the schema design process.
   */
  projectFlow?: GetTableDesignProjectFlowResponseBodyProjectFlow;
  /**
   * @remarks
   * The request ID. You can use the request ID to query logs and troubleshoot issues.
   * 
   * @example
   * B5FD0BC8-2D90-4478-B8EC-A0E92E0B1773
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      projectFlow: 'ProjectFlow',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      projectFlow: GetTableDesignProjectFlowResponseBodyProjectFlow,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.projectFlow && typeof (this.projectFlow as any).validate === 'function') {
      (this.projectFlow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

