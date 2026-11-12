// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * environment
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
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

export class CreateClusterRequestVSwitches extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2ze745n3r2sfqtahhubpl
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the vSwitch.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * qianxi-test-0812
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster specification. Valid values:
   * - scx.dev.x1
   * - scx.small.x1
   * - scx.small.x2
   * - scx.medium.x1
   * - scx.medium.x2
   * 
   * @example
   * scx.dev.x1
   */
  clusterSpec?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * 1
   */
  clusterType?: number;
  /**
   * @remarks
   * The duration.
   * 
   * @example
   * 3
   */
  duration?: number;
  /**
   * @remarks
   * The engine type. Valid values: xxljob.
   * 
   * @example
   * xxljob
   */
  engineType?: string;
  /**
   * @remarks
   * The pricing cycle.
   * 
   * @example
   * Year
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * schedulerx
   */
  source?: string;
  /**
   * @remarks
   * The list of tags. You can add up to 20 tags.
   */
  tag?: CreateClusterRequestTag[];
  /**
   * @remarks
   * The vSwitch information.
   */
  vSwitches?: CreateClusterRequestVSwitches[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-aa1a18236n90rqhuhhnhh
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      clusterName: 'ClusterName',
      clusterSpec: 'ClusterSpec',
      clusterType: 'ClusterType',
      duration: 'Duration',
      engineType: 'EngineType',
      pricingCycle: 'PricingCycle',
      source: 'Source',
      tag: 'Tag',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      clusterName: 'string',
      clusterSpec: 'string',
      clusterType: 'number',
      duration: 'number',
      engineType: 'string',
      pricingCycle: 'string',
      source: 'string',
      tag: { 'type': 'array', 'itemType': CreateClusterRequestTag },
      vSwitches: { 'type': 'array', 'itemType': CreateClusterRequestVSwitches },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

