// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMasterSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * This parameter is returned only when the API call fails.
   * 
   * @example
   * ******
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The execution status of the operation. Valid values:
   * - **false**: The operation failed.
   * - **true**: The operation succeeded.
   * 
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
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

