// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachHostAccountsToUserResponseBodyResultsHostAccounts } from "./AttachHostAccountsToUserResponseBodyResultsHostAccounts";


export class AttachHostAccountsToUserResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The return code that indicates whether the call was successful. Valid values:
   * 
   * *   **OK**: The call was successful.
   * 
   * *   **UNEXPECTED**: An unknown error occurred.
   * 
   * *   **INVALID_ARGUMENT**: A request parameter is invalid.
   * 
   * > Make sure that the request parameters are valid and call the operation again.
   * 
   * *   **OBJECT_NOT_FOUND**: The specified object on which you want to perform the operation does not exist.
   * 
   * > Check whether the specified ID of the bastion host exists, whether the specified hosts exist, and whether the specified host IDs are valid. Then, call the operation again.
   * 
   * *   **OBJECT_AlREADY_EXISTS**: The specified object on which you want to perform the operation already exists.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The result of authorizing the user to manage the host accounts.
   */
  hostAccounts?: AttachHostAccountsToUserResponseBodyResultsHostAccounts[];
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccounts: 'HostAccounts',
      hostId: 'HostId',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccounts: { 'type': 'array', 'itemType': AttachHostAccountsToUserResponseBodyResultsHostAccounts },
      hostId: 'string',
      message: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostAccounts)) {
      $dara.Model.validateArray(this.hostAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

