// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundPreCalV2ResponseBodyModuleMultiRefundFeeDTOS extends $dara.Model {
  /**
   * @example
   * 3243028
   */
  passengerId?: string;
  passengerName?: string;
  /**
   * @example
   * 10000
   */
  preRefundMoney?: number;
  /**
   * @example
   * 100
   */
  refundChargeFee?: number;
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      passengerName: 'passenger_name',
      preRefundMoney: 'pre_refund_money',
      refundChargeFee: 'refund_charge_fee',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'string',
      passengerName: 'string',
      preRefundMoney: 'number',
      refundChargeFee: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

