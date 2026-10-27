// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceClassResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order ID. An order is generated when you upgrade or downgrade an instance, or change the instance specifications.
   * 
   * @example
   * 20211103105558
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the instance specification change task.
   * 
   * @example
   * 0
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

