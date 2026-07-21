// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantArticlesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The article ID.
   * 
   * @example
   * 0c05700d4d9411efbe6e0c42a106bb02
   */
  articleId?: string;
  static names(): { [key: string]: string } {
    return {
      articleId: 'articleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTextbookAssistantArticlesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListTextbookAssistantArticlesResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * - A value of 0 indicates success.
   * 
   * - A value greater than 0 indicates a specific error.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 未知错误
   */
  errMessage?: string;
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
   * The request ID.
   * 
   * @example
   * 70412360-4272-571A-827D-84C2C07C450F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
   * 
   * - **true**: The call succeeded.
   * 
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      httpStatusCode: 'httpStatusCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListTextbookAssistantArticlesResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

