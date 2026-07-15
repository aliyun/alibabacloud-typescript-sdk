// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstimatedPriceQueryV2Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  departDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fromCity?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  leaveDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  toCity?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'biz_type',
      departDate: 'depart_date',
      fromCity: 'from_city',
      leaveDate: 'leave_date',
      toCity: 'to_city',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      departDate: 'string',
      fromCity: 'string',
      leaveDate: 'string',
      toCity: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

