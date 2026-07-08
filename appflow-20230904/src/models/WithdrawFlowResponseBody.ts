// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WithdrawFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * None
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39B608FB-906F-51CF-AD82-7EFE46C0D56A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

