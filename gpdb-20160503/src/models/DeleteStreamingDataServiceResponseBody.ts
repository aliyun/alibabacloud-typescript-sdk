// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteStreamingDataServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the operation fails.
   * 
   * This parameter is returned only when the return value of **Status** is **false**.
   * 
   * @example
   * This external service cannot be deleted because it is still used by other data source.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the operation. Valid values:
   * 
   * *   **false**: The operation fails.
   * *   **true**: The operation is successful.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      requestId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

