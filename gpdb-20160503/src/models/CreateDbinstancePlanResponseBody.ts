// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBInstancePlanResponseBody extends $dara.Model {
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
   * This parameter is returned only if the request fails.
   * 
   * @example
   * ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The plan ID.
   * 
   * @example
   * 1234
   */
  planId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34b32a0a-08ef-4a87-b6be-cdd9f56fc3ad
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * If the request was successful, **success** is returned. If the request failed, this parameter is not returned.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      errorMessage: 'ErrorMessage',
      planId: 'PlanId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      errorMessage: 'string',
      planId: 'string',
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

