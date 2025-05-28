// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryUserGroupListByParentIdResponseBodyResult } from "./QueryUserGroupListByParentIdResponseBodyResult";


export class QueryUserGroupListByParentIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 72B19D61-B37A-5C7A-9389-0856CD7935B3
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the sub-user group.
   */
  result?: QueryUserGroupListByParentIdResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': QueryUserGroupListByParentIdResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

