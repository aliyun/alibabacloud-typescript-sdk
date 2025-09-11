// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuickDeployClusterRequest extends $dara.Model {
  certManaged?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cluster_on****
   */
  clusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-7xvkh90cw39p0****
   */
  vpcId?: string;
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      certManaged: 'CertManaged',
      clusterName: 'ClusterName',
      instanceList: 'InstanceList',
      regionId: 'RegionId',
      vSwitchIdList: 'VSwitchIdList',
      vpcId: 'VpcId',
      whiteList: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certManaged: 'boolean',
      clusterName: 'string',
      instanceList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      vSwitchIdList: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      whiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceList)) {
      $dara.Model.validateArray(this.instanceList);
    }
    if(Array.isArray(this.vSwitchIdList)) {
      $dara.Model.validateArray(this.vSwitchIdList);
    }
    if(Array.isArray(this.whiteList)) {
      $dara.Model.validateArray(this.whiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

