// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster_on****
   */
  clusterName?: string;
  /**
   * @remarks
   * The ID of the master HSM.
   * 
   * This parameter is required.
   * 
   * @example
   * hsm_intl-sg-uz63ixak****
   */
  masterInstanceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      masterInstanceId: 'MasterInstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      masterInstanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

