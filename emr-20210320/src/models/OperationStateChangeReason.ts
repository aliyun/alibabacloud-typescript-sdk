// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperationStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * The operation status code. Valid values:
   * 
   * - `UserRequest`: The operation was initiated by a user.
   * 
   * - `OutOfStock`: The requested ECS instance type is out of stock.
   * 
   * - `NotAuthorized`: You are not authorized to perform the operation.
   * 
   * - `QuotaExceeded`: A resource quota was exceeded.
   * 
   * - `OperationDenied`: The operation was denied.
   * 
   * - `AccountException`: An account exception occurred.
   * 
   * - `NodeFailure`: An ECS node failed.
   * 
   * - `BootstrapFailure`: A bootstrap action failed.
   * 
   * - `ValidationFail`: The business logic validation failed.
   * 
   * - `ServiceFailure`: A dependent service failed.
   * 
   * - `InternalError`: An internal error occurred.
   * 
   * @example
   * OutOfStock
   */
  code?: string;
  /**
   * @remarks
   * A human-readable message that provides details about the state change.
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

