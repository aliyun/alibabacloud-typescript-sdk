// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuickDeployClusterShrinkRequest extends $dara.Model {
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
  instanceListShrink?: string;
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
  vSwitchIdListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-7xvkh90cw39p0****
   */
  vpcId?: string;
  whiteListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      certManaged: 'CertManaged',
      clusterName: 'ClusterName',
      instanceListShrink: 'InstanceList',
      regionId: 'RegionId',
      vSwitchIdListShrink: 'VSwitchIdList',
      vpcId: 'VpcId',
      whiteListShrink: 'WhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certManaged: 'boolean',
      clusterName: 'string',
      instanceListShrink: 'string',
      regionId: 'string',
      vSwitchIdListShrink: 'string',
      vpcId: 'string',
      whiteListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

