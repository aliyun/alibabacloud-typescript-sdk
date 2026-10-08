// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCVClusterResponseBodyMysqlOperator extends $dara.Model {
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

export class DescribeRCVClusterResponseBody extends $dara.Model {
  clusterId?: string;
  clusterName?: string;
  mysqlOperator?: DescribeRCVClusterResponseBodyMysqlOperator;
  region?: string;
  requestId?: string;
  supportDiskPerformanceLevel?: string[];
  VClusterStatus?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      mysqlOperator: 'MysqlOperator',
      region: 'Region',
      requestId: 'RequestId',
      supportDiskPerformanceLevel: 'SupportDiskPerformanceLevel',
      VClusterStatus: 'VClusterStatus',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      mysqlOperator: DescribeRCVClusterResponseBodyMysqlOperator,
      region: 'string',
      requestId: 'string',
      supportDiskPerformanceLevel: { 'type': 'array', 'itemType': 'string' },
      VClusterStatus: 'string',
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

