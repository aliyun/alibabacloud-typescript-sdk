// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentRecoverCallRequest extends $dara.Model {
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 5
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
   * 查询开始导入时间
   * 
   * @example
   * 2020-03-06 10:10:10
   */
  beginImportTime?: string;
  /**
   * @remarks
   * 查询结束导入时间
   * 
   * @example
   * 2021-03-06 10:10:10
   */
  endImportTime?: string;
  /**
   * @remarks
   * 号码列表
   */
  numbers?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 用户自定义标签列表
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentTag: 'AgentTag',
      beginImportTime: 'BeginImportTime',
      endImportTime: 'EndImportTime',
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentTag: 'string',
      beginImportTime: 'string',
      endImportTime: 'string',
      numbers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.numbers)) {
      $dara.Model.validateArray(this.numbers);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

