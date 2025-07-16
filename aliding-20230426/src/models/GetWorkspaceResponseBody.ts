// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceResponseBodyWorkspaceIcon extends $dara.Model {
  /**
   * @example
   * URL
   */
  type?: string;
  /**
   * @example
   * https://example/file-manage-files/zh-CN/202***13/ldet/avatar3.jpg
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
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

export class GetWorkspaceResponseBodyWorkspace extends $dara.Model {
  /**
   * @example
   * ding16b241fd05********288
   */
  corpId?: string;
  /**
   * @example
   * https://example/file-manage-files/zh-CN/202***13/ldet/XXXX.jpg
   */
  cover?: string;
  /**
   * @example
   * 2023-05-15T11:29Z
   */
  createTime?: string;
  /**
   * @example
   * 01472825524039877041
   */
  creatorId?: string;
  /**
   * @example
   * workspace_description
   */
  description?: string;
  icon?: GetWorkspaceResponseBodyWorkspaceIcon;
  /**
   * @example
   * 2023-05-15T11:29Z
   */
  modifiedTime?: string;
  /**
   * @example
   * 01472825524039877041
   */
  modifierId?: string;
  /**
   * @example
   * workspace_name
   */
  name?: string;
  /**
   * @example
   * READER
   */
  permissionRole?: string;
  /**
   * @example
   * ydxXB52LJqqK7xxNTXyo390kJqjMp697
   */
  rootNodeId?: string;
  /**
   * @example
   * lHiicjNFM2iSFYSdz2iPuI8ZwiEiE
   */
  teamId?: string;
  /**
   * @example
   * TEAM
   */
  type?: string;
  /**
   * @example
   * workspace_url
   */
  url?: string;
  /**
   * @example
   * MJ0pDSKMV9dO20E4
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      corpId: 'CorpId',
      cover: 'Cover',
      createTime: 'CreateTime',
      creatorId: 'CreatorId',
      description: 'Description',
      icon: 'Icon',
      modifiedTime: 'ModifiedTime',
      modifierId: 'ModifierId',
      name: 'Name',
      permissionRole: 'PermissionRole',
      rootNodeId: 'RootNodeId',
      teamId: 'TeamId',
      type: 'Type',
      url: 'Url',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      cover: 'string',
      createTime: 'string',
      creatorId: 'string',
      description: 'string',
      icon: GetWorkspaceResponseBodyWorkspaceIcon,
      modifiedTime: 'string',
      modifierId: 'string',
      name: 'string',
      permissionRole: 'string',
      rootNodeId: 'string',
      teamId: 'string',
      type: 'string',
      url: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.icon && typeof (this.icon as any).validate === 'function') {
      (this.icon as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  workspace?: GetWorkspaceResponseBodyWorkspace;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workspace: GetWorkspaceResponseBodyWorkspace,
    };
  }

  validate() {
    if(this.workspace && typeof (this.workspace as any).validate === 'function') {
      (this.workspace as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

