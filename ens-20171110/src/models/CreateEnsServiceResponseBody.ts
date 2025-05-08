// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnsServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service code. 0 is returned for a successful request. An error code is returned for a failed request.
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
   * 9AF02B43-2D08-49D3-8AAF-65B9C792ED14
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

