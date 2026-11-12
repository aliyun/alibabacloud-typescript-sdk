// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterShrinkRequestTag extends $dara.Model {
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

export class CreateClusterShrinkRequest extends $dara.Model {
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
  tag?: CreateClusterShrinkRequestTag[];
  /**
   * @remarks
   * The vSwitch information.
   */
  vSwitchesShrink?: string;
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
      vSwitchesShrink: 'VSwitches',
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
      tag: { 'type': 'array', 'itemType': CreateClusterShrinkRequestTag },
      vSwitchesShrink: 'string',
      vpcId: 'string',
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

