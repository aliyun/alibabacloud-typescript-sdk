// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySemanticKnowledgeRequest extends $dara.Model {
  /**
   * @remarks
   * 数字员工名称，可先调用 listAuthorizedAgents 获取 USE 权限列表
   * 
   * This parameter is required.
   * 
   * @example
   * 示例数字员工
   */
  agentName?: string;
  /**
   * @remarks
   * 图谱名称，可先调用 listGraphs 获取
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * 自然语言查询问题
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  query?: string;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * This parameter is required.
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'agentName',
      graphName: 'graphName',
      query: 'query',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      graphName: 'string',
      query: 'string',
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

