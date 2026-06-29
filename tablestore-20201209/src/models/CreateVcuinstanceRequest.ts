// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVCUInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. The key can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * created
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The value can be up to 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 0woauavextilfqr61
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

export class CreateVCUInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the instance.
   * 
   * @example
   * test
   */
  aliasName?: string;
  /**
   * @remarks
   * The auto-renewal cycle. This parameter is required if auto-renewal is enabled.
   * 
   * @example
   * 1
   */
  autoRenewPeriodInMonth?: number;
  /**
   * @remarks
   * The cluster type.
   * 
   * This parameter is required.
   * 
   * @example
   * SSD vs HYBRID
   */
  clusterType?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. If you perform a dry run, no instance is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   */
  enableAutoRenew?: boolean;
  /**
   * @remarks
   * Specifies whether to enable instance elasticity. If you enable instance elasticity, the peak VCU usage can exceed the purchased VCU amount, but additional fees are incurred.
   */
  enableElasticVCU?: boolean;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * testvcu
   */
  instanceDescription?: string;
  /**
   * @remarks
   * The subscription duration. Unit: month.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  periodInMonth?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxh4em5jnbcd
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: CreateVCUInstanceRequestTags[];
  /**
   * @remarks
   * The instance type: the number of VCUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  VCU?: number;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      autoRenewPeriodInMonth: 'AutoRenewPeriodInMonth',
      clusterType: 'ClusterType',
      dryRun: 'DryRun',
      enableAutoRenew: 'EnableAutoRenew',
      enableElasticVCU: 'EnableElasticVCU',
      instanceDescription: 'InstanceDescription',
      periodInMonth: 'PeriodInMonth',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      VCU: 'VCU',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      autoRenewPeriodInMonth: 'number',
      clusterType: 'string',
      dryRun: 'boolean',
      enableAutoRenew: 'boolean',
      enableElasticVCU: 'boolean',
      instanceDescription: 'string',
      periodInMonth: 'number',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateVCUInstanceRequestTags },
      VCU: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

