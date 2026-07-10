// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaStatisticsListRequest extends $dara.Model {
  /**
   * @remarks
   * The commodity code. Valid values:
   * - **ID_CARD_2_META**: ID card two-element verification
   * - **ID_PERIOD**: ID card validity period verification
   * - **MOBILE_ONLINE_LENGTH**: mobile number online duration
   * - **MOBILE_ONLINE_STATUS**: mobile number online status
   * - **MOBILE_3_META_SIMPLE**: mobile number three-element verification (simple edition)
   * - **MOBILE_3_META**: mobile number three-element verification (detailed edition)
   * - **MOBILE_2_META**: mobile number two-element verification
   * - **BANK_CARD_N_META**: bank card verification (detailed edition)
   * - **MOBILE_DETECT**: phone number detection
   * - **VEHICLE_N_META**: vehicle element verification (enhanced edition)
   * - **VEHICLE_PENTA_INFO**: vehicle five-element information recognition
   * - **VEHICLE_LICENSE_INFO**: vehicle information recognition
   * - **VEHICLE_INSURE_DATE**: vehicle insurance date query
   * - **VEHICLE_CHECK**: vehicle element verification.
   * 
   * This parameter is required.
   * 
   * @example
   * MOBILE_ONLINE_LENGTH
   */
  api?: string;
  /**
   * @remarks
   * The end time of the query. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1750694399999
   */
  endDate?: number;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1760112000000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      endDate: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

