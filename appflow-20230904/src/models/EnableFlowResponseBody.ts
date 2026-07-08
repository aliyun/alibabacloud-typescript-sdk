// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
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
   * 17CADBF7-B0F4-5FE6-87EB-76B1A69AC422
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

