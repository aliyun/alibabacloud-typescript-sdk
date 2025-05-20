// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FailurePermission } from "./FailurePermission";


export class BatchRevokePermissionsResponseBody extends $dara.Model {
  errorMessage?: string;
  failurePermissions?: FailurePermission[];
  /**
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

