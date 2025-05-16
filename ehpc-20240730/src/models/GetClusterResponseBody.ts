// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetClusterResponseBodyClusterCustomConfiguration } from "./GetClusterResponseBodyClusterCustomConfiguration";
import { GetClusterResponseBodyManager } from "./GetClusterResponseBodyManager";
import { GetClusterResponseBodyMonitorSpec } from "./GetClusterResponseBodyMonitorSpec";
import { GetClusterResponseBodySchedulerSpec } from "./GetClusterResponseBodySchedulerSpec";


export class GetClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The E-HPC Util version.
   * 
   * @example
   * 2.0.31
   */
  clientVersion?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   Standard
   * *   Serverless
   * 
   * @example
   * Standard
   */
  clusterCategory?: string;
  /**
   * @remarks
   * The time when the cluster was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterCreateTime?: string;
  /**
   * @remarks
   * The post-processing script of the cluster.
   */
  clusterCustomConfiguration?: GetClusterResponseBodyClusterCustomConfiguration;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The deployment type of the cluster. Valid values:
   * 
   * *   Integrated: The cluster is deployed on a public cloud.
   * *   Hybrid: The cluster is deployed on a hybrid cloud.
   * *   Custom: The cluster is a custom cluster.
   * 
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @remarks
   * The time when the cluster was last modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterModifyTime?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * slurm22.05.8-cluster-20240614
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster state. Valid values:
   * 
   * *   uninit: The cluster is being installed.
   * *   creating: The cluster is being created.
   * *   initing: The cluster is being initialized.
   * *   running: The cluster is running.
   * *   exception: The cluster has run into an exception.
   * *   raleasing: The cluster is being released.
   * *   stopping: The cluster is being stopped.
   * *   stopped: The cluster is stopped.
   * *   pending: The cluster is waiting to be configured.
   * 
   * @example
   * running
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The ID of the vSwitch used by the cluster.
   * 
   * @example
   * vsw-bp1p2uugqsjppno******
   */
  clusterVSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) used by the cluster.
   * 
   * @example
   * vpc-uf6u3lk1pjy28eg*****
   */
  clusterVpcId?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  deleteProtection?: string;
  /**
   * @remarks
   * The E-HPC version.
   * 
   * @example
   * 2.0.0
   */
  ehpcVersion?: string;
  /**
   * @remarks
   * Indicates whether automatic scale-in is enabled for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @remarks
   * Indicates whether automatic scale-out is enabled for the cluster. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @remarks
   * The interval at which the cluster is automatically scaled out.
   * 
   * @example
   * 2
   */
  growInterval?: number;
  /**
   * @remarks
   * The idle duration of the compute nodes allowed by the cluster.
   * 
   * @example
   * 4
   */
  idleInterval?: number;
  /**
   * @remarks
   * The management node configurations.
   */
  manager?: GetClusterResponseBodyManager;
  /**
   * @remarks
   * The maximum total number of vCPUs that can be used by all compute nodes managed by the cluster.
   * 
   * @example
   * 10000
   */
  maxCoreCount?: string;
  /**
   * @remarks
   * The maximum number of compute nodes that the cluster can manage.
   * 
   * @example
   * 100
   */
  maxCount?: string;
  /**
   * @remarks
   * The monitoring details of the cluster.
   */
  monitorSpec?: GetClusterResponseBodyMonitorSpec;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scheduler specifications of the cluster.
   */
  schedulerSpec?: GetClusterResponseBodySchedulerSpec;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-f8z9vb2zaezpkr69a21k
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      clusterCategory: 'ClusterCategory',
      clusterCreateTime: 'ClusterCreateTime',
      clusterCustomConfiguration: 'ClusterCustomConfiguration',
      clusterId: 'ClusterId',
      clusterMode: 'ClusterMode',
      clusterModifyTime: 'ClusterModifyTime',
      clusterName: 'ClusterName',
      clusterStatus: 'ClusterStatus',
      clusterVSwitchId: 'ClusterVSwitchId',
      clusterVpcId: 'ClusterVpcId',
      deleteProtection: 'DeleteProtection',
      ehpcVersion: 'EhpcVersion',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      growInterval: 'GrowInterval',
      idleInterval: 'IdleInterval',
      manager: 'Manager',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      monitorSpec: 'MonitorSpec',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      schedulerSpec: 'SchedulerSpec',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      clusterCategory: 'string',
      clusterCreateTime: 'string',
      clusterCustomConfiguration: GetClusterResponseBodyClusterCustomConfiguration,
      clusterId: 'string',
      clusterMode: 'string',
      clusterModifyTime: 'string',
      clusterName: 'string',
      clusterStatus: 'string',
      clusterVSwitchId: 'string',
      clusterVpcId: 'string',
      deleteProtection: 'string',
      ehpcVersion: 'string',
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      growInterval: 'number',
      idleInterval: 'number',
      manager: GetClusterResponseBodyManager,
      maxCoreCount: 'string',
      maxCount: 'string',
      monitorSpec: GetClusterResponseBodyMonitorSpec,
      requestId: 'string',
      resourceGroupId: 'string',
      schedulerSpec: GetClusterResponseBodySchedulerSpec,
      securityGroupId: 'string',
    };
  }

  validate() {
    if(this.clusterCustomConfiguration && typeof (this.clusterCustomConfiguration as any).validate === 'function') {
      (this.clusterCustomConfiguration as any).validate();
    }
    if(this.manager && typeof (this.manager as any).validate === 'function') {
      (this.manager as any).validate();
    }
    if(this.monitorSpec && typeof (this.monitorSpec as any).validate === 'function') {
      (this.monitorSpec as any).validate();
    }
    if(this.schedulerSpec && typeof (this.schedulerSpec as any).validate === 'function') {
      (this.schedulerSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

