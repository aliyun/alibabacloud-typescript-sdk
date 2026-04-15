// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertDestinationResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.InvalidParameter
   */
  code?: string;
  /**
   * @example
   * {
   * "webhook":"",
   * "sec":""
   * }
   */
  data?: any;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
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

