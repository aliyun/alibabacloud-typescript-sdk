// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnvironmentResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * user1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * p_dev
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvironmentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource associated with the environment, such as the ACK cluster ID or VPC ID.
   * 
   * @example
   * vpc-xxxxx
   */
  bindResourceId?: string;
  /**
   * @remarks
   * The profile of the resource.
   * 
   * @example
   * Default
   */
  bindResourceProfile?: string;
  /**
   * @remarks
   * The status of the resource.
   * 
   * @example
   * running
   */
  bindResourceStatus?: string;
  /**
   * @remarks
   * The retention period of the resource. Unit: days.
   * 
   * @example
   * 15
   */
  bindResourceStoreDuration?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ECS
   */
  bindResourceType?: string;
  /**
   * @remarks
   * The VPC CIDR block.
   * 
   * @example
   * 192.168.0.0/16
   */
  bindVpcCidr?: string;
  /**
   * @remarks
   * The status of the database that is bound to the Prometheus instance.
   * 
   * Valid values:
   * 
   * *   UNINSTALLING
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   INSTALLING
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   UNINSTALLED
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   RUNNING
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   MODIFYING
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * RUNNING
   */
  dbInstanceStatus?: string;
  /**
   * @remarks
   * The ID of the environment instance.
   * 
   * @example
   * env-xxxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The environment name.
   * 
   * @example
   * env1
   */
  environmentName?: string;
  /**
   * @remarks
   * Environment subtypes:
   * - CS: Currently supports ACK.
   * - ECS: ECS is currently supported.
   * - Cloud: Currently supports Cloud.
   * 
   * @example
   * ACK
   */
  environmentSubType?: string;
  /**
   * @remarks
   * The type of the environment. Valid values:
   * 
   * *   CS: Container Service for Kubernetes (ACK)
   * *   ECS: Elastic Compute Service
   * *   Cloud: cloud service
   * 
   * @example
   * CS
   */
  environmentType?: string;
  /**
   * @remarks
   * The payable resource plan. Valid values:
   * 
   * *   If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro.
   * *   Otherwise, leave the parameter empty.
   * 
   * @example
   * CS_Basic
   */
  feePackage?: string;
  /**
   * @remarks
   * The name of the Grafana data source.
   * 
   * @example
   * datasource1
   */
  grafaDataSourceName?: string;
  /**
   * @remarks
   * The unique ID of the Grafana data source.
   * 
   * @example
   * zuvw
   */
  grafanaDatasourceUid?: string;
  /**
   * @remarks
   * The name of the Grafana directory.
   * 
   * @example
   * folder1
   */
  grafanaFolderTitle?: string;
  /**
   * @remarks
   * The unique ID of the Grafana directory.
   * 
   * @example
   * xyz
   */
  grafanaFolderUid?: string;
  /**
   * @remarks
   * The URL of the Grafana directory.
   * 
   * @example
   * https://g.console.aliyun.com/dashboards/f/xxx/yyyy
   */
  grafanaFolderUrl?: string;
  /**
   * @remarks
   * The ID of the Grafana workspace.
   * 
   * @example
   * grafana-cn-27a3m8eem0a
   */
  grafanaWorkspaceId?: string;
  /**
   * @remarks
   * managed type:
   * - none: unmanaged. The default value for ACK clusters.
   * - agent: managed agent (including KSM). The default values for ASK, ACS, and AckOne clusters.
   * - agent-exporter: managed agent and exporters. The default value for the cloud service type.
   * 
   * @example
   * none
   */
  managedType?: string;
  /**
   * @remarks
   * The ID of the Prometheus instance.
   * 
   * @example
   * xxxxyyyyyzzzzz
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * The name of the Prometheus instance.
   * 
   * @example
   * name1
   */
  prometheusInstanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2vezare****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group associated with the environment.
   * 
   * @example
   * sg-8vbdgmf4nraiqa9bx0jo
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeEnvironmentResponseBodyDataTags[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 13002222xxxx
   */
  userId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-8vb02uk57qbcktqcvqqqj
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch associated with the environment.
   * 
   * @example
   * vsw-2ze7yr3f1x8snryaioo7u
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      bindResourceId: 'BindResourceId',
      bindResourceProfile: 'BindResourceProfile',
      bindResourceStatus: 'BindResourceStatus',
      bindResourceStoreDuration: 'BindResourceStoreDuration',
      bindResourceType: 'BindResourceType',
      bindVpcCidr: 'BindVpcCidr',
      dbInstanceStatus: 'DbInstanceStatus',
      environmentId: 'EnvironmentId',
      environmentName: 'EnvironmentName',
      environmentSubType: 'EnvironmentSubType',
      environmentType: 'EnvironmentType',
      feePackage: 'FeePackage',
      grafaDataSourceName: 'GrafaDataSourceName',
      grafanaDatasourceUid: 'GrafanaDatasourceUid',
      grafanaFolderTitle: 'GrafanaFolderTitle',
      grafanaFolderUid: 'GrafanaFolderUid',
      grafanaFolderUrl: 'GrafanaFolderUrl',
      grafanaWorkspaceId: 'GrafanaWorkspaceId',
      managedType: 'ManagedType',
      prometheusInstanceId: 'PrometheusInstanceId',
      prometheusInstanceName: 'PrometheusInstanceName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      tags: 'Tags',
      userId: 'UserId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindResourceId: 'string',
      bindResourceProfile: 'string',
      bindResourceStatus: 'string',
      bindResourceStoreDuration: 'string',
      bindResourceType: 'string',
      bindVpcCidr: 'string',
      dbInstanceStatus: 'string',
      environmentId: 'string',
      environmentName: 'string',
      environmentSubType: 'string',
      environmentType: 'string',
      feePackage: 'string',
      grafaDataSourceName: 'string',
      grafanaDatasourceUid: 'string',
      grafanaFolderTitle: 'string',
      grafanaFolderUid: 'string',
      grafanaFolderUrl: 'string',
      grafanaWorkspaceId: 'string',
      managedType: 'string',
      prometheusInstanceId: 'string',
      prometheusInstanceName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeEnvironmentResponseBodyDataTags },
      userId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvironmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. The status code 200 indicates that the request was successful. Other status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: DescribeEnvironmentResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C21AB7CF-B7AF-410F-BD61-82D1567F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeEnvironmentResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

