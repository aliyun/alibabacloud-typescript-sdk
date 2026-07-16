// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstimatedPriceQueryV2Request extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * flight
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2000-01-01
   */
  departDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 杭州
   */
  fromCity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2000-01-01
   */
  leaveDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 北京
   */
  toCity?: string;
  /**
   * @example
   * Fei123
   */
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

