// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID used for the service. This parameter is optional. You can specify an agent generated after DAS Agent is enabled or an agent that you manually created. If this parameter is not specified, the default agent is used.
   * 
   * @example
   * ag-472T0DxtmjIxxxxx
   */
  agentId?: string;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * {"id":"68fe0321-37fe-4c75-a118-b61b33156f6a","role":"user","content":[{"type":"text","text":"hello"}]}
   */
  message?: string;
  /**
   * @remarks
   * The user interaction feedback.
   * 
   * @example
   * [{"metadata":{"a2uiClientDataModel":{"decided":true,"interaction":{"request":{"allowFreeText":true,"question":"question?","options":[{"label":"162","value":"162"},{"label":"242","value":"242"},{"label":"243","value":"243"},{"label":"486","value":"486"}]},"kind":"choice","interruptId":"5857955e-4856-4ab3-969e-f8b4c484bda4","status":"pending"},"free_text":""},"a2uiAction":{"name":"das_interaction_response","context":{"value":"162"},"surfaceId":"render-choice-7c03eb4f927f42ff8c30b30a2cc0797d","sourceComponentId":"opts-0","timestamp":"2026-09-15T06:54:15.556Z"}},"payload":{"value":"162"},"interruptId":"5857955e-4856-4ab3-969e-f8b4c484bda4","status":"resolved"}]
   */
  resume?: string;
  /**
   * @remarks
   * The session ID in UUID string format. This parameter is optional. If this parameter is not specified, a new session is created by default. To maintain context across conversations, use the same session ID.
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
      resume: 'Resume',
      sessionId: 'SessionId',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      message: 'string',
      resume: 'string',
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

