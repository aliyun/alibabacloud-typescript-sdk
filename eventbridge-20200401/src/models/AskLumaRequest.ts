// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AskLumaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demo-luma-agent
   */
  agentName?: string;
  /**
   * @example
   * conv_1474xxx32_593b9d08-9
   */
  conversationId?: string;
  /**
   * @example
   * 100
   */
  maxRows?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  question?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      conversationId: 'ConversationId',
      maxRows: 'MaxRows',
      question: 'Question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      conversationId: 'string',
      maxRows: 'number',
      question: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

