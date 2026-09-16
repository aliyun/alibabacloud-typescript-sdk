// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInfoCheckExportRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The query end time. Format: YYYY-MM-DD HH:mm:ss, for example, 2025-10-11 21:24:48.
   * 
   * @example
   * 2025-10-11 21:24:48
   */
  endDate?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. Valid values:
   * - **ID_CARD_2_META**: ID card two-element verification.
   * - **ID_PERIOD**: ID card validity period verification.
   * - **MOBILE_ONLINE_LENGTH**: Mobile number online duration.
   * - **MOBILE_ONLINE_STATUS**: Mobile number online status.
   * - **MOBILE_3_META_SIMPLE**: Mobile number three-element verification (simple edition).
   * - **MOBILE_3_META**: Mobile number three-element verification (detailed edition).
   * - **MOBILE_2_META**: Mobile number two-element verification.
   * - **BANK_CARD_N_META**: Bank card verification (detailed edition).
   * - **MOBILE_DETECT**: Number detection.
   * - **VEHICLE_N_META**: Vehicle element verification (enhanced edition).
   * - **VEHICLE_PENTA_INFO**: Vehicle five-element information recognition.
   * - **VEHICLE_LICENSE_INFO**: Vehicle information recognition.
   * - **VEHICLE_INSURE_DATE**: Vehicle insurance date query.
   * - **VEHICLE_CHECK**: Vehicle element verification.
   * 
   * @example
   * ID_CARD_2_META
   */
  productType?: string;
  /**
   * @remarks
   * The query start time. Format: YYYY-MM-DD HH:mm:ss, for example, 2025-10-11 21:24:48.
   * 
   * @example
   * 2025-10-11 21:24:48
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      productType: 'ProductType',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      productType: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

