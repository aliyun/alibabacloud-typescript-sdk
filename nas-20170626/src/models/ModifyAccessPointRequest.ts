// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required when the target file system is a General-purpose NAS file system.
   * 
   * Default permission group: DEFAULT_VPC_GROUP_NAME (the default permission group for VPCs).
   * > Not supported by Agentic file systems.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroup?: string;
  /**
   * @remarks
   * The access point ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The access point name.
   * 
   * @example
   * test
   */
  accessPointName?: string;
  /**
   * @remarks
   * Specifies whether to enable the RAM policy. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled. This is the default value.
   * 
   * > After you enable the RAM policy for the access point, all Resource Access Management (RAM) users are denied from using the access point to mount and access data by default. You must grant authorization to the accounts to enable the corresponding access permissions, and mount the file system through the access point. If this feature is disabled, the access point allows anonymous mounting.
   * 
   * > Not supported by Agentic file systems.
   * 
   * @example
   * false
   */
  enabledRam?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
      accessPointId: 'AccessPointId',
      accessPointName: 'AccessPointName',
      enabledRam: 'EnabledRam',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: 'string',
      accessPointId: 'string',
      accessPointName: 'string',
      enabledRam: 'boolean',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

