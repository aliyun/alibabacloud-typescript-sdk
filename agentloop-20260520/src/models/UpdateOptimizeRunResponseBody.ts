// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOptimizeRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the execution instance.
   * 
   * @example
   * or-20260812-0001
   */
  optimizeRunId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9ACFB10A-1B2C-3D4E-5F6G-7H8I9J0K1L2M
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      optimizeRunId: 'optimizeRunId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optimizeRunId: 'string',
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

