// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLakebaseMountParameterGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the created parameter template.
   * 
   * @example
   * pcpg-lakebase-xxx
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F45FFACC-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      parameterGroupId: 'ParameterGroupId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroupId: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

