// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceMeshClustersResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * The domain name of the cluster.
   * 
   * @example
   * c.com
   */
  clusterDomain?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c80f45444b3da447da60a911390c2****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * Ask
   */
  clusterType?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2020-05-12T15:38:16+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The error message about the cluster.
   * 
   * @example
   * fail
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates that the cluster is available or the reason why the cluster cannot be added to the ASM instance. Valid values:
   * 
   * *   `0`: The cluster can be added to the ASM instance.
   * *   `1`: The cluster cannot be added to the ASM instance because you do not have administrator permissions on the cluster.
   * *   `2`: The cluster cannot be added to the ASM instance because the cluster and the ASM instance reside in different VPCs between which no private connections are built.
   * *   `3`: The CIDR block of the cluster conflicts with that of the ASM instance.
   * *   `4`: The cluster has a namespace that is named istio-system.
   * 
   * @example
   * 0
   */
  forbiddenFlag?: number;
  /**
   * @remarks
   * The reason why the cluster on the data plane cannot be added to the ASM instance. The value is a JSON string in the following format:
   * 
   *     [
   *       {
   *         "cluster": "cdd55bd6e054b4c6ca18ec02614******",
   *         "object": "Pod",
   *         "cidr": "172.16.0.0/24"
   *       },
   *       {
   *         "cluster": "cfa37fdf7cb1641e1976f8293ac******",
   *         "object": "Pod",
   *         "cidr": "172.16.0.0/24"
   *       }
   *     ]
   * 
   * In the preceding example, the CIDR block `172.16.0.0/24` of the pod in the `cdd55bd6e054b4c6ca18ec02614******` cluster conflicts with the CIDR block `172.16.0.0/24` of the pod in the `cfa37fdf7cb1641e1976f8293ac******` cluster.
   * 
   * Valid values of the `object` parameter:
   * 
   * *   `Pod`
   * *   `Service`
   * *   `VSwitch`
   * *   `VPC`
   * *   `VPC CIDR`
   * 
   * @example
   * [{"cluster":"cdd55bd6e054b4c6ca18ec02614******", "object":"Pod", "cidr":"172.16.0.0/24"},{"cluster":"cfa37fdf7cb1641e1976f8293ac******", "object":"Pod", "cidr":"172.16.0.0/24"}]
   */
  forbiddenInfo?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * ask1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region in which the cluster resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-bp197668l6iupljy****
   */
  sgId?: string;
  /**
   * @remarks
   * The state of the cluster. Valid values:
   * 
   * *   `running`: The cluster is running.
   * *   `starting`: The cluster is starting.
   * *   `stopping`: The cluster is being stopped.
   * *   `stopped`: The cluster is stopped.
   * *   `failed`: The cluster fails to be run.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The time when the cluster was last modified.
   * 
   * @example
   * 2020-05-12T15:38:16+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The version number of the cluster.
   * 
   * @example
   * v1.16.6-aliyun.1
   */
  version?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-8vbrwmt95b4zf6wf7****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterDomain: 'ClusterDomain',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      creationTime: 'CreationTime',
      errorMessage: 'ErrorMessage',
      forbiddenFlag: 'ForbiddenFlag',
      forbiddenInfo: 'ForbiddenInfo',
      name: 'Name',
      regionId: 'RegionId',
      serviceMeshId: 'ServiceMeshId',
      sgId: 'SgId',
      state: 'State',
      updateTime: 'UpdateTime',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterDomain: 'string',
      clusterId: 'string',
      clusterType: 'string',
      creationTime: 'string',
      errorMessage: 'string',
      forbiddenFlag: 'number',
      forbiddenInfo: 'string',
      name: 'string',
      regionId: 'string',
      serviceMeshId: 'string',
      sgId: 'string',
      state: 'string',
      updateTime: 'string',
      version: 'string',
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

export class DescribeServiceMeshClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried clusters.
   */
  clusters?: DescribeServiceMeshClustersResponseBodyClusters[];
  /**
   * @remarks
   * The total number of ACK clusters in the current Region.
   * 
   * @example
   * 5
   */
  numberOfClusters?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31d3a0f0-07ed-4f6e-9004-1804498c****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      numberOfClusters: 'NumberOfClusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeServiceMeshClustersResponseBodyClusters },
      numberOfClusters: 'number',
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

