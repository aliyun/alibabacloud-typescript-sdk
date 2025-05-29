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
   * The returned message.
   * 
   * This parameter is returned only if the request fails.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **false**
   * *   **true**
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

