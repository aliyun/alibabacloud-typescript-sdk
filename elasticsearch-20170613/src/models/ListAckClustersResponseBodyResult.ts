// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAckClustersResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of cluster.
   * 
   * @example
   * c5ea2c2d9a3cf499481292f60425d****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the cluster. The value is fixed as ManagedKubernetes.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the VPC to which the cluster belongs.
   * 
   * @example
   * vpc-bp12nu14urf0upaf4****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      clusterType: 'clusterType',
      name: 'name',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      name: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

