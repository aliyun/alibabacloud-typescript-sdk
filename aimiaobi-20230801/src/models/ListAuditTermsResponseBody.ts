// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuditTermsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Exception statements
   */
  exceptionWord?: string[];
  /**
   * @remarks
   * Task primary key ID
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * Keyword
   * 
   * @example
   * 龘
   */
  keyword?: string;
  /**
   * @remarks
   * Suggested word
   * 
   * @example
   * 龘(dá)
   */
  suggestWord?: string;
  /**
   * @remarks
   * Audit basis
   * 
   * @example
   * 龙行龘龘出自四库本《玉篇》23龙部第8字，文字释义为群龙腾飞的样子，昂扬而热烈。
   */
  termsDesc?: string;
  /**
   * @remarks
   * Dictionary name
   */
  termsName?: string;
  static names(): { [key: string]: string } {
    return {
      exceptionWord: 'ExceptionWord',
      id: 'Id',
      keyword: 'Keyword',
      suggestWord: 'SuggestWord',
      termsDesc: 'TermsDesc',
      termsName: 'TermsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionWord: { 'type': 'array', 'itemType': 'string' },
      id: 'string',
      keyword: 'string',
      suggestWord: 'string',
      termsDesc: 'string',
      termsName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exceptionWord)) {
      $dara.Model.validateArray(this.exceptionWord);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuditTermsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code
   * 
   * @example
   * DataNotExists
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: ListAuditTermsResponseBodyData[];
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
   * Maximum number of results returned
   * 
   * @example
   * 77
   */
  maxResults?: number;
  /**
   * @remarks
   * Error description
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Token for the next page
   * 
   * @example
   * x\\"x\\"x
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 58
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAuditTermsResponseBodyData },
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

