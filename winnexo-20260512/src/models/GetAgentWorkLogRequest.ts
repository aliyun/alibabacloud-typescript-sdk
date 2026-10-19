// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentWorkLogRequest extends $dara.Model {
  /**
   * @remarks
   * 可选节点 key
   * 
   * @example
   * step_1
   */
  nodeId?: string;
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
   * 每页条数，最大 100
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 租户ID，缺省使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 工作项ID
   * 
   * This parameter is required.
   * 
   * @example
   * wi_example
   */
  workItemId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'nodeId',
      page: 'page',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
      workItemId: 'workItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      page: 'number',
      pageSize: 'number',
      tenantId: 'string',
      workItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

