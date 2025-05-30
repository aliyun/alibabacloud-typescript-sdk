// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveUrgentDemandItemRequestUrgentDemandEcsRequest extends $dara.Model {
  /**
   * @example
   * ecs.sn2ne.6xlarge
   */
  commodityCode?: string;
  /**
   * @example
   * 2
   */
  commodityNum?: number;
  /**
   * @example
   * ecs
   */
  commodityTypeCode?: string;
  /**
   * @example
   * 111222
   */
  itemId?: number;
  /**
   * @example
   * 2
   */
  vCpuCount?: number;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'commodityCode',
      commodityNum: 'commodityNum',
      commodityTypeCode: 'commodityTypeCode',
      itemId: 'itemId',
      vCpuCount: 'vCpuCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityNum: 'number',
      commodityTypeCode: 'string',
      itemId: 'number',
      vCpuCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

