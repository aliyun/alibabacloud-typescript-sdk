// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentWorkLogRequest extends $dara.Model {
  /**
   * @remarks
   * The optional node key.
   * 
   * @example
   * step_1
   */
  nodeId?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The tenant ID. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The work item ID.
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

