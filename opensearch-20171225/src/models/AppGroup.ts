// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Quota } from "./Quota";


export class AppGroupOrder extends $dara.Model {
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'autoRenew',
      duration: 'duration',
      pricingCycle: 'pricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      duration: 'number',
      pricingCycle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AppGroup extends $dara.Model {
  chargeType?: string;
  description?: string;
  domain?: string;
  name?: string;
  order?: AppGroupOrder;
  quota?: Quota;
  resourceGroupId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      description: 'description',
      domain: 'domain',
      name: 'name',
      order: 'order',
      quota: 'quota',
      resourceGroupId: 'resourceGroupId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      description: 'string',
      domain: 'string',
      name: 'string',
      order: AppGroupOrder,
      quota: Quota,
      resourceGroupId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.order && typeof (this.order as any).validate === 'function') {
      (this.order as any).validate();
    }
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

