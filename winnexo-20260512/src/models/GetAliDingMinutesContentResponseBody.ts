// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAliDingMinutesContentResponseBodyTranscription extends $dara.Model {
  /**
   * @remarks
   * The returned content.
   * 
   * @example
   * Meeting started
   */
  content?: string;
  /**
   * @remarks
   * The speaker.
   * 
   * @example
   * John
   */
  speaker?: string;
  /**
   * @remarks
   * The avatar of the speaker. An empty string is returned if no avatar is available.
   * 
   * @example
   * https://robject.oss-cn-shanghai.aliyuncs.com/robject-daily1/
   */
  speakerAvatar?: string;
  /**
   * @remarks
   * The end time of the segment.
   * 
   * @example
   * 1200
   */
  timeEnd?: number;
  /**
   * @remarks
   * The start time of the segment.
   * 
   * @example
   * 0
   */
  timeStart?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      speaker: 'speaker',
      speakerAvatar: 'speakerAvatar',
      timeEnd: 'timeEnd',
      timeStart: 'timeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      speaker: 'string',
      speakerAvatar: 'string',
      timeEnd: 'number',
      timeStart: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliDingMinutesContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The DingTalk minutes ID.
   * 
   * @example
   * 76327569643231383535353939365f3436383537393431335f32
   */
  minutesId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-id
   */
  requestId?: string;
  /**
   * @remarks
   * The intelligent meeting summary content.
   * 
   * @example
   * # Meeting Summary
   */
  summary?: string;
  /**
   * @remarks
   * The new session title.
   * 
   * @example
   * Weekly Project Meeting
   */
  title?: string;
  /**
   * @remarks
   * The to-do item details.
   * 
   * @example
   * {"dingtalkTodoList":[]}
   */
  todoContent?: string;
  /**
   * @remarks
   * The speech-type execution parameters.
   */
  transcription?: GetAliDingMinutesContentResponseBodyTranscription[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      minutesId: 'minutesId',
      requestId: 'requestId',
      summary: 'summary',
      title: 'title',
      todoContent: 'todoContent',
      transcription: 'transcription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      minutesId: 'string',
      requestId: 'string',
      summary: 'string',
      title: 'string',
      todoContent: 'string',
      transcription: { 'type': 'array', 'itemType': GetAliDingMinutesContentResponseBodyTranscription },
    };
  }

  validate() {
    if(Array.isArray(this.transcription)) {
      $dara.Model.validateArray(this.transcription);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

