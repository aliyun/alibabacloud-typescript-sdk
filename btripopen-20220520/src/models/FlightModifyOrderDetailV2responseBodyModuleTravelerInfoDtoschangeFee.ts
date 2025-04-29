// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyOrderDetailV2ResponseBodyModuleTravelerInfoDTOSChangeFee extends $dara.Model {
  changeFee?: number;
  serviceFee?: number;
  upgradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      changeFee: 'change_fee',
      serviceFee: 'service_fee',
      upgradePrice: 'upgrade_price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFee: 'number',
      serviceFee: 'number',
      upgradePrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

