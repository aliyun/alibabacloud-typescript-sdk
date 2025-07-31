// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAdHocTaskLogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1021
   */
  offset?: number;
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
   * 0
   */
  subTaskId?: number;
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
      offset: 'Offset',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      subTaskId: 'SubTaskId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      opTenantId: 'number',
      projectId: 'number',
      subTaskId: 'number',
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

