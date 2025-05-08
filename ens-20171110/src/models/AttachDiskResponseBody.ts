// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned service code. 0 indicates that the request was successful.
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
   * 916777D9-42D3-5928-92CE-373B1874B674
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

