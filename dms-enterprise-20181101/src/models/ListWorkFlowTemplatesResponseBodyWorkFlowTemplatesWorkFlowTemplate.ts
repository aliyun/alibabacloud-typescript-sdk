// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodes } from "./ListWorkFlowTemplatesResponseBodyWorkFlowTemplatesWorkFlowTemplateWorkflowNodes";


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

