// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the age is older than 14. Valid values:
   * - **T**: older than 14
   * - **F**: younger than 14.
   * 
   * @example
   * T
   */
  ageGt?: string;
  /**
   * @remarks
   * The end time of the query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1760630399999
   */
  endDate?: number;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * ID_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * - **antcloudauth**: financial-grade ID Verification.
   * - **cloudauthst** (discontinued): enhanced ID Verification.
   * - **cloudauth** (discontinued): ID Verification.
   * 
   * This parameter is required.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * The start time of the query.
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

