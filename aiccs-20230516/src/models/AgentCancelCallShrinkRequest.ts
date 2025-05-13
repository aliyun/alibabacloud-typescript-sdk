// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentCancelCallShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 64
   */
  agentId?: number;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * abc
   */
  agentTag?: string;
  /**
   * @remarks
   * 号码列表
   */
  numbersShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 用户自定义标签列表
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentTag: 'AgentTag',
      numbersShrink: 'Numbers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentTag: 'string',
      numbersShrink: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

