// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSavingsPlansInstanceShrinkRequest extends $dara.Model {
  autoPay?: boolean;
  /**
   * @remarks
   * The code of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * savingplan_common_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The service duration. This parameter is used together with the PricingCycle parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * The time when the savings plan takes effect. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2021-12-31T00:00:00Z
   */
  effectiveDate?: string;
  /**
   * @remarks
   * The extended parameters.
   * 
   * **if can be null:**
   * true
   */
  extendMapShrink?: string;
  /**
   * @remarks
   * The payment mode. Valid values:
   * 
   * *   total: all upfront
   * *   half: partial upfront
   * *   zero: no upfront
   * 
   * This parameter is required.
   * 
   * @example
   * total
   */
  payMode?: string;
  /**
   * @remarks
   * The contracted amount. unit: CNY
   * 
   * This parameter is required.
   * 
   * @example
   * 0.1
   */
  poolValue?: string;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is used together with Duration. Valid values:
   * 
   * *   Year
   * *   Month
   * 
   * This parameter is required.
   * 
   * @example
   * Year
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the region in which you create the savings plan. You must specify this parameter if the Type parameter is not set to universal.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The specification type. This parameter is used together with the Specification parameter. You must specify this parameter if the Type parameter is not set to universal. Valid values:
   * 
   * *   group: specification group
   * *   family: specification family
   * 
   * @example
   * family
   */
  specType?: string;
  /**
   * @remarks
   * The specifications of the savings plan. This parameter is used together with the SpecType parameter.
   * 
   * @example
   * ecs.g6
   */
  specification?: string;
  /**
   * @remarks
   * The type of the savings plan. Valid values:
   * 
   * *   universal: general-purpose type
   * *   ecs: Elastic Compute Service (ECS) compute type
   * *   elasticy: elastic type
   * 
   * This parameter is required.
   * 
   * @example
   * universal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      commodityCode: 'CommodityCode',
      duration: 'Duration',
      effectiveDate: 'EffectiveDate',
      extendMapShrink: 'ExtendMap',
      payMode: 'PayMode',
      poolValue: 'PoolValue',
      pricingCycle: 'PricingCycle',
      region: 'Region',
      specType: 'SpecType',
      specification: 'Specification',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      commodityCode: 'string',
      duration: 'string',
      effectiveDate: 'string',
      extendMapShrink: 'string',
      payMode: 'string',
      poolValue: 'string',
      pricingCycle: 'string',
      region: 'string',
      specType: 'string',
      specification: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

