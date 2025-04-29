// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyOrderDetailV2ResponseBodyModuleAttributes extends $dara.Model {
  baggageRule?: string;
  changeRule?: string;
  latestPayTime?: any;
  latestPayTimeStr?: string;
  refundRule?: string;
  static names(): { [key: string]: string } {
    return {
      baggageRule: 'baggage_rule',
      changeRule: 'change_rule',
      latestPayTime: 'latest_pay_time',
      latestPayTimeStr: 'latest_pay_time_str',
      refundRule: 'refund_rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageRule: 'string',
      changeRule: 'string',
      latestPayTime: 'any',
      latestPayTimeStr: 'string',
      refundRule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

