// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetTestTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE*****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the test task. The unique identifier of a network test task.
   * 
   * @example
   * dr-uf6i0tv2refv8wz*****
   */
  testId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      testId: 'TestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      testId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

