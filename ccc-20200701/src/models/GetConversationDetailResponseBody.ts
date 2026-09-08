// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConversationDetailResponseBodyPhrases extends $dara.Model {
  /**
   * @remarks
   * The offset of the sentence start time relative to the session start time, in milliseconds.
   * 
   * @example
   * 240
   */
  begin?: number;
  /**
   * @remarks
   * The offset of the sentence end time relative to the session start time, in milliseconds.
   * 
   * @example
   * 1280
   */
  end?: number;
  /**
   * @remarks
   * Is finished.
   * 
   * @example
   * false
   */
  finished?: boolean;
  /**
   * @remarks
   * The ARN of the role. The system uses this identifier internally to identify the role. This parameter does not require management.
   * 
   * @example
   * agent@ccc-test
   */
  identity?: string;
  /**
   * @remarks
   * Role.
   * 
   * @example
   * 客服
   */
  role?: string;
  /**
   * @remarks
   * Conversation text content.
   * 
   * @example
   * 欢迎致电云联络中心
   */
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      end: 'End',
      finished: 'Finished',
      identity: 'Identity',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      end: 'number',
      finished: 'boolean',
      identity: 'string',
      role: 'string',
      words: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConversationDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * List of conversations.
   */
  phrases?: GetConversationDetailResponseBodyPhrases[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 7E407F9B-A278-52A0-B193-3EE5471D7A87
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      phrases: 'Phrases',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      phrases: { 'type': 'array', 'itemType': GetConversationDetailResponseBodyPhrases },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.phrases)) {
      $dara.Model.validateArray(this.phrases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

