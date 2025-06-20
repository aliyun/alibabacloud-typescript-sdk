// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the execution.
   * 
   * @example
   * t-7d2a745b412b4601b2d47f6a768d*
   */
  invokeId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2FE2B22C-CF9D-59DE-BF63-DC9B9B33A9D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
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

