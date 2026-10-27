// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBeebotIntentResponseBodyIntent extends $dara.Model {
  /**
   * @remarks
   * The intent alias.
   * 
   * @example
   * Okay, got it
   */
  aliasName?: string;
  /**
   * @remarks
   * The creation time. The format is YYYY-MM-DD HH:mm:ss.+ZZZZ, where +ZZZZ indicates the time zone offset.
   * 
   * @example
   * 2025-04-21 10:29:59.+0800
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 1252504
   */
  createUserId?: string;
  /**
   * @remarks
   * The username of the creator.
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
   * @example
   * Got it
   */
  intentName?: string;
  /**
   * @remarks
   * The modification time. The format is YYYY-MM-DD HH:mm:ss.+ZZZZ, where +ZZZZ indicates the time zone offset.
   * 
   * @example
   * 2025-04-21 15:52:57.+0800
   */
  modifyTime?: string;
  /**
   * @remarks
   * The ID of the modifier.
   * 
   * @example
   * 1252504
   */
  modifyUserId?: string;
  /**
   * @remarks
   * The username of the modifier.
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

export class DescribeBeebotIntentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal request ID.
   * 
   * @example
   * 0B219FCB-EC71-1F08-BB1B-0E87C20158C8
   */
  beebotRequestId?: string;
  /**
   * @remarks
   * The API status code.
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
   * The intent information.
   */
  intent?: DescribeBeebotIntentResponseBodyIntent;
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
   * The API message.
   * 
   * @example
   * Success
   */
  message?: string;
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
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      beebotRequestId: 'BeebotRequestId',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      intent: 'Intent',
      intentId: 'IntentId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beebotRequestId: 'string',
      code: 'string',
      httpStatusCode: 'number',
      intent: DescribeBeebotIntentResponseBodyIntent,
      intentId: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.intent && typeof (this.intent as any).validate === 'function') {
      (this.intent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

