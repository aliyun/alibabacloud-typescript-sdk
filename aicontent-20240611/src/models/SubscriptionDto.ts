// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubscriptionDTO extends $dara.Model {
  /**
   * @remarks
   * The balance type (permanent/monthly).
   * 
   * @example
   * permanent
   */
  balanceType?: string;
  /**
   * @remarks
   * The department ID.
   * 
   * @example
   * 100
   */
  clientId?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-06-15T10:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The subscription ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The subscription status. Valid values:
   * - active: The subscription is active.
   * - stopped: The subscription is stopped.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The stop time. This value is empty if the subscription has not been stopped.
   * 
   * @example
   * 2026-07-01T00:00:00Z
   */
  stopTime?: string;
  /**
   * @remarks
   * The subscription recharge amount.
   * 
   * @example
   * 100.00
   */
  subscriptionAmount?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-06-15T10:00:00Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The effective period.
   * 
   * @example
   * 2024-07-01T00:00:00Z
   */
  validFrom?: string;
  static names(): { [key: string]: string } {
    return {
      balanceType: 'balanceType',
      clientId: 'clientId',
      createTime: 'createTime',
      id: 'id',
      status: 'status',
      stopTime: 'stopTime',
      subscriptionAmount: 'subscriptionAmount',
      updateTime: 'updateTime',
      validFrom: 'validFrom',
    };
  }

  static types(): { [key: string]: any } {
    return {
      balanceType: 'string',
      clientId: 'number',
      createTime: 'string',
      id: 'number',
      status: 'string',
      stopTime: 'string',
      subscriptionAmount: 'number',
      updateTime: 'string',
      validFrom: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

