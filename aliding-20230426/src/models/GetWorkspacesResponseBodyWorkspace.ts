// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkspacesResponseBodyWorkspaceIcon } from "./GetWorkspacesResponseBodyWorkspaceIcon";


export class GetWorkspacesResponseBodyWorkspace extends $dara.Model {
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
  icon?: GetWorkspacesResponseBodyWorkspaceIcon;
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
   * ZgpG2NdyVXXjrKKzIBqMp5zkVMwvDqPk
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
   * By8jQS1ZYjGn5b0M
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
      icon: GetWorkspacesResponseBodyWorkspaceIcon,
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

