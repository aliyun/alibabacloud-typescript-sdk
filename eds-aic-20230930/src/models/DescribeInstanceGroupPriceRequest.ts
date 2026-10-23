// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceGroupPriceRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  amount?: number;
  /**
   * @example
   * np-shdbbkdubb****
   */
  bandwidth?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * imgc-0aae4rgm5umzo****
   */
  imageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acp.basic.small
   */
  instanceGroupSpec?: string;
  /**
   * @example
   * basic
   */
  instanceVersion?: string;
  /**
   * @example
   * 10
   */
  numberOfInstances?: number;
  /**
   * @example
   * CREATE
   */
  orderType?: string;
  /**
   * @example
   * 2
   */
  period?: number;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @example
   * 88436689****
   */
  promotionId?: string;
  /**
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

