// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelActiveOperationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25C70FF3-D49B-594D-BECE-0DE2BA1D8BBB
   */
  requestId?: string;
  /**
   * @remarks
   * The IDs of O\\&M events that are canceled at a time. Separate multiple IDs with commas (,).
   * 
   * @example
   * 2355,2352
   */
  taskIds?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

