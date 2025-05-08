// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceBootConfigurationRequest extends $dara.Model {
  /**
   * @example
   * legacy
   */
  bootSet?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pxe
   */
  bootType?: string;
  /**
   * @example
   * on
   */
  diskSet?: string;
  /**
   * @remarks
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

