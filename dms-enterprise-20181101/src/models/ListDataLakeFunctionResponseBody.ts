// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLFunction } from "./Dlfunction";


export class ListDataLakeFunctionResponseBody extends $dara.Model {
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
  functionList?: DLFunction[];
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
   * 7FAD400F-7A5C-4193-8F9A-39D86C4F0231
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
      functionList: 'FunctionList',
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
      functionList: { 'type': 'array', 'itemType': DLFunction },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.functionList)) {
      $dara.Model.validateArray(this.functionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

