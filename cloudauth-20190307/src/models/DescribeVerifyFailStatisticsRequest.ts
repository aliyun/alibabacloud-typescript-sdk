// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyFailStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the age is greater than 14. Valid values:
   * - **T**: Greater than 14.
   * - **F**: Less than 14.
   * 
   * @example
   * T
   */
  ageGt?: string;
  /**
   * @remarks
   * The API code. Valid values:
   * - **INIT_SERVICE**: Server-side initialization failure.
   * - **INIT_DEVICE**: Client-side failure.
   * - **VERIFY_DEVICE**: Authentication not passed.
   * 
   * This parameter is required.
   * 
   * @example
   * INIT_SERVICE
   */
  api?: string;
  /**
   * @remarks
   * The device type. Valid values:
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
   * The end time of the query. The value is a UNIX timestamp in milliseconds, such as 1760630399999.
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
   * This parameter is required.
   * 
   * @example
   * ID_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * - **antcloudauth**: Financial-grade ID Verification.
   * - **cloudauthst** (discontinued): ID Verification Enhanced Edition.
   * - **cloudauth** (discontinued): ID Verification.
   * 
   * This parameter is required.
   * 
   * @example
   * cloudauthst
   */
  serviceCode?: string;
  /**
   * @remarks
   * The start time of the query. The value is a UNIX timestamp in milliseconds, such as 1760025600000.
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

