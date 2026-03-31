// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYikeUserRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nick
   */
  nickname?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * id1,id2
   */
  productionIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userNamePrefix?: string;
  /**
   * @remarks
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

