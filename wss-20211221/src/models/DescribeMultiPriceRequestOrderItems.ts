// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMultiPriceRequestOrderItemsComponents } from "./DescribeMultiPriceRequestOrderItemsComponents";


export class DescribeMultiPriceRequestOrderItems extends $dara.Model {
  /**
   * @example
   * 1
   */
  amount?: number;
  components?: DescribeMultiPriceRequestOrderItemsComponents[];
  instanceIds?: string[];
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  promotionId?: string;
  resourceIds?: string[];
  /**
   * @example
   * DurationPackage
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      components: 'Components',
      instanceIds: 'InstanceIds',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      components: { 'type': 'array', 'itemType': DescribeMultiPriceRequestOrderItemsComponents },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

