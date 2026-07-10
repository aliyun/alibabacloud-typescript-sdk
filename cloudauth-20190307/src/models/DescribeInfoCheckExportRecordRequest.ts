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
   * The end time of the query.
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
   * - **MOBILE_ONLINE_LENGTH**: mobile number online duration.
   * - **MOBILE_ONLINE_STATUS**: mobile number online status.
   * - **MOBILE_3_META_SIMPLE**: mobile number three-element verification (simple edition).
   * - **MOBILE_3_META**: mobile number three-element verification (detailed edition).
   * - **MOBILE_2_META**: mobile number two-element verification.
   * - **BANK_CARD_N_META**: bank card verification (detailed edition).
   * - **MOBILE_DETECT**: phone number detection.
   * - **VEHICLE_N_META**: vehicle element verification (enhanced edition).
   * - **VEHICLE_PENTA_INFO**: vehicle five-element information recognition.
   * - **VEHICLE_LICENSE_INFO**: vehicle information recognition.
   * - **VEHICLE_INSURE_DATE**: vehicle insurance date query.
   * - **VEHICLE_CHECK**: vehicle element verification.
   * 
   * @example
   * ID_CARD_2_META
   */
  productType?: string;
  /**
   * @remarks
   * The start time of the query.
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

