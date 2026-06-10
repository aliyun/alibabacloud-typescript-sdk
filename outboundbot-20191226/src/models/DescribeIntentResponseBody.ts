// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntentResponseBodyIntent extends $dara.Model {
  /**
   * @remarks
   * The time when the intent was created.
   * 
   * @example
   * 1578469042851
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the intent.
   * 
   * @example
   * 同意还款意图
   */
  intentDescription?: string;
  /**
   * @remarks
   * The ID of the intent.
   * 
   * @example
   * 10722701
   */
  intentId?: string;
  /**
   * @remarks
   * The name of the intent.
   * 
   * @example
   * 统一还款
   */
  intentName?: string;
  /**
   * @remarks
   * The keywords for the intent. You can use these keywords to filter intents during list operations.
   * 
   * @example
   * ["还款"]
   */
  keywords?: string;
  /**
   * @remarks
   * The ID of the script.
   * 
   * @example
   * 6ef95fd5-558f-4ee8-af34-b2ede087a87c
   */
  scriptId?: string;
  /**
   * @remarks
   * The time when the intent was last updated.
   * 
   * @example
   * 1578469042851
   */
  updateTime?: number;
  /**
   * @remarks
   * A list of utterances that trigger the intent.
   * 
   * @example
   * ["ok","好的","好吧","好嘞","可以","行啊","行吧","那行","知道了","我看一下","能的","等会吧","等一下","马上还","等一会","过两天","我会想办法处理"]
   */
  utterances?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      intentDescription: 'IntentDescription',
      intentId: 'IntentId',
      intentName: 'IntentName',
      keywords: 'Keywords',
      scriptId: 'ScriptId',
      updateTime: 'UpdateTime',
      utterances: 'Utterances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      intentDescription: 'string',
      intentId: 'string',
      intentName: 'string',
      keywords: 'string',
      scriptId: 'string',
      updateTime: 'number',
      utterances: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponseBody extends $dara.Model {
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
   * The details of the intent.
   */
  intent?: DescribeIntentResponseBodyIntent;
  /**
   * @remarks
   * The response message.
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
   * 327FEE69-F173-5B2F-9F3B-DCC6182D7BA0
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
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      intent: 'Intent',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      intent: DescribeIntentResponseBodyIntent,
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

