// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBeebotIntentLgfResponseBodyLgfs extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2025-04-21 10:54:18.+0800
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
   * The ID of the utterance template.
   * 
   * @example
   * 5666117
   */
  lgfId?: number;
  /**
   * @remarks
   * The time when the template was last modified.
   * 
   * @example
   * 2025-04-21 10:54:18.+0800
   */
  modifyTime?: string;
  /**
   * @remarks
   * The content of the utterance template.
   * 
   * @example
   * 我是一个问法模版
   */
  ruleText?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      intentId: 'IntentId',
      lgfId: 'LgfId',
      modifyTime: 'ModifyTime',
      ruleText: 'RuleText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      intentId: 'number',
      lgfId: 'number',
      modifyTime: 'string',
      ruleText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBeebotIntentLgfResponseBody extends $dara.Model {
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
   * The list of LGFs.
   */
  lgfs?: ListBeebotIntentLgfResponseBodyLgfs[];
  /**
   * @remarks
   * The message returned by the API.
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
   * The number of entries returned per page.
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
  static names(): { [key: string]: string } {
    return {
      beebotRequestId: 'BeebotRequestId',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      lgfs: 'Lgfs',
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
      lgfs: { 'type': 'array', 'itemType': ListBeebotIntentLgfResponseBodyLgfs },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lgfs)) {
      $dara.Model.validateArray(this.lgfs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

