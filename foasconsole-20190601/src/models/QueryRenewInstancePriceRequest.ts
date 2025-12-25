// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRenewInstancePriceRequestRenewInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sc_flinkserverless_public_cn-******
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      pricingCycle: 'PricingCycle',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      pricingCycle: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRenewInstancePriceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  renewInstanceRequest?: QueryRenewInstancePriceRequestRenewInstanceRequest;
  static names(): { [key: string]: string } {
    return {
      renewInstanceRequest: 'RenewInstanceRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      renewInstanceRequest: QueryRenewInstancePriceRequestRenewInstanceRequest,
    };
  }

  validate() {
    if(this.renewInstanceRequest && typeof (this.renewInstanceRequest as any).validate === 'function') {
      (this.renewInstanceRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

