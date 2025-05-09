// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataLakeFunctionNameResponseBody extends $dara.Model {
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * UnknownError
   */
  errorMessage?: string;
  functionNameList?: string[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * f056501ada12c1cc
   */
  nextToken?: string;
  /**
   * @example
   * F1C78D32-1AFD-58AD-9DD2-C8A0896969DD
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      functionNameList: 'FunctionNameList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      functionNameList: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.functionNameList)) {
      $dara.Model.validateArray(this.functionNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

