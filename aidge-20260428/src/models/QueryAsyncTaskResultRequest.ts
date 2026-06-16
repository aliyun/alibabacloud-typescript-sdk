// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAsyncTaskResultRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task. This parameter is required.
   * 
   * @example
   * b67f6089-085a-9402-93c6-bac0561b3a06
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

