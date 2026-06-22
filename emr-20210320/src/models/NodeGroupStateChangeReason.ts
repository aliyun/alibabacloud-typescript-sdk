// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NodeGroupStateChangeReason extends $dara.Model {
  /**
   * @remarks
   * The status code for the state change. Valid values include:
   * 
   * - `UserRequest`: A user request triggered the change.
   * 
   * - `OutOfStock`: The requested ECS instance type is out of stock.
   * 
   * - `NotAuthorized`: The request lacks the required permissions.
   * 
   * - `QuotaExceeded`: The request exceeds the resource quota.
   * 
   * - `OperationDenied`: The system denied the operation.
   * 
   * - `AccountException`: An account exception occurred.
   * 
   * - `NodeFailure`: An ECS node failed.
   * 
   * - `BootstrapFailure`: The bootstrap process failed.
   * 
   * - `ValidationFail`: The request parameters failed validation.
   * 
   * - `ServiceFailure`: A dependent service failed.
   * 
   * - `InternalError`: An unexpected internal error occurred.
   * 
   * @example
   * UserRequest
   */
  code?: string;
  /**
   * @remarks
   * A human-readable message that provides details about the state change.
   * 
   * @example
   * The instance type is required.
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

