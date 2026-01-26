// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentRuntimesRequest extends $dara.Model {
  /**
   * @remarks
   * 根据智能体运行时名称进行模糊匹配过滤
   * 
   * @example
   * my-runtime
   */
  agentRuntimeName?: string;
  /**
   * @remarks
   * 用于服务发现的资源组标识符
   * 
   * @example
   * rg-123456
   */
  discoveryResourceGroupId?: string;
  /**
   * @remarks
   * 当前页码，从1开始计数
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页返回的记录数量
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceGroupId?: string;
  /**
   * @remarks
   * 查询模式，支持精确查询和模糊查询
   * 
   * @example
   * fuzzy
   */
  searchMode?: string;
  /**
   * @remarks
   * 根据状态进行过滤，多个状态用逗号分隔，支持精确匹配
   * 
   * @example
   * READY,CREATING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeName: 'agentRuntimeName',
      discoveryResourceGroupId: 'discoveryResourceGroupId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      searchMode: 'searchMode',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeName: 'string',
      discoveryResourceGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      searchMode: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

