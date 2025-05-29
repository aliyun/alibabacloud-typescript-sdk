// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRemoteADBDataSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * e9d60eb1-e90d-4bc6-a470-c8b767460858
   */
  requestId?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 90000
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

