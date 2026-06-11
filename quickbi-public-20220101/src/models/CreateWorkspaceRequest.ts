// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether reports in the workspace can be made public. Default value: true.
   * 
   * @example
   * true
   */
  allowPublish?: boolean;
  /**
   * @remarks
   * Specifies whether reports in the workspace can be shared. Default value: true.
   * 
   * @example
   * true
   */
  allowShare?: boolean;
  /**
   * @remarks
   * Specifies whether the workspace is in collaboration mode. Default value: true.
   * 
   * @example
   * true
   */
  allowViewAll?: boolean;
  /**
   * @remarks
   * Specifies whether to grant read permissions on the works in the workspace to all workspace members by default. Default value: false.
   * 
   * @example
   * false
   */
  defaultShareToAll?: boolean;
  /**
   * @remarks
   * Specifies whether only administrators can create data sources in the workspace. Default value: false.
   * 
   * @example
   * false
   */
  onlyAdminCreateDatasource?: boolean;
  /**
   * @remarks
   * Specifies whether to use table remarks when you create a dataset in the workspace. Default value: true.
   * 
   * @example
   * true
   */
  useComment?: boolean;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * test
   */
  workspaceDescription?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      allowPublish: 'AllowPublish',
      allowShare: 'AllowShare',
      allowViewAll: 'AllowViewAll',
      defaultShareToAll: 'DefaultShareToAll',
      onlyAdminCreateDatasource: 'OnlyAdminCreateDatasource',
      useComment: 'UseComment',
      workspaceDescription: 'WorkspaceDescription',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowPublish: 'boolean',
      allowShare: 'boolean',
      allowViewAll: 'boolean',
      defaultShareToAll: 'boolean',
      onlyAdminCreateDatasource: 'boolean',
      useComment: 'boolean',
      workspaceDescription: 'string',
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

