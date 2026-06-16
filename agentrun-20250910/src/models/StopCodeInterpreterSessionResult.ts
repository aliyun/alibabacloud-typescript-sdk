// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopCodeInterpreterSessionResult extends $dara.Model {
  /**
   * @remarks
   * SUCCESS indicates success. In case of failure, the corresponding error type is returned, such as ERR_BAD_REQUEST, ERR_VALIDATION_FAILED, or ERR_INTERNAL_SERVER_ERROR.
   */
  code?: string;
  /**
   * @remarks
   * Request ID
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

