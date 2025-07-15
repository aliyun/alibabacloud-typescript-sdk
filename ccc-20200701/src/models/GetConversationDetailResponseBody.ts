// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConversationDetailResponseBodyPhrases extends $dara.Model {
  /**
   * @example
   * 240
   */
  begin?: number;
  /**
   * @example
   * 1280
   */
  end?: number;
  finished?: boolean;
  /**
   * @example
   * agent@ccc-test
   */
  identity?: string;
  role?: string;
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  phrases?: GetConversationDetailResponseBodyPhrases[];
  /**
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

