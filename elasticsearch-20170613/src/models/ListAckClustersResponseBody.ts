// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAckClustersResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c5ea2c2d9a3cf499481292f60425d****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster type. Only ManagedKubernetes is supported, which indicates a managed Kubernetes cluster.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the VPC where the cluster resides.
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

export class ListAckClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F93EAA49-284F-4FCE-9E67-FA23FB4BB512
   */
  requestId?: string;
  /**
   * @remarks
   * The list of ACK clusters returned by the current request.
   */
  result?: ListAckClustersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAckClustersResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

