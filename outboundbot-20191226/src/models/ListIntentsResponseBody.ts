// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentsResponseBodyIntentsList extends $dara.Model {
  /**
   * @remarks
   * The time when the intent was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * The intent ID.
   * 
   * @example
   * a8494b35-eefb-4c8a-887b-b60d2f0fa57a
   */
  intentId?: string;
  /**
   * @remarks
   * The intent name.
   * 
   * @example
   * 统一还款
   */
  intentName?: string;
  /**
   * @remarks
   * The keywords of the intent.
   * 
   * @example
   * ["还款"]
   */
  keywords?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 6ef95fd5-558f-4ee8-af34-b2ede087a87c
   */
  scriptId?: string;
  /**
   * @remarks
   * The time when the intent was last updated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1578469042851
   */
  updateTime?: number;
  /**
   * @remarks
   * The user utterances that trigger the intent.
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

export class ListIntentsResponseBodyIntents extends $dara.Model {
  /**
   * @remarks
   * The list of intents.
   */
  list?: ListIntentsResponseBodyIntentsList[];
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of intents.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListIntentsResponseBodyIntentsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
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
   * The paginated list of intents.
   */
  intents?: ListIntentsResponseBodyIntents;
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
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
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
      intents: 'Intents',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      intents: ListIntentsResponseBodyIntents,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.intents && typeof (this.intents as any).validate === 'function') {
      (this.intents as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

