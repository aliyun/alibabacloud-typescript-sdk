// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySkuPriceListRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  commodityCode?: string;
  lang?: string;
  /**
   * @remarks
   * The token that is used to retrieve the next page. You do not need to set this parameter if you query coverage details for the first time. The response returns a token that you can use to query coverage details of the next page. If a null value is returned for the NextPageToken parameter, no more coverage details can be queried.
   * 
   * @example
   * 080112060a0422020800180022490a470342000000315333303332363436363336333433393636333136333338333733373333333133373336363336323634363336363337333836333636333636313336363433363332
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The number of entries to be returned on each page. Maximum value: 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The code of the pricing object.
   * 
   * This parameter is required.
   * 
   * @example
   * instance_type
   */
  priceEntityCode?: string;
  /**
   * @remarks
   * The conditions of the pricing factors.
   */
  priceFactorConditionMap?: { [key: string]: string[] };
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      lang: 'Lang',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      priceEntityCode: 'PriceEntityCode',
      priceFactorConditionMap: 'PriceFactorConditionMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      lang: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      priceEntityCode: 'string',
      priceFactorConditionMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(this.priceFactorConditionMap) {
      $dara.Model.validateMap(this.priceFactorConditionMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

