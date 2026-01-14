// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentCallListShrinkRequest extends $dara.Model {
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
  numberMD5sShrink?: string;
  /**
   * @remarks
   * 号码列表
   */
  numbersShrink?: string;
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
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentTag: 'AgentTag',
      callDate: 'CallDate',
      endCallDate: 'EndCallDate',
      numberMD5sShrink: 'NumberMD5s',
      numbersShrink: 'Numbers',
      ownerId: 'OwnerId',
      page: 'Page',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentTag: 'string',
      callDate: 'string',
      endCallDate: 'string',
      numberMD5sShrink: 'string',
      numbersShrink: 'string',
      ownerId: 'number',
      page: 'number',
      pageSize: 'number',
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

