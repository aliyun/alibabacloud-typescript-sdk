// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstancesToNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** Use `format_disk_option` instead.
   * 
   * - `true`: Equivalent to setting `format_disk_option` to `DataDisk`.
   * - `false`: Equivalent to setting `format_disk_option` to `SystemDisk`.
   * 
   * @example
   * false
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * The list of ECS instances to be added.
   */
  instances?: string[];
  /**
   * @remarks
   * Specifies whether to retain the original instance name. Valid values:
   * 
   * - `true`: Retains the instance name.
   * 
   * - `false`: Does not retain the instance name.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  keepInstanceName?: boolean;
  /**
   * @remarks
   * The SSH logon password for the instances to be added.
   * 
   * @example
   * ******
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      formatDisk: 'format_disk',
      instances: 'instances',
      keepInstanceName: 'keep_instance_name',
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatDisk: 'boolean',
      instances: { 'type': 'array', 'itemType': 'string' },
      keepInstanceName: 'boolean',
      password: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

