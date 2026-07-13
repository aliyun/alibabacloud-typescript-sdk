// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseBdrcServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 663D8898-E0B5-5964-BF28-A191CE6A1825
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

