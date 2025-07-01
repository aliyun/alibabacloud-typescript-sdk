// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required for a General-purpose File Storage NAS (NAS) file system.
   * 
   * The default permission group for virtual private clouds (VPCs) is named DEFAULT_VPC_GROUP_NAME.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroup?: string;
  /**
   * @remarks
   * The ID of the access point.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The name of the access point.
   * 
   * @example
   * test
   */
  accessPointName?: string;
  /**
   * @remarks
   * Specifies whether to enable the Resource Access Management (RAM) policy. Valid values:
   * 
   * *   true: The RAM policy is enabled.
   * *   false (default): The RAM policy is disabled.
   * 
   * >  After the RAM policy is enabled for access points, no RAM user is allowed to use access points to mount and access data by default. To use access points to mount and access data as a RAM user, you must grant the related access permissions to the RAM user. If the RAM policy is disabled, access points can be anonymously mounted.
   * 
   * @example
   * false
   */
  enabledRam?: boolean;
  /**
   * @remarks
   * The ID of the file system.
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

