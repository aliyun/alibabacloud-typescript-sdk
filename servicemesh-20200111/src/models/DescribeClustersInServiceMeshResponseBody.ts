// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClustersInServiceMeshResponseBodyClustersAccessLogDashboards extends $dara.Model {
  /**
   * @remarks
   * The name of the dashboard for access logs.
   * 
   * @example
   * mesh-access-log_details_cn
   */
  title?: string;
  /**
   * @remarks
   * The URL of the dashboard for access logs.
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersInServiceMeshResponseBodyClustersGuestClusterConfigSMC extends $dara.Model {
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersInServiceMeshResponseBodyClustersGuestClusterConfig extends $dara.Model {
  SMC?: DescribeClustersInServiceMeshResponseBodyClustersGuestClusterConfigSMC;
  static names(): { [key: string]: string } {
    return {
      SMC: 'SMC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SMC: DescribeClustersInServiceMeshResponseBodyClustersGuestClusterConfigSMC,
    };
  }

  validate() {
    if(this.SMC && typeof (this.SMC as any).validate === 'function') {
      (this.SMC as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersInServiceMeshResponseBodyClusters extends $dara.Model {
  /**
   * @remarks
   * The configurations of access log collection.
   */
  accessLogDashboards?: DescribeClustersInServiceMeshResponseBodyClustersAccessLogDashboards[];
  /**
   * @remarks
   * The domain name of the cluster.
   * 
   * @example
   * example.com
   */
  clusterDomain?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c80f45444b3da447da60a911390c2****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the cluster.
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
   * The error message.
   * 
   * @example
   * ,
   */
  errorMessage?: string;
  guestClusterConfig?: DescribeClustersInServiceMeshResponseBodyClustersGuestClusterConfig;
  /**
   * @remarks
   * Indicates whether the Logtail component is installed in the cluster. Valid values:
   * 
   * *   `logtail_installed`: The Logtail component is installed.
   * 
   * \\-`logtail_uninstalled`: The Logtail component is not installed.
   * 
   * *   `logtail_state_get_error`: The Logtail component failed to be installed.
   * 
   * @example
   * logtail_installed
   */
  logtailInstalledState?: string;
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
   * The ID of the security group.
   * 
   * @example
   * sg-bp197668l6iupljy****
   */
  sgId?: string;
  /**
   * @remarks
   * The status of the cluster.
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
   * vpc-2zew0rajjkmxy2369****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessLogDashboards: 'AccessLogDashboards',
      clusterDomain: 'ClusterDomain',
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      creationTime: 'CreationTime',
      errorMessage: 'ErrorMessage',
      guestClusterConfig: 'GuestClusterConfig',
      logtailInstalledState: 'LogtailInstalledState',
      name: 'Name',
      regionId: 'RegionId',
      sgId: 'SgId',
      state: 'State',
      updateTime: 'UpdateTime',
      version: 'Version',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessLogDashboards: { 'type': 'array', 'itemType': DescribeClustersInServiceMeshResponseBodyClustersAccessLogDashboards },
      clusterDomain: 'string',
      clusterId: 'string',
      clusterType: 'string',
      creationTime: 'string',
      errorMessage: 'string',
      guestClusterConfig: DescribeClustersInServiceMeshResponseBodyClustersGuestClusterConfig,
      logtailInstalledState: 'string',
      name: 'string',
      regionId: 'string',
      sgId: 'string',
      state: 'string',
      updateTime: 'string',
      version: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessLogDashboards)) {
      $dara.Model.validateArray(this.accessLogDashboards);
    }
    if(this.guestClusterConfig && typeof (this.guestClusterConfig as any).validate === 'function') {
      (this.guestClusterConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClustersInServiceMeshResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the clusters in the ASM instance.
   */
  clusters?: DescribeClustersInServiceMeshResponseBodyClusters[];
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': DescribeClustersInServiceMeshResponseBodyClusters },
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

