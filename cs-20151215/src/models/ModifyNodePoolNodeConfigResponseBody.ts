// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodePoolNodeConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np737c3ac1ac684703b9e10673aa2c****
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7631D83-6E98-1949-B665-766A62xxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5fd211e924e1d00787xxxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      nodepoolId: 'nodepool_id',
      requestId: 'request_id',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodepoolId: 'string',
      requestId: 'string',
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

