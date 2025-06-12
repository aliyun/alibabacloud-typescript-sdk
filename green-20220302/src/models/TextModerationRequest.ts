// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TextModerationRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the moderation service. Valid values: nickname_detection: user nickname chat_detection: chat interactions comment_detection: dynamic comments pgc_detection: professionally-generated content (PGC) teaching materials
   * 
   * Valid values:
   * 
   * *   pgc_detection: moderation of PGC teaching materials
   * *   nickname_detection: user nickname moderation
   * *   comment_multilingual_pro: multi-language moderation in international business scenarios
   * *   chat_detection: moderation of interactive content of private chats
   * *   ad_compliance_detection: advertising law compliance identification
   * *   comment_detection: moderation of comment content of public chats
   * *   ai_art_detection: AI-generated text identfication
   * 
   * @example
   * nickname_detection
   */
  service?: string;
  /**
   * @remarks
   * The parameters required by the moderation service. The value is a JSON string.
   * 
   * @example
   * {"content":"Content to be moderated"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

