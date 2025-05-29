// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstancePayTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   Postpaid: pay-as-you-go.
   * *   Prepaid: subscription.
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * This parameter must be specified only when PayType is set to Prepaid.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * *   Valid values when Period is set to Month: 1 to 9.
   * *   Valid values when Period is set to Year: 1 to 3.
   * 
   * This parameter must be specified only when PayType is set to Prepaid.
   * 
   * @example
   * 1
   */
  usedTime?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      payType: 'PayType',
      period: 'Period',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      payType: 'string',
      period: 'string',
      usedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

