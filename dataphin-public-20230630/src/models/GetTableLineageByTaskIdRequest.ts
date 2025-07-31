// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableLineageByTaskIdRequestTableLineageByTaskIdQuery extends $dara.Model {
  needNotExistObject?: boolean;
  /**
   * @example
   * DEV
   */
  taskEnv?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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

