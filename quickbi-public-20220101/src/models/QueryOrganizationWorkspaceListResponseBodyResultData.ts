// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrganizationWorkspaceListResponseBodyResultData extends $dara.Model {
  /**
   * @remarks
   * Whether the work can be made public. Value range:
   * 
   * - true: Public
   * - false: Not public
   * 
   * @example
   * true
   */
  allowPublishOperation?: boolean;
  /**
   * @remarks
   * Indicates whether the work can be authorized for sharing. Possible values:
   * 
   * - true: Authorized
   * - false: Not authorized
   * 
   * @example
   * true
   */
  allowShareOperation?: boolean;
  /**
   * @remarks
   * Creation time of the workspace.
   * 
   * @example
   * 2020-11-10 17:51:07
   */
  createTime?: string;
  /**
   * @remarks
   * Quick BI user ID of the creator.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  createUser?: string;
  /**
   * @remarks
   * Aliyun account name of the creator.
   * 
   * @example
   * pop****@aliyun.com
   */
  createUserAccountName?: string;
  /**
   * @remarks
   * Last modified time of the workspace.
   * 
   * @example
   * 2020-11-10 17:51:07
   */
  modifiedTime?: string;
  /**
   * @remarks
   * ID of the Quick BI user who modified the workspace.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  modifyUser?: string;
  /**
   * @remarks
   * Aliyun account name of the modifier.
   * 
   * @example
   * pop****@aliyun.com
   */
  modifyUserAccountName?: string;
  /**
   * @remarks
   * ID of the organization to which the workspace belongs.
   * 
   * @example
   * 2fe4fbd8-588f-489a-b3e1-e92c7af0****
   */
  organizationId?: string;
  /**
   * @remarks
   * Quick BI user ID of the workspace owner.
   * 
   * @example
   * de4bc5f9429141cc8091cdd1c15b****
   */
  owner?: string;
  /**
   * @remarks
   * Aliyun account name of the workspace owner.
   * 
   * @example
   * pop****@aliyun.com
   */
  ownerAccountName?: string;
  /**
   * @remarks
   * Workspace description.
   * 
   * @example
   * test
   */
  workspaceDescription?: string;
  /**
   * @remarks
   * Workspace ID.
   * 
   * @example
   * 7350a155-0e94-4c6c-8620-57bbec38****
   */
  workspaceId?: string;
  /**
   * @remarks
   * Name of the workspace.
   * 
   * @example
   * test
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      allowPublishOperation: 'AllowPublishOperation',
      allowShareOperation: 'AllowShareOperation',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      createUserAccountName: 'CreateUserAccountName',
      modifiedTime: 'ModifiedTime',
      modifyUser: 'ModifyUser',
      modifyUserAccountName: 'ModifyUserAccountName',
      organizationId: 'OrganizationId',
      owner: 'Owner',
      ownerAccountName: 'OwnerAccountName',
      workspaceDescription: 'WorkspaceDescription',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPublishOperation: 'boolean',
      allowShareOperation: 'boolean',
      createTime: 'string',
      createUser: 'string',
      createUserAccountName: 'string',
      modifiedTime: 'string',
      modifyUser: 'string',
      modifyUserAccountName: 'string',
      organizationId: 'string',
      owner: 'string',
      ownerAccountName: 'string',
      workspaceDescription: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

