// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetRetcodeShareStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   `true`: The call is successful.
   * *   `false`: The call fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40B10E04-81E8-4643-970D-F1B38F2E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
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

