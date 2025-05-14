// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSpecResponseBodySpecInfoModel extends $dara.Model {
  /**
   * @remarks
   * Number of CPU cores.
   * 
   * @example
   * 8
   */
  core?: number;
  /**
   * @remarks
   * The maximum number of cloud phone instances.
   * 
   * @example
   * 40
   */
  maxPhoneCount?: string;
  /**
   * @remarks
   * Memory size.
   * 
   * @example
   * 16
   */
  memory?: number;
  /**
   * @remarks
   * The minimum number of cloud phone instances.
   * 
   * @example
   * 4
   */
  minPhoneCount?: string;
  /**
   * @example
   * 2
   */
  phoneCount?: string;
  /**
   * @example
   * 1920*1080
   */
  resolution?: string;
  /**
   * @remarks
   * Specification ID.
   * 
   * @example
   * acp.basic.small
   */
  specId?: string;
  /**
   * @remarks
   * Specification status.
   * 
   * @example
   * Available
   */
  specStatus?: string;
  /**
   * @remarks
   * Specification type.
   * 
   * @example
   * ARM
   */
  specType?: string;
  /**
   * @remarks
   * System disk size, in GB.
   * 
   * @example
   * 32
   */
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      core: 'Core',
      maxPhoneCount: 'MaxPhoneCount',
      memory: 'Memory',
      minPhoneCount: 'MinPhoneCount',
      phoneCount: 'PhoneCount',
      resolution: 'Resolution',
      specId: 'SpecId',
      specStatus: 'SpecStatus',
      specType: 'SpecType',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      core: 'number',
      maxPhoneCount: 'string',
      memory: 'number',
      minPhoneCount: 'string',
      phoneCount: 'string',
      resolution: 'string',
      specId: 'string',
      specStatus: 'string',
      specType: 'string',
      systemDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

