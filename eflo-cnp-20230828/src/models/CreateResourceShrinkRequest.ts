// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster Description
   * 
   * @example
   * ppu集群
   */
  clusterDesc?: string;
  /**
   * @remarks
   * Cluster ID
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-sh-fj71c0ycfw
   */
  clusterId?: string;
  /**
   * @remarks
   * Cluster Name
   * 
   * This parameter is required.
   * 
   * @example
   * tre-1-ppu
   */
  clusterName?: string;
  /**
   * @remarks
   * Machine Types
   * 
   * This parameter is required.
   */
  machineTypesShrink?: string;
  /**
   * @remarks
   * User Access Parameters
   * 
   * This parameter is required.
   */
  userAccessParamShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterDesc: 'ClusterDesc',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      machineTypesShrink: 'MachineTypes',
      userAccessParamShrink: 'UserAccessParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDesc: 'string',
      clusterId: 'string',
      clusterName: 'string',
      machineTypesShrink: 'string',
      userAccessParamShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

