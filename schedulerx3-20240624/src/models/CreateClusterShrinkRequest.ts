// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterShrinkRequestTag extends $dara.Model {
  key?: string;
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
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qianxi-test-0812
   */
  clusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * scx.dev.x1
   */
  clusterSpec?: string;
  /**
   * @example
   * 3
   */
  duration?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob
   */
  engineType?: string;
  /**
   * @example
   * Year
   */
  pricingCycle?: string;
  tag?: CreateClusterShrinkRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchesShrink?: string;
  /**
   * @remarks
   * VPC id
   * 
   * This parameter is required.
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
      duration: 'Duration',
      engineType: 'EngineType',
      pricingCycle: 'PricingCycle',
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
      duration: 'number',
      engineType: 'string',
      pricingCycle: 'string',
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

