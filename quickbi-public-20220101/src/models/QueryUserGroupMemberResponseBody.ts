// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryUserGroupMemberResponseBodyResult } from "./QueryUserGroupMemberResponseBodyResult";


export class QueryUserGroupMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 48C930FF-DFCF-5986-902B-E24C202E2443
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request for the user group member list.
   */
  result?: QueryUserGroupMemberResponseBodyResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * 
   * - true: The request was successful.
   * - false: The request failed.
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
      result: { 'type': 'array', 'itemType': QueryUserGroupMemberResponseBodyResult },
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

