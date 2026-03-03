// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SuspendHoloWarehouseResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2A8DEF6E-067E-5DB0-BAE1-2894266E6C6A
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

