// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FailurePermission } from "./FailurePermission";


export class BatchGrantPermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the request fails. If the request is successful, this parameter is empty.
   * 
   * @example
   * 空
   */
  errorMessage?: string;
  /**
   * @remarks
   * The permissions failed to be granted.
   */
  failurePermissions?: FailurePermission[];
  /**
   * @remarks
   * Indicates whether the API call was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      failurePermissions: 'failurePermissions',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      failurePermissions: { 'type': 'array', 'itemType': FailurePermission },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.failurePermissions)) {
      $dara.Model.validateArray(this.failurePermissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

