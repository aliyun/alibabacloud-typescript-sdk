// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceGroupPriceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of instance groups.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The ID of the bandwidth plan.
   * 
   * @example
   * np-shdbbkdubb****
   */
  bandwidth?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * imgc-0aae4rgm5umzo****
   */
  imageId?: string;
  /**
   * @remarks
   * The instance group specifications.
   * 
   * This parameter is required.
   * 
   * @example
   * acp.basic.small
   */
  instanceGroupSpec?: string;
  /**
   * @remarks
   * The instance version. You do not need to specify this parameter. The system automatically matches the value.
   * 
   * @example
   * basic
   */
  instanceVersion?: string;
  /**
   * @remarks
   * The number of instances in the instance group.
   * 
   * @example
   * 10
   */
  numberOfInstances?: number;
  /**
   * @remarks
   * The order type.
   * 
   * @example
   * CREATE
   */
  orderType?: string;
  /**
   * @remarks
   * The subscription period. The unit is specified by PeriodUnit. Default value: 1.
   * 
   * @example
   * 2
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period. Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the promotion.
   * 
   * @example
   * 88436689****
   */
  promotionId?: string;
  /**
   * @remarks
   * The sales mode. You do not need to specify this parameter. The system automatically matches the value.
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      bandwidth: 'Bandwidth',
      bizRegionId: 'BizRegionId',
      imageId: 'ImageId',
      instanceGroupSpec: 'InstanceGroupSpec',
      instanceVersion: 'InstanceVersion',
      numberOfInstances: 'NumberOfInstances',
      orderType: 'OrderType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      saleMode: 'SaleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      bandwidth: 'number',
      bizRegionId: 'string',
      imageId: 'string',
      instanceGroupSpec: 'string',
      instanceVersion: 'string',
      numberOfInstances: 'number',
      orderType: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      saleMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

