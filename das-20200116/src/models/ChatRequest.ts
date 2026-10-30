// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatRequest extends $dara.Model {
  /**
   * @remarks
   * Optional. The agent ID used for the service. You can specify the agent generated after enabling the DAS agent or a manually created agent. If not specified, the default agent is used.
   * 
   * @example
   * ag-472T0DxtmjIxxxxx
   */
  agentId?: string;
  /**
   * @remarks
   * The forwarded properties.
   * 
   * @example
   * {"enableInteractiveTools":true}
   */
  forwardedProps?: string;
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
   * [{"metadata":{"a2uiClientDataModel":{"decided":true,"interaction":{"request":{"allowFreeText":true,"question":"question?","options":[{"label":"162 items","value":"162"},{"label":"242 items","value":"242"},{"label":"243 items","value":"243"},{"label":"486 items","value":"486"}]},"kind":"choice","interruptId":"5857955e-4856-4ab3-969e-f8b4c484bda4","status":"pending"},"free_text":""},"a2uiAction":{"name":"das_interaction_response","context":{"value":"162"},"surfaceId":"render-choice-7c03eb4f927f42ff8c30b30a2cc0797d","sourceComponentId":"opts-0","timestamp":"2026-09-15T06:54:15.556Z"}},"payload":{"value":"162"},"interruptId":"5857955e-4856-4ab3-969e-f8b4c484bda4","status":"resolved"}]
   */
  resume?: string;
  /**
   * @remarks
   * Optional. The session ID, which is a UUID string. If not specified, a new session is created by default. Keep the same session ID for contextual conversations.
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
      forwardedProps: 'ForwardedProps',
      message: 'Message',
      resume: 'Resume',
      sessionId: 'SessionId',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      forwardedProps: 'string',
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

