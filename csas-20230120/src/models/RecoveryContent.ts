// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthReportInterval } from "./AuthReportInterval";


export class RecoveryContent extends $dara.Model {
  /**
   * @remarks
   * The validity period configuration after authentication-based recovery. This parameter is used when RecoveryActions includes auth.
   */
  authReportInterval?: AuthReportInterval;
  /**
   * @remarks
   * The set of recovery methods after mitigation. Valid values:
   * - **auto**: Automatic recovery.
   * - **auth**: Recovery after the user completes authentication.
   * - **console**: Manual recovery by an administrator in the console.
   * 
   * This parameter is required.
   */
  recoveryActions?: string[];
  static names(): { [key: string]: string } {
    return {
      authReportInterval: 'AuthReportInterval',
      recoveryActions: 'RecoveryActions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authReportInterval: AuthReportInterval,
      recoveryActions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.authReportInterval && typeof (this.authReportInterval as any).validate === 'function') {
      (this.authReportInterval as any).validate();
    }
    if(Array.isArray(this.recoveryActions)) {
      $dara.Model.validateArray(this.recoveryActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

