// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFilePermissionRequestMemberListCdsIdentity extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alice
   */
  id?: string;
  /**
   * @remarks
   * The user type.
   * 
   * This parameter is required.
   * 
   * @example
   * IT_User
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFilePermissionRequestMemberList extends $dara.Model {
  /**
   * @remarks
   * The user object.
   * 
   * This parameter is required.
   */
  cdsIdentity?: AddFilePermissionRequestMemberListCdsIdentity;
  /**
   * @remarks
   * Specifies whether sub-user groups inherit the permissions.
   * 
   * @example
   * false
   */
  disinheritSubGroup?: boolean;
  /**
   * @remarks
   * The time when the authorization expires. The value is the number of milliseconds from January 1, 1970, 00:00:00 to the target time. To set permanent validity, specify a predefined system value, such as 4775500800000.
   * 
   * @example
   * 4775500800000
   */
  expireTime?: number;
  /**
   * @remarks
   * Two methods are supported for setting permissions: specifying a role or customizing operation permissions. This parameter specifies a role for permission settings and is mutually exclusive with ActionList. If both parameters are specified, this parameter takes precedence.
   * 
   * This parameter is required.
   * 
   * @example
   * SystemFileUploaderAndDownloader
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsIdentity: 'CdsIdentity',
      disinheritSubGroup: 'DisinheritSubGroup',
      expireTime: 'ExpireTime',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsIdentity: AddFilePermissionRequestMemberListCdsIdentity,
      disinheritSubGroup: 'boolean',
      expireTime: 'number',
      roleId: 'string',
    };
  }

  validate() {
    if(this.cdsIdentity && typeof (this.cdsIdentity as any).validate === 'function') {
      (this.cdsIdentity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddFilePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise cloud disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-352282****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the user who uses the cloud disk.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The file ID. You can call [ListCdsFiles](https://help.aliyun.com/document_detail/2247622.html) to query the ID of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * 6333e553a133ce21e6f747cf948bb9ef95d7****
   */
  fileId?: string;
  /**
   * @remarks
   * The team space ID.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The list of authorized users.
   * 
   * This parameter is required.
   */
  memberList?: AddFilePermissionRequestMemberList[];
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      groupId: 'GroupId',
      memberList: 'MemberList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
      groupId: 'string',
      memberList: { 'type': 'array', 'itemType': AddFilePermissionRequestMemberList },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

