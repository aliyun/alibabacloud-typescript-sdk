// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAbacAuthorizationsResponseBodyAuthorizationList } from "./ListAbacAuthorizationsResponseBodyAuthorizationList";


export class ListAbacAuthorizationsResponseBody extends $dara.Model {
  authorizationList?: ListAbacAuthorizationsResponseBodyAuthorizationList[];
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
   * 7FAD400F-7A5C-4193-8F9A-39D86C4F0231
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationList: 'AuthorizationList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationList: { 'type': 'array', 'itemType': ListAbacAuthorizationsResponseBodyAuthorizationList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.authorizationList)) {
      $dara.Model.validateArray(this.authorizationList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

