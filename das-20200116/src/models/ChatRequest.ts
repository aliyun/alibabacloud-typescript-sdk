// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. The agent ID. You can use the ID of an agent that is automatically generated when you enable DAS Agent, or the ID of a custom agent. If this parameter is omitted, the default agent is used.
   * 
   * @example
   * ag-472T0DxtmjIxxxxx
   */
  agentId?: string;
  /**
   * @remarks
   * The message object.
   * 
   * This parameter is required.
   * 
   * @example
   * {"id":"68fe0321-37fe-4c75-a118-b61b33156f6a","role":"user","content":[{"type":"text","text":"hello"}]}
   */
  message?: string;
  /**
   * @remarks
   * Optional. The session ID, which must be a UUID. If unspecified, a new session is created. To maintain conversational context, use the same session ID for all subsequent requests.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-xxxxxxxxxxxx
   */
  sessionId?: string;
  /**
   * @remarks
   * Specifies whether to return summary information.
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

