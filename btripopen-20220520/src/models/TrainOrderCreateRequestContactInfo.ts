// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderCreateRequestContactInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
  static names(): { [key: string]: string } {
    return {
      passengerId: 'passenger_id',
      passengerMobile: 'passenger_mobile',
      passengerName: 'passenger_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passengerId: 'string',
      passengerMobile: 'string',
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

