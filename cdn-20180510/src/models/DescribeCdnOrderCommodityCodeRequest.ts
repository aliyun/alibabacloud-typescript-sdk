// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnOrderCommodityCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The original commodity code.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  commodityCode?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

