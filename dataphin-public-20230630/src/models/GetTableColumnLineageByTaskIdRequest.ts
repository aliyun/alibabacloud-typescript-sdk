// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableColumnLineageByTaskIdRequestTableColumnLineageByTaskIdQuery extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return tables that do not exist in the asset inventory. If this parameter is not specified, non-existent tables are not returned.
   */
  needNotExistObject?: boolean;
  /**
   * @remarks
   * Environment of the task to query: DEV or PROD.
   * 
   * @example
   * DEV
   */
  taskEnv?: string;
  /**
   * @remarks
   * Task (node) ID used to filter the query.
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

export class GetTableColumnLineageByTaskIdRequest extends $dara.Model {
  /**
   * @remarks
   * Tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * Data structure for querying table column lineage.
   * 
   * This parameter is required.
   */
  tableColumnLineageByTaskIdQuery?: GetTableColumnLineageByTaskIdRequestTableColumnLineageByTaskIdQuery;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      tableColumnLineageByTaskIdQuery: 'TableColumnLineageByTaskIdQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      tableColumnLineageByTaskIdQuery: GetTableColumnLineageByTaskIdRequestTableColumnLineageByTaskIdQuery,
    };
  }

  validate() {
    if(this.tableColumnLineageByTaskIdQuery && typeof (this.tableColumnLineageByTaskIdQuery as any).validate === 'function') {
      (this.tableColumnLineageByTaskIdQuery as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

