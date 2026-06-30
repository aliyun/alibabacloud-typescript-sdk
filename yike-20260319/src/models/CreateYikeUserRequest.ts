// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYikeUserRequest extends $dara.Model {
  /**
   * @remarks
   * The nickname of the sub-account user.
   * 
   * This parameter is required.
   * 
   * @example
   * nick
   */
  nickname?: string;
  /**
   * @remarks
   * The password of the sub-account.
   * 
   * This parameter is required.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * The associated projects. Multiple project IDs are supported, separated by commas.
   * > - A single user can be added to multiple projects.
   * 
   * This parameter is required.
   * 
   * @example
   * id1,id2
   */
  productionIds?: string;
  /**
   * @remarks
   * The username prefix of the sub-account. Rules:
   * 
   * - The prefix can be up to 50 characters in length and must be unique within the workspace.
   * - The system automatically generates the login name in the following format: {UserNamePrefix}.{Workspace Code}@{Alibaba Cloud UID}.yikeai.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  userNamePrefix?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * llm-az2gglkjauwnnhpq
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      nickname: 'Nickname',
      password: 'Password',
      productionIds: 'ProductionIds',
      userNamePrefix: 'UserNamePrefix',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nickname: 'string',
      password: 'string',
      productionIds: 'string',
      userNamePrefix: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

