// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOptimizeTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the optimization task.
   * 
   * @example
   * efficiency-analysis
   */
  optimizeTaskName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      optimizeTaskName: 'optimizeTaskName',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optimizeTaskName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

