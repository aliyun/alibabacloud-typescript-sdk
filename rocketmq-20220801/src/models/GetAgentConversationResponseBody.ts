// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentConversationResponseBody extends $dara.Model {
  /**
   * @example
   * 0198c8a91f4d7f01a3c21e97
   */
  conversationId?: string;
  /**
   * @example
   * 2026-08-19T12:00:00.000Z
   */
  createdAt?: string;
  /**
   * @example
   * waiting_input
   */
  currentRunStatus?: string;
  /**
   * @example
   * 0198c8a91f4d7f01a3c21e97
   */
  id?: string;
  /**
   * @example
   * {"toolUseId":"tool_01","tool":"AskUserQuestion"}
   */
  pendingTool?: any;
  /**
   * @example
   * diagnosis
   */
  scenarioId?: string;
  /**
   * @example
   * 消息堆积排查
   */
  title?: string;
  /**
   * @example
   * 2026-08-19T12:05:00.000Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'conversationId',
      createdAt: 'createdAt',
      currentRunStatus: 'currentRunStatus',
      id: 'id',
      pendingTool: 'pendingTool',
      scenarioId: 'scenarioId',
      title: 'title',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      createdAt: 'string',
      currentRunStatus: 'string',
      id: 'string',
      pendingTool: 'any',
      scenarioId: 'string',
      title: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

