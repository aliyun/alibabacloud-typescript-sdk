// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessPointRequestTag extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * This parameter is required for a General-purpose File Storage NAS (NAS) file system.
   * 
   * The default permission group for virtual private clouds (VPCs) is named DEFAULT_VPC_GROUP_NAME.
   * 
   * This parameter is required.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroup?: string;
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
   * Specifies whether to enable the RAM policy. Valid values:
   * 
   * *   true: The RAM policy is enabled.
   * *   false (default): The RAM policy is disabled.
   * 
   * >  After the RAM policy is enabled for access points, no RAM user is allowed to use access points to mount and access data by default. To use access points to mount and access data as a RAM user, you must grant the related access permissions to the RAM user. If the RAM policy is disabled, access points can be anonymously mounted. For more information about how to configure permissions on access points, see [Configure a policy for the access point](https://help.aliyun.com/document_detail/2545998.html).
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
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the owner group.
   * 
   * This parameter is required if the RootDirectory directory does not exist.
   * 
   * @example
   * 1
   */
  ownerGroupId?: number;
  /**
   * @remarks
   * The owner ID.
   * 
   * This parameter is required if the RootDirectory directory does not exist.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * The Portable Operating System Interface for UNIX (POSIX) permission. Default value: 0777.
   * 
   * This field takes effect only if you specify the OwnerUserId and OwnerGroupId parameters.
   * 
   * @example
   * 0777
   */
  permission?: string;
  /**
   * @remarks
   * The ID of the POSIX user group.
   * 
   * @example
   * 123
   */
  posixGroupId?: number;
  /**
   * @remarks
   * The secondary user group. Separate multiple user group IDs with commas (,).
   * 
   * @example
   * 123,345
   */
  posixSecondaryGroupIds?: string;
  /**
   * @remarks
   * The ID of the POSIX user.
   * 
   * @example
   * 123
   */
  posixUserId?: number;
  /**
   * @remarks
   * The root directory of the access point. The default value is /. If the directory does not exist, you must also specify the OwnerUserId and OwnerGroupId parameters.
   * 
   * @example
   * /
   */
  rootDirectory?: string;
  tag?: CreateAccessPointRequestTag[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-2zesj9afh3y518k9o****
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-2zevmwkwyztjuoffg****
   */
  vswId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
      accessPointName: 'AccessPointName',
      enabledRam: 'EnabledRam',
      fileSystemId: 'FileSystemId',
      ownerGroupId: 'OwnerGroupId',
      ownerUserId: 'OwnerUserId',
      permission: 'Permission',
      posixGroupId: 'PosixGroupId',
      posixSecondaryGroupIds: 'PosixSecondaryGroupIds',
      posixUserId: 'PosixUserId',
      rootDirectory: 'RootDirectory',
      tag: 'Tag',
      vpcId: 'VpcId',
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: 'string',
      accessPointName: 'string',
      enabledRam: 'boolean',
      fileSystemId: 'string',
      ownerGroupId: 'number',
      ownerUserId: 'number',
      permission: 'string',
      posixGroupId: 'number',
      posixSecondaryGroupIds: 'string',
      posixUserId: 'number',
      rootDirectory: 'string',
      tag: { 'type': 'array', 'itemType': CreateAccessPointRequestTag },
      vpcId: 'string',
      vswId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

