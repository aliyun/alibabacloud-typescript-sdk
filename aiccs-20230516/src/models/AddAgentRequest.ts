// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAgentRequest extends $dara.Model {
  /**
   * @remarks
   * 坐席账号名(必须唯一)
   * 
   * This parameter is required.
   * 
   * @example
   * seat_001
   */
  account?: string;
  /**
   * @remarks
   * 合作方唯一标识
   * 
   * @example
   * abc
   */
  agentTag?: string;
  /**
   * @remarks
   * 分机密码
   * 
   * This parameter is required.
   * 
   * @example
   * gwegwe23t32
   */
  extensionPwd?: string;
  /**
   * @remarks
   * 坐席名称
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * 坐席账号密码 (可以跟分机密码一致)
   * 
   * This parameter is required.
   * 
   * @example
   * gwegwe23t32
   */
  password?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      agentTag: 'AgentTag',
      extensionPwd: 'ExtensionPwd',
      name: 'Name',
      ownerId: 'OwnerId',
      password: 'Password',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      agentTag: 'string',
      extensionPwd: 'string',
      name: 'string',
      ownerId: 'number',
      password: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

