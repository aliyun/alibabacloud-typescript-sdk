// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommonResult extends $dara.Model {
  /**
   * @remarks
   * Indicates the request status. A value of `SUCCESS` indicates success. On failure, an error code is returned, such as `ERR_BAD_REQUEST`, `ERR_VALIDATION_FAILED`, or `ERR_INTERNAL_SERVER_ERROR`.
   */
  code?: string;
  /**
   * @remarks
   * The returned business data.
   */
  data?: any;
  /**
   * @remarks
   * A unique request identifier for issue tracking.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
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

