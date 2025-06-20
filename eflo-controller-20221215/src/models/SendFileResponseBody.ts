// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the execution.
   * 
   * @example
   * t-hz03la52z1zkvls
   */
  invokeId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3C683243-7915-57FB-9570-A2932C1C0F78
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

