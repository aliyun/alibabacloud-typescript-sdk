// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportNumberRequestCustomers } from "./ImportNumberRequestCustomers";


export class ImportNumberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  customers?: ImportNumberRequestCustomers[];
  /**
   * @example
   * 0
   */
  failReturn?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  outId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 92
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      customers: 'Customers',
      failReturn: 'FailReturn',
      outId: 'OutId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customers: { 'type': 'array', 'itemType': ImportNumberRequestCustomers },
      failReturn: 'number',
      outId: 'string',
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

