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
   * The environment of the node used to filter the query. Valid values: DEV and PROD.
   * 
   * @example
   * DEV
   */
  taskEnv?: string;
  /**
   * @remarks
   * The ID of the node used to filter the query.
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
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
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
      opUserId: 'OpUserId',
      tableLineageByTaskIdQuery: 'TableLineageByTaskIdQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
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

