// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyAdviceByIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message returned for the operation. Valid values:
   * 
   * *   **SUCCESS** is returned if the operation is successful.
   * *   An error message is returned if the operation fails.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5DC10091-348D-12B1-906D-AB49D658012E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

