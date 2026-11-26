// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceConfigResponseBody extends $dara.Model {
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
   * The error message. This parameter is returned only when the call fails.
   * 
   * @example
   * \"error message\"
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34B32A0A-08EF-4A87-B6BE-CDD9F56FC3AD
   */
  requestId?: string;
  /**
   * @remarks
   * The modification status. Valid values:
   * 
   * - **0**: The modification failed.
   * - **1**: The modification succeeded.
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

