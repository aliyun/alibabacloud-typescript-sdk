// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVectorConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * This parameter is returned only when the API call fails.
   * 
   * @example
   * Failed to modify vector configuration.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 107BE202-D1A2-479E-98E0-A8**********
   */
  requestId?: string;
  /**
   * @remarks
   * The API execution status. Valid values:
   * 
   * - **true**: The execution succeeded.
   * - **false**: The execution failed.
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

