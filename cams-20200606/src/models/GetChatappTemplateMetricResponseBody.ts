// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappTemplateMetricResponseBodyDataCliented extends $dara.Model {
  /**
   * @remarks
   * The text on the button.
   * 
   * @example
   * Open url
   */
  buttonContent?: string;
  /**
   * @remarks
   * The number of clicks.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The button type.
   * 
   * Valid values:
   * 
   * *   phone_number_button
   * *   url_button
   * *   quick_relpy_button
   * 
   * @example
   * quick_reply_button
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      buttonContent: 'ButtonContent',
      count: 'Count',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buttonContent: 'string',
      count: 'number',
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

export class GetChatappTemplateMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The statistics on button clicks.
   */
  cliented?: GetChatappTemplateMetricResponseBodyDataCliented[];
  /**
   * @remarks
   * The number of delivered messages.
   * 
   * @example
   * 6
   */
  deliveredCount?: number;
  /**
   * @remarks
   * The end of the time range you queried.
   * 
   * @example
   * 1668138331485
   */
  end?: number;
  /**
   * @remarks
   * The template language.
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The number of read messages.
   * 
   * @example
   * 3
   */
  readCount?: number;
  /**
   * @remarks
   * The number of sent messages.
   * 
   * @example
   * 10
   */
  sentCount?: number;
  /**
   * @remarks
   * The beginning of the time range you queried.
   * 
   * @example
   * 1673919240001
   */
  start?: number;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * 83837774838*****
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      cliented: 'Cliented',
      deliveredCount: 'DeliveredCount',
      end: 'End',
      language: 'Language',
      readCount: 'ReadCount',
      sentCount: 'SentCount',
      start: 'Start',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cliented: { 'type': 'array', 'itemType': GetChatappTemplateMetricResponseBodyDataCliented },
      deliveredCount: 'number',
      end: 'number',
      language: 'string',
      readCount: 'number',
      sentCount: 'number',
      start: 'number',
      templateCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cliented)) {
      $dara.Model.validateArray(this.cliented);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappTemplateMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The value OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetChatappTemplateMetricResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': GetChatappTemplateMetricResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

