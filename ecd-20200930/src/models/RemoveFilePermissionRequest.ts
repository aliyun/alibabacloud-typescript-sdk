// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveFilePermissionRequestMemberListCdsIdentity extends $dara.Model {
  /**
   * @remarks
   * The user ID or group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 249dsfseee643h33g3dv****
   */
  id?: string;
  /**
   * @remarks
   * The object type.
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

export class RemoveFilePermissionRequestMemberList extends $dara.Model {
  /**
   * @remarks
   * The permission information.
   * 
   * This parameter is required.
   */
  cdsIdentity?: RemoveFilePermissionRequestMemberListCdsIdentity;
  /**
   * @remarks
   * Two methods are supported for setting permissions: specifying a role or customizing operation permissions. This parameter specifies the role-based permission and is mutually exclusive with `ActionList`. If both parameters are specified, this parameter takes precedence.
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
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsIdentity: RemoveFilePermissionRequestMemberListCdsIdentity,
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

export class RemoveFilePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise cloud disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-066224****
   */
  cdsId?: string;
  /**
   * @remarks
   * The user ID.
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
   * cg-1fbmvrc7ug5m7****
   */
  groupId?: string;
  /**
   * @remarks
   * The list of authorized users.
   * 
   * This parameter is required.
   */
  memberList?: RemoveFilePermissionRequestMemberList[];
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
      memberList: { 'type': 'array', 'itemType': RemoveFilePermissionRequestMemberList },
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

