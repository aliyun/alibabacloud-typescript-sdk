// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TrainOrderCreateRequestPassengerOpenInfoSCostCenterInfo } from "./TrainOrderCreateRequestPassengerOpenInfoScostCenterInfo";


export class TrainOrderCreateRequestPassengerOpenInfoS extends $dara.Model {
  costCenterInfo?: TrainOrderCreateRequestPassengerOpenInfoSCostCenterInfo;
  /**
   * @example
   * 291487e553c5abde3b611aae283e2526f0d733ab55094aadc0b5ba587222a233c
   */
  countryCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 291487e553c5abde3b611aae283e2526f0d733ab55094aadc0b5ba587222a233c
   */
  passengerCertNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 949c9f34f677a0e5d249dfc94f5e62cc7
   */
  passengerCertType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 949c9f34f677a0e5d249dfc94f5e62cc7
   */
  passengerName?: string;
  /**
   * @example
   * 291487e553c5abde3b611aae283e2526f0d733ab55094aadc0b5ba587222a233c
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
      costCenterInfo: TrainOrderCreateRequestPassengerOpenInfoSCostCenterInfo,
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

