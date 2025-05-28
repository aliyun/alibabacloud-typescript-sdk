// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkspaceRoleUsersResponseBodyResult } from "./ListWorkspaceRoleUsersResponseBodyResult";


export class ListWorkspaceRoleUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * D787E1A3-A93C-424A-B626-C2B05DF8D885
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the list of users under the specified workspace role.
   */
  result?: ListWorkspaceRoleUsersResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
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
      result: ListWorkspaceRoleUsersResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

