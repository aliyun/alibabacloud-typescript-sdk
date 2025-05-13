// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateTaskCustomerRequestCustomers } from "./UpdateTaskCustomerRequestCustomers";


export class UpdateTaskCustomerRequest extends $dara.Model {
  /**
   * @remarks
   * 外呼客户
   * 
   * This parameter is required.
   */
  customers?: UpdateTaskCustomerRequestCustomers[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 任务ID
   * 
   * This parameter is required.
   * 
   * @example
   * 59
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      customers: 'Customers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customers: { 'type': 'array', 'itemType': UpdateTaskCustomerRequestCustomers },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customers)) {
      $dara.Model.validateArray(this.customers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

