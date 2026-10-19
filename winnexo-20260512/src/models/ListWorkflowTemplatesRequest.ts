// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * 协作空间 ID
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 模板名称/描述模糊搜索关键词
   * 
   * @example
   * example
   */
  keyword?: string;
  /**
   * @remarks
   * 单页最大返回数量（1~100）；传入时优先于 pageSize
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * 翻页令牌，取上次响应返回的 nextToken；传入时优先于 page
   * 
   * @example
   * example
   */
  nextToken?: string;
  /**
   * @remarks
   * 页码；传入 nextToken 时忽略
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 租户ID，公共参数；缺省时使用调用方默认租户
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

