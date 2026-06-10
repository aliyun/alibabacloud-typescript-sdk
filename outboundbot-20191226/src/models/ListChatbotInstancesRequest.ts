// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatbotInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace access key for the chatbot.
   * 
   * > Get this key by calling ListChatbotAgents. If you omit this parameter, the API returns instances from all workspaces.
   * 
   * @example
   * 9137ab9c27044921860030adf8590ec4_p_outbound_public
   */
  agentKey?: string;
  /**
   * @remarks
   * Page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * > The value must be less than or equal to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

