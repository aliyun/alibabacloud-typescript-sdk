// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAuthorityTemplateResponseBodyAuthorityTemplateViewList } from "./ListAuthorityTemplateResponseBodyAuthorityTemplateViewList";


export class ListAuthorityTemplateResponseBody extends $dara.Model {
  authorityTemplateViewList?: ListAuthorityTemplateResponseBodyAuthorityTemplateViewList;
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
   * 31853A2B-DC9D-5B39-8492-D2AC8BCF550E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorityTemplateViewList: 'AuthorityTemplateViewList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tid: 'Tid',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityTemplateViewList: ListAuthorityTemplateResponseBodyAuthorityTemplateViewList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tid: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.authorityTemplateViewList && typeof (this.authorityTemplateViewList as any).validate === 'function') {
      (this.authorityTemplateViewList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

