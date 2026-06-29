// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableLineageByTaskIdRequestTableLineageByTaskIdQuery extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return tables that do not exist in the asset inventory. If this parameter is not specified, non-existent tables are not returned.
   */
  needNotExistObject?: boolean;
  /**
   * @remarks
   * The environment of the task to query: DEV or PROD.
   * 
   * @example
   * DEV
   */
  taskEnv?: string;
  /**
   * @remarks
   * The task (node) ID used to filter the query.
   * 
   * This parameter is required.
   * 
   * @example
   * n_123
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      needNotExistObject: 'NeedNotExistObject',
      taskEnv: 'TaskEnv',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needNotExistObject: 'boolean',
      taskEnv: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableLineageByTaskIdRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The data structure for querying table lineage.
   * 
   * This parameter is required.
   */
  tableLineageByTaskIdQuery?: GetTableLineageByTaskIdRequestTableLineageByTaskIdQuery;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      tableLineageByTaskIdQuery: 'TableLineageByTaskIdQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      tableLineageByTaskIdQuery: GetTableLineageByTaskIdRequestTableLineageByTaskIdQuery,
    };
  }

  validate() {
    if(this.tableLineageByTaskIdQuery && typeof (this.tableLineageByTaskIdQuery as any).validate === 'function') {
      (this.tableLineageByTaskIdQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

