// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainApplyRefundRequestRefundTrainInfosRefundPassengerInfos extends $dara.Model {
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
   * 170d9ac6f8807f9ec603c688f45f78a41
   */
  passengerCertType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12334
   */
  passengerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 949c9f34f677a0e5d249dfc94f5e62cc7
   */
  passengerName?: string;
  static names(): { [key: string]: string } {
    return {
      passengerCertNo: 'passenger_cert_no',
      passengerCertType: 'passenger_cert_type',
      passengerId: 'passenger_id',
      passengerName: 'passenger_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerCertNo: 'string',
      passengerCertType: 'string',
      passengerId: 'string',
      passengerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

