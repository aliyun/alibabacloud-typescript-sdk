// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatShrinkRequest extends $dara.Model {
  /**
   * @example
   * Bearer%20eyJhb****...****k
   */
  authorization?: string;
  /**
   * @example
   * test-user
   */
  externalUserId?: string;
  /**
   * @example
   * [{"Role":"user","Content":[{"Type":"text","Text":"你好"}]}]
   */
  inputShrink?: string;
  /**
   * @example
   * ""
   */
  routingKey?: string;
  /**
   * @example
   * test-session-001
   */
  sessionId?: string;
  /**
   * @example
   * {"OutputFileMode": "url"}
   */
  settingsShrink?: string;
  /**
   * @example
   * {"IncludeReasoning": false, "IncludeToolCalls": false}
   */
  streamOptionsShrink?: string;
  /**
   * @example
   * template-abc123
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      authorization: 'Authorization',
      externalUserId: 'ExternalUserId',
      inputShrink: 'Input',
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

