// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVirtualClusterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   * -be
   */
  activeClusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vcg_demo
   */
  clusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  DBInstanceId?: string;
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

