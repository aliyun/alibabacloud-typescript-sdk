// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateClusterShrinkRequestTag } from "./CreateClusterShrinkRequestTag";


export class CreateClusterShrinkRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob
   */
  engineType?: string;
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
      clusterName: 'ClusterName',
      clusterSpec: 'ClusterSpec',
      engineType: 'EngineType',
      tag: 'Tag',
      vSwitchesShrink: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      clusterSpec: 'string',
      engineType: 'string',
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

