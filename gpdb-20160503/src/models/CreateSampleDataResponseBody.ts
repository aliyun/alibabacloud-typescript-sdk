// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSampleDataResponseBody extends $dara.Model {
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
   * *********
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 15A6881F-AAAB-5E4D-9B3F-6DCC1BDF4F2E_99
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

