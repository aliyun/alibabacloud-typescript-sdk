// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCalendarsResponseBodyResponseCalendars extends $dara.Model {
  /**
   * @example
   * 描述
   */
  description?: string;
  /**
   * @example
   * 0
   */
  ETag?: string;
  /**
   * @example
   * cnNTbWxxx
   */
  id?: string;
  /**
   * @example
   * VIEW_DETAIL
   */
  privilege?: string;
  /**
   * @example
   * 标题
   */
  summary?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  /**
   * @example
   * primary
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ETag: 'ETag',
      id: 'Id',
      privilege: 'Privilege',
      summary: 'Summary',
      timeZone: 'TimeZone',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ETag: 'string',
      id: 'string',
      privilege: 'string',
      summary: 'string',
      timeZone: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalendarsResponseBodyResponse extends $dara.Model {
  calendars?: ListCalendarsResponseBodyResponseCalendars[];
  static names(): { [key: string]: string } {
    return {
      calendars: 'Calendars',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendars: { 'type': 'array', 'itemType': ListCalendarsResponseBodyResponseCalendars },
    };
  }

  validate() {
    if(Array.isArray(this.calendars)) {
      $dara.Model.validateArray(this.calendars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCalendarsResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  response?: ListCalendarsResponseBodyResponse;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      response: 'response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      response: ListCalendarsResponseBodyResponse,
    };
  }

  validate() {
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

