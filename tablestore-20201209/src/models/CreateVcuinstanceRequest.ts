// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVCUInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * created
   */
  key?: string;
  /**
   * @remarks
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
   * @example
   * 实例别名
   */
  aliasName?: string;
  /**
   * @example
   * 1
   */
  autoRenewPeriodInMonth?: number;
  /**
   * @remarks
   * cluster type
   * 
   * This parameter is required.
   * 
   * @example
   * SSD vs HYBRID
   */
  clusterType?: string;
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  enableAutoRenew?: boolean;
  enableElasticVCU?: boolean;
  /**
   * @example
   * 实例描述
   */
  instanceDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  periodInMonth?: number;
  /**
   * @remarks
   * resource group id
   * 
   * @example
   * rg-acfmxh4em5jnbcd
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * tag
   */
  tags?: CreateVCUInstanceRequestTags[];
  /**
   * @remarks
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

