// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allowPublish?: boolean;
  /**
   * @example
   * true
   */
  allowShare?: boolean;
  /**
   * @example
   * true
   */
  allowViewAll?: boolean;
  /**
   * @example
   * false
   */
  defaultShareToAll?: boolean;
  /**
   * @example
   * false
   */
  onlyAdminCreateDatasource?: boolean;
  /**
   * @example
   * true
   */
  useComment?: boolean;
  workspaceDescription?: string;
  /**
   * @remarks
   * This parameter is required.
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

