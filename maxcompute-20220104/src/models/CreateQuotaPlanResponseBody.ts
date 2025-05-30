// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQuotaPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc3b4b016674434996033675e71ee
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
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

