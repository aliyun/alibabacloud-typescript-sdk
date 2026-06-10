// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBeebotIntentResponseBodyIntents extends $dara.Model {
  /**
   * @remarks
   * The intent alias.
   * 
   * @example
   * 嗯明白了
   */
  aliasName?: string;
  /**
   * @remarks
   * The time when the intent was created.
   * 
   * @example
   * 2025-04-21 16:03:15.+0800
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the user who created the intent.
   * 
   * @example
   * 1252504
   */
  createUserId?: string;
  /**
   * @remarks
   * The name of the account that created the intent.
   * 
   * @example
   * xxx@voice-navigator-testonaliyun.com
   */
  createUserName?: string;
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
   * The intent name.
   * 
   * > This is the intent code. It uniquely identifies the intent.
   * 
   * @example
   * 知道了
   */
  intentName?: string;
  /**
   * @remarks
   * The time when the intent was last modified.
   * 
   * @example
   * 2025-04-21 16:03:15.+0800
   */
  modifyTime?: string;
  /**
   * @remarks
   * Modify User ID
   * 
   * @example
   * 1252504
   */
  modifyUserId?: string;
  /**
   * @remarks
   * Modify the account name.
   * 
   * @example
   * xxx@voice-navigator-testonaliyun.com
   */
  modifyUserName?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      intentId: 'IntentId',
      intentName: 'IntentName',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      createTime: 'string',
      createUserId: 'string',
      createUserName: 'string',
      intentId: 'number',
      intentName: 'string',
      modifyTime: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBeebotIntentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal request ID.
   * 
   * @example
   * 497CFAFF-48CC-161A-AD2C-252DED569037
   */
  beebotRequestId?: string;
  /**
   * @remarks
   * The response code.
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
   * The list of intents.
   */
  intents?: ListBeebotIntentResponseBodyIntents[];
  /**
   * @remarks
   * The message returned by the operation.
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
   * The number of entries returned on each page.
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
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded.
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
  static names(): { [key: string]: string } {
    return {
      beebotRequestId: 'BeebotRequestId',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      intents: 'Intents',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beebotRequestId: 'string',
      code: 'string',
      httpStatusCode: 'number',
      intents: { 'type': 'array', 'itemType': ListBeebotIntentResponseBodyIntents },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.intents)) {
      $dara.Model.validateArray(this.intents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

