// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerServiceK8sClustersResponseBodyK8sClusters extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * cdbbe7aa56cbf4b8f830f83718d26****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * cluster-test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerServiceK8sClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the clusters.
   */
  k8sClusters?: DescribeContainerServiceK8sClustersResponseBodyK8sClusters[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20456DD5-5CBF-5015-9173-12CA4246B***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      k8sClusters: 'K8sClusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusters: { 'type': 'array', 'itemType': DescribeContainerServiceK8sClustersResponseBodyK8sClusters },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.k8sClusters)) {
      $dara.Model.validateArray(this.k8sClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

