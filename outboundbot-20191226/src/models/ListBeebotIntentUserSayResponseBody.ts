// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBeebotIntentUserSayResponseBodyUserSays extends $dara.Model {
  /**
   * @remarks
   * The content of the utterance.
   * 
   * @example
   * 你知道xxxx么？
   */
  content?: string;
  /**
   * @remarks
   * The time when the utterance was created.
   * 
   * @example
   * 2025-04-21 14:16:05.+0800
   */
  createTime?: string;
  /**
   * @remarks
   * The intent ID.
   * 
   * @example
   * 10717802
   */
  intentId?: number;
  /**
   * @remarks
   * The time when the utterance was last modified.
   * 
   * @example
   * 2025-04-21 14:16:05.+0800
   */
  modifyTime?: string;
  /**
   * @remarks
   * The utterance ID.
   * 
   * @example
   * 17448458
   */
  userSayId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      intentId: 'IntentId',
      modifyTime: 'ModifyTime',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      intentId: 'number',
      modifyTime: 'string',
      userSayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBeebotIntentUserSayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal request ID.
   * 
   * @example
   * D7BBFCDF-59B0-1ADA-BCA3-4B77F642DDFB
   */
  beebotRequestId?: string;
  /**
   * @remarks
   * The status code of the API.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned for the API call.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0956D5DA-0978-5DC9-94B0-C68527DA7475
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of user utterances.
   */
  userSays?: ListBeebotIntentUserSayResponseBodyUserSays[];
  static names(): { [key: string]: string } {
    return {
      beebotRequestId: 'BeebotRequestId',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      userSays: 'UserSays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beebotRequestId: 'string',
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      userSays: { 'type': 'array', 'itemType': ListBeebotIntentUserSayResponseBodyUserSays },
    };
  }

  validate() {
    if(Array.isArray(this.userSays)) {
      $dara.Model.validateArray(this.userSays);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

