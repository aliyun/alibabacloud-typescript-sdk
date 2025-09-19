// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupPolicyResponseBodyBackupPolicy extends $dara.Model {
  /**
   * @remarks
   * The ID of the anti-ransomware policy.
   * 
   * @example
   * 1301575
   */
  id?: string;
  /**
   * @remarks
   * The status of the anti-ransomware policy. Valid values:
   * 
   * *   **enabled**
   * *   **disabled**
   * 
   * >  After you create an anti-ransomware policy, the policy is enabled by default.
   * 
   * @example
   * enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBackupPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the anti-ransomware policy.
   */
  backupPolicy?: CreateBackupPolicyResponseBodyBackupPolicy;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPolicy: 'BackupPolicy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPolicy: CreateBackupPolicyResponseBodyBackupPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.backupPolicy && typeof (this.backupPolicy as any).validate === 'function') {
      (this.backupPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

