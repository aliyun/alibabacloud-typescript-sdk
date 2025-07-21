// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRotationPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic key rotation. Valid values:
   * 
   * *   true: enables automatic key rotation.
   * *   false: disables automatic key rotation.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableAutomaticRotation?: boolean;
  /**
   * @remarks
   * The ID of the customer master key (CMK). The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The period of automatic key rotation. Specify the value in the integer[unit] format. The following units are supported: d (day), h (hour), m (minute), and s (second). For example, you can use either 7d or 604800s to specify a seven-day period. The period can range from 7 days to 730 days.
   * 
   * >  If you set the EnableAutomaticRotation parameter to true, you must also specify this parameter. If you set the EnableAutomaticRotation parameter to false, you can leave this parameter unspecified.
   * 
   * @example
   * 30d
   */
  rotationInterval?: string;
  static names(): { [key: string]: string } {
    return {
      enableAutomaticRotation: 'EnableAutomaticRotation',
      keyId: 'KeyId',
      rotationInterval: 'RotationInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAutomaticRotation: 'boolean',
      keyId: 'string',
      rotationInterval: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

