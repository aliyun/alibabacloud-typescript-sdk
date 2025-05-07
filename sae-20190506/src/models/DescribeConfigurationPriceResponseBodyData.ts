// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeConfigurationPriceResponseBodyDataBagUsage } from "./DescribeConfigurationPriceResponseBodyDataBagUsage";
import { DescribeConfigurationPriceResponseBodyDataCpuMemPrice } from "./DescribeConfigurationPriceResponseBodyDataCpuMemPrice";
import { DescribeConfigurationPriceResponseBodyDataOrder } from "./DescribeConfigurationPriceResponseBodyDataOrder";
import { DescribeConfigurationPriceResponseBodyDataRequestPrice } from "./DescribeConfigurationPriceResponseBodyDataRequestPrice";
import { DescribeConfigurationPriceResponseBodyDataRules } from "./DescribeConfigurationPriceResponseBodyDataRules";
import { DescribeConfigurationPriceResponseBodyDataTrafficPrice } from "./DescribeConfigurationPriceResponseBodyDataTrafficPrice";


export class DescribeConfigurationPriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The remaining capacity of the resource plan.
   */
  bagUsage?: DescribeConfigurationPriceResponseBodyDataBagUsage;
  /**
   * @remarks
   * The price of CPU and memory.
   */
  cpuMemPrice?: DescribeConfigurationPriceResponseBodyDataCpuMemPrice;
  /**
   * @remarks
   * The information about pricing.
   */
  order?: DescribeConfigurationPriceResponseBodyDataOrder;
  /**
   * @remarks
   * The price based on the number of requests.
   */
  requestPrice?: DescribeConfigurationPriceResponseBodyDataRequestPrice;
  /**
   * @remarks
   * The promotion rules.
   */
  rules?: DescribeConfigurationPriceResponseBodyDataRules[];
  /**
   * @remarks
   * The traffic price.
   */
  trafficPrice?: DescribeConfigurationPriceResponseBodyDataTrafficPrice;
  static names(): { [key: string]: string } {
    return {
      bagUsage: 'BagUsage',
      cpuMemPrice: 'CpuMemPrice',
      order: 'Order',
      requestPrice: 'RequestPrice',
      rules: 'Rules',
      trafficPrice: 'TrafficPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bagUsage: DescribeConfigurationPriceResponseBodyDataBagUsage,
      cpuMemPrice: DescribeConfigurationPriceResponseBodyDataCpuMemPrice,
      order: DescribeConfigurationPriceResponseBodyDataOrder,
      requestPrice: DescribeConfigurationPriceResponseBodyDataRequestPrice,
      rules: { 'type': 'array', 'itemType': DescribeConfigurationPriceResponseBodyDataRules },
      trafficPrice: DescribeConfigurationPriceResponseBodyDataTrafficPrice,
    };
  }

  validate() {
    if(this.bagUsage && typeof (this.bagUsage as any).validate === 'function') {
      (this.bagUsage as any).validate();
    }
    if(this.cpuMemPrice && typeof (this.cpuMemPrice as any).validate === 'function') {
      (this.cpuMemPrice as any).validate();
    }
    if(this.order && typeof (this.order as any).validate === 'function') {
      (this.order as any).validate();
    }
    if(this.requestPrice && typeof (this.requestPrice as any).validate === 'function') {
      (this.requestPrice as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(this.trafficPrice && typeof (this.trafficPrice as any).validate === 'function') {
      (this.trafficPrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

