// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSensitiveColumnsResponseBodySensitiveColumnList } from "./ListSensitiveColumnsResponseBodySensitiveColumnList";


export class ListSensitiveColumnsResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * 09D82FD7-F87F-59EF-AA82-AEF71B09E306
   */
  requestId?: string;
  /**
   * @remarks
   * The sensitive fields.
   */
  sensitiveColumnList?: ListSensitiveColumnsResponseBodySensitiveColumnList;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful.
   * - false: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      sensitiveColumnList: 'SensitiveColumnList',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sensitiveColumnList: ListSensitiveColumnsResponseBodySensitiveColumnList,
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.sensitiveColumnList && typeof (this.sensitiveColumnList as any).validate === 'function') {
      (this.sensitiveColumnList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

