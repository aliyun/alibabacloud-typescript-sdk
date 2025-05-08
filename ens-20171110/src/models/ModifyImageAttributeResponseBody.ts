// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageAttributeResponseBody extends $dara.Model {
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
   * The ID of the request.
   * 
   * @example
   * AC66B8F3-0B0A-5FB1-9EA2-DC03B2CD5B04
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

