// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReInitDiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. A value of 0 indicates that the operation was successful.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DD66F05-3116-4BAA-B588-52EB2E7F431D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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

