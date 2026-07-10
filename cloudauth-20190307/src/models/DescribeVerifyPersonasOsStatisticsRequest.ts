// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyPersonasOsStatisticsRequest extends $dara.Model {
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
   * The scene ID.
   * 
   * @example
   * 1000002995
   */
  sceneId?: number;
  /**
   * @remarks
   * The service type. Valid values:
   * - **antcloudauth**: financial-grade ID Verification.
   * - **cloudauthst** (discontinued): enhanced ID Verification.
   * 
   * This parameter is required.
   * 
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @remarks
   * The time range for the query, which specifies the number of preceding days.
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

