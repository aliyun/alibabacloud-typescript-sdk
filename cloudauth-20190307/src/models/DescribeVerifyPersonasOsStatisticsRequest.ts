// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyPersonasOsStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * Product code.
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
   * 1000002995
   */
  sceneId?: number;
  /**
   * @remarks
   * Service type:
   * - **antcloudauth**: Financial-grade real-person authentication.
   * - **cloudauthst** (discontinued): Enhanced real-person authentication.
   * 
   * This parameter is required.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * Time range for the query, indicating how many days ago.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
      sceneId: 'SceneId',
      serviceCode: 'ServiceCode',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      sceneId: 'number',
      serviceCode: 'string',
      timeRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

