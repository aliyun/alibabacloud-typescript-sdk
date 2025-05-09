// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIndexesResponseBodyIndexList } from "./ListIndexesResponseBodyIndexList";


export class ListIndexesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The details of indexes.
   */
  indexList?: ListIndexesResponseBodyIndexList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1F4DE2F1-5B47-462A-A973-E02EB7AF386B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      indexList: 'IndexList',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      indexList: ListIndexesResponseBodyIndexList,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.indexList && typeof (this.indexList as any).validate === 'function') {
      (this.indexList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

