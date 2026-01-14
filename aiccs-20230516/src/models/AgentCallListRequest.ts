// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentCallListRequest extends $dara.Model {
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 51
   */
  agentId?: number;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * abcd
   */
  agentTag?: string;
  /**
   * @remarks
   * 开始外呼时间
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-03-06 10:10:10
   */
  callDate?: string;
  /**
   * @remarks
   * 结束外呼时间
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-03-07 10:10:10
   */
  endCallDate?: string;
  /**
   * @remarks
   * 号码MD5列表
   */
  numberMD5s?: string[];
  /**
   * @remarks
   * 号码列表
   */
  numbers?: string[];
  ownerId?: number;
  /**
   * @remarks
   * 页数
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  page?: number;
  /**
   * @remarks
   * 每页外呼记录数
   * 
   * @example
   * 14
   */
  pageSize?: number;
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
      callDate: 'CallDate',
      endCallDate: 'EndCallDate',
      numberMD5s: 'NumberMD5s',
      numbers: 'Numbers',
      ownerId: 'OwnerId',
      page: 'Page',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentTag: 'string',
      callDate: 'string',
      endCallDate: 'string',
      numberMD5s: { 'type': 'array', 'itemType': 'string' },
      numbers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      page: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.numberMD5s)) {
      $dara.Model.validateArray(this.numberMD5s);
    }
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

