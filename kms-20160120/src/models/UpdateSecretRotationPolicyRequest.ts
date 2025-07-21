// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecretRotationPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic rotation. Valid values:
   * 
   * *   true: enables automatic rotation.
   * *   false: does not enable automatic rotation. This is the default value.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableAutomaticRotation?: boolean;
  /**
   * @remarks
   * The interval for automatic rotation. Valid values: 6 hours to 8,760 hours (365 days).
   * 
   * The value is in the `integer[unit]` format.````
   * 
   * The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
   * 
   * >  This parameter is required if you set the EnableAutomaticRotation parameter to true. This parameter is ignored if you set the EnableAutomaticRotation parameter to false or does not specify the EnableAutomaticRotation parameter.
   * 
   * @example
   * 30d
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * RdsSecret/Mysql5.4/MyCred
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      enableAutomaticRotation: 'EnableAutomaticRotation',
      rotationInterval: 'RotationInterval',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAutomaticRotation: 'boolean',
      rotationInterval: 'string',
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

