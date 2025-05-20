// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrderRequest extends $dara.Model {
  autoPay?: boolean;
  autoRenew?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  package?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  period?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  totalSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'auto_pay',
      autoRenew: 'auto_renew',
      code: 'code',
      instanceId: 'instance_id',
      orderType: 'order_type',
      package: 'package',
      period: 'period',
      periodUnit: 'period_unit',
      totalSize: 'total_size',
      userCount: 'user_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      code: 'string',
      instanceId: 'string',
      orderType: 'string',
      package: 'string',
      period: 'number',
      periodUnit: 'string',
      totalSize: 'number',
      userCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

