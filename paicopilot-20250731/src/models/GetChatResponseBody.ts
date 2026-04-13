// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChatDetail } from "./ChatDetail";


export class GetChatResponseBody extends $dara.Model {
  answer?: ChatDetail;
  /**
   * @example
   * chat-jkd******
   */
  chatId?: string;
  /**
   * @example
   * {"solutionDetail":{"formValues":{"params":{"InstanceId":"dsw-g54******qg9"},"content":{"EcsSpec":"ecs.gn6i-c8g1.2xlarge"}},"success":true}}
   */
  extraData?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-12-01T17:52:05+08:00
   */
  gmtModified?: string;
  /**
   * @example
   * how to ******
   */
  message?: string;
  /**
   * @example
   * 1500******860
   */
  ownerId?: string;
  question?: ChatDetail;
  /**
   * @example
   * 44553E9A-******-37ADC33FE2
   */
  requestId?: string;
  /**
   * @example
   * se-dss******
   */
  sessionId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * how to ******
   */
  title?: string;
  /**
   * @example
   * 2100******360
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      chatId: 'ChatId',
      extraData: 'ExtraData',
      gmtCreateTime: 'GmtCreateTime',
      gmtModified: 'GmtModified',
      message: 'Message',
      ownerId: 'OwnerId',
      question: 'Question',
      requestId: 'RequestId',
      sessionId: 'SessionId',
      status: 'Status',
      title: 'Title',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: ChatDetail,
      chatId: 'string',
      extraData: 'string',
      gmtCreateTime: 'string',
      gmtModified: 'string',
      message: 'string',
      ownerId: 'string',
      question: ChatDetail,
      requestId: 'string',
      sessionId: 'string',
      status: 'string',
      title: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.answer && typeof (this.answer as any).validate === 'function') {
      (this.answer as any).validate();
    }
    if(this.question && typeof (this.question as any).validate === 'function') {
      (this.question as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

