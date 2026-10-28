// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The primary cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   * -be
   */
  activeClusterId?: string;
  /**
   * @remarks
   * The cluster name. The name must start with a letter and can be up to 64 characters in length. It can contain letters (case-insensitive), digits, and underscores (_). It cannot contain two or more consecutive underscores (_). Cluster names must be unique within the same instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vcg_demo
   */
  clusterName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The standby cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-26a3cjv****
   * -be
   */
  standbyClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      activeClusterId: 'ActiveClusterId',
      clusterName: 'ClusterName',
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      standbyClusterId: 'StandbyClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeClusterId: 'string',
      clusterName: 'string',
      DBInstanceId: 'string',
      regionId: 'string',
      standbyClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

