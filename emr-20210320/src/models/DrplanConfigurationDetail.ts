// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplicationConfig } from "./ApplicationConfig";
import { Application } from "./Application";
import { Script } from "./Script";
import { NodeAttributes } from "./NodeAttributes";
import { NodeGroupConfig } from "./NodeGroupConfig";
import { ScalingPolicy } from "./ScalingPolicy";
import { SubscriptionConfig } from "./SubscriptionConfig";
import { Tag } from "./Tag";
import { ManagedScalingConstraints } from "./ManagedScalingConstraints";


export class DRPlanConfigurationDetailManagedScalingPolicy extends $dara.Model {
  constraints?: ManagedScalingConstraints;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: ManagedScalingConstraints,
    };
  }

  validate() {
    if(this.constraints && typeof (this.constraints as any).validate === 'function') {
      (this.constraints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DRPlanConfigurationDetail extends $dara.Model {
  applicationConfigs?: ApplicationConfig[];
  applications?: Application[];
  bootstrapScripts?: Script[];
  clusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clusterType?: string;
  deletionProtection?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  deployMode?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  logCollectStrategy?: string;
  managedScalingPolicy?: DRPlanConfigurationDetailManagedScalingPolicy;
  /**
   * @remarks
   * This parameter is required.
   */
  metaStoreType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeAttributes?: NodeAttributes;
  nodeGroups?: NodeGroupConfig[];
  /**
   * @remarks
   * This parameter is required.
   */
  paymentType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  releaseVersion?: string;
  resourceGroupId?: string;
  scalingPolicies?: ScalingPolicy[];
  /**
   * @remarks
   * This parameter is required.
   */
  securityMode?: string;
  subscriptionConfig?: SubscriptionConfig;
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      applicationConfigs: 'ApplicationConfigs',
      applications: 'Applications',
      bootstrapScripts: 'BootstrapScripts',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      deletionProtection: 'DeletionProtection',
      deployMode: 'DeployMode',
      description: 'Description',
      logCollectStrategy: 'LogCollectStrategy',
      managedScalingPolicy: 'ManagedScalingPolicy',
      metaStoreType: 'MetaStoreType',
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
      clusterName: 'string',
      clusterType: 'string',
      deletionProtection: 'boolean',
      deployMode: 'string',
      description: 'string',
      logCollectStrategy: 'string',
      managedScalingPolicy: DRPlanConfigurationDetailManagedScalingPolicy,
      metaStoreType: 'string',
      nodeAttributes: NodeAttributes,
      nodeGroups: { 'type': 'array', 'itemType': NodeGroupConfig },
      paymentType: 'string',
      regionId: 'string',
      releaseVersion: 'string',
      resourceGroupId: 'string',
      scalingPolicies: { 'type': 'array', 'itemType': ScalingPolicy },
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
    if(this.managedScalingPolicy && typeof (this.managedScalingPolicy as any).validate === 'function') {
      (this.managedScalingPolicy as any).validate();
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

