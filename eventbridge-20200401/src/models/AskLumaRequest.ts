// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AskLumaRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the agent.
   * 
   * This parameter is required.
   * 
   * @example
   * demo-luma-agent
   */
  agentName?: string;
  /**
   * @remarks
   * The conversation ID. This parameter is required for multi-turn conversations.
   * 
   * @example
   * conv_1474xxx32_593b9d08-9
   */
  conversationId?: string;
  /**
   * @remarks
   * The maximum number of rows to return.
   * 
   * @example
   * 100
   */
  maxRows?: number;
  /**
   * @remarks
   * The natural language question.
   * 
   * This parameter is required.
   * 
   * @example
   * 帮我统计一下最近的订单数据。
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

