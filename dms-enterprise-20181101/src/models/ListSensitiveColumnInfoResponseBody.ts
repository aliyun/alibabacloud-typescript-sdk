// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSensitiveColumnInfoResponseBodySensitiveColumnList } from "./ListSensitiveColumnInfoResponseBodySensitiveColumnList";


export class ListSensitiveColumnInfoResponseBody extends $dara.Model {
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
  /**
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  sensitiveColumnList?: ListSensitiveColumnInfoResponseBodySensitiveColumnList;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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
      sensitiveColumnList: ListSensitiveColumnInfoResponseBodySensitiveColumnList,
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

