// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationResponseBodyDataPriceList extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PayAsYouGo
   */
  chargeType?: string;
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * ecs
   */
  instanceName?: string;
  /**
   * @remarks
   * Resource Fill Labels.
   * 
   * @example
   * Create
   */
  lifecycle?: string;
  /**
   * @remarks
   * The unit price of the instance.
   * 
   * @example
   * 0.01
   */
  onePrice?: number;
  /**
   * @remarks
   * The original price of the instance.
   * 
   * @example
   * 3.570
   */
  originalPrice?: number;
  /**
   * @remarks
   * The service duration.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The total price.
   * 
   * @example
   * 0.01
   */
  price?: number;
  /**
   * @remarks
   * Unit: USD per hour
   * 
   * @example
   * The service duration.
   */
  priceUnit?: string;
  /**
   * @remarks
   * The region in which the instance resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The error message that is returned when a price query fails.
   * 
   * @example
   * ecs.e3.large
   */
  remark?: string;
  /**
   * @remarks
   * Product code
   * 
   * @example
   * ecs
   */
  resourceCode?: string;
  /**
   * @remarks
   * The instance type. This parameter indicates the information about the instance type. For example, 192.168.0.0/16 may be returned for a Virtual Private Cloud (VPC) instance, ecs.g5.large may be returned for an Elastic Compute Service (ECS) instance, and slb.s1.small may be returned for a Server Load Balancer (SLB) instance. If the resource does not have a specific type, an empty value is returned.
   * 
   * @example
   * The billing method.
   */
  specification?: string;
  /**
   * @remarks
   * The creation mode. Valid values:\\
   * 1: creates a new instance.\\
   * 2: imports an instance.
   * 
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      count: 'Count',
      instanceName: 'InstanceName',
      lifecycle: 'Lifecycle',
      onePrice: 'OnePrice',
      originalPrice: 'OriginalPrice',
      period: 'Period',
      price: 'Price',
      priceUnit: 'PriceUnit',
      region: 'Region',
      remark: 'Remark',
      resourceCode: 'ResourceCode',
      specification: 'Specification',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      count: 'number',
      instanceName: 'string',
      lifecycle: 'string',
      onePrice: 'number',
      originalPrice: 'number',
      period: 'number',
      price: 'number',
      priceUnit: 'string',
      region: 'string',
      remark: 'string',
      resourceCode: 'string',
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

