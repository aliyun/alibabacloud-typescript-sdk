// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailList } from "./ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailList";


export class ListSensitiveColumnsDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7629888F-C9FB-4D16-A7D3-B443FE06FBD4
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the sensitive field.
   */
  sensitiveColumnsDetailList?: ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailList;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      sensitiveColumnsDetailList: 'SensitiveColumnsDetailList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sensitiveColumnsDetailList: ListSensitiveColumnsDetailResponseBodySensitiveColumnsDetailList,
      success: 'boolean',
    };
  }

  validate() {
    if(this.sensitiveColumnsDetailList && typeof (this.sensitiveColumnsDetailList as any).validate === 'function') {
      (this.sensitiveColumnsDetailList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

