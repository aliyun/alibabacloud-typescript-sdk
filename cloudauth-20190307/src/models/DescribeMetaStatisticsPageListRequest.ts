// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetaStatisticsPageListRequest extends $dara.Model {
  /**
   * @remarks
   * Product API:
   * - **ID_CARD_2_META**: ID Card Two-Element Verification
   * - **ID_PERIOD**: ID Card Validity Verification Period
   * - **MOBILE_ONLINE_LENGTH**: Mobile Online Duration
   * - **MOBILE_ONLINE_STATUS**: Mobile Online Status
   * - **MOBILE_3_META_SIMPLE**: Mobile Number Three-Element Verification (Simple)
   * - **MOBILE_3_META**: Mobile Number Three-Element Verification (Detailed)
   * - **MOBILE_2_META**: Mobile Number Two-Element Verification
   * - **BANK_CARD_N_META**: Bank Card Verification (Detailed)
   * - **MOBILE_DETECT**: Number Detection
   * - **VEHICLE_N_META**: Vehicle Element Verification (Enhanced)
   * - **VEHICLE_PENTA_INFO**: Vehicle Five-Element Information Recognition
   * - **VEHICLE_LICENSE_INFO**: Vehicle Information Recognition
   * - **VEHICLE_INSURE_DATE**: Vehicle Insurance Date Query
   * - **VEHICLE_CHECK**: Vehicle Element Verification
   * 
   * This parameter is required.
   * 
   * @example
   * ID_PERIOD
   */
  api?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  currentPage?: number;
  /**
   * @remarks
   * Query end time. Unix timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1737561599999
   */
  endDate?: number;
  /**
   * @remarks
   * Number of data entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Query start time. The timestamp is in milliseconds.
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
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      currentPage: 'number',
      endDate: 'number',
      pageSize: 'number',
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

