// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledTasksRequest extends $dara.Model {
  /**
   * @remarks
   * 协作群组 ID（如 cg_101）；传入时按群维度返回群任务（调用者需为有效群成员），未传时为个人维度（排除群任务）
   * 
   * @example
   * exampleCollaborationGroupId
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 任务名模糊搜索
   * 
   * @example
   * 示例关键词
   */
  keyword?: string;
  /**
   * @remarks
   * 单页最大返回数量（1~100）；传入时优先于 pageSize
   * 
   * @example
   * string_value
   */
  maxResults?: number;
  /**
   * @remarks
   * 翻页令牌，取上次响应返回的 nextToken；传入时优先于 page，翻页过程中请保持 maxResults 不变
   */
  nextToken?: string;
  /**
   * @remarks
   * 页码
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页条数（1~100）
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      collaborationGroupId: 'collaborationGroupId',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      page: 'page',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collaborationGroupId: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

