// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseLindormInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * F67BFFF3-F5C2-45B5-9C28-6E4A1E51****
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

