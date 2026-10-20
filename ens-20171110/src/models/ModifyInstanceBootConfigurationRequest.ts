// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceBootConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The boot method.
   * 
   * @example
   * legacy
   */
  bootSet?: string;
  /**
   * @remarks
   * The boot type.
   * Governance testing has confirmed that the value disk passes parameter validation, whereas the original example value pxe returns Parameter.Invalid. Other values have not been confirmed.
   * 
   * This parameter is required.
   * 
   * @example
   * disk
   */
  bootType?: string;
  /**
   * @remarks
   * Specifies whether the boot process depends on a disk.
   * 
   * @example
   * on
   */
  diskSet?: string;
  /**
   * @remarks
   * The ID of the instance whose boot configuration you want to modify. You can specify only one instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-instance****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      bootSet: 'BootSet',
      bootType: 'BootType',
      diskSet: 'DiskSet',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bootSet: 'string',
      bootType: 'string',
      diskSet: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

