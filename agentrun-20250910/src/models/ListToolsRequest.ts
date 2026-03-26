// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListToolsRequest extends $dara.Model {
  /**
   * @remarks
   * 当前页码，从 1 开始
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 每页返回的工具数量，用于分页查询
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 按工具类型过滤，可选值：MCP、FUNCTIONCALL、SKILL
   * 
   * @example
   * MCP
   */
  toolType?: string;
  /**
   * @remarks
   * 按工作空间ID过滤，查询指定工作空间下的工具
   * 
   * @example
   * workspace-xyz789
   */
  workspaceId?: string;
  /**
   * @example
   * ws1,ws2
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      toolType: 'toolType',
      workspaceId: 'workspaceId',
      workspaceIds: 'workspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      toolType: 'string',
      workspaceId: 'string',
      workspaceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

