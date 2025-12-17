// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSanityCheckTaskResponseBody extends $dara.Model {
  /**
   * @example
   * BEBDF2EE-642E-5992-8907-D2011A7ACEFE
   */
  requestId?: string;
  /**
   * @example
   * 917479ff-c869-49ea-908e-ae85bd987bc0
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

