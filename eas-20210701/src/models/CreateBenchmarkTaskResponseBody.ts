// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBenchmarkTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmark  task [foo] is Creating
   */
  message?: string;
  /**
   * @remarks
   * The ID of the region where the stress testing task is performed.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82********
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the stress testing task.
   * 
   * @example
   * benchmark-larec-test-1076
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      region: 'Region',
      requestId: 'RequestId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      region: 'string',
      requestId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

