// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUrgentDemandItemListRequest extends $dara.Model {
  commodityCode?: string;
  /**
   * @example
   * ecs/yundisk
   */
  commodityTypeCode?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  planId?: number;
  region?: string;
  /**
   * @example
   * 10
   */
  size?: number;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'commodityCode',
      commodityTypeCode: 'commodityTypeCode',
      current: 'current',
      planId: 'planId',
      region: 'region',
      size: 'size',
      zone: 'zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityTypeCode: 'string',
      current: 'number',
      planId: 'number',
      region: 'string',
      size: 'number',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

