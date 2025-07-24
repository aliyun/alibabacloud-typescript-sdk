// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplicationConfig } from "./ApplicationConfig";
import { Application } from "./Application";
import { Script } from "./Script";
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
   * The maximum number of pay-as-you-go nodes in the node group.
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
   * The scaling type. This parameter is required. Valid values:
   * 
   * *   SCALE_OUT
   * *   SCALE_IN
   * 
   * @example
   * SCALE_OUT
   */
  activityType?: string;
  /**
   * @remarks
   * The adjustment value of the auto scaling rule. This parameter is required. The parameter value must be a positive integer, which indicates the number of instances to be added or removed.
   * 
   * @example
   * 100
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * The description of load-based scaling.
   */
  metricsTrigger?: MetricsTrigger;
  /**
   * @remarks
   * The name of the auto scaling rule.
   * 
   * @example
   * scaling-out-memory
   */
  ruleName?: string;
  /**
   * @remarks
   * The description of time-based scaling.
   */
  timeTrigger?: TimeTrigger;
  /**
   * @remarks
   * The trigger mode of the auto scaling rule. This parameter is required. Valid values:
   * 
   * *   TIME_TRIGGER: time-based scaling.
   * *   METRICS_TRIGGER: load-based scaling.
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
   * The maximum and minimum number of nodes in the node group.
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
   * The name of the node group.
   * 
   * @example
   * emr-etltask
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The ID of the auto scaling policy.
   * 
   * @example
   * asp-asduwe23znl***
   */
  scalingPolicyId?: string;
  /**
   * @remarks
   * The type of the auto scaling policy.
   */
  scalingPolicyType?: string;
  /**
   * @remarks
   * The auto scaling rules.
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
   * The modified configuration items.
   */
  applicationConfigs?: ApplicationConfig[];
  /**
   * @remarks
   * The cluster applications.
   */
  applications?: Application[];
  /**
   * @remarks
   * An array of bootstrap scripts. The number of elements in the array: 1 to 10.
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
   * The name of the cluster.
   * 
   * @example
   * emrtest
   */
  clusterName?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   STARTING
   * *   START_FAILED
   * *   BOOTSTRAPPING
   * *   RUNNING
   * *   TERMINATING
   * *   TERMINATED
   * *   TERMINATED_WITH_ERRORS
   * *   TERMINATE_FAILED
   * 
   * @example
   * RUNNING
   */
  clusterState?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   DATALAKE
   * *   OLAP
   * *   DATAFLOW
   * *   DATASERVING
   * *   CUSTOM
   * *   HADOOP
   * 
   * @example
   * DATALAKE
   */
  clusterType?: string;
  /**
   * @remarks
   * Indicates whether release protection is enabled for the cluster. Valid values:
   * 
   * *   true: Release protection is enabled for the cluster.
   * *   false: Release protection is disabled for the cluster.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The deployment mode of master nodes in the cluster. Valid values:
   * 
   * *   NORMAL: regular mode.
   * *   HA: high availability mode.
   * 
   * @example
   * HA
   */
  deployMode?: string;
  /**
   * @remarks
   * The EMR service role.
   * 
   * @example
   * AliyunEMRDefaultRole
   */
  emrDefaultRole?: string;
  /**
   * @remarks
   * Indicates whether the service configurations of a Hadoop cluster that you made during cluster creation can be cloned. Valid values:
   * 
   * *   False
   * *   True
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
   * The node groups. The number of elements in the array: 1 to 100.
   */
  nodeGroups?: NodeGroup[];
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   PayAsYouGo
   * *   Subscription
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
   * The EMR version.
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
   * The auto scaling policies of each node group in the cluster.
   */
  scalingPolicies?: GetClusterCloneMetaResponseBodyClusterCloneMetaScalingPolicies[];
  /**
   * @remarks
   * The security mode of the cluster. Valid values:
   * 
   * *   NORMAL: regular mode. Kerberos is not enabled.
   * *   KERBEROS: Kerberos mode. Kerberos is enabled.
   * 
   * @example
   * NORMAL
   */
  securityMode?: string;
  /**
   * @remarks
   * The subscription configurations.
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
   * Cluster clone metadata.
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

