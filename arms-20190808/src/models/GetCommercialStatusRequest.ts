// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommercialStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The product code.
   * 
   * *   arms_app_post
   * *   arms_web_post
   * *   arms_promethues_public_cn
   * *   prometheus_pay_public_cn
   * *   xtrace
   * *   arms_serverless_public_cn
   * *   arms_rumserverless_public_cn
   * *   prometheus_serverless_public_cn
   * *   xtrace_serverless_public_cn
   * 
   * This parameter is required.
   * 
   * @example
   * arms_app_post
   */
  commodityCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

