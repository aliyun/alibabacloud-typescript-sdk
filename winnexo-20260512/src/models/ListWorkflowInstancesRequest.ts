// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkflowInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * 精确需求编号
   * 
   * @example
   * REQ-1001
   */
  businessId?: string;
  /**
   * @remarks
   * 协作空间 ID
   * 
   * This parameter is required.
   * 
   * @example
   * cg_20261016_abc123
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * 精确外部发起人标签
   * 
   * @example
   * 外部发起人张三
   */
  initiator?: string;
  /**
   * @remarks
   * 标题或需求编号关键词
   * 
   * @example
   * 季度报告
   */
  keyword?: string;
  /**
   * @remarks
   * 页码，从 1 开始
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页数量 1-100
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 排序字段
   * 
   * @example
   * GMT_CREATE
   */
  sortBy?: string;
  /**
   * @remarks
   * 排序方向
   * 
   * @example
   * DESC
   */
  sortOrder?: string;
  /**
   * @remarks
   * Running/Completed/Failed/Terminated 筛选
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'businessId',
      collaborationGroupId: 'collaborationGroupId',
      initiator: 'initiator',
      keyword: 'keyword',
      page: 'page',
      pageSize: 'pageSize',
      sortBy: 'sortBy',
      sortOrder: 'sortOrder',
      status: 'status',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      collaborationGroupId: 'string',
      initiator: 'string',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
      status: 'string',
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

