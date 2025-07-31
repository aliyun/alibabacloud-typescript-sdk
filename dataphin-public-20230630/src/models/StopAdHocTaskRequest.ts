// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAdHocTaskRequest extends $dara.Model {
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
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaxCompute_SQL_300000843_1611548758327
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      projectId: 'number',
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

