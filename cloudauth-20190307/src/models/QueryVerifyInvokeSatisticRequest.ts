// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVerifyInvokeSatisticRequest extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * End date of the query.
   * 
   * @example
   * 1761926399999
   */
  endDate?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * List of product codes to query. Please refer to the productCode under the corresponding ProductType.
   * 
   * @example
   * ID_PRO
   */
  productProgramList?: string;
  /**
   * @remarks
   * Product type:
   * - **FINANCE_VERIFY**: Financial-grade real-person verification
   * - **SMART_VERIFY**: Enhanced real-person verification (discontinued)
   * - **FACE_VERIFY**: Real-person verification (discontinued)
   * 
   * @example
   * FINANCE_VERIFY
   */
  productType?: string;
  /**
   * @remarks
   * List of application scenarios.
   * 
   * @example
   * []
   */
  sceneIdList?: string;
  /**
   * @remarks
   * Start date of the query.
   * 
   * @example
   * 1743436800000
   */
  startDate?: number;
  /**
   * @remarks
   * Statistics dimension:
   * - **day**: daily
   * - **month**: monthly
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

