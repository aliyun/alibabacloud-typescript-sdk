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

