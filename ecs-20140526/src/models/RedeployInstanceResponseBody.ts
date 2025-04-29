// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RedeployInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the redeployment task.
   * 
   * You can call the [DescribeTasks](https://help.aliyun.com/document_detail/25622.html) operation to query the redeployment result.
   * 
   * @example
   * t-bp10e8orkp8x****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

