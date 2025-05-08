// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceBootConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The startup method.
   * 
   * @example
   * legacy
   */
  bootSet?: string;
  /**
   * @remarks
   * The startup type.
   * 
   * @example
   * pxe
   */
  bootType?: string;
  /**
   * @remarks
   * Specifies whether the startup depends on the disk.
   * 
   * @example
   * on
   */
  diskSet?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-****
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

