// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSubscribedCalendarResponseBodySubscribeScope } from "./GetSubscribedCalendarResponseBodySubscribeScope";


export class GetSubscribedCalendarResponseBody extends $dara.Model {
  /**
   * @example
   * 012345
   */
  author?: string;
  /**
   * @example
   * M5MjkxNDUxQHVzZXJzLmRpbmd0YWxrLmNv
   */
  calendarId?: string;
  /**
   * @example
   * 中国传统日历
   */
  description?: string;
  managers?: string[];
  /**
   * @example
   * 中国传统日历
   */
  name?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  subscribeScope?: GetSubscribedCalendarResponseBodySubscribeScope;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      calendarId: 'calendarId',
      description: 'description',
      managers: 'managers',
      name: 'name',
      requestId: 'requestId',
      subscribeScope: 'subscribeScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      calendarId: 'string',
      description: 'string',
      managers: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      requestId: 'string',
      subscribeScope: GetSubscribedCalendarResponseBodySubscribeScope,
    };
  }

  validate() {
    if(Array.isArray(this.managers)) {
      $dara.Model.validateArray(this.managers);
    }
    if(this.subscribeScope && typeof (this.subscribeScope as any).validate === 'function') {
      (this.subscribeScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

