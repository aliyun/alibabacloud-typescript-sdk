// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSyncAvailableDBClusterListRequestSourceDBCluster extends $dara.Model {
  /**
   * @remarks
   * The ID of the source instance or cluster. Separate multiple IDs with commas (,).
   * 
   * @example
   * rm-bp1l3yh04y7us147n
   */
  clusterIds?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The database type of the source instance or cluster.
   * 
   * Valid values:
   * 
   * *   rds: ApsaraDB RDS.
   * *   sls: Simple Log Service.
   * *   polardb: PolarDB.
   * 
   * @example
   * rds
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      regionId: 'RegionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: 'string',
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

