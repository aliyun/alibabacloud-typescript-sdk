// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyFailStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * Age greater than 14 years old:
   * - **T**: Greater than
   * - **F**: Less than
   * 
   * @example
   * T
   */
  ageGt?: string;
  /**
   * @remarks
   * API code:
   * - **INIT_SERVICE**: Server-side initialization failure
   * - **INIT_DEVICE**: Client-side failure
   * - **VERIFY_DEVICE**: Authentication failed
   * 
   * This parameter is required.
   * 
   * @example
   * INIT_SERVICE
   */
  api?: string;
  /**
   * @remarks
   * Device type.
   * - ios
   * - android
   * - websdk
   * 
   * @example
   * ios
   */
  deviceType?: string;
  /**
   * @remarks
   * End time of the query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1760630399999
   */
  endDate?: number;
  /**
   * @remarks
   * Product code.
   * 
   * This parameter is required.
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
   * cloudauthst
   */
  serviceCode?: string;
  /**
   * @remarks
   * Start time of the query.
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
      api: 'Api',
      deviceType: 'DeviceType',
      endDate: 'EndDate',
      productCode: 'ProductCode',
      serviceCode: 'ServiceCode',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ageGt: 'string',
      api: 'string',
      deviceType: 'string',
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

