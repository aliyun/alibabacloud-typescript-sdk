// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDataShareInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the operation fails.
   * 
   * @example
   * error message
   */
  errMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D5**********
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the operation. Valid values:
   * 
   * *   **success**: The operation is successful.
   * *   **failed**: The operation fails.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

