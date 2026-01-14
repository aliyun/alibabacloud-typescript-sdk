// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCommodityRequest extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * Valid values on the China site (aliyun.com):
   * 
   * *   **ga_gapluspre_public_cn**: GA instance.
   * *   **ga_plusbwppre_public_cn**: basic bandwidth plan.
   * 
   * Valid values on the international site (alibabacloud.com):
   * 
   * *   **ga_pluspre_public_intl**: GA instance.
   * *   **ga_bwppreintl_public_intl:** basic bandwidth plan.
   * 
   * This parameter is required.
   * 
   * @example
   * ga_gapluspre_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The type of the order. Valid values:
   * 
   * *   **BUY**: purchase order.
   * *   **RENEW**: renewal order.
   * *   **UPGRADE**: upgrade order.
   * 
   * This parameter is required.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      orderType: 'OrderType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      orderType: 'string',
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

