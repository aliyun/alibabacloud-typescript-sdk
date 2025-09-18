// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplicationConfig } from "./ApplicationConfig";
import { Application } from "./Application";
import { Script } from "./Script";
import { NodeAttributes } from "./NodeAttributes";
import { NodeGroupConfig } from "./NodeGroupConfig";
import { SubscriptionConfig } from "./SubscriptionConfig";
import { ManagedScalingConstraints } from "./ManagedScalingConstraints";


export class DRPlanConfigurationManagedScalingPolicy extends $dara.Model {
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

export class DRPlanConfigurationTags extends $dara.Model {
  /**
   * @remarks
   * 标签键。必填参数，不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含http://或https://。
   * 
   * This parameter is required.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * 标签值。非必填，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含http://或者https://。
   * 
   * @example
   * IT
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

export class DRPlanConfiguration extends $dara.Model {
  applicationConfigs?: ApplicationConfig[];
  /**
   * @remarks
   * This parameter is required.
   */
  applications?: Application[];
  bootstrapScripts?: Script[];
  /**
   * @remarks
   * This parameter is required.
   */
  clusterName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clusterType?: string;
  deletionProtection?: boolean;
  deployMode?: string;
  description?: string;
  logCollectStrategy?: string;
  managedScalingPolicy?: DRPlanConfigurationManagedScalingPolicy;
  /**
   * @remarks
   * This parameter is required.
   */
  nodeAttributes?: NodeAttributes;
  /**
   * @remarks
   * This parameter is required.
   */
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
  /**
   * @remarks
   * This parameter is required.
   */
  securityMode?: string;
  subscriptionConfig?: SubscriptionConfig;
  tags?: DRPlanConfigurationTags[];
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
      nodeAttributes: 'NodeAttributes',
      nodeGroups: 'NodeGroups',
      paymentType: 'PaymentType',
      regionId: 'RegionId',
      releaseVersion: 'ReleaseVersion',
      resourceGroupId: 'ResourceGroupId',
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
      managedScalingPolicy: DRPlanConfigurationManagedScalingPolicy,
      nodeAttributes: NodeAttributes,
      nodeGroups: { 'type': 'array', 'itemType': NodeGroupConfig },
      paymentType: 'string',
      regionId: 'string',
      releaseVersion: 'string',
      resourceGroupId: 'string',
      securityMode: 'string',
      subscriptionConfig: SubscriptionConfig,
      tags: { 'type': 'array', 'itemType': DRPlanConfigurationTags },
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

