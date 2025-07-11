// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequestTag extends $dara.Model {
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

export class CreateClusterRequestVSwitches extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-2ze745n3r2sfqtahhubpl
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
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
  tag?: CreateClusterRequestTag[];
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitches?: CreateClusterRequestVSwitches[];
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
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      clusterSpec: 'string',
      engineType: 'string',
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

