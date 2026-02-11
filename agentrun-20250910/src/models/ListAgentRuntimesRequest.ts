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
   * 
   * @deprecated
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
  /**
   * @deprecated
   */
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
  /**
   * @remarks
   * 根据工作空间ID进行过滤，用于资源隔离和权限管理
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeName: 'agentRuntimeName',
      discoveryResourceGroupId: 'discoveryResourceGroupId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      searchMode: 'searchMode',
      status: 'status',
      workspaceId: 'workspaceId',
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

