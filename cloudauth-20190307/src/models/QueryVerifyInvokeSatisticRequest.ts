// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVerifyInvokeSatisticRequest extends $dara.Model {
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
   * The query end time. Format: UNIX timestamp. Unit: milliseconds. Example: 1761926399999.
   * 
   * @example
   * 1761926399999
   */
  endDate?: number;
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
   * The list of product codes to query. For specific values, refer to the productCode under the corresponding ProductType.
   * 
   * @example
   * ID_PRO
   */
  productProgramList?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * - **FINANCE_VERIFY**: Finance-grade ID Verification.
   * - **SMART_VERIFY**: Enhanced ID Verification (discontinued).
   * - **FACE_VERIFY**: ID Verification (discontinued).
   * 
   * @example
   * FINANCE_VERIFY
   */
  productType?: string;
  /**
   * @remarks
   * The list of common scenarios.
   * 
   * @example
   * []
   */
  sceneIdList?: string;
  /**
   * @remarks
   * The query start time. Format: UNIX timestamp. Unit: milliseconds. Example: 1743436800000.
   * 
   * @example
   * 1743436800000
   */
  startDate?: number;
  /**
   * @remarks
   * The statistics dimension. Valid values:
   * - **day**: daily.
   * - **month**: monthly.
   * 
   * @example
   * day
   */
  statisticsType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      productProgramList: 'ProductProgramList',
      productType: 'ProductType',
      sceneIdList: 'SceneIdList',
      startDate: 'StartDate',
      statisticsType: 'StatisticsType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'number',
      pageSize: 'number',
      productProgramList: 'string',
      productType: 'string',
      sceneIdList: 'string',
      startDate: 'number',
      statisticsType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

