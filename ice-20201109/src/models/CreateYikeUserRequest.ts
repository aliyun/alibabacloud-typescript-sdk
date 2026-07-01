// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYikeUserRequest extends $dara.Model {
  /**
   * @remarks
   * The user\\"s nickname.
   * 
   * This parameter is required.
   * 
   * @example
   * nick
   */
  nickname?: string;
  /**
   * @remarks
   * The user\\"s password.
   * 
   * This parameter is required.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * The IDs of productions to add the user to. You can specify multiple IDs separated by commas.
   * 
   * > - A user can be added to multiple productions.
   * 
   * This parameter is required.
   * 
   * @example
   * id1,id2
   */
  productionIds?: string;
  /**
   * @remarks
   * The user name prefix for the sub-account. The prefix must meet the following requirements:
   * 
   * - The prefix can be up to 50 characters long and must be unique within the workspace.
   * 
   * - The system automatically generates a user login name in the format: {UserNamePrefix}.{WorkspaceCode}@{AlibabaCloudUID}.yikeai.
   * 
   * This parameter is required.
   * 
   * @example
   * test.xxx@xxx.yikeai
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

