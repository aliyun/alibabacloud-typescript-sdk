// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyDeviceRiskStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1748624399999
   */
  endDate?: number;
  /**
   * @remarks
   * Cloud product code.
   * 
   * @example
   * ID_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * Scene ID.
   * 
   * @example
   * 100000xxxx
   */
  sceneId?: string;
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
   * Start time of the query, in Unix timestamp format, in milliseconds.
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

