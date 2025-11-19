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
   * 查询模式，支持精确查询和模糊查询
   * 
   * @example
   * fuzzy
   */
  searchMode?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeName: 'agentRuntimeName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      searchMode: 'searchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

