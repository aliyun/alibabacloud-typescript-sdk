// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAuthorityTemplateResponseBodyAuthorityTemplateView } from "./CreateAuthorityTemplateResponseBodyAuthorityTemplateView";


export class CreateAuthorityTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the permission template.
   */
  authorityTemplateView?: CreateAuthorityTemplateResponseBodyAuthorityTemplateView;
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
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
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
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to query the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      authorityTemplateView: 'AuthorityTemplateView',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityTemplateView: CreateAuthorityTemplateResponseBodyAuthorityTemplateView,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      tid: 'number',
    };
  }

  validate() {
    if(this.authorityTemplateView && typeof (this.authorityTemplateView as any).validate === 'function') {
      (this.authorityTemplateView as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

