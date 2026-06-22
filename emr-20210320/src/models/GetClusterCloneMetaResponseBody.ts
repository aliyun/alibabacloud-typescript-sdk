// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplicationConfig } from "./ApplicationConfig";
import { Application } from "./Application";
import { Script } from "./Script";
import { CollationTimeZone } from "./CollationTimeZone";
import { NodeAttributes } from "./NodeAttributes";
import { NodeGroup } from "./NodeGroup";
import { SubscriptionConfig } from "./SubscriptionConfig";
import { Tag } from "./Tag";
import { MetricsTrigger } from "./MetricsTrigger";
import { TimeTrigger } from "./TimeTrigger";


export class GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesConstraints extends $dara.Model {
  /**
   * @remarks
   * The maximum number of nodes in the node group. Default value: 2000.
   * 
   * @example
   * 200
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The maximum number of pay-as-you-go instances.
   * 
   * @example
   * 200
   */
  maxOnDemandCapacity?: number;
  /**
   * @remarks
   * The minimum number of nodes in the node group. Default value: 0.
   * 
   * @example
   * 50
   */
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacity: 'MaxCapacity',
      maxOnDemandCapacity: 'MaxOnDemandCapacity',
      minCapacity: 'MinCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacity: 'number',
      maxOnDemandCapacity: 'number',
      minCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesScalingRules extends $dara.Model {
  /**
   * @remarks
   * The type of the scaling activity. This parameter is required. Valid values:
   * 
   * - SCALE_OUT: scale-out.
   * 
   * - SCALE_IN: scale-in.
   * 
   * @example
   * SCALE_OUT
   */
  activityType?: string;
  /**
   * @remarks
   * The adjustment value. This parameter is required. It must be a positive integer. It specifies the number of instances to add or remove.
   * 
   * @example
   * 100
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * The description of the metric-based scaling rule.
   */
  metricsTrigger?: MetricsTrigger;
  /**
   * @remarks
   * The name of the scaling rule.
   * 
   * @example
   * scaling-out-memory
   */
  ruleName?: string;
  /**
   * @remarks
   * The description of the time-based scaling rule.
   */
  timeTrigger?: TimeTrigger;
  /**
   * @remarks
   * The type of the scaling rule. This parameter is required. Valid values:
   * 
   * - TIME_TRIGGER: time-based scaling.
   * 
   * - METRICS_TRIGGER: metric-based scaling.
   * 
   * @example
   * TIME_TRIGGER
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      activityType: 'ActivityType',
      adjustmentValue: 'AdjustmentValue',
      metricsTrigger: 'MetricsTrigger',
      ruleName: 'RuleName',
      timeTrigger: 'TimeTrigger',
      triggerType: 'TriggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityType: 'string',
      adjustmentValue: 'number',
      metricsTrigger: MetricsTrigger,
      ruleName: 'string',
      timeTrigger: TimeTrigger,
      triggerType: 'string',
    };
  }

  validate() {
    if(this.metricsTrigger && typeof (this.metricsTrigger as any).validate === 'function') {
      (this.metricsTrigger as any).validate();
    }
    if(this.timeTrigger && typeof (this.timeTrigger as any).validate === 'function') {
      (this.timeTrigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPolicies extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * The constraints on the maximum and minimum number of nodes in the node group.
   */
  constraints?: GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesConstraints;
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * ng-869471354ecd****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The node group name.
   * 
   * @example
   * emr-etltask
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The scaling policy ID.
   * 
   * @example
   * asp-asduwe23znl***
   */
  scalingPolicyId?: string;
  /**
   * @remarks
   * The type of the elastic policy.
   */
  scalingPolicyType?: string;
  /**
   * @remarks
   * The list of scaling rules.
   */
  scalingRules?: GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesScalingRules[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      constraints: 'Constraints',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      scalingPolicyId: 'ScalingPolicyId',
      scalingPolicyType: 'ScalingPolicyType',
      scalingRules: 'ScalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      constraints: GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesConstraints,
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      scalingPolicyId: 'string',
      scalingPolicyType: 'string',
      scalingRules: { 'type': 'array', 'itemType': GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPoliciesScalingRules },
    };
  }

  validate() {
    if(this.constraints && typeof (this.constraints as any).validate === 'function') {
      (this.constraints as any).validate();
    }
    if(Array.isArray(this.scalingRules)) {
      $dara.Model.validateArray(this.scalingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterCloneMetaResponseBodyClusterCloneMeta extends $dara.Model {
  /**
   * @remarks
   * The modified application configuration items.
   */
  applicationConfigs?: ApplicationConfig[];
  /**
   * @remarks
   * The cluster applications.
   */
  applications?: Application[];
  /**
   * @remarks
   * An array of bootstrap scripts. The number of array elements N can be from 1 to 10.
   */
  bootstrapScripts?: Script[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c-b933c5aac7f7****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * emrtest
   */
  clusterName?: string;
  /**
   * @remarks
   * The state of the cluster. Valid values:
   * 
   * - STARTING: The cluster is starting.
   * 
   * - START_FAILED: The cluster failed to start.
   * 
   * - BOOTSTRAPPING: The cluster is performing bootstrap actions.
   * 
   * - RUNNING: The cluster is running.
   * 
   * - TERMINATING: The cluster is being terminated.
   * 
   * - TERMINATED: The cluster is terminated.
   * 
   * - TERMINATED_WITH_ERRORS: The cluster is terminated due to an exception.
   * 
   * - TERMINATE_FAILED: The cluster failed to be terminated.
   * 
   * @example
   * RUNNING
   */
  clusterState?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * - DATALAKE: data lake.
   * 
   * - OLAP: data analytics.
   * 
   * - DATAFLOW: real-time data stream.
   * 
   * - DATASERVING: data service.
   * 
   * - CUSTOM: custom cluster.
   * 
   * - HADOOP: Hadoop.
   * 
   * @example
   * DATALAKE
   */
  clusterType?: string;
  collationTimeZone?: CollationTimeZone;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled for the cluster. Valid values:
   * 
   * - true: Deletion protection is enabled.
   * 
   * - false: Deletion protection is disabled.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The deployment mode of applications in the cluster. Valid values:
   * 
   * - NORMAL: standard deployment.
   * 
   * - HA: high-availability deployment.
   * 
   * @example
   * HA
   */
  deployMode?: string;
  /**
   * @remarks
   * The EMR server role.
   * 
   * @example
   * AliyunEMRDefaultRole
   */
  emrDefaultRole?: string;
  /**
   * @remarks
   * Indicates whether the application configurations can be passed in when you clone a HADOOP cluster. Valid values:
   * 
   * - False: Not supported.
   * 
   * - True: Supported.
   * 
   * @example
   * True
   */
  existCloneConfig?: boolean;
  /**
   * @remarks
   * The node attributes.
   */
  nodeAttributes?: NodeAttributes;
  /**
   * @remarks
   * An array of node group configurations. The number of array elements N can be from 1 to 100.
   */
  nodeGroups?: NodeGroup[];
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - PayAsYouGo: pay-as-you-go.
   * 
   * - Subscription: subscription.
   * 
   * @example
   * PayAsYouGo
   */
  paymentType?: string;
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
   * The EMR release.
   * 
   * @example
   * EMR-5.6.0
   */
  releaseVersion?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzabjyop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The Auto Scaling policies for each node group in the cluster.
   */
  scalingPolicies?: GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPolicies[];
  /**
   * @remarks
   * The Kerberos security mode of the cluster. Valid values:
   * 
   * - NORMAL: The Kerberos mode is disabled.
   * 
   * - KERBEROS: The Kerberos mode is enabled.
   * 
   * @example
   * NORMAL
   */
  securityMode?: string;
  /**
   * @remarks
   * The subscription configuration.
   */
  subscriptionConfig?: SubscriptionConfig;
  /**
   * @remarks
   * The list of cluster tags.
   */
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'ApplicationConfigs',
      applications: 'Applications',
      bootstrapScripts: 'BootstrapScripts',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterState: 'ClusterState',
      clusterType: 'ClusterType',
      collationTimeZone: 'CollationTimeZone',
      deletionProtection: 'DeletionProtection',
      deployMode: 'DeployMode',
      emrDefaultRole: 'EmrDefaultRole',
      existCloneConfig: 'ExistCloneConfig',
      nodeAttributes: 'NodeAttributes',
      nodeGroups: 'NodeGroups',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      releaseVersion: 'ReleaseVersion',
      resourceGroupId: 'ResourceGroupId',
      scalingPolicies: 'ScalingPolicies',
      securityMode: 'SecurityMode',
      subscriptionConfig: 'SubscriptionConfig',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationConfigs: { 'type': 'array', 'itemType': ApplicationConfig },
      applications: { 'type': 'array', 'itemType': Application },
      bootstrapScripts: { 'type': 'array', 'itemType': Script },
      clusterId: 'string',
      clusterName: 'string',
      clusterState: 'string',
      clusterType: 'string',
      collationTimeZone: CollationTimeZone,
      deletionProtection: 'boolean',
      deployMode: 'string',
      emrDefaultRole: 'string',
      existCloneConfig: 'boolean',
      nodeAttributes: NodeAttributes,
      nodeGroups: { 'type': 'array', 'itemType': NodeGroup },
      paymentType: 'string',
      regionId: 'string',
      releaseVersion: 'string',
      resourceGroupId: 'string',
      scalingPolicies: { 'type': 'array', 'itemType': GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPolicies },
      securityMode: 'string',
      subscriptionConfig: SubscriptionConfig,
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  validate() {
    if(Array.isArray(this.applicationConfigs)) {
      $dara.Model.validateArray(this.applicationConfigs);
    }
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    if(Array.isArray(this.bootstrapScripts)) {
      $dara.Model.validateArray(this.bootstrapScripts);
    }
    if(this.collationTimeZone && typeof (this.collationTimeZone as any).validate === 'function') {
      (this.collationTimeZone as any).validate();
    }
    if(this.nodeAttributes && typeof (this.nodeAttributes as any).validate === 'function') {
      (this.nodeAttributes as any).validate();
    }
    if(Array.isArray(this.nodeGroups)) {
      $dara.Model.validateArray(this.nodeGroups);
    }
    if(Array.isArray(this.scalingPolicies)) {
      $dara.Model.validateArray(this.scalingPolicies);
    }
    if(this.subscriptionConfig && typeof (this.subscriptionConfig as any).validate === 'function') {
      (this.subscriptionConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterCloneMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The clone metadata of the cluster.
   */
  clusterCloneMeta?: GetClusterCloneMetaResponseBodyClusterCloneMeta;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterCloneMeta: 'ClusterCloneMeta',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCloneMeta: GetClusterCloneMetaResponseBodyClusterCloneMeta,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterCloneMeta && typeof (this.clusterCloneMeta as any).validate === 'function') {
      (this.clusterCloneMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

