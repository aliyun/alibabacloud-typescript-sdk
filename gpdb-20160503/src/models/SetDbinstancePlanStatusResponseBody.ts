// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDBInstancePlanStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error message returned.
   * 
   * This parameter is returned only when the operation fails.
   * 
   * @example
   * ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the plan.
   * 
   * @example
   * 1234
   */
  planId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34b32a0a-08ef-4a87-b6be-cdd988888888
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the operation.
   * 
   * If the operation is successful, **success** is returned. If the operation fails, this parameter is not returned.
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      planId: 'PlanId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

