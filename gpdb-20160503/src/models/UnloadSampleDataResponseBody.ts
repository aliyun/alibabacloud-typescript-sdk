// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnloadSampleDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The error message returned if an error occurs. This message does not affect the execution of the operation.
   * 
   * @example
   * ********
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4E42ABC3-4DBD-5343-9BCA-66B7D091311F_6914
   */
  requestId?: string;
  /**
   * @remarks
   * The execution state of the operation. Valid values:
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
      DBInstanceId: 'DBInstanceId',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
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

