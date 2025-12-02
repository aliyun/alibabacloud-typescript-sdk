// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserBuyStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Commodity code.
   * 
   * @example
   * lvwang_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
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

