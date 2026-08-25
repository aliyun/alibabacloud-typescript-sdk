// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatRequest extends $dara.Model {
  /**
   * @remarks
   * The Agent ID used for the service. You can specify an Agent generated after enabling DAS Agent or an Agent that you manually created. If not specified, the default Agent is used.
   * 
   * @example
   * ag-472T0DxtmjIxxxxx
   */
  agentId?: string;
  /**
   * @remarks
   * The message content.
   * 
   * This parameter is required.
   * 
   * @example
   * {"id":"68fe0321-37fe-4c75-a118-b61b33156f6a","role":"user","content":[{"type":"text","text":"hello"}]}
   */
  message?: string;
  /**
   * @remarks
   * The session ID in UUID string format. If not specified, a new session is created by default. To maintain context across conversations, use the same session ID.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-xxxxxxxxxxxx
   */
  sessionId?: string;
  /**
   * @remarks
   * Specifies whether to output summary information.
   * 
   * @example
   * false
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      message: 'Message',
      sessionId: 'SessionId',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      message: 'string',
      sessionId: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

