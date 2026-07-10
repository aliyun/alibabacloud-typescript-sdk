// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyDeviceRiskStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1748624399999
   */
  endDate?: number;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * ID_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 100000xxxx
   */
  sceneId?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * - **antcloudauth**: financial-grade ID Verification.
   * - **cloudauthst** (discontinued): ID Verification - Enhanced Edition.
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
   * The start time of the query. The value is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1746720000000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
      serviceCode: 'ServiceCode',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      productCode: 'string',
      sceneId: 'string',
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

