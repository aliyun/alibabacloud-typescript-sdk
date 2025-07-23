// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserResourcesRequest extends $dara.Model {
  /**
   * @example
   * BrainIndustrial
   */
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

