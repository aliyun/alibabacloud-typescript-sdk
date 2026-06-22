// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClusterStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * The status code for the state change. Valid values:
   * 
   * - UserRequest: A user request triggered the state change.
   * 
   * - OutOfStock: The requested ECS instance type is out of stock.
   * 
   * - NotAuthorized: The operation was denied due to insufficient permission.
   * 
   * - QuotaExceeded: The request exceeded a service quota.
   * 
   * - OperationDenied: The operation was denied.
   * 
   * - AccountException: An account-related exception occurred.
   * 
   * - NodeFailure: An ECS node failed.
   * 
   * - BootstrapFailure: A bootstrap action failed.
   * 
   * - ValidationFail: The request failed business logic validation.
   * 
   * - ServiceFailure: A dependent service failed.
   * 
   * - InternalError: An internal error occurred.
   * 
   * @example
   * OutOfStock
   */
  code?: string;
  /**
   * @remarks
   * A human-readable message detailing the cluster state change.
   * 
   * @example
   * The requested resource is sold out in the specified zone, try other types of resources or other regions and zones.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

