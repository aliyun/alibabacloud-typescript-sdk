// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * Whether the age is over 14 years old:
   * - **T**: Over
   * - **F**: Under
   * 
   * @example
   * T
   */
  ageGt?: string;
  /**
   * @remarks
   * End date of the query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1760630399999
   */
  endDate?: number;
  /**
   * @remarks
   * Product Code.
   * 
   * @example
   * ID_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * Service type:
   * - **antcloudauth**: Financial-grade real-person authentication.
   * - **cloudauthst** (discontinued): Enhanced real-person authentication.
   * - **cloudauth** (discontinued): Real-person authentication.
   * 
   * This parameter is required.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * Start date of the query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1760025600000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      ageGt: 'AgeGt',
      endDate: 'EndDate',
      productCode: 'ProductCode',
      serviceCode: 'ServiceCode',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageGt: 'string',
      endDate: 'number',
      productCode: 'string',
      serviceCode: 'string',
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

