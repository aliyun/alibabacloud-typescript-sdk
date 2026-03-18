// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTextbookAssistantArticlesResponseBodyData extends $dara.Model {
  /**
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
  data?: ListTextbookAssistantArticlesResponseBodyData[];
  /**
   * @example
   * 0
   */
  errCode?: string;
  errMessage?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 70412360-4272-571A-827D-84C2C07C450F
   */
  requestId?: string;
  /**
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

