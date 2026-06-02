// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBeebotIntentResponseBodyIntent extends $dara.Model {
  aliasName?: string;
  /**
   * @example
   * 2025-04-21 10:29:59.+0800
   */
  createTime?: string;
  /**
   * @example
   * 1252504
   */
  createUserId?: string;
  /**
   * @example
   * xxx@voice-navigator-testonaliyun.com
   */
  createUserName?: string;
  /**
   * @example
   * 10717802
   */
  intentId?: number;
  intentName?: string;
  /**
   * @example
   * 2025-04-21 15:52:57.+0800
   */
  modifyTime?: string;
  /**
   * @example
   * 1252504
   */
  modifyUserId?: string;
  /**
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
   * @example
   * 0B219FCB-EC71-1F08-BB1B-0E87C20158C8
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
  intent?: DescribeBeebotIntentResponseBodyIntent;
  /**
   * @example
   * 10717802
   */
  intentId?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
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

