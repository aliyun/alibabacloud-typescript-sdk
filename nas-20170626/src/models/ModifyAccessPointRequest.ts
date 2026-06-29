// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * The permission group name.
   * 
   * This parameter is required when the file system is a General-purpose NAS file system.
   * 
   * Default permission group: DEFAULT_VPC_GROUP_NAME (the default VPC permission group).
   * > Agentic file systems do not support this parameter.
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
   * - false (default): Not enabled.
   * 
   * > After you enable the access point RAM policy, all Resource Access Management (RAM) users are denied access to mount and access data through the access point by default. You must grant the corresponding access permissions through authorization and mount and access data through the access point. After you disable the RAM policy, the access point allows anonymity mounting.
   * 
   * > Agentic file systems do not support this parameter.
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

