// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersResponseBodyData extends $dara.Model {
  /**
   * @example
   * c666d4774f0e2440b979bf917bf100e40
   */
  clusterId?: string;
  /**
   * @example
   * Running
   */
  clusterStatus?: string;
  /**
   * @example
   * ACK
   */
  clusterType?: string;
  /**
   * @example
   * 2024-12-25T15:08:19
   */
  createdAt?: string;
  /**
   * @example
   * 5389fba5-92a1-4ff4-9b26-773b97828144
   */
  id?: string;
  /**
   * @example
   * auto-name-sbvCT
   */
  name?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 2024-12-25T15:08:19
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterStatus: 'cluster_status',
      clusterType: 'cluster_type',
      createdAt: 'created_at',
      id: 'id',
      name: 'name',
      region: 'region',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterStatus: 'string',
      clusterType: 'string',
      createdAt: 'string',
      id: 'string',
      name: 'string',
      region: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

