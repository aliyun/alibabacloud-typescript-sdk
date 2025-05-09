// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemList } from "./GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemList";


export class GetAuthorityTemplateItemResponseBody extends $dara.Model {
  /**
   * @remarks
   * The permission templates.
   */
  authorityTemplateItemList?: GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemList;
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
   * 5B96E35F-A58E-5399-9041-09CF9A1E46EA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      authorityTemplateItemList: 'AuthorityTemplateItemList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityTemplateItemList: GetAuthorityTemplateItemResponseBodyAuthorityTemplateItemList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tid: 'number',
    };
  }

  validate() {
    if(this.authorityTemplateItemList && typeof (this.authorityTemplateItemList as any).validate === 'function') {
      (this.authorityTemplateItemList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

