// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstancesToNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** Use `format_disk_option` instead. Valid values:
   * 
   * - `true`: equivalent to setting `format_disk_option` to `DataDisk`.
   * - `false`: equivalent to setting `format_disk_option` to `SystemDisk`.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  formatDisk?: boolean;
  /**
   * @remarks
   * The disk formatting method. This parameter is mutually exclusive with `format_disk` set to `true`. Valid values:
   * 
   * - `SystemDisk`: No additional initialization is performed. Container runtime data is stored on the system cloud disk or any disk that is already mounted to the relevant directory during import.
   * - `DataDisk`: If a data cloud disk or local disk is mounted, the last disk is formatted and mounted to store container runtime data.
   * - `NodePoolDiskConfig`: Initializes data cloud disks based on the configuration of the imported node pool. Cloud disks and elastic ephemeral disks are matched based on the `disk_name` field of the node pool and the `DiskName` field of the block storage. Local disks are matched sequentially based on the PCI address order. Node pool configurations that do not match any disk are ignored.
   * 
   * >Warning: The `DataDisk` option is retained only for historical compatibility and is strongly discouraged.
   * This option uses the last disk in lexicographical order of device names under `/dev` (NVMe is preferred). Note that nvme9 takes precedence over nvme10. Operating systems with newer kernels such as Alinux 4 cannot guarantee a stable device order.
   * 
   * 
   * Disks with recognizable file systems during import skip the formatting step and are mounted directly.
   * 
   * @example
   * NodePoolDiskConfig
   */
  formatDiskOption?: string;
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
      formatDiskOption: 'format_disk_option',
      instances: 'instances',
      keepInstanceName: 'keep_instance_name',
      password: 'password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formatDisk: 'boolean',
      formatDiskOption: 'string',
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

