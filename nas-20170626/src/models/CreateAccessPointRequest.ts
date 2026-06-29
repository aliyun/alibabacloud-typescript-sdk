// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessPointRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * Limits:
   * 
   * - Cannot be empty or an empty string.
   * - Can be up to 128 characters in length.
   * - Cannot start with aliyun or acs:.
   * - Cannot contain http:// or https://.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * Limits:
   * 
   * - Cannot be empty or an empty string.
   * - Can be up to 128 characters in length.
   * - Cannot contain http:// or https://.
   * 
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
   * This parameter is required if the file system is a General-purpose NAS file system.
   * 
   * Default permission group: DEFAULT_VPC_GROUP_NAME (the default permission group for VPCs).
   * >Not supported for Agentic file systems.
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
   * The AgenticSpace ID.
   * >This parameter is required for Agentic file systems.
   * 
   * @example
   * agentic-229oypxjgpau2****
   */
  agenticSpaceId?: string;
  /**
   * @remarks
   * Specifies whether to enable access point policy.
   * Valid values:
   * 
   * - true: enabled.
   * - false (default): not enabled.
   * 
   * > After you enable access point policy for the access point, all Resource Access Management (RAM) users are denied access to mount and access data through the access point by default. You must grant the corresponding access permissions through authorization and then mount and access the file system through the access point. After you disable access point policy, the access point allows anonymity mounting. For more information about how to configure access point permissions, see [Configure access point policies](https://help.aliyun.com/document_detail/2545998.html).
   * 
   * >For Agentic file systems, this parameter must be set to true.
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
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The owner group ID.
   * 
   * This parameter is required if the RootDirectory directory does not exist.
   * >Not supported for Agentic file systems.
   * 
   * @example
   * 1
   */
  ownerGroupId?: number;
  /**
   * @remarks
   * The owner user ID.
   * 
   * This parameter is required if the RootDirectory directory does not exist.
   * >Not supported for Agentic file systems.
   * 
   * @example
   * 1
   */
  ownerUserId?: number;
  /**
   * @remarks
   * The POSIX permission. Default value: "0755". The value must be a four-digit octal number that starts with 0.
   * 
   * This parameter takes effect only after you specify the OwnerUserId and OwnerGroupId parameters.
   * >Not supported for Agentic file systems.
   * 
   * @example
   * 0755
   */
  permission?: string;
  /**
   * @remarks
   * The POSIX group ID.
   * >Not supported for Agentic file systems.
   * 
   * @example
   * 123
   */
  posixGroupId?: number;
  /**
   * @remarks
   * The secondary group IDs. Separate multiple group IDs with commas (,).
   * >Not supported for Agentic file systems.
   * 
   * @example
   * 123,345
   */
  posixSecondaryGroupIds?: string;
  /**
   * @remarks
   * The POSIX user ID.
   * >Not supported for Agentic file systems.
   * 
   * @example
   * 123
   */
  posixUserId?: number;
  /**
   * @remarks
   * The root directory of the access point.
   * Default value: "/". If the access point directory does not exist, you must also specify the OwnerUserId and OwnerGroupId parameters.
   * >Supported only for Agentic file systems.
   * 
   * @example
   * /
   */
  rootDirectory?: string;
  /**
   * @remarks
   * The list of access point tags.
   */
  tag?: CreateAccessPointRequestTag[];
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
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
      agenticSpaceId: 'AgenticSpaceId',
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
      agenticSpaceId: 'string',
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

