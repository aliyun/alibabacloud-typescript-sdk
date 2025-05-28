// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOrganizationRoleUsersResponseBodyResult } from "./ListOrganizationRoleUsersResponseBodyResult";


export class ListOrganizationRoleUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BCE45E6D-****-4F94-86BB-****2B1615FF
   */
  requestId?: string;
  /**
   * @remarks
   * Returns the list of users under the organization role.
   */
  result?: ListOrganizationRoleUsersResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful. Possible values:
   * - true: Request succeeded
   * - false: Request failed
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
      result: ListOrganizationRoleUsersResponseBodyResult,
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

