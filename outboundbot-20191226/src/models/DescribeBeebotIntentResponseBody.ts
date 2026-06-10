// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBeebotIntentResponseBodyIntent extends $dara.Model {
  /**
   * @remarks
   * Intent alias
   * 
   * @example
   * 嗯明白了
   */
  aliasName?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2025-04-21 10:29:59.+0800
   */
  createTime?: string;
  /**
   * @remarks
   * Creator user ID
   * 
   * @example
   * 1252504
   */
  createUserId?: string;
  /**
   * @remarks
   * Creator account name
   * 
   * @example
   * xxx@voice-navigator-testonaliyun.com
   */
  createUserName?: string;
  /**
   * @remarks
   * Intent ID
   * 
   * @example
   * 10717802
   */
  intentId?: number;
  /**
   * @remarks
   * Intent name
   * 
   * @example
   * 知道了
   */
  intentName?: string;
  /**
   * @remarks
   * Modification time
   * 
   * @example
   * 2025-04-21 15:52:57.+0800
   */
  modifyTime?: string;
  /**
   * @remarks
   * Modifier user ID
   * 
   * @example
   * 1252504
   */
  modifyUserId?: string;
  /**
   * @remarks
   * Modifier account name
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
   * Internal request ID
   * 
   * @example
   * 0B219FCB-EC71-1F08-BB1B-0E87C20158C8
   */
  beebotRequestId?: string;
  /**
   * @remarks
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Intent information
   */
  intent?: DescribeBeebotIntentResponseBodyIntent;
  /**
   * @remarks
   * Intent ID
   * 
   * @example
   * 10717802
   */
  intentId?: number;
  /**
   * @remarks
   * API message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded
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

