// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppFromTemplateRequest extends $dara.Model {
  /**
   * @example
   * [{"type":"bailianapp","name":"rag","actualParameter":"11"}]
   */
  actualParameters?: string;
  agentId?: string;
  connectionsContent?: string;
  databasesContent?: string;
  description?: string;
  from?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * -1
   */
  icon?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4c892729-9950-4353-8146-33542b869e01
   */
  templateId?: string;
  /**
   * @example
   * Web
   */
  type?: string;
  variablesContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1731664463*****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      actualParameters: 'ActualParameters',
      agentId: 'AgentId',
      connectionsContent: 'ConnectionsContent',
      databasesContent: 'DatabasesContent',
      description: 'Description',
      from: 'From',
      icon: 'Icon',
      name: 'Name',
      templateId: 'TemplateId',
      type: 'Type',
      variablesContent: 'VariablesContent',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualParameters: 'string',
      agentId: 'string',
      connectionsContent: 'string',
      databasesContent: 'string',
      description: 'string',
      from: 'string',
      icon: 'string',
      name: 'string',
      templateId: 'string',
      type: 'string',
      variablesContent: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

