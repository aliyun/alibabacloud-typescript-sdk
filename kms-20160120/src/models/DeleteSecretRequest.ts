// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecretRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered.
   * 
   * Valid values:
   * 
   * *   **true**
   * *   **false** (default value)
   * 
   * @example
   * false
   */
  forceDeleteWithoutRecovery?: string;
  /**
   * @remarks
   * Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30. Unit: Days.
   * 
   * @example
   * 10
   */
  recoveryWindowInDays?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      forceDeleteWithoutRecovery: 'ForceDeleteWithoutRecovery',
      recoveryWindowInDays: 'RecoveryWindowInDays',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDeleteWithoutRecovery: 'string',
      recoveryWindowInDays: 'string',
      secretName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

