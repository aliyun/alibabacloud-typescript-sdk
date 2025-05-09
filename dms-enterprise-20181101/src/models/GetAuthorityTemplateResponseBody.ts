// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAuthorityTemplateResponseBodyAuthorityTemplateView } from "./GetAuthorityTemplateResponseBodyAuthorityTemplateView";


export class GetAuthorityTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the permission template.
   */
  authorityTemplateView?: GetAuthorityTemplateResponseBodyAuthorityTemplateView;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
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
   * The ID of the tenant.
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
      authorityTemplateView: GetAuthorityTemplateResponseBodyAuthorityTemplateView,
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

