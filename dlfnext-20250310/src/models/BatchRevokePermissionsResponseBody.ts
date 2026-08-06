// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FailurePermission } from "./FailurePermission";


export class BatchRevokePermissionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * - If success is false, a business error message is returned.
   * 
   * - If success is true, an empty value is returned.
   * 
   * @example
   * 空
   */
  errorMessage?: string;
  /**
   * @remarks
   * The results of permissions that failed to be revoked in batches.
   */
  failurePermissions?: FailurePermission[];
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - true: The API call is successful.
   * - false: The API call failed.
   * 
   * @example
   * true
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

