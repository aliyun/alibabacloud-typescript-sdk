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
   * The error message that is returned.
   * 
   * This parameter is returned only if the request fails.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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

