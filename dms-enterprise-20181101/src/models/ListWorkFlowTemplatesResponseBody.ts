// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodesWorkflowNode extends $dara.Model {
  /**
   * @remarks
   * The description of the approval node.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 1234
   */
  createUserId?: number;
  /**
   * @remarks
   * The ID of the approval node.
   * 
   * @example
   * 123
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the approval node.
   * 
   * @example
   * test
   */
  nodeName?: string;
  /**
   * @remarks
   * The type of the approval node. Valid values:
   * 
   * *   SYS: The approval node is predefined by the system.
   * *   USER_LIST: The approval node is created by a user.
   * 
   * @example
   * SYS
   */
  nodeType?: string;
  /**
   * @remarks
   * The position of the approval node.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * 12345
   */
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createUserId: 'CreateUserId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
      position: 'Position',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createUserId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      nodeType: 'string',
      position: 'number',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodes extends $dara.Model {
  workflowNode?: ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodesWorkflowNode[];
  static names(): { [key: string]: string } {
    return {
      workflowNode: 'WorkflowNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workflowNode: { 'type': 'array', 'itemType': ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodesWorkflowNode },
    };
  }

  validate() {
    if(Array.isArray(this.workflowNode)) {
      $dara.Model.validateArray(this.workflowNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplate extends $dara.Model {
  /**
   * @remarks
   * The description of the approval template.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 1234
   */
  createUserId?: number;
  /**
   * @remarks
   * Indicates whether the approval template is enabled. Valid values:
   * 
   * *   Y: The approval template is enabled.
   * *   N: The approval template is disabled.
   * 
   * @example
   * Y
   */
  enabled?: string;
  /**
   * @remarks
   * Indicates whether the approval template is predefined by the system. Valid values:
   * 
   * *   1: The approval template is predefined by the system.
   * *   0: The approval template is not predefined by the system.
   * 
   * @example
   * 1
   */
  isSystem?: number;
  /**
   * @remarks
   * The ID of the approval template.
   * 
   * @example
   * 12345
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the approval template.
   * 
   * @example
   * Admin
   */
  templateName?: string;
  /**
   * @remarks
   * The details of approval nodes.
   */
  workflowNodes?: ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodes;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createUserId: 'CreateUserId',
      enabled: 'Enabled',
      isSystem: 'IsSystem',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      workflowNodes: 'WorkflowNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createUserId: 'number',
      enabled: 'string',
      isSystem: 'number',
      templateId: 'number',
      templateName: 'string',
      workflowNodes: ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodes,
    };
  }

  validate() {
    if(this.workflowNodes && typeof (this.workflowNodes as any).validate === 'function') {
      (this.workflowNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowTemplatesResponseBodyWorkFlowTemplates extends $dara.Model {
  workFlowTemplate?: ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplate[];
  static names(): { [key: string]: string } {
    return {
      workFlowTemplate: 'WorkFlowTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workFlowTemplate: { 'type': 'array', 'itemType': ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.workFlowTemplate)) {
      $dara.Model.validateArray(this.workFlowTemplate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkFlowTemplatesResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 41067071-0243-4AAB-B3CF-4DE6D54F53B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The approval templates.
   */
  workFlowTemplates?: ListWorkFlowTemplatesResponseBodyWorkFlowTemplates;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      workFlowTemplates: 'WorkFlowTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      workFlowTemplates: ListWorkFlowTemplatesResponseBodyWorkFlowTemplates,
    };
  }

  validate() {
    if(this.workFlowTemplates && typeof (this.workFlowTemplates as any).validate === 'function') {
      (this.workFlowTemplates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

