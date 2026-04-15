// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowsRequest extends $dara.Model {
  /**
   * @remarks
   * 根据工作流名称进行模糊匹配过滤
   * 
   * @example
   * my-flow
   */
  flowName?: string;
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
   * @remarks
   * 根据工作空间ID进行过滤，用于资源隔离和权限管理
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  /**
   * @example
   * ws-1234567890abcdef,ws-1234567890bcdefg
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      flowName: 'flowName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      workspaceId: 'workspaceId',
      workspaceIds: 'workspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

