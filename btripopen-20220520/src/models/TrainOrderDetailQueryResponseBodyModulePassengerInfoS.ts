// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderDetailQueryResponseBodyModulePassengerInfoSCostCenterInfo } from "./TrainOrderDetailQueryResponseBodyModulePassengerInfoScostCenterInfo";


export class TrainOrderDetailQueryResponseBodyModulePassengerInfoS extends $dara.Model {
  costCenterInfo?: TrainOrderDetailQueryResponseBodyModulePassengerInfoSCostCenterInfo;
  /**
   * @example
   * 291487e553c5abde3b611aae283e2526f0d733ab55094aadc0b5ba587222a233c
   */
  countryCode?: string;
  /**
   * @example
   * 291487e553c5abde3b611aae283e2526f0d733ab55094aadc0b5ba587222a233c
   */
  passengerCertNo?: string;
  /**
   * @example
   * 170d9ac6f8807f9ec603c688f45f78a41
   */
  passengerCertType?: string;
  /**
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @example
   * b6a6fc1bdf1ba60e25c2e132b612c8819
   */
  passengerMobile?: string;
  /**
   * @example
   * 949c9f34f677a0e5d249dfc94f5e62cc7
   */
  passengerName?: string;
  /**
   * @example
   * b6a6fc1bdf1ba60e25c2e132b612c8819
   */
  validDateEnd?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterInfo: 'cost_center_info',
      countryCode: 'country_code',
      passengerCertNo: 'passenger_cert_no',
      passengerCertType: 'passenger_cert_type',
      passengerId: 'passenger_id',
      passengerMobile: 'passenger_mobile',
      passengerName: 'passenger_name',
      validDateEnd: 'valid_date_end',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterInfo: TrainOrderDetailQueryResponseBodyModulePassengerInfoSCostCenterInfo,
      countryCode: 'string',
      passengerCertNo: 'string',
      passengerCertType: 'string',
      passengerId: 'string',
      passengerMobile: 'string',
      passengerName: 'string',
      validDateEnd: 'string',
    };
  }

  validate() {
    if(this.costCenterInfo && typeof (this.costCenterInfo as any).validate === 'function') {
      (this.costCenterInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

