// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySavingsPlansDiscountRequest extends $dara.Model {
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
  /**
   * @remarks
   * The cycle based on which queries are performed.
   * 
   * This parameter is required.
   * 
   * @example
   * 1:Year
   */
  cycle?: string;
  /**
   * @remarks
   * The identifier of the language.
   * 
   * Valid values:
   * 
   * *   EN: English.
   * *   ZH: Chinese.
   * 
   * @example
   * ZH
   */
  locale?: string;
  /**
   * @remarks
   * The code of the pricing module.
   * 
   * @example
   * instance_type
   */
  moduleCode?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The payment mode. Valid values: total: all upfront. half: half upfront. zero: no upfront.
   * 
   * This parameter is required.
   * 
   * @example
   * total
   */
  payMode?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ecs.g6
   */
  spec?: string;
  spnCommodityCode?: string;
  /**
   * @remarks
   * The type of the savings plan. Valid values: ecs: Elastic Compute Service (ECS) compute type. universal: general-purpose type.
   * 
   * This parameter is required.
   * 
   * @example
   * universal
   */
  spnType?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      cycle: 'Cycle',
      locale: 'Locale',
      moduleCode: 'ModuleCode',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      payMode: 'PayMode',
      region: 'Region',
      spec: 'Spec',
      spnCommodityCode: 'SpnCommodityCode',
      spnType: 'SpnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      cycle: 'string',
      locale: 'string',
      moduleCode: 'string',
      pageNum: 'number',
      pageSize: 'number',
      payMode: 'string',
      region: 'string',
      spec: 'string',
      spnCommodityCode: 'string',
      spnType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

