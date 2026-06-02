// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntentResponseBodyIntent extends $dara.Model {
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

export class DescribeIntentResponseBody extends $dara.Model {
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
  intent?: DescribeIntentResponseBodyIntent;
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

