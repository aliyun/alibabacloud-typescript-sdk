// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Bearer + JWT returned by GetAccessToken. URL-encode the entire string and pass it as a query parameter.
   * 
   * @example
   * Bearer%20eyJhb****...****k
   */
  authorization?: string;
  /**
   * @remarks
   * The user ID from the external system.
   * 
   * @example
   * test-user
   */
  externalUserId?: string;
  /**
   * @remarks
   * The message list (JSON string), sorted in chronological order.
   * 
   * @example
   * [{"Role":"user","Content":[{"Type":"text","Text":"你好"}]}]
   */
  inputShrink?: string;
  model?: string;
  resume?: boolean;
  /**
   * @remarks
   * The routing key that specifies the backend instance to process the request.
   * 
   * @example
   * ""
   */
  routingKey?: string;
  /**
   * @remarks
   * The session ID for multi-turn conversation context persistence.
   * 
   * @example
   * test-session-001
   */
  sessionId?: string;
  /**
   * @remarks
   * The additional settings. Contains the output file mode control parameter OutputFileMode (string, valid values: url or base64. Defaults to base64 for legacy compatibility. We recommend url).
   * 
   * @example
   * {"OutputFileMode": "url"}
   */
  settingsShrink?: string;
  /**
   * @remarks
   * The streaming output control options. Contains IncludeReasoning (boolean, default true, specifies whether to include the model thinking process) and IncludeToolCalls (boolean, default true, specifies whether to include tool invocation details). If not specified or set to a null object, the behavior is consistent with the legacy version.
   * 
   * @example
   * {"IncludeReasoning": false, "IncludeToolCalls": false}
   */
  streamOptionsShrink?: string;
  /**
   * @remarks
   * The agent template ID.
   * 
   * @example
   * template-abc123
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      externalUserId: 'ExternalUserId',
      inputShrink: 'Input',
      model: 'Model',
      resume: 'Resume',
      routingKey: 'RoutingKey',
      sessionId: 'SessionId',
      settingsShrink: 'Settings',
      streamOptionsShrink: 'StreamOptions',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: 'string',
      externalUserId: 'string',
      inputShrink: 'string',
      model: 'string',
      resume: 'boolean',
      routingKey: 'string',
      sessionId: 'string',
      settingsShrink: 'string',
      streamOptionsShrink: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

