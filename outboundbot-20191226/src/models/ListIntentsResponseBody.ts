// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentsResponseBodyIntentsList extends $dara.Model {
  /**
   * @example
   * 1578469042851
   */
  createTime?: number;
  intentDescription?: string;
  /**
   * @example
   * a8494b35-eefb-4c8a-887b-b60d2f0fa57a
   */
  intentId?: string;
  intentName?: string;
  keywords?: string;
  /**
   * @example
   * 6ef95fd5-558f-4ee8-af34-b2ede087a87c
   */
  scriptId?: string;
  /**
   * @example
   * 1578469042851
   */
  updateTime?: number;
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
  list?: ListIntentsResponseBodyIntentsList[];
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  intents?: ListIntentsResponseBodyIntents;
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

