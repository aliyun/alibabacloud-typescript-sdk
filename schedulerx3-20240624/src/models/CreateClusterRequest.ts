// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The ID of the vSwitch.
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the vSwitch.
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
   * The billing type.
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
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster specification. Valid values:
   * - scx.dev.x1
   * - scx.small.x1
   * - scx.small.x2
   * - scx.medium.x1
   * - scx.medium.x2.
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
   * The list of tags. A maximum of 20 tags are supported.
   */
  tag?: CreateClusterRequestTag[];
  /**
   * @remarks
   * The information about the vSwitches.
   */
  vSwitches?: CreateClusterRequestVSwitches[];
  /**
   * @remarks
   * The ID of the VPC.
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

