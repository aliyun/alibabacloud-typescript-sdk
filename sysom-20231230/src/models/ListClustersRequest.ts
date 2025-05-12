// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClustersRequest extends $dara.Model {
  /**
   * @example
   * cb7d4cc26c8f845fb8a8255ffd394820e
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
   * 1
   */
  current?: number;
  /**
   * @example
   * cb7d4cc26c8f845fb8a8255ffd394820e
   */
  id?: string;
  /**
   * @example
   * proxy-next-upstream
   */
  name?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterStatus: 'cluster_status',
      clusterType: 'cluster_type',
      current: 'current',
      id: 'id',
      name: 'name',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterStatus: 'string',
      clusterType: 'string',
      current: 'number',
      id: 'string',
      name: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

