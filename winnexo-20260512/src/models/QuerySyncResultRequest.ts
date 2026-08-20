// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySyncResultRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  taskId?: number;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'number',
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

