// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRCVClustersResponseBodyVClustersMysqlOperator extends $dara.Model {
  dashboardPublicEndpoint?: string;
  dashboardUsername?: string;
  dashboardVpcEndpoint?: string;
  deployTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardPublicEndpoint: 'DashboardPublicEndpoint',
      dashboardUsername: 'DashboardUsername',
      dashboardVpcEndpoint: 'DashboardVpcEndpoint',
      deployTime: 'DeployTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardPublicEndpoint: 'string',
      dashboardUsername: 'string',
      dashboardVpcEndpoint: 'string',
      deployTime: 'string',
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

export class ListRCVClustersResponseBodyVClusters extends $dara.Model {
  clusterId?: string;
  clusterName?: string;
  instanceCount?: number;
  mysqlOperator?: ListRCVClustersResponseBodyVClustersMysqlOperator;
  regionId?: string;
  status?: string;
  supportDiskPerformanceLevel?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      instanceCount: 'InstanceCount',
      mysqlOperator: 'MysqlOperator',
      regionId: 'RegionId',
      status: 'Status',
      supportDiskPerformanceLevel: 'SupportDiskPerformanceLevel',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      instanceCount: 'number',
      mysqlOperator: ListRCVClustersResponseBodyVClustersMysqlOperator,
      regionId: 'string',
      status: 'string',
      supportDiskPerformanceLevel: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(this.mysqlOperator && typeof (this.mysqlOperator as any).validate === 'function') {
      (this.mysqlOperator as any).validate();
    }
    if(Array.isArray(this.supportDiskPerformanceLevel)) {
      $dara.Model.validateArray(this.supportDiskPerformanceLevel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRCVClustersResponseBody extends $dara.Model {
  requestId?: string;
  VClusters?: ListRCVClustersResponseBodyVClusters[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      VClusters: 'VClusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      VClusters: { 'type': 'array', 'itemType': ListRCVClustersResponseBodyVClusters },
    };
  }

  validate() {
    if(Array.isArray(this.VClusters)) {
      $dara.Model.validateArray(this.VClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

