// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateARMServerInstancesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * team
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * backend
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateARMServerInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of instances to create. Minimum value: **1**. Maximum value: **100**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Specifies whether to use coupons. Valid values:
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * The IPv4 CIDR block used by the instance, in CIDR notation.
   * 
   * @example
   * 10.0.0.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The ENS edge zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-guiyang-12
   */
  ensRegionId?: string;
  /**
   * @remarks
   * One or more environment variables to set during EAIS instance initialization.
   * 
   * @example
   * [object Object]
   */
  environmentVar?: string;
  /**
   * @remarks
   * The refresh rate, in Hz. Valid values: 30 and 60.
   * 
   * @example
   * 30
   */
  frequency?: number;
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * yourImage ID
   */
  imageId?: string;
  /**
   * @remarks
   * The instance billing cycle. Valid values:
   * - Hour
   * - Day
   * 
   * @example
   * Hour
   */
  instanceBillingCycle?: string;
  /**
   * @remarks
   * The instance type of the AIC container instance. Valid values:
   * 
   * - aic.cf52r.c1.np
   * 
   * - aic.cf52r.c2.np
   * 
   * - aic.cf53r.c2.np
   * 
   * - aic.cf52r.c4.np
   * 
   * - aic.cf53r.c3.np
   * 
   * - aic.cf52r.c3.np
   * 
   * - aic.cf53r.c1.np
   * 
   * - aic.cf53r.c5.np
   * 
   * - aic.cf53r.c6
   * 
   * - aic.cf53r.c4.np
   * 
   * - aic.cf53r.c6.np
   * 
   * - aic.cf53r.c7.np
   * 
   * - aic.cf52m1r.c5.np
   * 
   * - aic.cf53r.c8.np
   * 
   * - aic.cf53r.c7
   * 
   * - aic.cf52m1r.c2.np
   * 
   * - aic.cf52m1r.c1.np
   * 
   * - aic.cf52m1r.c3.np
   * 
   * - aic.cf52m1r.c4.np
   * 
   * - aic.cf52m1r.c6
   * 
   * - ens.a6c2
   * 
   * This parameter is required.
   * 
   * @example
   * aic.cf53r.c6.np
   */
  instanceType?: string;
  /**
   * @remarks
   * The key pair name.
   * 
   * @example
   * TestKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * pre
   */
  nameSpace?: string;
  /**
   * @remarks
   * The billing type. Valid values: **PrePaid** (subscription).
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The duration for which you want to purchase the resource.
   * 
   * - If you do not specify PeriodUnit, the resource is purchased on a monthly basis by default. Currently, only Days and Month are supported.
   * - If PeriodUnit is set to Day, Period can only be set to 3.
   * - If PeriodUnit is set to Month, Period can be set to 1 to 9 or 12.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the purchase duration.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The resolution. Valid values:
   * 
   * - 1920*864
   * 
   * - 1080*1920
   * 
   * - 1920*1080
   * 
   * - 720*1280
   * 
   * - 2400*1080
   * 
   * - 1080*2400
   * 
   * - 1280*720
   * 
   * - 864*1920
   * 
   * This parameter is required.
   * 
   * @example
   * 720*1280
   */
  resolution?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * AIC-Server
   */
  serverName?: string;
  /**
   * @remarks
   * The ARM board specification. Valid values:
   * 
   * - cas.cf53r
   * - cas.cf52r
   * - cas.cf52m1r
   * - cas.tg52g2
   * - ens.afq-c2m3i.medium
   * 
   * This parameter is required.
   * 
   * @example
   * cas.cf53r
   */
  serverType?: string;
  /**
   * @remarks
   * The list of tags bound to the instance.
   */
  tag?: CreateARMServerInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      cidr: 'Cidr',
      ensRegionId: 'EnsRegionId',
      environmentVar: 'EnvironmentVar',
      frequency: 'Frequency',
      imageId: 'ImageId',
      instanceBillingCycle: 'InstanceBillingCycle',
      instanceType: 'InstanceType',
      keyPairName: 'KeyPairName',
      nameSpace: 'NameSpace',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      resolution: 'Resolution',
      serverName: 'ServerName',
      serverType: 'ServerType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoRenew: 'boolean',
      autoUseCoupon: 'boolean',
      cidr: 'string',
      ensRegionId: 'string',
      environmentVar: 'string',
      frequency: 'number',
      imageId: 'string',
      instanceBillingCycle: 'string',
      instanceType: 'string',
      keyPairName: 'string',
      nameSpace: 'string',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      resolution: 'string',
      serverName: 'string',
      serverType: 'string',
      tag: { 'type': 'array', 'itemType': CreateARMServerInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

