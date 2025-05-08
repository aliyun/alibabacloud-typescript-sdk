// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateARMServerInstancesRequestTag } from "./CreateArmserverInstancesRequestTag";


export class CreateARMServerInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of instances to create. Valid values: **1** to **100**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the subscription. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Specifies whether to use coupons. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * true
   */
  autoUseCoupon?: boolean;
  cidr?: string;
  /**
   * @remarks
   * The ID of the Edge Node Service (ENS) node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-guiyang-12
   */
  ensRegionId?: string;
  /**
   * @remarks
   * Set one or more environment variables during EAIS instance initialization.
   * 
   * @example
   * [object Object]
   */
  environmentVar?: string;
  /**
   * @remarks
   * The refresh rate. Unit: Hz. Valid values: 30 and 60.
   * 
   * @example
   * 30
   */
  frequency?: number;
  /**
   * @remarks
   * The ID of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * yourImage ID
   */
  imageId?: string;
  /**
   * @remarks
   * The specification of the Android in Container (AIC) instance. Examples:
   * 
   * *   aic.cf52r.c1.np
   * *   aic.cf52r.c2.np
   * *   aic.cf53r.c2.np
   * *   aic.cf52r.c4.np
   * *   aic.cf53r.c3.np
   * *   aic.cf52r.c3.np
   * *   aic.cf53r.c1.np
   * *   aic.cf53r.c5.np
   * *   aic.cf53r.c6
   * *   aic.cf53r.c4.np
   * *   aic.cf53r.c6.np
   * *   aic.cf53r.c7.np
   * *   aic.cf52m1r.c5.np
   * *   aic.cf53r.c8.np
   * *   aic.cf53r.c7
   * *   aic.cf52m1r.c2.np
   * *   aic.cf52m1r.c1.np
   * *   aic.cf52m1r.c3.np
   * *   aic.cf52m1r.c4.np
   * *   aic.cf52m1r.c6
   * *   ens.a6c2
   * 
   * This parameter is required.
   * 
   * @example
   * aic.cf53r.c6.np
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the key pair.
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
   * The billing method. Set the value to **PrePaid**. PrePaid specifies the subscription billing method.
   * 
   * >  Only PrePaid is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription duration of the instance.
   * 
   * *   If you leave PeriodUnit empty, the instance is purchased on a monthly basis. Valid values: Day and Month.
   * *   If you set PeriodUnit to Day, you can set Period only to 3.
   * *   If you set PeriodUnit to Month, you can set Period to a value within the range of [1,9], or set the value to 12.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * *   If you leave PeriodUnit empty, the instance is purchased on a monthly basis. Valid values: Day and Month.
   * *   If you set PeriodUnit to Day, you can set Period only to 3.
   * *   If you set PeriodUnit to Month, you can set Period to a value within the range of [1,9], or set the value to 12.
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The resolution. Examples:
   * 
   * *   1920\\*864
   * *   1080\\*1920
   * *   1920\\*1080
   * *   720\\*1280
   * *   2400\\*1080
   * *   1080\\*2400
   * *   1280\\*720
   * *   864\\*1920
   * 
   * This parameter is required.
   * 
   * @example
   * 720*1280
   */
  resolution?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * AIC-Server
   */
  serverName?: string;
  /**
   * @remarks
   * The specification of the ARM server. Examples:
   * 
   * *   cas.cf53r
   * *   cas.cf52r
   * *   cas.cf52m1r
   * *   cas.tg52g2
   * *   ens.afq-c2m3i.medium
   * 
   * This parameter is required.
   * 
   * @example
   * cas.cf53r
   */
  serverType?: string;
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

