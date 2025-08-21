// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c8f0377146d104687ac562eef9403****
   */
  clusterId?: string;
  /**
   * @remarks
   * The version of the cluster.
   * 
   * @example
   * 1.18.8
   */
  currentVersion?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * vc-a622bb**
   */
  name?: string;
  /**
   * @remarks
   * The next version of the cluster.
   * 
   * @example
   * 1.20.8
   */
  nextVersion?: string;
  /**
   * @remarks
   * The health status of the instance.
   * 
   * Valid values:
   * 
   * *   healthy
   * *   unhealthy
   * 
   * @example
   * healthy
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      currentVersion: 'CurrentVersion',
      name: 'Name',
      nextVersion: 'NextVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      currentVersion: 'string',
      name: 'string',
      nextVersion: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the information about clusters.
   */
  clusters?: DescribeClusterResponseBodyClusters[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeClusterResponseBodyClusters },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusters)) {
      $dara.Model.validateArray(this.clusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

