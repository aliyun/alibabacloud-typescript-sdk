// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBeebotIntentUserSayResponseBodyUserSays extends $dara.Model {
  content?: string;
  /**
   * @example
   * 2025-04-21 14:16:05.+0800
   */
  createTime?: string;
  /**
   * @example
   * 10717802
   */
  intentId?: number;
  /**
   * @example
   * 2025-04-21 14:16:05.+0800
   */
  modifyTime?: string;
  /**
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
   * @example
   * D7BBFCDF-59B0-1ADA-BCA3-4B77F642DDFB
   */
  beebotRequestId?: string;
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
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0956D5DA-0978-5DC9-94B0-C68527DA7475
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 100
   */
  totalCount?: number;
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

