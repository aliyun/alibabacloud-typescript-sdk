// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class GetArtifactBuildRuleResponseBodyParameters extends $dara.Model {
  imageIndexOnly?: boolean;
  priorityFile?: string;
  static names(): { [key: string]: string } {
    return {
      imageIndexOnly: 'ImageIndexOnly',
      priorityFile: 'PriorityFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIndexOnly: 'boolean',
      priorityFile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildTaskResponseBodySourceArtifact extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact that is built in the task. The value can only be IMAGE.
   * 
   * @example
   * IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The ID of the repository to which the source artifact belongs. The repository can only be an image repository.
   * 
   * @example
   * cri-shac42yvqzvq****
   */
  repoId?: string;
  /**
   * @remarks
   * The version of the artifact. The artifact can only be an image.
   * 
   * @example
   * latest
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      repoId: 'RepoId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      repoId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildTaskResponseBodyTargetArtifact extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact that is built in the task. The value can only be IMAGE.
   * 
   * @example
   * IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The ID of the repository to which the artifact that is built in the task belongs. The repository can only be an image repository. The value is the same as the ID of the repository to which the source artifact belongs.
   * 
   * @example
   * crr-1234567
   */
  repoId?: string;
  /**
   * @remarks
   * The version of the artifact that is built in the task. The artifact can only be an image.
   * 
   * @example
   * latest_accelerated
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      repoId: 'RepoId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      repoId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactSubscriptionTaskResultResponseBodyTaskResults extends $dara.Model {
  /**
   * @remarks
   * The end time of the subscription task.
   * 
   * @example
   * 1692756630000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-isj2wgaw4z9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * test-reop
   */
  repoName?: string;
  /**
   * @remarks
   * The result of the task.
   * 
   * @example
   * SUCCESS
   */
  result?: string;
  /**
   * @remarks
   * The start time of the subscription task.
   * 
   * @example
   * 1691719501000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * v2.0
   */
  tag?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * crast-wkpfwqozjiq****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
      tag: 'Tag',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      namespaceName: 'string',
      repoName: 'string',
      result: 'string',
      startTime: 'number',
      status: 'string',
      tag: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy extends $dara.Model {
  /**
   * @example
   * BLOCK
   */
  action?: string;
  /**
   * @example
   * identification,hc_image_exploit
   */
  baselineList?: string;
  /**
   * @example
   * 10
   */
  issueCount?: string;
  /**
   * @example
   * HIGH
   */
  issueLevel?: string;
  /**
   * @example
   * CVE-2020-8286,CVE-2020-8285
   */
  issueList?: string;
  /**
   * @example
   * AND
   */
  logic?: string;
  /**
   * @example
   * mutate_cockhorse,abnormal_program
   */
  maliciousList?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      baselineList: 'BaselineList',
      issueCount: 'IssueCount',
      issueLevel: 'IssueLevel',
      issueList: 'IssueList',
      logic: 'Logic',
      maliciousList: 'MaliciousList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      baselineList: 'string',
      issueCount: 'string',
      issueLevel: 'string',
      issueList: 'string',
      logic: 'string',
      maliciousList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigNodesNodeConfig extends $dara.Model {
  denyPolicy?: GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy;
  /**
   * @example
   * 3
   */
  retry?: number;
  /**
   * @example
   * ACR_SCAN_SERVICE
   */
  scanEngine?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      denyPolicy: 'DenyPolicy',
      retry: 'Retry',
      scanEngine: 'ScanEngine',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      denyPolicy: GetChainResponseBodyChainConfigNodesNodeConfigDenyPolicy,
      retry: 'number',
      scanEngine: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(this.denyPolicy && typeof (this.denyPolicy as any).validate === 'function') {
      (this.denyPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigNodes extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  nodeConfig?: GetChainResponseBodyChainConfigNodesNodeConfig;
  /**
   * @example
   * VULNERABILITY_SCANNING
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      nodeConfig: 'NodeConfig',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      nodeConfig: GetChainResponseBodyChainConfigNodesNodeConfig,
      nodeName: 'string',
    };
  }

  validate() {
    if(this.nodeConfig && typeof (this.nodeConfig as any).validate === 'function') {
      (this.nodeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigRoutersFrom extends $dara.Model {
  /**
   * @example
   * DOCKER_IMAGE_BUILD
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigRoutersTo extends $dara.Model {
  /**
   * @example
   * DOCKER_IMAGE_PUSH
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfigRouters extends $dara.Model {
  from?: GetChainResponseBodyChainConfigRoutersFrom;
  to?: GetChainResponseBodyChainConfigRoutersTo;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: GetChainResponseBodyChainConfigRoutersFrom,
      to: GetChainResponseBodyChainConfigRoutersTo,
    };
  }

  validate() {
    if(this.from && typeof (this.from as any).validate === 'function') {
      (this.from as any).validate();
    }
    if(this.to && typeof (this.to as any).validate === 'function') {
      (this.to as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBodyChainConfig extends $dara.Model {
  /**
   * @example
   * cci-lz3ycgo69ukt****
   */
  chainConfigId?: string;
  /**
   * @example
   * true
   */
  isActive?: boolean;
  nodes?: GetChainResponseBodyChainConfigNodes[];
  routers?: GetChainResponseBodyChainConfigRouters[];
  /**
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      chainConfigId: 'ChainConfigId',
      isActive: 'IsActive',
      nodes: 'Nodes',
      routers: 'Routers',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainConfigId: 'string',
      isActive: 'boolean',
      nodes: { 'type': 'array', 'itemType': GetChainResponseBodyChainConfigNodes },
      routers: { 'type': 'array', 'itemType': GetChainResponseBodyChainConfigRouters },
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    if(Array.isArray(this.routers)) {
      $dara.Model.validateArray(this.routers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test_key
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test_value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEndpointResponseBodyAclEntries extends $dara.Model {
  /**
   * @remarks
   * Remarks for public IP address whitelists.
   * 
   * @example
   * 1
   */
  comment?: string;
  /**
   * @remarks
   * The public IP address whitelist.
   * 
   * @example
   * 192.168.1.0/24
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEndpointResponseBodyDomains extends $dara.Model {
  /**
   * @remarks
   * The domain name that is used to access the Container Registry Enterprise Edition instance.
   * 
   * @example
   * shanghai-instance1-registry.cn-shanghai.cr.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   `SYSTEM`: a system domain name.
   * *   `USER`: a user domain name.
   * 
   * @example
   * SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceVpcEndpointResponseBodyLinkedVpcs extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the VPC is the default VPC over which the Container Registry instance is accessed.
   * 
   * @example
   * false
   */
  defaultAccess?: boolean;
  /**
   * @remarks
   * IP address.
   * 
   * @example
   * 192.168.10.11
   */
  ip?: string;
  /**
   * @remarks
   * The status of the VPC. Valid values:
   * 
   * *   `CREATING`
   * *   `RUNNING`
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-uf6aamu2nomfr1thd****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-uf62m5vmxl2e72dk7****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultAccess: 'DefaultAccess',
      ip: 'Ip',
      status: 'Status',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultAccess: 'boolean',
      ip: 'string',
      status: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordResponseBodyImage extends $dara.Model {
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * master
   */
  imageTag?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the image repository belongs.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskResponseBodyImageFrom extends $dara.Model {
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * master
   */
  imageTag?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-sgedpenzw80e****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskResponseBodyImageTo extends $dara.Model {
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * master
   */
  imageTag?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-leqzomz5vijc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * eu-west-1
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskResponseBodyLayerTasks extends $dara.Model {
  /**
   * @remarks
   * The digest of the artifact.
   * 
   * @example
   * sha256:36fb85fcb5e919cb60e782397a6be04201868fe7b38ef7669fc01caec1c8fc4e
   */
  artifactDigest?: string;
  /**
   * @remarks
   * The digest of the image layer.
   * 
   * @example
   * sha256:36fb85fcb5e919cb60e782397a6be04201868fe7b38ef7669fc01caec1c8fc4e
   */
  digest?: string;
  /**
   * @remarks
   * The size of synchronized image layers.
   * 
   * @example
   * 23655489
   */
  size?: number;
  /**
   * @remarks
   * The ID of the synchronization task for the image layer.
   * 
   * @example
   * rslt-074x4q20fx2d****
   */
  syncLayerTaskId?: string;
  /**
   * @remarks
   * The size of the image layer that is synchronized.
   * 
   * @example
   * 23655489
   */
  syncedSize?: number;
  /**
   * @remarks
   * The status of the synchronization task. Valid values:
   * 
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      artifactDigest: 'ArtifactDigest',
      digest: 'Digest',
      size: 'Size',
      syncLayerTaskId: 'SyncLayerTaskId',
      syncedSize: 'SyncedSize',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactDigest: 'string',
      digest: 'string',
      size: 'number',
      syncLayerTaskId: 'string',
      syncedSize: 'number',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactBuildTaskLogResponseBodyBuildTaskLogs extends $dara.Model {
  /**
   * @remarks
   * The row number of the log entry.
   * 
   * @example
   * 1
   */
  lineNumber?: number;
  /**
   * @remarks
   * The log data.
   * 
   * @example
   * Start Build
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      lineNumber: 'LineNumber',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineNumber: 'number',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactLifecycleRuleResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the lifecycle management rule is automatically executed.
   * 
   * @example
   * false
   */
  auto?: boolean;
  /**
   * @remarks
   * The time when the lifecycle management rule was created.
   * 
   * @example
   * 1638187989000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether lifecycle management is enabled for the artifact.
   * 
   * @example
   * true
   */
  enableDeleteTag?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-brlg4cbj2yl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the lifecycle management rule was last modified.
   * 
   * @example
   * 1678341923385
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * The time when the lifecycle management rule is next executed.
   * 
   * @example
   * 1638187989000
   */
  nextTime?: number;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test_1
   */
  repoName?: string;
  /**
   * @remarks
   * The number of retained images.
   * 
   * @example
   * 30
   */
  retentionTagCount?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cralr-yqx1q5sir6d****
   */
  ruleId?: string;
  /**
   * @remarks
   * The execution cycle of the lifecycle management rule.
   * 
   * @example
   * WEEK
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The deletion scope of artifacts.
   * 
   * @example
   * INSTANCE
   */
  scope?: string;
  /**
   * @remarks
   * The regular expression that indicates which image tags are retained.
   * 
   * @example
   * .*-alpine
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      auto: 'Auto',
      createTime: 'CreateTime',
      enableDeleteTag: 'EnableDeleteTag',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      namespaceName: 'NamespaceName',
      nextTime: 'NextTime',
      repoName: 'RepoName',
      retentionTagCount: 'RetentionTagCount',
      ruleId: 'RuleId',
      scheduleTime: 'ScheduleTime',
      scope: 'Scope',
      tagRegexp: 'TagRegexp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auto: 'boolean',
      createTime: 'number',
      enableDeleteTag: 'boolean',
      instanceId: 'string',
      modifiedTime: 'number',
      namespaceName: 'string',
      nextTime: 'number',
      repoName: 'string',
      retentionTagCount: 'number',
      ruleId: 'string',
      scheduleTime: 'string',
      scope: 'string',
      tagRegexp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactSubscriptionRuleResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether an acceleration link is enabled for image subscription. The subscription acceleration feature is in public preview. The feature is optimized based on scheduling policies and network links to accelerate image subscription.
   * 
   * @example
   * true
   */
  accelerate?: boolean;
  /**
   * @remarks
   * The time when the subscription rule was created.
   * 
   * @example
   * 1638187989000
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-brlg4cbj2yl****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the subscription rule was modified.
   * 
   * @example
   * 1678341923385
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The name of the source namespace.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * Indicates whether the original image is overwritten.
   * 
   * @example
   * true
   */
  override?: boolean;
  /**
   * @remarks
   * The operating system and architecture. If the source repository contains a multi-arch image, only the images with the specified operating system and architecture are subscribed to the destination repository of the Enterprise Edition instance.
   */
  platform?: string[];
  /**
   * @remarks
   * The name of the source repository.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * crasr-mdbpung4i1rm****
   */
  ruleId?: string;
  /**
   * @remarks
   * The source namespace.
   * 
   * @example
   * library
   */
  sourceNamespaceName?: string;
  /**
   * @remarks
   * The source of the artifact.
   * 
   * Valid values:
   * 
   * *   DOCKER_HUB: Docker Hub
   * *   GCR: GCR
   * *   QUAY: Quay.io
   * 
   * @example
   * DOCKER_HUB
   */
  sourceProvider?: string;
  /**
   * @remarks
   * The source repository.
   * 
   * @example
   * nginx
   */
  sourceRepoName?: string;
  /**
   * @remarks
   * The number of subscribed images.
   * 
   * @example
   * 1
   */
  tagCount?: number;
  /**
   * @remarks
   * The image tag in the subscription source repository. Regular expressions are supported.
   * 
   * @example
   * release.*
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      accelerate: 'Accelerate',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      namespaceName: 'NamespaceName',
      override: 'Override',
      platform: 'Platform',
      repoName: 'RepoName',
      ruleId: 'RuleId',
      sourceNamespaceName: 'SourceNamespaceName',
      sourceProvider: 'SourceProvider',
      sourceRepoName: 'SourceRepoName',
      tagCount: 'TagCount',
      tagRegexp: 'TagRegexp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerate: 'boolean',
      createTime: 'number',
      instanceId: 'string',
      modifiedTime: 'number',
      namespaceName: 'string',
      override: 'boolean',
      platform: { 'type': 'array', 'itemType': 'string' },
      repoName: 'string',
      ruleId: 'string',
      sourceNamespaceName: 'string',
      sourceProvider: 'string',
      sourceRepoName: 'string',
      tagCount: 'number',
      tagRegexp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.platform)) {
      $dara.Model.validateArray(this.platform);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactSubscriptionTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact.
   * 
   * @example
   * IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The end time of the artifact subscription task.
   * 
   * @example
   * 1692756630000
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-7pd01myak****
   */
  instanceId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the source namespace.
   * 
   * @example
   * library
   */
  sourceNamespaceName?: string;
  /**
   * @remarks
   * The artifact source.
   * 
   * @example
   * DOCKER_HUB
   */
  sourceProvider?: string;
  /**
   * @remarks
   * The name of the source repository.
   * 
   * @example
   * nginx
   */
  sourceRepoName?: string;
  /**
   * @remarks
   * The type of the source artifact.
   * 
   * @example
   * PUBLIC
   */
  sourceRepoType?: string;
  /**
   * @remarks
   * The start time of the artifact subscription task.
   * 
   * @example
   * 1695348301000
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of subscribed tags.
   * 
   * @example
   * 3
   */
  tagSubscriptionCount?: number;
  /**
   * @remarks
   * The total number of tags.
   * 
   * @example
   * 311
   */
  tagTotalCount?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * crast-40le4es9yh0p****
   */
  taskId?: string;
  /**
   * @remarks
   * The task result.
   * 
   * @example
   * SUCCESS
   */
  taskResult?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * RUNNING
   */
  taskStatus?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * AUTO
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      message: 'Message',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      sourceNamespaceName: 'SourceNamespaceName',
      sourceProvider: 'SourceProvider',
      sourceRepoName: 'SourceRepoName',
      sourceRepoType: 'SourceRepoType',
      startTime: 'StartTime',
      tagSubscriptionCount: 'TagSubscriptionCount',
      tagTotalCount: 'TagTotalCount',
      taskId: 'TaskId',
      taskResult: 'TaskResult',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      endTime: 'string',
      instanceId: 'string',
      message: 'string',
      namespaceName: 'string',
      repoName: 'string',
      sourceNamespaceName: 'string',
      sourceProvider: 'string',
      sourceRepoName: 'string',
      sourceRepoType: 'string',
      startTime: 'string',
      tagSubscriptionCount: 'number',
      tagTotalCount: 'number',
      taskId: 'string',
      taskResult: 'string',
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainResponseBodyChains extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery chain.
   * 
   * @example
   * chi-0ops0gsmw5x2****
   */
  chainId?: string;
  /**
   * @remarks
   * The time when the delivery chain was created.
   * 
   * @example
   * 1638255427000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the delivery chain.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-4cdrlqmhn4gm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the delivery chain was last modified.
   * 
   * @example
   * 1638259914000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The name of the delivery chain.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Repositories to which the delivery chain does not apply.
   */
  scopeExclude?: string[];
  /**
   * @remarks
   * The ID of the delivery chain scope.
   * 
   * @example
   * crr-nyrh2oko32xb****
   */
  scopeId?: string;
  /**
   * @remarks
   * The type of the delivery chain scope.
   * 
   * @example
   * REPOSITORY
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      scopeExclude: 'ScopeExclude',
      scopeId: 'ScopeId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      modifiedTime: 'number',
      name: 'string',
      scopeExclude: { 'type': 'array', 'itemType': 'string' },
      scopeId: 'string',
      scopeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scopeExclude)) {
      $dara.Model.validateArray(this.scopeExclude);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainInstanceResponseBodyChainInstancesChain extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * chi-m42gbku0****
   */
  chainId?: string;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * test-chain
   */
  chainName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      chainName: 'ChainName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      chainName: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainInstanceResponseBodyChainInstances extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace.
   */
  chain?: ListChainInstanceResponseBodyChainInstancesChain;
  /**
   * @remarks
   * 1
   * 
   * @example
   * F4CF4DDB-BEF2-5575-****-*******
   */
  chainInstanceId?: string;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * @example
   * 1636685856000
   */
  endTime?: number;
  /**
   * @remarks
   * The ID of the delivery chain.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The execution result of the delivery chain. Valid values:
   * 
   * *   `SUCCESS`
   * *   `FAILED`
   * *   `CANCELED`
   * *   `DENIED`
   * 
   * @example
   * test-ns
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The list of the execution records of delivery chains.
   * 
   * @example
   * SUCCESS
   */
  result?: string;
  /**
   * @remarks
   * test-repo
   * 
   * @example
   * 1636685776000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the delivery chain. Valid values:
   * 
   * *   `RUNNING`
   * *   `COMPLETE`
   * *   `CANCELING`
   * *   `CANCELED`
   * 
   * @example
   * COMPLETE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chain: 'Chain',
      chainInstanceId: 'ChainInstanceId',
      endTime: 'EndTime',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chain: ListChainInstanceResponseBodyChainInstancesChain,
      chainInstanceId: 'string',
      endTime: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
      result: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.chain && typeof (this.chain as any).validate === 'function') {
      (this.chain as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartNamespaceResponseBodyNamespaces extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a repository was automatically created when a chart is pushed to the namespace.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  /**
   * @remarks
   * The default repository type. Valid values:
   * 
   * *   `PUBLIC`: a public repository
   * *   `PRIVATE`: a private repository
   * 
   * @example
   * PUBLIC
   */
  defaultRepoType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * null
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @remarks
   * The status of the namespace. Valid values:
   * 
   * *   `NORMAL`: The namespace is normal.
   * *   `DELETING`: The namespace is being deleted.
   * 
   * @example
   * NORMAL
   */
  namespaceStatus?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfm4n5kzyf****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartReleaseResponseBodyChartReleases extends $dara.Model {
  /**
   * @remarks
   * The name of the chart version.
   * 
   * @example
   * chart1
   */
  chart?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the chart was last modified.
   * 
   * @example
   * 1571930323000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The version number of the chart.
   * 
   * @example
   * 0.1.0
   */
  release?: string;
  /**
   * @remarks
   * The ID of the chart repository.
   * 
   * @example
   * crcr-gpsu7b8chmxk****
   */
  repoId?: string;
  /**
   * @remarks
   * The size of the chart of the version. Unit: bytes.
   * 
   * @example
   * 2826
   */
  size?: string;
  /**
   * @remarks
   * The status of the chart.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      chart: 'Chart',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      release: 'Release',
      repoId: 'RepoId',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chart: 'string',
      instanceId: 'string',
      modifiedTime: 'number',
      release: 'string',
      repoId: 'string',
      size: 'string',
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

export class ListChartRepositoryResponseBodyRepositories extends $dara.Model {
  /**
   * @remarks
   * The time when the repository was created.
   * 
   * @example
   * 1571926644000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the repository was last modified.
   * 
   * @example
   * 1571930329000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * @example
   * crcr-gpsu7b8chmxk****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * @example
   * ns1
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The status of the repository. Valid values:
   * 
   * *   `NORMAL`: The repository is normal.
   * *   `DELETING`: The repository is being deleted.
   * 
   * @example
   * NORMAL
   */
  repoStatus?: string;
  /**
   * @remarks
   * The type of the repository. Valid values:
   * 
   * *   `PRIVATE`: a private repository
   * *   `PUBLIC`: a public repository
   * 
   * @example
   * PUBLIC
   */
  repoType?: string;
  /**
   * @remarks
   * The ID of the resource group to which the repository belongs.
   * 
   * @example
   * rg-aek2ikd5rxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The summary about the repository.
   * 
   * @example
   * test
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
      repoType: 'RepoType',
      resourceGroupId: 'ResourceGroupId',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      modifiedTime: 'number',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
      repoType: 'string',
      resourceGroupId: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRecordResponseBodyRecords extends $dara.Model {
  /**
   * @remarks
   * The time when the event was created.
   * 
   * @example
   * 1638188622000
   */
  createTime?: number;
  /**
   * @remarks
   * The event notification channel.
   * 
   * @example
   * EVENT_BRIDGE
   */
  eventChannel?: string;
  /**
   * @remarks
   * The ID of the event notification.
   * 
   * @example
   * 7d478419-61df-49e5-b92b-30ce730c2127
   */
  eventNotifyId?: string;
  /**
   * @remarks
   * The notification method. Valid values:
   * 
   * *   `http`: The notification is sent over HTTP.
   * *   `https`: The notification is sent over HTTPS.
   * *   `dingding`: The notification is sent by using DingTalk.
   * 
   * @example
   * http
   */
  eventNotifyMethod?: string;
  /**
   * @remarks
   * The type of the event.
   * 
   * @example
   * cr:Artifact:DeliveryChainCompleted
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-gl34plsa****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * mychain
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the event record.
   * 
   * @example
   * crecrr-ctdbzwtkpr*****
   */
  recordId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * ruby-2.4.0
   */
  repoName?: string;
  /**
   * @remarks
   * The ID of the event notification rule.
   * 
   * @example
   * crecr-n6pbhgjxtla*****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the event notification rule.
   * 
   * @example
   * chain-demo
   */
  ruleName?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * ruby-2.4.0
   */
  tag?: string;
  /**
   * @remarks
   * The time when the event was last updated.
   * 
   * @example
   * 1638188622000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      eventChannel: 'EventChannel',
      eventNotifyId: 'EventNotifyId',
      eventNotifyMethod: 'EventNotifyMethod',
      eventType: 'EventType',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      recordId: 'RecordId',
      repoName: 'RepoName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      tag: 'Tag',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      eventChannel: 'string',
      eventNotifyId: 'string',
      eventNotifyMethod: 'string',
      eventType: 'string',
      instanceId: 'string',
      namespace: 'string',
      recordId: 'string',
      repoName: 'string',
      ruleId: 'string',
      ruleName: 'string',
      tag: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRuleNameResponseBodyRuleNames extends $dara.Model {
  /**
   * @remarks
   * The ID of the event notification rule.
   * 
   * @example
   * crecr-n6pbhgjxtl*****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the event notification rule.
   * 
   * @example
   * test-chain
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyInstancesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test_key
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test_value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1562849679000
   */
  createTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-sgedpenzw80e****
   */
  instanceId?: string;
  /**
   * @remarks
   * The issue occurs on the instance.
   * 
   * @example
   * oss bucket already exists
   */
  instanceIssue?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The edition of the Container Registry Enterprise Edition instance.
   * 
   * @example
   * Enterprise_Basic
   */
  instanceSpecification?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The time when the instance was last modified.
   * 
   * @example
   * 1562849760000
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aek2h3aexpy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: ListInstanceResponseBodyInstancesTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      instanceIssue: 'InstanceIssue',
      instanceName: 'InstanceName',
      instanceSpecification: 'InstanceSpecification',
      instanceStatus: 'InstanceStatus',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceId: 'string',
      instanceIssue: 'string',
      instanceName: 'string',
      instanceSpecification: 'string',
      instanceStatus: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListInstanceResponseBodyInstancesTags },
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

export class ListInstanceEndpointResponseBodyEndpointsAclEntries extends $dara.Model {
  /**
   * @remarks
   * The information about the ACL.
   * 
   * @example
   * null
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointResponseBodyEndpointsDomains extends $dara.Model {
  /**
   * @remarks
   * The domain name of the Container Registry instance.
   * 
   * @example
   * t****-registry.cn-shanghai.cr.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The type of the domain name. Valid values:
   * 
   * *   SYSTEM: system domain name.
   * *   USER: user domain name.
   * 
   * @example
   * SYSTEM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointResponseBodyEndpointsLinkedVpcs extends $dara.Model {
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * null
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListInstanceEndpointResponseBodyEndpoints extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the endpoint is added to an access control list (ACL).
   * 
   * @example
   * true
   */
  aclEnable?: boolean;
  /**
   * @remarks
   * The ACLs that are configured for the instance.
   */
  aclEntries?: ListInstanceEndpointResponseBodyEndpointsAclEntries[];
  /**
   * @remarks
   * The list of domain names of the Container Registry instance.
   */
  domains?: ListInstanceEndpointResponseBodyEndpointsDomains[];
  /**
   * @remarks
   * Indicates whether the endpoint is added to an ACL.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of the endpoint.
   * 
   * @example
   * internet
   */
  endpointType?: string;
  /**
   * @remarks
   * The VPCs associated with the instance.
   */
  linkedVpcs?: ListInstanceEndpointResponseBodyEndpointsLinkedVpcs[];
  /**
   * @remarks
   * The status of the endpoint.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aclEnable: 'AclEnable',
      aclEntries: 'AclEntries',
      domains: 'Domains',
      enable: 'Enable',
      endpointType: 'EndpointType',
      linkedVpcs: 'LinkedVpcs',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEnable: 'boolean',
      aclEntries: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpointsAclEntries },
      domains: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpointsDomains },
      enable: 'boolean',
      endpointType: 'string',
      linkedVpcs: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpointsLinkedVpcs },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclEntries)) {
      $dara.Model.validateArray(this.aclEntries);
    }
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    if(Array.isArray(this.linkedVpcs)) {
      $dara.Model.validateArray(this.linkedVpcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRegionResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * China (Shenzhen)
   */
  localName?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceResponseBodyNamespaces extends $dara.Model {
  /**
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  /**
   * @example
   * PUBLIC
   */
  defaultRepoType?: string;
  /**
   * @example
   * cri-94klsruryslx****
   */
  instanceId?: string;
  /**
   * @example
   * crn-tiw8t3f8i5lt****
   */
  namespaceId?: string;
  /**
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @example
   * NORMAL
   */
  namespaceStatus?: string;
  /**
   * @example
   * rg-acfm4n5kzyf2fbi
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordResponseBodyBuildRecordsImage extends $dara.Model {
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * v0.1
   */
  imageTag?: string;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * @example
   * crr-gzsrlevmvoaq****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordResponseBodyBuildRecords extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building record.
   * 
   * @example
   * 537e08ab-735e-415f-b7c2-160eb87f8****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The status of the image building.
   * 
   * @example
   * SUCCESS
   */
  buildStatus?: string;
  /**
   * @remarks
   * The time when the image building ended.
   * 
   * @example
   * 1572875610000
   */
  endTime?: string;
  /**
   * @remarks
   * The information about the image.
   */
  image?: ListRepoBuildRecordResponseBodyBuildRecordsImage;
  /**
   * @remarks
   * The time when the image building started.
   * 
   * @example
   * 1572872207000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      buildStatus: 'BuildStatus',
      endTime: 'EndTime',
      image: 'Image',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      buildStatus: 'string',
      endTime: 'string',
      image: ListRepoBuildRecordResponseBodyBuildRecordsImage,
      startTime: 'string',
    };
  }

  validate() {
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordLogResponseBodyBuildRecordLogs extends $dara.Model {
  /**
   * @remarks
   * The stage of the building that is recorded in the log entry.
   * 
   * @example
   * GIT_CLONE
   */
  buildStage?: string;
  /**
   * @remarks
   * The line number of the log entry.
   * 
   * @example
   * 2
   */
  lineNumber?: number;
  /**
   * @remarks
   * The content of the log.
   * 
   * @example
   * fetch stage begin
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      buildStage: 'BuildStage',
      lineNumber: 'LineNumber',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildStage: 'string',
      lineNumber: 'number',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRuleResponseBodyBuildRules extends $dara.Model {
  buildArgs?: string[];
  /**
   * @remarks
   * The ID of the image building rule.
   * 
   * @example
   * crbr-khys0nd3asbe****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The directory of the Dockerfile.
   * 
   * @example
   * /
   */
  dockerfileLocation?: string;
  /**
   * @remarks
   * The name of the Dockerfile.
   * 
   * @example
   * Dockerfile
   */
  dockerfileName?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * v0.1
   */
  imageTag?: string;
  platforms?: string[];
  /**
   * @remarks
   * The name of the push that triggers the building rule.
   * 
   * @example
   * v0.1
   */
  pushName?: string;
  /**
   * @remarks
   * The type of the push that triggers the image building rule. Valid values:
   * 
   * *   GIT_BRANCH: branch push
   * *   GIT_TAG: tag push
   * 
   * @example
   * GIT_BRANCH
   */
  pushType?: string;
  static names(): { [key: string]: string } {
    return {
      buildArgs: 'BuildArgs',
      buildRuleId: 'BuildRuleId',
      dockerfileLocation: 'DockerfileLocation',
      dockerfileName: 'DockerfileName',
      imageTag: 'ImageTag',
      platforms: 'Platforms',
      pushName: 'PushName',
      pushType: 'PushType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildArgs: { 'type': 'array', 'itemType': 'string' },
      buildRuleId: 'string',
      dockerfileLocation: 'string',
      dockerfileName: 'string',
      imageTag: 'string',
      platforms: { 'type': 'array', 'itemType': 'string' },
      pushName: 'string',
      pushType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildArgs)) {
      $dara.Model.validateArray(this.buildArgs);
    }
    if(Array.isArray(this.platforms)) {
      $dara.Model.validateArray(this.platforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncRuleResponseBodySyncRules extends $dara.Model {
  /**
   * @remarks
   * The time when the synchronization rule was created.
   * 
   * @example
   * 1572604642000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the synchronization is performed across Alibaba Cloud accounts. Valid values:
   * 
   * *   `true`: Images are synchronized across Alibaba Cloud accounts.
   * *   `false`: Images are synchronized within the same Alibaba Cloud account.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  crossUser?: boolean;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  localInstanceId?: string;
  /**
   * @remarks
   * The name of the namespace in the source instance.
   * 
   * @example
   * test
   */
  localNamespaceName?: string;
  /**
   * @remarks
   * The region ID of the source instance.
   * 
   * @example
   * cn-shanghai
   */
  localRegionId?: string;
  /**
   * @remarks
   * The name of the repository in the source instance.
   * 
   * @example
   * test-repo-local
   */
  localRepoName?: string;
  /**
   * @remarks
   * The time when the synchronization rule was last modified.
   * 
   * @example
   * 1572604642000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The regular expression that is used to filter repositories.
   * 
   * >  This parameter is valid only when SyncScope is set to `NAMESPACE`.
   * 
   * @example
   * .*
   */
  repoNameFilter?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   `FROM`: Images are synchronized from the source instance to the destination instance.
   * *   `TO`: Images are synchronized from the destination instance to the source instance.
   * 
   * @example
   * FROM
   */
  syncDirection?: string;
  /**
   * @remarks
   * The ID of the synchronization rule.
   * 
   * @example
   * crsr-7lph66uloi6h****
   */
  syncRuleId?: string;
  /**
   * @remarks
   * The name of the synchronization rule.
   * 
   * @example
   * sync-rule-1
   */
  syncRuleName?: string;
  /**
   * @remarks
   * The synchronization scope. Valid values:
   * 
   * *   `NAMESPACE`: synchronizes the image tags in a namespace that meet the synchronization rule.
   * *   `REPO`: synchronizes the image tags in an image repository that meet the synchronization rule.
   * 
   * @example
   * NAMESPACE
   */
  syncScope?: string;
  /**
   * @remarks
   * The policy that is applied to trigger the synchronization rule. Valid values:
   * 
   * *   `INITIATIVE`: The synchronization rule is positively triggered.
   * *   `PASSIVE`: The synchronization rule is passively triggered.
   * 
   * @example
   * PASSIVE
   */
  syncTrigger?: string;
  /**
   * @remarks
   * The regular expression that is used to filter image tags.
   * 
   * @example
   * .*
   */
  tagFilter?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * @example
   * cri-k77rd2eo9ztt****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The name of the namespace in the destination instance.
   * 
   * @example
   * test
   */
  targetNamespaceName?: string;
  /**
   * @remarks
   * The region ID of the destination instance.
   * 
   * @example
   * cn-shenzhen
   */
  targetRegionId?: string;
  /**
   * @remarks
   * The name of the repository in the destination instance.
   * 
   * @example
   * test-repo-target
   */
  targetRepoName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossUser: 'CrossUser',
      localInstanceId: 'LocalInstanceId',
      localNamespaceName: 'LocalNamespaceName',
      localRegionId: 'LocalRegionId',
      localRepoName: 'LocalRepoName',
      modifiedTime: 'ModifiedTime',
      repoNameFilter: 'RepoNameFilter',
      syncDirection: 'SyncDirection',
      syncRuleId: 'SyncRuleId',
      syncRuleName: 'SyncRuleName',
      syncScope: 'SyncScope',
      syncTrigger: 'SyncTrigger',
      tagFilter: 'TagFilter',
      targetInstanceId: 'TargetInstanceId',
      targetNamespaceName: 'TargetNamespaceName',
      targetRegionId: 'TargetRegionId',
      targetRepoName: 'TargetRepoName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      crossUser: 'boolean',
      localInstanceId: 'string',
      localNamespaceName: 'string',
      localRegionId: 'string',
      localRepoName: 'string',
      modifiedTime: 'number',
      repoNameFilter: 'string',
      syncDirection: 'string',
      syncRuleId: 'string',
      syncRuleName: 'string',
      syncScope: 'string',
      syncTrigger: 'string',
      tagFilter: 'string',
      targetInstanceId: 'string',
      targetNamespaceName: 'string',
      targetRegionId: 'string',
      targetRepoName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskResponseBodySyncTasksImageFrom extends $dara.Model {
  /**
   * @example
   * v0.1
   */
  imageTag?: string;
  /**
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * test
   */
  repoName?: string;
  /**
   * @example
   * test
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskResponseBodySyncTasksImageTo extends $dara.Model {
  /**
   * @example
   * v0.1
   */
  imageTag?: string;
  /**
   * @example
   * cri-k77rd2eo9zttneqo
   */
  instanceId?: string;
  /**
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * test
   */
  repoName?: string;
  /**
   * @example
   * test
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      imageTag: 'ImageTag',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageTag: 'string',
      instanceId: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskResponseBodySyncTasks extends $dara.Model {
  /**
   * @example
   * 1572839126000
   */
  createTime?: number;
  /**
   * @example
   * true
   */
  crossUser?: boolean;
  /**
   * @example
   * true
   */
  customLink?: boolean;
  imageFrom?: ListRepoSyncTaskResponseBodySyncTasksImageFrom;
  imageTo?: ListRepoSyncTaskResponseBodySyncTasksImageTo;
  /**
   * @example
   * 1572839133000
   */
  modifedTime?: number;
  /**
   * @example
   * 15DEEB56-9271-4FDD-AC4D-C3A5CC2C****
   */
  syncBatchTaskId?: string;
  /**
   * @example
   * crsr-7lph66uloi6h****
   */
  syncRuleId?: string;
  /**
   * @example
   * rst-4kfd7fk6pohk****
   */
  syncTaskId?: string;
  /**
   * @example
   * true
   */
  syncTransAccelerate?: boolean;
  /**
   * @remarks
   * The error message that is returned if the synchronization task fails.
   * 
   * >  The system uses this parameter to return an error message if the synchronization task fails.
   * 
   * Valid values:
   * 
   * *   OSS_POLICY_UNAUTHORIZED: Container Registry is not granted permissions to use Object Storage Service (OSS).
   * *   TAG_CONFLICT: The destination repository contains an image that has the same tag as the source image, and image tag immutability is enabled for the destination repository.
   * *   UNSUPPORTED_FORMAT: The manifest and config formats of the image to be synchronized are not supported.
   * *   INTERNAL_ERROR: The synchronization task failed due to internal issues on the server.
   * *   NETWORK_ERROR: The synchronization task failed due to unstable network connection.
   * *   DATA_LENGTH_EXCEEDED: The manifest or config of the image is oversized.
   * 
   * @example
   * NETWORK_ERROR
   */
  taskIssue?: string;
  /**
   * @remarks
   * The status of the synchronization task.
   * 
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  /**
   * @example
   * PASSIVE
   */
  taskTrigger?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      crossUser: 'CrossUser',
      customLink: 'CustomLink',
      imageFrom: 'ImageFrom',
      imageTo: 'ImageTo',
      modifedTime: 'ModifedTime',
      syncBatchTaskId: 'SyncBatchTaskId',
      syncRuleId: 'SyncRuleId',
      syncTaskId: 'SyncTaskId',
      syncTransAccelerate: 'SyncTransAccelerate',
      taskIssue: 'TaskIssue',
      taskStatus: 'TaskStatus',
      taskTrigger: 'TaskTrigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      crossUser: 'boolean',
      customLink: 'boolean',
      imageFrom: ListRepoSyncTaskResponseBodySyncTasksImageFrom,
      imageTo: ListRepoSyncTaskResponseBodySyncTasksImageTo,
      modifedTime: 'number',
      syncBatchTaskId: 'string',
      syncRuleId: 'string',
      syncTaskId: 'string',
      syncTransAccelerate: 'boolean',
      taskIssue: 'string',
      taskStatus: 'string',
      taskTrigger: 'string',
    };
  }

  validate() {
    if(this.imageFrom && typeof (this.imageFrom as any).validate === 'function') {
      (this.imageFrom as any).validate();
    }
    if(this.imageTo && typeof (this.imageTo as any).validate === 'function') {
      (this.imageTo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagResponseBodyImages extends $dara.Model {
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * 67bfbcc12b67936ec7f867927817cbb071832b873dbcaed312a1930ba5f1****
   */
  digest?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 1572839125000
   */
  imageCreate?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * 45023655bf39c382e26a8607d057c27871dee163c1ecf48cc1ebf2a1****
   */
  imageId?: string;
  /**
   * @remarks
   * The size of the image.
   * 
   * @example
   * 27107966
   */
  imageSize?: number;
  /**
   * @remarks
   * The time when the image was last updated.
   * 
   * @example
   * 1572875608000
   */
  imageUpdate?: string;
  /**
   * @remarks
   * The status of the image.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * v0.1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      imageCreate: 'ImageCreate',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageUpdate: 'ImageUpdate',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      imageCreate: 'string',
      imageId: 'string',
      imageSize: 'number',
      imageUpdate: 'string',
      status: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagScanResultResponseBodyVulnerabilities extends $dara.Model {
  /**
   * @remarks
   * The ID of the image layer where the vulnerability was detected.
   * 
   * @example
   * sha256:123456717b8e40b6480979b739010d8d549989602bcdd07922119aec6f9dbe57
   */
  addedBy?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * Vulnerability
   */
  aliasName?: string;
  /**
   * @remarks
   * The URL of the vulnerability.
   * 
   * @example
   * https://security-tracker.debian.org/tracker/CVE-2009-5155
   */
  cveLink?: string;
  /**
   * @remarks
   * The directory of the vulnerability.
   * 
   * @example
   * /test.txt
   */
  cveLocation?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * CVE-2009-5155
   */
  cveName?: string;
  /**
   * @remarks
   * The description of the vulnerability.
   * 
   * @example
   * description.
   */
  description?: string;
  /**
   * @remarks
   * The cause of the vulnerability.
   * 
   * @example
   * eglibc
   */
  feature?: string;
  /**
   * @remarks
   * The command used to fix the vulnerability.
   * 
   * @example
   * yum install -y xxx
   */
  fixCmd?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   `cve`: image system vulnerability
   * *   `sca`: image application vulnerability
   * 
   * @example
   * cve
   */
  scanType?: string;
  /**
   * @remarks
   * The severity of the vulnerability.
   * 
   * @example
   * Medium
   */
  severity?: string;
  /**
   * @remarks
   * The version of the vulnerability.
   * 
   * @example
   * 2.19-6.9
   */
  version?: string;
  /**
   * @remarks
   * The version where the vulnerability was fixed.
   * 
   * @example
   * 2.19-18+deb8u5
   */
  versionFixed?: string;
  /**
   * @remarks
   * The format of the vulnerability.
   * 
   * @example
   * dpkg
   */
  versionFormat?: string;
  static names(): { [key: string]: string } {
    return {
      addedBy: 'AddedBy',
      aliasName: 'AliasName',
      cveLink: 'CveLink',
      cveLocation: 'CveLocation',
      cveName: 'CveName',
      description: 'Description',
      feature: 'Feature',
      fixCmd: 'FixCmd',
      scanType: 'ScanType',
      severity: 'Severity',
      version: 'Version',
      versionFixed: 'VersionFixed',
      versionFormat: 'VersionFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedBy: 'string',
      aliasName: 'string',
      cveLink: 'string',
      cveLocation: 'string',
      cveName: 'string',
      description: 'string',
      feature: 'string',
      fixCmd: 'string',
      scanType: 'string',
      severity: 'string',
      version: 'string',
      versionFixed: 'string',
      versionFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTriggerResponseBodyTriggers extends $dara.Model {
  /**
   * @remarks
   * The type of the event that activates the trigger. Valid values:
   * 
   * *   `BUILD_SUCCESS`: The trigger is activated when an image building task is successful.
   * *   `BUILD_Fail`: The trigger is activated when an image building task fails.
   * 
   * @example
   * BUILD_SUCCESS
   */
  repoEvent?: string;
  /**
   * @remarks
   * The ID of the trigger.
   * 
   * @example
   * crw-vriyql9eq7ep****
   */
  triggerId?: string;
  /**
   * @remarks
   * The name of the trigger.
   * 
   * @example
   * test
   */
  triggerName?: string;
  /**
   * @remarks
   * The image tag based on which the trigger is set.
   * 
   * @example
   * *
   */
  triggerTag?: string;
  /**
   * @remarks
   * The type of the trigger. Valid values:
   * 
   * *   `ALL`: a trigger that supports both tags and regular expressions.
   * *   `TAG_LISTTAG`: a tag-based trigger.
   * *   `TAG_REG_EXP`: a regular expression-based trigger.
   * 
   * @example
   * ALL
   */
  triggerType?: string;
  /**
   * @remarks
   * The URL of the trigger.
   * 
   * @example
   * https://www.test.com
   */
  triggerUrl?: string;
  static names(): { [key: string]: string } {
    return {
      repoEvent: 'RepoEvent',
      triggerId: 'TriggerId',
      triggerName: 'TriggerName',
      triggerTag: 'TriggerTag',
      triggerType: 'TriggerType',
      triggerUrl: 'TriggerUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoEvent: 'string',
      triggerId: 'string',
      triggerName: 'string',
      triggerTag: 'string',
      triggerType: 'string',
      triggerUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryResponseBodyRepositories extends $dara.Model {
  /**
   * @example
   * 1564153576000
   */
  createTime?: number;
  /**
   * @example
   * cri-kmsiwlxxdcv****
   */
  instanceId?: string;
  /**
   * @example
   * 1564153576000
   */
  modifiedTime?: number;
  /**
   * @example
   * MANUAL
   */
  repoBuildType?: string;
  /**
   * @example
   * crr-03cuozrsqhkw****
   */
  repoId?: string;
  /**
   * @example
   * test
   */
  repoName?: string;
  /**
   * @example
   * test
   */
  repoNamespaceName?: string;
  /**
   * @example
   * NORMAL
   */
  repoStatus?: string;
  /**
   * @example
   * PRIVATE
   */
  repoType?: string;
  /**
   * @example
   * rg-acfm4n5kzyfxxxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * test OK
   */
  summary?: string;
  /**
   * @example
   * true
   */
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      modifiedTime: 'ModifiedTime',
      repoBuildType: 'RepoBuildType',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
      repoType: 'RepoType',
      resourceGroupId: 'ResourceGroupId',
      summary: 'Summary',
      tagImmutability: 'TagImmutability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      modifiedTime: 'number',
      repoBuildType: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
      repoType: 'string',
      resourceGroupId: 'string',
      summary: 'string',
      tagImmutability: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScanBaselineByTaskResponseBodyScanBaselines extends $dara.Model {
  /**
   * @remarks
   * The category of the baseline risk.
   */
  baselineClassAlias?: string;
  /**
   * @remarks
   * The suggestion on handling the baseline risk.
   */
  baselineDetailAdvice?: string;
  /**
   * @remarks
   * The description of the baseline risk.
   */
  baselineDetailDescription?: string;
  /**
   * @remarks
   * The path and content of the baseline risk.
   * 
   * @example
   * usr/local/www/project/environments/dev/common/config/paramsxxx
   */
  baselineDetailPrompt?: string;
  /**
   * @remarks
   * The number of baseline risks.
   * 
   * @example
   * 1
   */
  baselineItemCount?: number;
  /**
   * @remarks
   * The name of the baseline risk.
   */
  baselineNameAlias?: string;
  /**
   * @remarks
   * The name of the baseline risk.
   * 
   * @example
   * ak_leak
   */
  baselineNameKey?: string;
  /**
   * @remarks
   * The severity of the baseline risk.
   * 
   * @example
   * high
   */
  baselineNameLevel?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 1695090008000
   */
  createTime?: number;
  /**
   * @remarks
   * The time when the image was first scanned.
   * 
   * @example
   * 2024-04-10 15:33:26
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The quantity of baseline risks whose severity is high.
   * 
   * @example
   * 1
   */
  highRiskItemCount?: number;
  /**
   * @remarks
   * The quantity of baseline risks whose severity is low.
   * 
   * @example
   * 1
   */
  lowRiskItemCount?: number;
  /**
   * @remarks
   * The quantity of baseline risks whose severity is medium.
   * 
   * @example
   * 1
   */
  middleRiskItemCount?: number;
  /**
   * @remarks
   * The ID of the image scan task.
   * 
   * @example
   * 2328fcaa-f28a-405d-a357-asdvfrew23
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The time when the image was updated.
   * 
   * @example
   * 1684220824226
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      baselineClassAlias: 'BaselineClassAlias',
      baselineDetailAdvice: 'BaselineDetailAdvice',
      baselineDetailDescription: 'BaselineDetailDescription',
      baselineDetailPrompt: 'BaselineDetailPrompt',
      baselineItemCount: 'BaselineItemCount',
      baselineNameAlias: 'BaselineNameAlias',
      baselineNameKey: 'BaselineNameKey',
      baselineNameLevel: 'BaselineNameLevel',
      createTime: 'CreateTime',
      firstScanTime: 'FirstScanTime',
      highRiskItemCount: 'HighRiskItemCount',
      lowRiskItemCount: 'LowRiskItemCount',
      middleRiskItemCount: 'MiddleRiskItemCount',
      scanTaskId: 'ScanTaskId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineClassAlias: 'string',
      baselineDetailAdvice: 'string',
      baselineDetailDescription: 'string',
      baselineDetailPrompt: 'string',
      baselineItemCount: 'number',
      baselineNameAlias: 'string',
      baselineNameKey: 'string',
      baselineNameLevel: 'string',
      createTime: 'number',
      firstScanTime: 'number',
      highRiskItemCount: 'number',
      lowRiskItemCount: 'number',
      middleRiskItemCount: 'number',
      scanTaskId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScanMaliciousFileByTaskResponseBodyScanMaliciousFiles extends $dara.Model {
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 2023-04-10 11:42:06
   */
  createTime?: number;
  /**
   * @remarks
   * The path of the file.
   * 
   * @example
   * tenant/0000000000000000/
   */
  filePath?: string;
  /**
   * @remarks
   * The time when the image was first scanned.
   * 
   * @example
   * 2023-04-10 11:42:06
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The severity of the malicious file.
   * 
   * @example
   * remind
   */
  level?: string;
  /**
   * @remarks
   * The MD5 hash value of the malicious file.
   * 
   * @example
   * e76c9759783cbbc9be0ff91ca3xxxxxx
   */
  maliciousMd5?: string;
  /**
   * @remarks
   * The type of the malicious file.
   * 
   * @example
   * Suspected to contain Webshell code
   */
  maliciousName?: string;
  /**
   * @remarks
   * The ID of the image scan task.
   * 
   * @example
   * fe2d8980-de45-4f55-b57d-e438e6d2e972
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The time when the image was updated.
   * 
   * @example
   * 2023-04-10 11:42:06
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      filePath: 'FilePath',
      firstScanTime: 'FirstScanTime',
      level: 'Level',
      maliciousMd5: 'MaliciousMd5',
      maliciousName: 'MaliciousName',
      scanTaskId: 'ScanTaskId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      filePath: 'string',
      firstScanTime: 'number',
      level: 'string',
      maliciousMd5: 'string',
      maliciousName: 'string',
      scanTaskId: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with acs: or aliyun, and cannot contain http:// or https://.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * It can be up to 128 characters in length. It cannot start with acs: or aliyun and cannot contain http:// or https://.
   * 
   * @example
   * test-val
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

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * cri-w19e7qr2wibl****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test-key
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test-val
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $dara.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  validate() {
    if(Array.isArray(this.tagResource)) {
      $dara.Model.validateArray(this.tagResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * A tag key can be up to 128 characters in length. It cannot start with acs: or aliyun, and cannot contain http:// or https://.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * A tag value can be up to 128 characters in length. It cannot start with acs: or aliyun, and cannot contain http:// or https://.
   * 
   * @example
   * test-val
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

export class CancelArtifactBuildTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the artifact building task.
   * 
   * This parameter is required.
   * 
   * @example
   * i2ei-12****
   */
  buildTaskId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-shac42yvqzvq****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      buildTaskId: 'BuildTaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTaskId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelArtifactBuildTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C4C7DD0C-C9D6-437A-A7EE-121EFD70D002
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelArtifactBuildTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelArtifactBuildTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelArtifactBuildTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRepoBuildRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building record.
   * 
   * This parameter is required.
   * 
   * @example
   * 74FDBA62-30C0-4F22-BE7B-F1D36FD1****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-tquyps22md8p****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      instanceId: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRepoBuildRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4CE1F661-75DD-4EBD-A4AD-057B26834ABB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRepoBuildRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelRepoBuildRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelRepoBuildRecordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRepoSyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the replication task.
   * 
   * This parameter is required.
   * 
   * @example
   * rst-biu4u4pm4it5****
   */
  syncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      syncTaskId: 'SyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      syncTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRepoSyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the CancelRepoSyncTask request is successful. Valid values:
   * 
   * *   `true`: successful
   * *   `false`: failed
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EB9C5722-51E2-4497-A573-575B0CA5CE0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelRepoSyncTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelRepoSyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelRepoSyncTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which you want to move the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekz5nlvlaksnvi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-8qong6ve5p3mhlgt
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen-finance-1
   */
  resourceRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 314CB661-35A5-5F01-A623-3EC6F87FF52F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactBuildRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact.
   * 
   * *   `ACCELERATED_IMAGE`: accelerated images.
   * 
   * This parameter is required.
   * 
   * @example
   * ACCELERATED_IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-cxreylqvcyje****
   */
  instanceId?: string;
  /**
   * @remarks
   * Additional parameters.
   * 
   * @example
   * {}
   */
  parameters?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the effective range of the rule.
   * 
   * *   Set the value to the ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-pmajihou6cg0****
   */
  scopeId?: string;
  /**
   * @remarks
   * The effective range of the rule. Valid values:
   * 
   * *   `REPOSITORY`
   * 
   * This parameter is required.
   * 
   * @example
   * REPOSITORY
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      instanceId: 'InstanceId',
      parameters: 'Parameters',
      scopeId: 'ScopeId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      instanceId: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      scopeId: 'string',
      scopeType: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactBuildRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact.
   * 
   * *   `ACCELERATED_IMAGE`: accelerated images.
   * 
   * This parameter is required.
   * 
   * @example
   * ACCELERATED_IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-cxreylqvcyje****
   */
  instanceId?: string;
  /**
   * @remarks
   * Additional parameters.
   * 
   * @example
   * {}
   */
  parametersShrink?: string;
  /**
   * @remarks
   * The ID of the effective range of the rule.
   * 
   * *   Set the value to the ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-pmajihou6cg0****
   */
  scopeId?: string;
  /**
   * @remarks
   * The effective range of the rule. Valid values:
   * 
   * *   `REPOSITORY`
   * 
   * This parameter is required.
   * 
   * @example
   * REPOSITORY
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      instanceId: 'InstanceId',
      parametersShrink: 'Parameters',
      scopeId: 'ScopeId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      instanceId: 'string',
      parametersShrink: 'string',
      scopeId: 'string',
      scopeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactBuildRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the accelerated image building rule.
   * 
   * @example
   * crabr-7dfa5qye5****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C8E90AB5-0A96-5D12-9E59-11EE46360642
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRuleId: 'BuildRuleId',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRuleId: 'string',
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactBuildRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateArtifactBuildRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateArtifactBuildRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactLifecycleRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specify whether to automatically execute the lifecycle management rule.
   * 
   * @example
   * false
   */
  auto?: boolean;
  /**
   * @remarks
   * Specify whether to enable lifecycle management for the artifact.
   * 
   * @example
   * true
   */
  enableDeleteTag?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-gbwfk7qbgrxe****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * dev-backend
   */
  namespaceName?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test_1
   */
  repoName?: string;
  /**
   * @remarks
   * The number of images that you want to retain.
   * 
   * @example
   * 30
   */
  retentionTagCount?: number;
  /**
   * @remarks
   * The execution cycle of the lifecycle management rule.
   * 
   * @example
   * WEEK
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The deletion scope.
   * 
   * @example
   * INSTANCE
   */
  scope?: string;
  /**
   * @remarks
   * The regular expression that is used to indicate which image tags are retained.
   * 
   * @example
   * release-.*
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      auto: 'Auto',
      enableDeleteTag: 'EnableDeleteTag',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      retentionTagCount: 'RetentionTagCount',
      scheduleTime: 'ScheduleTime',
      scope: 'Scope',
      tagRegexp: 'TagRegexp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auto: 'boolean',
      enableDeleteTag: 'boolean',
      instanceId: 'string',
      namespaceName: 'string',
      repoName: 'string',
      retentionTagCount: 'number',
      scheduleTime: 'string',
      scope: 'string',
      tagRegexp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactLifecycleRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * True
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AA66379-B880-5123-9F6A-96BB25D****
   */
  requestId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cralr-b6thg027zmk1****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactLifecycleRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateArtifactLifecycleRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateArtifactLifecycleRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactSubscriptionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether an acceleration link is enabled for image subscription. The subscription acceleration feature is in public preview. The feature is optimized based on scheduling policies and network links to accelerate image subscription.
   * 
   * @example
   * true
   */
  accelerate?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-c0o11woew0k****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Container Registry namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * Indicates whether the original image is overwritten.
   * 
   * @example
   * true
   */
  override?: boolean;
  /**
   * @remarks
   * The operating system and architecture. If the source repository contains a multi-arch image, only the specified operating system and architecture are subscribed to the destination repository of the Enterprise Edition instance. Subscribe to the destination repository of an Enterprise Edition instance
   * 
   * This parameter is required.
   */
  platform?: string[];
  /**
   * @remarks
   * The name of the Container Registry repository.
   * 
   * This parameter is required.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The source namespace.
   * 
   * @example
   * library
   */
  sourceNamespaceName?: string;
  /**
   * @remarks
   * The source of the artifact.
   * 
   * Valid values:
   * 
   * *   DOCKER_HUB: Docker Hub
   * *   GCR: GCR
   * *   QUAY: Quay.io
   * 
   * This parameter is required.
   * 
   * @example
   * DOCKER_HUB
   */
  sourceProvider?: string;
  /**
   * @remarks
   * The source repository.
   * 
   * This parameter is required.
   * 
   * @example
   * nginx
   */
  sourceRepoName?: string;
  /**
   * @remarks
   * The number of subscribed images.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  tagCount?: number;
  /**
   * @remarks
   * The image tag in the subscription source repository. Regular expressions are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * release-v.*
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      accelerate: 'Accelerate',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      override: 'Override',
      platform: 'Platform',
      repoName: 'RepoName',
      sourceNamespaceName: 'SourceNamespaceName',
      sourceProvider: 'SourceProvider',
      sourceRepoName: 'SourceRepoName',
      tagCount: 'TagCount',
      tagRegexp: 'TagRegexp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerate: 'boolean',
      instanceId: 'string',
      namespaceName: 'string',
      override: 'boolean',
      platform: { 'type': 'array', 'itemType': 'string' },
      repoName: 'string',
      sourceNamespaceName: 'string',
      sourceProvider: 'string',
      sourceRepoName: 'string',
      tagCount: 'number',
      tagRegexp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.platform)) {
      $dara.Model.validateArray(this.platform);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactSubscriptionRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicate whether the API request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 02B27D80-FD32-5155-931A-93700779BB9E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the artifact subscription rule.
   * 
   * @example
   * crasr-lxdfele7dg4****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactSubscriptionRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateArtifactSubscriptionRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateArtifactSubscriptionRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactSubscriptionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-4ec5xvj4j0l****
   */
  instanceId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crasr-88s7vmelc3m****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactSubscriptionTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 132D314B-BDD4-564C-89FE-3E2BAE115239
   */
  requestId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * crast-40le4es9yh0p****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArtifactSubscriptionTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateArtifactSubscriptionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateArtifactSubscriptionTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBuildRecordByRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0A311FC5-B8C6-4332-80E4-539EB73****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * crr-hnoq7j93or3k****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      instanceId: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBuildRecordByRecordResponseBody extends $dara.Model {
  /**
   * @example
   * crbr-ly77w5i3t31f****
   */
  buildRecordId?: string;
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * 4CE1F661-75DD-4EBD-A4AD-057B26834ABB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBuildRecordByRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBuildRecordByRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBuildRecordByRecordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBuildRecordByRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building rule.
   * 
   * This parameter is required.
   * 
   * @example
   * crbr-1j95g4bu2s1i****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-asd6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-8dz3aedjqlmk****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRuleId: 'BuildRuleId',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRuleId: 'string',
      instanceId: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBuildRecordByRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building record.
   * 
   * @example
   * 0A311FC5-B8C6-4332-80E4-539EB73****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B01B8857-A16E-40E9-A37E-764F15776FAA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBuildRecordByRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBuildRecordByRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBuildRecordByRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChainRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the delivery chain in the JSON format.
   * 
   * @example
   * chainconfig
   */
  chainConfig?: string;
  /**
   * @remarks
   * The description of the delivery chain.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-4cdrlqmhn4gm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the delivery chain.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * ns1
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * Repositories in which the delivery chain does not take effect.
   */
  scopeExclude?: string[];
  static names(): { [key: string]: string } {
    return {
      chainConfig: 'ChainConfig',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      scopeExclude: 'ScopeExclude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainConfig: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      scopeExclude: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scopeExclude)) {
      $dara.Model.validateArray(this.scopeExclude);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery chain.
   * 
   * @example
   * chi-02ymhtwl3cq8****
   */
  chainId?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4BC03B36-E515-5806-99AC-268AE3C0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateChainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateChainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChartNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically create repositories in the namespace. Valid values:
   * 
   * \\-`  true `: automatically creates repositories in the namespace.
   * 
   * \\-`  false `: does not automatically create repositories in the namespace.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  /**
   * @remarks
   * The default repository type. Valid values:
   * 
   * *   `PUBLIC`: a public repository
   * *   `PRIVATE`: a private repository
   * 
   * @example
   * PUBLIC
   */
  defaultRepoType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace01
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChartNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 724402D0-75CD-4794-BC20-7D3720823AE0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChartNamespaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateChartNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateChartNamespaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChartRepositoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * repo01
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace01
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The default repository type. Valid values:
   * 
   * *   `PUBLIC`: a public repository.
   * *   `PRIVATE`: a private repository.
   * 
   * You can specify the RepoType or Summary parameter. The RepoType parameter is optional.
   * 
   * @example
   * PUBLIC
   */
  repoType?: string;
  /**
   * @remarks
   * The summary of the repository.
   * 
   * @example
   * summary
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoType: 'RepoType',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoType: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChartRepositoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * @example
   * crcr-2micxey5ewj4****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 60390244-A483-491A-B41D-F866C95380A1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      repoId: 'RepoId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      repoId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChartRepositoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateChartRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateChartRepositoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceEndpointAclPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The type of the endpoint. Set the value to Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  endpointType?: string;
  /**
   * @remarks
   * The CIDR block that is accessible.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.1/32
   */
  entry?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the module that you want to access. Valid values:
   * 
   * *   `Registry`: the image repository.
   * *   `Chart`: a Helm chart.
   * 
   * @example
   * Registry
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      endpointType: 'EndpointType',
      entry: 'Entry',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      endpointType: 'string',
      entry: 'string',
      instanceId: 'string',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceEndpointAclPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D735C5EC-4206-4F48-A090-307BF56BEB99
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceEndpointAclPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceEndpointAclPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceEndpointAclPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceVpcEndpointLinkedVpcRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically create Alibaba Cloud DNS PrivateZone records. Valid values:
   * 
   * >  If you enable automatic creation of PrivateZone records, a PrivateZone record is automatically created when you associate a VPC with the instance.
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * false
   */
  enableCreateDNSRecordInPvzt?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the module that you want to access. Valid values:
   * 
   * *   `Registry`: image repositories.
   * *   `Chart`: Helm charts.
   * 
   * @example
   * Registry
   */
  moduleName?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf6pa68zxnnlc48dd****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch that is associated with the specified VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-uf6u0kn8x2gbzxfn2****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      enableCreateDNSRecordInPvzt: 'EnableCreateDNSRecordInPvzt',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableCreateDNSRecordInPvzt: 'boolean',
      instanceId: 'string',
      moduleName: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceVpcEndpointLinkedVpcResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4978DCC-ECBD-40B0-A714-EE6959B22C77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceVpcEndpointLinkedVpcResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceVpcEndpointLinkedVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceVpcEndpointLinkedVpcResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically create an image repository in the namespace.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  /**
   * @remarks
   * The default type of the repository that is automatically created. Valid values:
   * 
   * *   `PUBLIC`: a public repository
   * *   `PRIVATE`: a private repository
   * 
   * @example
   * PUBLIC
   */
  defaultRepoType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace. The name must be 2 to 120 characters in length, and can contain lowercase letters, digits, and the following delimiters: underscores (_), hyphens (-), and periods (.). The name cannot start or end with a delimiter.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace1
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BC648259-91A7-4502-BED3-EDF64361FA83
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNamespaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNamespaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoBuildRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Building arguments.
   */
  buildArgs?: string[];
  /**
   * @remarks
   * The path of the Dockerfile.
   * 
   * @example
   * /
   */
  dockerfileLocation?: string;
  /**
   * @remarks
   * The name of the Dockerfile.
   * 
   * @example
   * Dockerfile
   */
  dockerfileName?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * v0.9.5
   */
  imageTag?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * Architecture for image building. Valid values:
   * 
   * *   `linux/amd64`
   * *   `linux/arm64`
   * *   `linux/386`
   * *   `linux/arm/v7`
   * *   `inux/arm/v6`
   * 
   * Default value: `linux/amd64`
   */
  platforms?: string[];
  /**
   * @remarks
   * The name of the push that triggers the building rule.
   * 
   * This parameter is required.
   * 
   * @example
   * master
   */
  pushName?: string;
  /**
   * @remarks
   * The type of the push that triggers the building rule. Valid values:
   * 
   * *   `GIT_TAG`: tag push
   * *   `GIT_BRANCH`: branch push
   * 
   * This parameter is required.
   * 
   * @example
   * GIT_BRANCH
   */
  pushType?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-8dz3aedjqlmk****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildArgs: 'BuildArgs',
      dockerfileLocation: 'DockerfileLocation',
      dockerfileName: 'DockerfileName',
      imageTag: 'ImageTag',
      instanceId: 'InstanceId',
      platforms: 'Platforms',
      pushName: 'PushName',
      pushType: 'PushType',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildArgs: { 'type': 'array', 'itemType': 'string' },
      dockerfileLocation: 'string',
      dockerfileName: 'string',
      imageTag: 'string',
      instanceId: 'string',
      platforms: { 'type': 'array', 'itemType': 'string' },
      pushName: 'string',
      pushType: 'string',
      repoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildArgs)) {
      $dara.Model.validateArray(this.buildArgs);
    }
    if(Array.isArray(this.platforms)) {
      $dara.Model.validateArray(this.platforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoBuildRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the building rule.
   * 
   * @example
   * crbr-ly77w5i3t31f****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4CE1F661-75DD-4EBD-A4AD-057B26834ABB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRuleId: 'BuildRuleId',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRuleId: 'string',
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoBuildRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRepoBuildRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRepoBuildRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSourceCodeRepoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to trigger image building when source code is committed. Valid values:
   * 
   * *   `true`: triggers image building when source code is committed.
   * *   `false`: does not trigger image building when source code is committed.
   * 
   * @example
   * true
   */
  autoBuild?: boolean;
  /**
   * @remarks
   * The name of the source code repository.
   * 
   * This parameter is required.
   * 
   * @example
   * repo
   */
  codeRepoName?: string;
  /**
   * @remarks
   * The namespace to which the source code repository belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace
   */
  codeRepoNamespaceName?: string;
  /**
   * @remarks
   * The type of the source code hosting platform. Valid values: `GITHUB`, `GITLAB`, `GITEE`, `CODE`, and `CODEUP`.
   * 
   * This parameter is required.
   * 
   * @example
   * GITHUB
   */
  codeRepoType?: string;
  /**
   * @remarks
   * Specifies whether to disable building caches. Valid values:
   * 
   * *   `true`: disables building caches.
   * *   `false`: enables building caches.
   * 
   * @example
   * false
   */
  disableCacheBuild?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-shac42yvqzvq****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable Build With Servers Deployed Outside Chinese Mainland. Valid values:
   * 
   * *   `true`: enables Build With Servers Deployed Outside Chinese Mainland.
   * *   `false`: does not enable Build With Servers Deployed Outside Chinese Mainland.
   * 
   * @example
   * false
   */
  overseaBuild?: boolean;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-gzsrlevmvoaq****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      codeRepoName: 'CodeRepoName',
      codeRepoNamespaceName: 'CodeRepoNamespaceName',
      codeRepoType: 'CodeRepoType',
      disableCacheBuild: 'DisableCacheBuild',
      instanceId: 'InstanceId',
      overseaBuild: 'OverseaBuild',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'boolean',
      codeRepoName: 'string',
      codeRepoNamespaceName: 'string',
      codeRepoType: 'string',
      disableCacheBuild: 'boolean',
      instanceId: 'string',
      overseaBuild: 'boolean',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSourceCodeRepoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4CE1F661-75DD-4EBD-A4AD-057B26834ABB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSourceCodeRepoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRepoSourceCodeRepoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRepoSourceCodeRepoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  namespaceName?: string;
  /**
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The rule that is used to filter repositories.
   * 
   * >  This parameter is valid only when SyncScope is set to `NAMESPACE`.
   * 
   * @example
   * .*
   */
  repoNameFilter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rule
   */
  syncRuleName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * REPO
   */
  syncScope?: string;
  /**
   * @example
   * PASSIVE
   */
  syncTrigger?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * .*
   */
  tagFilter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-ibxs3piklys3****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  targetNamespaceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  targetRegionId?: string;
  /**
   * @example
   * repo1
   */
  targetRepoName?: string;
  /**
   * @example
   * 12645940***
   */
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      repoNameFilter: 'RepoNameFilter',
      syncRuleName: 'SyncRuleName',
      syncScope: 'SyncScope',
      syncTrigger: 'SyncTrigger',
      tagFilter: 'TagFilter',
      targetInstanceId: 'TargetInstanceId',
      targetNamespaceName: 'TargetNamespaceName',
      targetRegionId: 'TargetRegionId',
      targetRepoName: 'TargetRepoName',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      repoName: 'string',
      repoNameFilter: 'string',
      syncRuleName: 'string',
      syncScope: 'string',
      syncTrigger: 'string',
      tagFilter: 'string',
      targetInstanceId: 'string',
      targetNamespaceName: 'string',
      targetRegionId: 'string',
      targetRepoName: 'string',
      targetUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncRuleResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * 8F8A0BA6-7F06-4BAE-B147-10BD6A25****
   */
  requestId?: string;
  /**
   * @example
   * crsr-gk5p2ns1kzns****
   */
  syncRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      syncRuleId: 'SyncRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      syncRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRepoSyncRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRepoSyncRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  override?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * crr-iql7jalx4g0****
   */
  repoId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tag1
   */
  tag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-ibxs3piklys3****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  targetNamespace?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  targetRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * repo1
   */
  targetRepoName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * tag1
   */
  targetTag?: string;
  /**
   * @example
   * 12345***
   */
  targetUserId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      override: 'Override',
      repoId: 'RepoId',
      tag: 'Tag',
      targetInstanceId: 'TargetInstanceId',
      targetNamespace: 'TargetNamespace',
      targetRegionId: 'TargetRegionId',
      targetRepoName: 'TargetRepoName',
      targetTag: 'TargetTag',
      targetUserId: 'TargetUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      override: 'boolean',
      repoId: 'string',
      tag: 'string',
      targetInstanceId: 'string',
      targetNamespace: 'string',
      targetRegionId: 'string',
      targetRepoName: 'string',
      targetTag: 'string',
      targetUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncTaskResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * 8F8A0BA6-7F06-4BAE-B147-10BD6A25****
   */
  requestId?: string;
  /**
   * @example
   * rst-gbch330f0c****
   */
  syncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      syncTaskId: 'SyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      syncTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRepoSyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRepoSyncTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncTaskByRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-hnoq7j93or3k****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the synchronization rule.
   * 
   * This parameter is required.
   * 
   * @example
   * crsr-o8n4dijbumgq****
   */
  syncRuleId?: string;
  /**
   * @remarks
   * The version of the image to be synchronized.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.24
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      syncRuleId: 'SyncRuleId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      syncRuleId: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncTaskByRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 17A4C658-AE8F-4A08-821F-EDCB5FC74EE8
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * rst-biu4u4pm4it5****
   */
  syncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      syncTaskId: 'SyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      syncTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoSyncTaskByRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRepoSyncTaskByRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRepoSyncTaskByRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTagRequest extends $dara.Model {
  /**
   * @remarks
   * The source image tag.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  fromTag?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-shac42yvqzv****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The image tag that you want to create.
   * 
   * This parameter is required.
   * 
   * @example
   * v2
   */
  toTag?: string;
  static names(): { [key: string]: string } {
    return {
      fromTag: 'FromTag',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      toTag: 'ToTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTag: 'string',
      instanceId: 'string',
      namespaceName: 'string',
      repoName: 'string',
      toTag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C4C7DD0C-C9D6-437A-A7EE-8BY*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRepoTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRepoTagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTagScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * sha256:815386ebbe9a3490f38785ab11bda34ec8dacf4634af77b8912832d4f85dca04
   */
  digest?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-xwvi3osiy4ff****
   */
  repoId?: string;
  /**
   * @remarks
   * The type of the scanning engine.
   * 
   * *   `SAS_SCAN_SERVICE`: Security Center scan engine (paid service)
   * *   `ACR_SCAN_SERVICE`: Container Registry scan engine
   * 
   * @example
   * ACR_SCAN_SERVICE
   */
  scanService?: string;
  /**
   * @remarks
   * The version of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.24
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      scanService: 'ScanService',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      instanceId: 'string',
      repoId: 'string',
      scanService: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTagScanTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BC648259-91A7-4502-BED3-EDF64361FA83
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTagScanTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRepoTagScanTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRepoTagScanTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-xwvi3osiy4ff****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the trigger.
   * 
   * This parameter is required.
   * 
   * @example
   * trigger1
   */
  triggerName?: string;
  /**
   * @remarks
   * The image tag based on which the trigger is set.
   * 
   * > 
   * 
   * *   If `TriggerType` is set to `ALL`, `TriggerTag` can be set to a string or an array, for example, `*`.
   * 
   * *   If `TriggerType` is set to `TAG_LIST`, `TriggerTag` must be set to an array, for example, `[1]`.
   * *   If `TriggerType` is set to `TAG_REG_EXP`, `TriggerTag` must be set to a string, for example, `*`.
   * 
   * @example
   * [1]
   */
  triggerTag?: string;
  /**
   * @remarks
   * The type of the trigger. Valid values:
   * 
   * *   `ALL`: a trigger that supports both tags and regular expressions.
   * *   `TAG_LIST`: a tag-based trigger.
   * *   `TAG_REG_EXP`: a regular expression-based trigger.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  triggerType?: string;
  /**
   * @remarks
   * The URL of the trigger.
   * 
   * This parameter is required.
   * 
   * @example
   * http://www.mysite.com
   */
  triggerUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      triggerName: 'TriggerName',
      triggerTag: 'TriggerTag',
      triggerType: 'TriggerType',
      triggerUrl: 'TriggerUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      triggerName: 'string',
      triggerTag: 'string',
      triggerType: 'string',
      triggerUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B79F5E0E-8770-407D-BCB6-ECF4BA9C****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the trigger.
   * 
   * @example
   * crw-0z4pf81pgz35****
   */
  triggerId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      triggerId: 'TriggerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      triggerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepoTriggerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRepoTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRepoTriggerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the repository.
   * 
   * @example
   * repo1
   */
  detail?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the image repository belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace01
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The type of the repository. Valid values:
   * 
   * *   `PUBLIC`: The repository is a public repository.
   * *   `PRIVATE`: The repository is a private repository.
   * 
   * This parameter is required.
   * 
   * @example
   * PRIVATE
   */
  repoType?: string;
  /**
   * @remarks
   * The summary about the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * repo1
   */
  summary?: string;
  /**
   * @remarks
   * Specifies whether to enable the feature of image tag immutability. Valid values:
   * 
   * *   `true`: enables the feature of image tag immutability.
   * *   `false`: disables the feature of image tag immutability.
   * 
   * @example
   * true
   */
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceId: 'InstanceId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoType: 'RepoType',
      summary: 'Summary',
      tagImmutability: 'TagImmutability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      instanceId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoType: 'string',
      summary: 'string',
      tagImmutability: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-xwvi3osiy4ff****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 886FB272-15C3-44FC-AA54-F4ABD5B93A28
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      repoId: 'RepoId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      repoId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRepositoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateRepositoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactLifecycleRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-brlg4cbj2ylkrqqq
   */
  instanceId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cralr-3v8pao9k7chb8q62
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactLifecycleRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * True
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 001AB638-C99B-5A27-8AC9-B2DBABFFEBB5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactLifecycleRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteArtifactLifecycleRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteArtifactLifecycleRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactSubscriptionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-c0o11woew0k****
   */
  instanceId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crasr-mdbpung4i1rm****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactSubscriptionRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 02B27D80-FD32-5155-931A-93700779BB9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteArtifactSubscriptionRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteArtifactSubscriptionRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteArtifactSubscriptionRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChainRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery pipeline.
   * 
   * This parameter is required.
   * 
   * @example
   * chi-02ymhtwl3cq8****
   */
  chainId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-4cdrlqmhn4gm****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DB1809A8-E1C8-5707-BAF8-D4FC1C11****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteChainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteChainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the chart namespace that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * ns2
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FEC62DF1-1394-467F-A69F-4BC1BA29F383
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartNamespaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteChartNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteChartNamespaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the chart.
   * 
   * This parameter is required.
   * 
   * @example
   * chart3
   */
  chart?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The version of the chart that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.1.0
   */
  release?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      chart: 'Chart',
      instanceId: 'InstanceId',
      release: 'Release',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chart: 'string',
      instanceId: 'string',
      release: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartReleaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C2D6CE47-6DEF-45F4-A1AC-90F3AFBA751F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartReleaseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteChartReleaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteChartReleaseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartRepositoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * repo01
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace01
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartRepositoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 12589EF7-96E2-4554-AAD7-F7209E88CAD3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteChartRepositoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteChartRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteChartRepositoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventCenterRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the event notification rule.
   * 
   * @example
   * crecr-n6pbhgjx*****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventCenterRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 031572FA-7D8F-4C05-B790-1071E0E05DE6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEventCenterRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteEventCenterRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteEventCenterRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceEndpointAclPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the endpoint. Set the value to Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  endpointType?: string;
  /**
   * @remarks
   * The CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 127.0.0.1/32
   */
  entry?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the module that you want to access. Valid values:
   * 
   * *   `Registry`: the image repository.
   * *   `Chart`: a Helm chart.
   * 
   * @example
   * Chart
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      entry: 'Entry',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      entry: 'string',
      instanceId: 'string',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceEndpointAclPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BDB1F145-F0FF-44E9-AADF-A678642A7C7D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceEndpointAclPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceEndpointAclPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceEndpointAclPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceVpcEndpointLinkedVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the module that you want to access. Valid values:
   * 
   * *   `Registry`: the image repository.
   * *   `Chart`: a Helm chart.
   * 
   * @example
   * Chart
   */
  moduleName?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf6pa68zxnnlc48dd****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf6pa68zxnnlc48dd****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleName: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceVpcEndpointLinkedVpcResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * true
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 20FE7A66-0044-4E23-BBEC-C434EADBD7AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceVpcEndpointLinkedVpcResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteInstanceVpcEndpointLinkedVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceVpcEndpointLinkedVpcResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * ns3
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BA08C185-8F76-48D7-ACB3-BA11BF2778F9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNamespaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNamespaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoBuildRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building rule.
   * 
   * This parameter is required.
   * 
   * @example
   * crbr-36tffn0kouvi****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-xwvi3osiy4ff****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRuleId: 'BuildRuleId',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRuleId: 'string',
      instanceId: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoBuildRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2E3F55BF-FA7B-454E-B2C6-85265E243ADC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoBuildRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRepoBuildRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRepoBuildRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoSyncRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the synchronization rule.
   * 
   * This parameter is required.
   * 
   * @example
   * crsr-gk5p2ns1kzns****
   */
  syncRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      syncRuleId: 'SyncRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      syncRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoSyncRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 72DD4198-1BB9-47A3-BC01-EAD1A6D5E173
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoSyncRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRepoSyncRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRepoSyncRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoTagRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-xwvi3osiy4ff****
   */
  repoId?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.24
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 96E66B3A-C81A-48BE-ACD6-C0AB1F9313C0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoTagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRepoTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRepoTagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-xwvi3osiy4ff****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the trigger.
   * 
   * This parameter is required.
   * 
   * @example
   * crw-0z4pf81pgz35****
   */
  triggerId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      triggerId: 'TriggerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      triggerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 85180AE4-9A57-48F8-9EF9-68ECCE54B552
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepoTriggerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRepoTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRepoTriggerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-l4933wbcmun2****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * @example
   * test-namespace
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return values
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 47DD9D56-09A0-4C52-B520-C3805DBAB96B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRepositoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteRepositoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildRuleRequest extends $dara.Model {
  /**
   * @example
   * ACCELERATED_IMAGE
   */
  artifactType?: string;
  /**
   * @example
   * crabr-o2670wqz2n70****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @example
   * crr-8dz3aedjqlmk****
   */
  scopeId?: string;
  /**
   * @example
   * REPOSITORY
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      buildRuleId: 'BuildRuleId',
      instanceId: 'InstanceId',
      scopeId: 'ScopeId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      buildRuleId: 'string',
      instanceId: 'string',
      scopeId: 'string',
      scopeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildRuleResponseBody extends $dara.Model {
  /**
   * @example
   * ACCELERATED_IMAGE
   */
  artifactType?: string;
  /**
   * @example
   * crabr-o2670wqz2n70****
   */
  buildRuleId?: string;
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  parameters?: GetArtifactBuildRuleResponseBodyParameters;
  /**
   * @example
   * 7A3E98F6-296C-54AC-A612-B75E7777D4C1
   */
  requestId?: string;
  /**
   * @example
   * crr-8dz3aedjqlmk****
   */
  scopeId?: string;
  /**
   * @example
   * REPOSITORY
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      buildRuleId: 'BuildRuleId',
      code: 'Code',
      isSuccess: 'IsSuccess',
      parameters: 'Parameters',
      requestId: 'RequestId',
      scopeId: 'ScopeId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      buildRuleId: 'string',
      code: 'string',
      isSuccess: 'boolean',
      parameters: GetArtifactBuildRuleResponseBodyParameters,
      requestId: 'string',
      scopeId: 'string',
      scopeType: 'string',
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetArtifactBuildRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetArtifactBuildRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the artifact building task.
   * 
   * This parameter is required.
   * 
   * @example
   * i2a-1yu****
   */
  buildTaskId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-shac42yvqzvq****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      buildTaskId: 'BuildTaskId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTaskId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact building task. Valid values:
   * 
   * *   `IMAGE_TO_ACCELERATED_IMAGE`: builds accelerated images for Container Service for Kubernetes (ACK) clusters.
   * *   `IMAGE_TO_ECI_ACCELERATED_IMAGE`: builds accelerated images for elastic container instances.
   * 
   * @example
   * IMAGE_TO_ACCELERATED_IMAGE
   */
  artifactBuildType?: string;
  /**
   * @remarks
   * The ID of the artifact building task.
   * 
   * @example
   * i2a-1yu****
   */
  buildTaskId?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The time when the artifact building task ends.
   * 
   * @example
   * 156871880
   */
  endTime?: number;
  instructions?: string[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C4C7DD0C-C9D6-437A-A7EE-121EFD70D002
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the source artifact.
   */
  sourceArtifact?: GetArtifactBuildTaskResponseBodySourceArtifact;
  /**
   * @remarks
   * The time when the artifact building task starts.
   * 
   * @example
   * 156871881
   */
  startTime?: number;
  /**
   * @remarks
   * The artifact that is built in the task.
   */
  targetArtifact?: GetArtifactBuildTaskResponseBodyTargetArtifact;
  /**
   * @remarks
   * The status of the artifact that is built in the task. Valid values:
   * 
   * *   `PENDING`: The artifact is being scheduled.
   * *   `BUILDING`: The artifact is being built.
   * *   `SUCCESS`: The artifact is built.
   * *   `FAILED`: The artifact fails to be built.
   * 
   * @example
   * BUILDING
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      artifactBuildType: 'ArtifactBuildType',
      buildTaskId: 'BuildTaskId',
      code: 'Code',
      endTime: 'EndTime',
      instructions: 'Instructions',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      sourceArtifact: 'SourceArtifact',
      startTime: 'StartTime',
      targetArtifact: 'TargetArtifact',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactBuildType: 'string',
      buildTaskId: 'string',
      code: 'string',
      endTime: 'number',
      instructions: { 'type': 'array', 'itemType': 'string' },
      isSuccess: 'boolean',
      requestId: 'string',
      sourceArtifact: GetArtifactBuildTaskResponseBodySourceArtifact,
      startTime: 'number',
      targetArtifact: GetArtifactBuildTaskResponseBodyTargetArtifact,
      taskStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instructions)) {
      $dara.Model.validateArray(this.instructions);
    }
    if(this.sourceArtifact && typeof (this.sourceArtifact as any).validate === 'function') {
      (this.sourceArtifact as any).validate();
    }
    if(this.targetArtifact && typeof (this.targetArtifact as any).validate === 'function') {
      (this.targetArtifact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactBuildTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetArtifactBuildTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetArtifactBuildTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactLifecycleRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cralr-a18bkiajy81****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactLifecycleRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the lifecycle management rule is automatically executed.
   * 
   * @example
   * true
   */
  auto?: boolean;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The time when the lifecycle management rule was created.
   * 
   * @example
   * 1571926439000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether lifecycle management is enabled for the artifact.
   * 
   * @example
   * true
   */
  enableDeleteTag?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The time when the lifecycle management rule was last modified.
   * 
   * @example
   * 1638259914000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test-namespace
   */
  namespaceName?: string;
  /**
   * @remarks
   * The time when the lifecycle management rule is next executed.
   * 
   * @example
   * 1701878400000
   */
  nextTime?: number;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 724402D0-75CD-4794-BC20-7D37208****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of retained images.
   * 
   * @example
   * 30
   */
  retentionTagCount?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cralr-a18bkiajy8****
   */
  ruleId?: string;
  /**
   * @remarks
   * The execution cycle of the lifecycle management rule.
   * 
   * @example
   * WEEK
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The deletion scope of artifacts.
   * 
   * @example
   * INSTANCE
   */
  scope?: string;
  /**
   * @remarks
   * The regular expression that indicates which image tags are retained.
   * 
   * @example
   * .*-alpine
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      auto: 'Auto',
      code: 'Code',
      createTime: 'CreateTime',
      enableDeleteTag: 'EnableDeleteTag',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      namespaceName: 'NamespaceName',
      nextTime: 'NextTime',
      repoName: 'RepoName',
      requestId: 'RequestId',
      retentionTagCount: 'RetentionTagCount',
      ruleId: 'RuleId',
      scheduleTime: 'ScheduleTime',
      scope: 'Scope',
      tagRegexp: 'TagRegexp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auto: 'boolean',
      code: 'string',
      createTime: 'number',
      enableDeleteTag: 'boolean',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      namespaceName: 'string',
      nextTime: 'number',
      repoName: 'string',
      requestId: 'string',
      retentionTagCount: 'number',
      ruleId: 'string',
      scheduleTime: 'string',
      scope: 'string',
      tagRegexp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactLifecycleRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetArtifactLifecycleRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetArtifactLifecycleRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactSubscriptionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-c0o11woew0k****
   */
  instanceId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crasr-mdbpung4i1rm****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactSubscriptionRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether an acceleration link is enabled for image subscription. The subscription acceleration feature is in public preview. The feature is optimized based on scheduling policies and network links to accelerate image subscription.
   * 
   * @example
   * true
   */
  accelerate?: boolean;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The time when the subscription rule was created.
   * 
   * @example
   * 1570759546000
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-hpdfkc6utbaq****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The time when the subscription rule was modified.
   * 
   * @example
   * 1638259914000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The name of the Container Registry namespace.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * Indicates whether the original image is overwritten.
   * 
   * @example
   * true
   */
  override?: boolean;
  /**
   * @remarks
   * The operating system and architecture. If the source repository contains multi-arch images, only the images with the specified operating system and architecture are subscribed to the destination repository of the Enterprise Edition instance.
   */
  platform?: string[];
  /**
   * @remarks
   * The name of the Container Registry repository.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4978DCC-ECBD-40B0-A714-EE6959B22C77
   */
  requestId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * crasr-mdbpung4i1rm****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the source namespace.
   * 
   * @example
   * library
   */
  sourceNamespaceName?: string;
  /**
   * @remarks
   * The source of the artifact.
   * 
   * Valid values:
   * 
   * *   DOCKER_HUB: Docker Hub
   * *   GCR: GCR
   * *   QUAY: Quay.io
   * 
   * @example
   * DOCKER_HUB
   */
  sourceProvider?: string;
  /**
   * @remarks
   * The source repository.
   * 
   * @example
   * nginx
   */
  sourceRepoName?: string;
  /**
   * @remarks
   * The number of subscribed images.
   * 
   * @example
   * 1
   */
  tagCount?: number;
  /**
   * @remarks
   * The image tag in the subscription source repository. Regular expressions are supported.
   * 
   * @example
   * release-v.*
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      accelerate: 'Accelerate',
      code: 'Code',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      namespaceName: 'NamespaceName',
      override: 'Override',
      platform: 'Platform',
      repoName: 'RepoName',
      requestId: 'RequestId',
      ruleId: 'RuleId',
      sourceNamespaceName: 'SourceNamespaceName',
      sourceProvider: 'SourceProvider',
      sourceRepoName: 'SourceRepoName',
      tagCount: 'TagCount',
      tagRegexp: 'TagRegexp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerate: 'boolean',
      code: 'string',
      createTime: 'number',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      namespaceName: 'string',
      override: 'boolean',
      platform: { 'type': 'array', 'itemType': 'string' },
      repoName: 'string',
      requestId: 'string',
      ruleId: 'string',
      sourceNamespaceName: 'string',
      sourceProvider: 'string',
      sourceRepoName: 'string',
      tagCount: 'number',
      tagRegexp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.platform)) {
      $dara.Model.validateArray(this.platform);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactSubscriptionRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetArtifactSubscriptionRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetArtifactSubscriptionRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactSubscriptionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crast-40le4es9yh0p****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactSubscriptionTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The artifact type.
   * 
   * @example
   * IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The end time of the artifact subscription task.
   * 
   * @example
   * 1691979202000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The name of the Container Registry namespace.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @remarks
   * The name of the Container Registry repository.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12589EF7-96E2-4554-AAD7-F7209E88CAD3
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the source namespace.
   * 
   * @example
   * library
   */
  sourceNamespaceName?: string;
  /**
   * @remarks
   * The artifact source.
   * 
   * @example
   * DOCKER_HUB
   */
  sourceProvider?: string;
  /**
   * @remarks
   * The name of the source repository.
   * 
   * @example
   * nginx
   */
  sourceRepoName?: string;
  /**
   * @remarks
   * The type of the source repository.
   * 
   * @example
   * PUBLIC
   */
  sourceRepoType?: string;
  /**
   * @remarks
   * The start time of the artifact subscription task.
   * 
   * @example
   * 1568718468000
   */
  startTime?: number;
  /**
   * @remarks
   * The total subscribed tags.
   * 
   * @example
   * 1
   */
  tagSubscriptionCount?: number;
  /**
   * @remarks
   * The total number of tags.
   * 
   * @example
   * 6
   */
  tagTotalCount?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * crast-40le4es9yh0p****
   */
  taskId?: string;
  /**
   * @remarks
   * The task results.
   * 
   * @example
   * SUCCESS
   */
  taskResult?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * RUNNING
   */
  taskStatus?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * @example
   * AUTO
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      code: 'Code',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      message: 'Message',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      requestId: 'RequestId',
      sourceNamespaceName: 'SourceNamespaceName',
      sourceProvider: 'SourceProvider',
      sourceRepoName: 'SourceRepoName',
      sourceRepoType: 'SourceRepoType',
      startTime: 'StartTime',
      tagSubscriptionCount: 'TagSubscriptionCount',
      tagTotalCount: 'TagTotalCount',
      taskId: 'TaskId',
      taskResult: 'TaskResult',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      code: 'string',
      endTime: 'number',
      instanceId: 'string',
      isSuccess: 'boolean',
      message: 'string',
      namespaceName: 'string',
      repoName: 'string',
      requestId: 'string',
      sourceNamespaceName: 'string',
      sourceProvider: 'string',
      sourceRepoName: 'string',
      sourceRepoType: 'string',
      startTime: 'number',
      tagSubscriptionCount: 'number',
      tagTotalCount: 'number',
      taskId: 'string',
      taskResult: 'string',
      taskStatus: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactSubscriptionTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetArtifactSubscriptionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetArtifactSubscriptionTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactSubscriptionTaskResultRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-90fxryf9pwf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crast-y64sq01bgad****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactSubscriptionTaskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A8768F6-9B47-5127-A075-9CFB9F79181F
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the artifact subscription task.
   */
  taskResults?: GetArtifactSubscriptionTaskResultResponseBodyTaskResults[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskResults: 'TaskResults',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      taskResults: { 'type': 'array', 'itemType': GetArtifactSubscriptionTaskResultResponseBodyTaskResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.taskResults)) {
      $dara.Model.validateArray(this.taskResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetArtifactSubscriptionTaskResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetArtifactSubscriptionTaskResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetArtifactSubscriptionTaskResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcvaduwb
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The temporary password returned after you call this API operation is a Security Token Service (STS) token whose validity period is 1 hour. Take note of the following items when you log on to Container Registry instances by using an STS token:
   * 
   * *   If the STS token belongs to an Alibaba Cloud account, you can use the STS token to log on to all Container Registry instances that belong to the Alibaba Cloud account.
   * *   If the STS token belongs to a Resource Access Management (RAM) user, you can use the STS token to log on to all Container Registry instances that belong to the RAM user.
   * *   You can use an STS token to access only Container Registry instances to which the STS token is scoped.
   * 
   * @example
   * shaunadadakks:uuczxnjcyeyhdjadkkajsjdjadhyucb
   */
  authorizationToken?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful.
   * 
   * *   `true`: successful
   * *   `false`: failed
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * 1571242083000
   */
  expireTime?: number;
  /**
   * @remarks
   * The username that is used to log on to the Container Registry instance.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The timestamp when the temporary password expires. Unit: milliseconds.
   * 
   * @example
   * E069EB86-E6AD-4A98-ADDE-0E993390239A
   */
  requestId?: string;
  /**
   * @remarks
   * The password that is used to log on to the Container Registry instance.
   * 
   * @example
   * temp_user_cr
   */
  tempUsername?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationToken: 'AuthorizationToken',
      code: 'Code',
      expireTime: 'ExpireTime',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      tempUsername: 'TempUsername',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationToken: 'string',
      code: 'string',
      expireTime: 'number',
      isSuccess: 'boolean',
      requestId: 'string',
      tempUsername: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAuthorizationTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAuthorizationTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chi-0ops0gsmw5x2****
   */
  chainId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-4cdrlqmhn4gm****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      chainId: 'ChainId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponseBody extends $dara.Model {
  chainConfig?: GetChainResponseBodyChainConfig;
  /**
   * @example
   * chi-0ops0gsmw5x2****
   */
  chainId?: string;
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * 1638255427000
   */
  createTime?: number;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * cri-4cdrlqmhn4gm****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * 1638259914000
   */
  modifiedTime?: number;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * C87993B5-7D61-5CAC-8D64-1AC732DD69FF
   */
  requestId?: string;
  scopeExclude?: string[];
  /**
   * @example
   * crr-nyrh2oko32xb****
   */
  scopeId?: string;
  /**
   * @example
   * REPOSITORY
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      chainConfig: 'ChainConfig',
      chainId: 'ChainId',
      code: 'Code',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      scopeExclude: 'ScopeExclude',
      scopeId: 'ScopeId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainConfig: GetChainResponseBodyChainConfig,
      chainId: 'string',
      code: 'string',
      createTime: 'number',
      description: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      name: 'string',
      requestId: 'string',
      scopeExclude: { 'type': 'array', 'itemType': 'string' },
      scopeId: 'string',
      scopeType: 'string',
    };
  }

  validate() {
    if(this.chainConfig && typeof (this.chainConfig as any).validate === 'function') {
      (this.chainConfig as any).validate();
    }
    if(Array.isArray(this.scopeExclude)) {
      $dara.Model.validateArray(this.scopeExclude);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetChainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetChainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a repository was automatically created in the namespace. Valid values:
   * 
   * *   `true`: A repository was automatically created in the namespace.
   * *   `false`: No repository was automatically created in the namespace.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The default repository type. Valid values:
   * 
   * *   `PUBLIC`: a public repository.
   * *   `PRIVATE`: a private repository.
   * 
   * @example
   * PRIVATE
   */
  defaultRepoType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * crcn-43dhbjbyt2xl****
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * ns1
   */
  namespaceName?: string;
  /**
   * @remarks
   * The status of the namespace. Valid values:
   * 
   * *   `NORMAL`: The namespace is normal.
   * *   `DELETING`: The namespace is being deleted.
   * 
   * @example
   * NORMAL
   */
  namespaceStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CD71CF13-93AA-4805-848B-69B2DD543A9A
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmv36i4is****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      code: 'Code',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      code: 'string',
      defaultRepoType: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      namespaceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartNamespaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetChartNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetChartNamespaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartRepositoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartRepositoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The time when the chart repository was created.
   * 
   * @example
   * 1563767620000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The time when the chart repository was last modified.
   * 
   * @example
   * 1563767700000
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The ID of the chart repository.
   * 
   * @example
   * crcr-c7letfwev5oq****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the chart repository.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the chart repository belongs.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The status of the chart repository. Valid values:
   * 
   * *   `NORMAL`: The repository is normal.
   * *   `DELETING`: The repository is being deleted.
   * 
   * @example
   * NORMAL
   */
  repoStatus?: string;
  /**
   * @remarks
   * The type of the chart repository. Valid values:
   * 
   * *   `PUBLIC`: a public repository
   * *   `PRIVATE`: a private repository
   * 
   * @example
   * PUBLIC
   */
  repoType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3F6AB56-DEF4-4FF5-8DE4-680362C0E21F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmv36i4is****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The summary about the chart repository.
   * 
   * @example
   * test
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
      repoType: 'RepoType',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'number',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
      repoType: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChartRepositoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetChartRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetChartRepositoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * 1571926439000
   */
  createTime?: number;
  /**
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The issue occurs on the instance.
   * 
   * @example
   * The issue occurs on the instance. Valid values: OSS_TOO_MANY_BUCKETS: The number of Object Storage Service (OSS) buckets exceeds the upper limit. OSS_BUCKET_ALREADY_EXISTS: An OSS bucket that has the duplicate name already exists. OSS_SERVICE_ROLE_UNAUTHORIZED: The OSS service-linked role is not granted permissions. USER_NOT_REGISTERED_BY_REAL_NAME: The Alibaba Cloud account has not passed a real name verification.
   */
  instanceIssue?: string;
  /**
   * @example
   * shanghai-instance1
   */
  instanceName?: string;
  /**
   * @remarks
   * The edition of the instance. Valid values: Enterprise_Basic: Basic Edition instances Enterprise_Standard: Standard Edition instances Enterprise_Advanced: Advanced Edition instances
   * 
   * @example
   * Enterprise_Basic
   */
  instanceSpecification?: string;
  /**
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * 1571926560000
   */
  modifiedTime?: number;
  /**
   * @example
   * 6EF34B18-4228-470C-860C-D28597CF010E
   */
  requestId?: string;
  /**
   * @example
   * rg-acfmv36i4isx****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: GetInstanceResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      instanceIssue: 'InstanceIssue',
      instanceName: 'InstanceName',
      instanceSpecification: 'InstanceSpecification',
      instanceStatus: 'InstanceStatus',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'number',
      instanceId: 'string',
      instanceIssue: 'string',
      instanceName: 'string',
      instanceSpecification: 'string',
      instanceStatus: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      requestId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': GetInstanceResponseBodyTags },
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

export class GetInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return value
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Number of instances
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * Indicates whether the API call was successful. Values:
   * - `true`: The API call was successful. 
   * - `false`: The API call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * BC648259-91A7-4502-BED3-EDF64361FA83
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceCountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceCountResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the endpoint. Set the value to Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  endpointType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the module that you want to access. Valid values:
   * 
   * *   `Registry`: the image repository.
   * *   `Chart`: a Helm chart.
   * 
   * @example
   * Registry
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      instanceId: 'string',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the access control list (ACL) feature is enabled.
   * 
   * @example
   * true
   */
  aclEnable?: boolean;
  /**
   * @remarks
   * The ACLs.
   */
  aclEntries?: GetInstanceEndpointResponseBodyAclEntries[];
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Domain names.
   */
  domains?: GetInstanceEndpointResponseBodyDomains[];
  /**
   * @remarks
   * Indicates whether the ACL feature is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8F3D5EC5-39D1-4C53-A198-48C54C658FA3
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aclEnable: 'AclEnable',
      aclEntries: 'AclEntries',
      code: 'Code',
      domains: 'Domains',
      enable: 'Enable',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEnable: 'boolean',
      aclEntries: { 'type': 'array', 'itemType': GetInstanceEndpointResponseBodyAclEntries },
      code: 'string',
      domains: { 'type': 'array', 'itemType': GetInstanceEndpointResponseBodyDomains },
      enable: 'boolean',
      isSuccess: 'boolean',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclEntries)) {
      $dara.Model.validateArray(this.aclEntries);
    }
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quota of chart namespaces.
   * 
   * @example
   * 50
   */
  chartNamespaceQuota?: string;
  /**
   * @remarks
   * The number of chart namespaces that are created in the instance.
   * 
   * @example
   * 2
   */
  chartNamespaceUsage?: string;
  /**
   * @remarks
   * The quota of chart repositories for the instance.
   * 
   * @example
   * 5000
   */
  chartRepoQuota?: string;
  /**
   * @remarks
   * The number of chart repositories that are created.
   * 
   * @example
   * 5
   */
  chartRepoUsage?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The quota of image namespaces for the instance.
   * 
   * @example
   * 100
   */
  namespaceQuota?: string;
  /**
   * @remarks
   * The number of image namespaces that are created in the instance.
   * 
   * @example
   * 4
   */
  namespaceUsage?: string;
  /**
   * @remarks
   * The quota of image repositories for the instance.
   * 
   * @example
   * 1000
   */
  repoQuota?: string;
  /**
   * @remarks
   * The number of image repositories that are created in the instance.
   * 
   * @example
   * 2
   */
  repoUsage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A726E801-7FCF-43F9-AF1C-51B3E65D3E7A
   */
  requestId?: string;
  /**
   * @remarks
   * VPC quota
   * 
   * @example
   * 5
   */
  vpcQuota?: string;
  /**
   * @remarks
   * Number of bound VPCs
   * 
   * @example
   * 2
   */
  vpcUsage?: string;
  static names(): { [key: string]: string } {
    return {
      chartNamespaceQuota: 'ChartNamespaceQuota',
      chartNamespaceUsage: 'ChartNamespaceUsage',
      chartRepoQuota: 'ChartRepoQuota',
      chartRepoUsage: 'ChartRepoUsage',
      code: 'Code',
      isSuccess: 'IsSuccess',
      namespaceQuota: 'NamespaceQuota',
      namespaceUsage: 'NamespaceUsage',
      repoQuota: 'RepoQuota',
      repoUsage: 'RepoUsage',
      requestId: 'RequestId',
      vpcQuota: 'VpcQuota',
      vpcUsage: 'VpcUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartNamespaceQuota: 'string',
      chartNamespaceUsage: 'string',
      chartRepoQuota: 'string',
      chartRepoUsage: 'string',
      code: 'string',
      isSuccess: 'boolean',
      namespaceQuota: 'string',
      namespaceUsage: 'string',
      repoQuota: 'string',
      repoUsage: 'string',
      requestId: 'string',
      vpcQuota: 'string',
      vpcUsage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUsageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceUsageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceVpcEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the module that you want to access. Valid values:
   * 
   * *   `Registry`: the image repository.
   * *   `Chart`: a Helm chart.
   * 
   * @example
   * Chart
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceVpcEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Domain names.
   */
  domains?: string[];
  /**
   * @remarks
   * Indicates whether the VPC endpoint is enabled. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The VPCs that are added to the access control list.
   */
  linkedVpcs?: GetInstanceVpcEndpointResponseBodyLinkedVpcs[];
  /**
   * @remarks
   * The name of the modules that can be accessed. Valid values:
   * 
   * *   `Registry`: image repositories.
   * *   `Chart`: Helm charts.
   * 
   * @example
   * Registry
   */
  moduleName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BAE9349D-A587-4F9A-B574-9DA0EF2638D1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      domains: 'Domains',
      enable: 'Enable',
      isSuccess: 'IsSuccess',
      linkedVpcs: 'LinkedVpcs',
      moduleName: 'ModuleName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
      enable: 'boolean',
      isSuccess: 'boolean',
      linkedVpcs: { 'type': 'array', 'itemType': GetInstanceVpcEndpointResponseBodyLinkedVpcs },
      moduleName: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    if(Array.isArray(this.linkedVpcs)) {
      $dara.Model.validateArray(this.linkedVpcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceVpcEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstanceVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInstanceVpcEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * crn-tiw8t3f8i5lta****
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a repository is automatically created when an image is pushed to the namespace.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The default type of repositories. Valid values:
   * 
   * *   PUBLIC: The repositories are public repositories.
   * *   PRIVATE: The repositories are private repositories.
   * 
   * @example
   * PUBLIC
   */
  defaultRepoType?: string;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * crn-tiw8t3f8i5lt****
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @remarks
   * The status of the namespace.
   * 
   * *   NORMAL
   * *   DELETING
   * 
   * @example
   * NORMAL
   */
  namespaceStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E4BC9E21-8AA5-4582-83C1-C1209AB8196F
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the namespace belongs.
   * 
   * @example
   * rg-acfmv36i4is****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      code: 'Code',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      code: 'string',
      defaultRepoType: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      namespaceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNamespaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNamespaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building record.
   * 
   * This parameter is required.
   * 
   * @example
   * a78ec6fb-16ea-4649-93b7-f52afba7d****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building record.
   * 
   * @example
   * 79174CBA-8556-443A-8976-22C922D7****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The time when the image building was completed.
   * 
   * @example
   * 1568718698000
   */
  endTime?: number;
  /**
   * @remarks
   * The information about the image.
   */
  image?: GetRepoBuildRecordResponseBodyImage;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * a78ec6fb-16ea-4649-93b7-f52afba7d9de1
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the image building started.
   * 
   * @example
   * 1568718468000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      code: 'Code',
      endTime: 'EndTime',
      image: 'Image',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      code: 'string',
      endTime: 'number',
      image: GetRepoBuildRecordResponseBodyImage,
      isSuccess: 'boolean',
      requestId: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRepoBuildRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRepoBuildRecordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building record.
   * 
   * This parameter is required.
   * 
   * @example
   * a78ec6fb-16ea-4649-93b7-f52afba7d****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-jnzm47ihjmgc****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      instanceId: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the image building.
   * 
   * @example
   * success
   */
  buildStatus?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79174CBA-8556-443A-8976-22C922D7BE37
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildStatus: 'BuildStatus',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildStatus: 'string',
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoBuildRecordStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRepoBuildRecordStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRepoBuildRecordStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSourceCodeRepoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-shac42yvqzvq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-gzsrlevmvoaq****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSourceCodeRepoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether image building is automatically triggered when source code is committed. Valid values:
   * 
   * *   `true`: Image building is automatically triggered when source code is committed.
   * *   `false`: Image building is not triggered when source code is committed.
   * 
   * @example
   * true
   */
  autoBuild?: string;
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The address of the source code repository.
   * 
   * @example
   * https://github.com
   */
  codeRepoDomain?: string;
  /**
   * @remarks
   * The name of the source code repository.
   * 
   * @example
   * repo
   */
  codeRepoName?: string;
  /**
   * @remarks
   * The namespace to which the source code repository belongs.
   * 
   * @example
   * namespace
   */
  codeRepoNamespaceName?: string;
  /**
   * @remarks
   * The type of the code hosting platform. Valid values: `GITHUB`, `GITLAB`, `GITEE`, `CODE`, and `CODEUP`.
   * 
   * @example
   * GITHUB
   */
  codeRepoType?: string;
  /**
   * @remarks
   * Indicates whether build cache is disabled. Valid values:
   * 
   * *   `true`: Build cache is disabled.
   * *   `false`: Build cache is enabled.
   * 
   * @example
   * false
   */
  disableCacheBuild?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * *   `true`: successful
   * *   `false`: failed
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * Indicates whether image building is accelerated for servers outside the Chinese mainland. Valid values:
   * 
   * *   `true`: Image building is accelerated for servers outside the Chinese mainland.
   * *   `false`: Image building is not accelerated for servers outside the Chinese mainland.
   * 
   * @example
   * false
   */
  overseaBuild?: string;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * @example
   * crr-gzsrlevmvoaq****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4CE1F661-75DD-4EBD-A4AD-057B26834ABB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      code: 'Code',
      codeRepoDomain: 'CodeRepoDomain',
      codeRepoName: 'CodeRepoName',
      codeRepoNamespaceName: 'CodeRepoNamespaceName',
      codeRepoType: 'CodeRepoType',
      disableCacheBuild: 'DisableCacheBuild',
      isSuccess: 'IsSuccess',
      overseaBuild: 'OverseaBuild',
      repoId: 'RepoId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'string',
      code: 'string',
      codeRepoDomain: 'string',
      codeRepoName: 'string',
      codeRepoNamespaceName: 'string',
      codeRepoType: 'string',
      disableCacheBuild: 'string',
      isSuccess: 'boolean',
      overseaBuild: 'string',
      repoId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSourceCodeRepoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRepoSourceCodeRepoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRepoSourceCodeRepoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-sgedpenzw80e****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * This parameter is required.
   * 
   * @example
   * rst-zxjkiv5oil6f****
   */
  syncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      syncTaskId: 'SyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      syncTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the synchronization task is performed across Alibaba Cloud accounts.
   * 
   * @example
   * true
   */
  crossUser?: boolean;
  /**
   * @remarks
   * The source address of the image.
   */
  imageFrom?: GetRepoSyncTaskResponseBodyImageFrom;
  /**
   * @remarks
   * The destination address of the image.
   */
  imageTo?: GetRepoSyncTaskResponseBodyImageTo;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The synchronization tasks for the image layer.
   */
  layerTasks?: GetRepoSyncTaskResponseBodyLayerTasks[];
  /**
   * @remarks
   * The synchronization progress. Valid values:
   * 
   * *   `0`: The synchronization starts or failed.
   * *   `1`: The synchronization is successful.
   * 
   * @example
   * 1
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A6DEF8B0-5D45-46D6-867D-8C7FF0966B07
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the synchronization task in which multiple images are synchronized at a time.
   * 
   * @example
   * a9434731-95ef-4087-9cf4-369c8e90****
   */
  syncBatchTaskId?: string;
  /**
   * @remarks
   * The ID of the synchronization rule.
   * 
   * @example
   * crsr-cllro6ho3wne****
   */
  syncRuleId?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * rst-zxjkiv5oil6f****
   */
  syncTaskId?: string;
  /**
   * @remarks
   * Indicates whether transfer acceleration is enabled in the synchronization process.
   * 
   * @example
   * true
   */
  syncTransAccelerate?: boolean;
  /**
   * @remarks
   * The size of the image layer that is synchronized. Unit: bytes.
   * 
   * @example
   * 23655489
   */
  syncedSize?: number;
  taskIssue?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * @example
   * SUCCESS
   */
  taskStatus?: string;
  /**
   * @remarks
   * The policy that is used to trigger the synchronization task.
   * 
   * @example
   * null
   */
  taskTrigger?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      crossUser: 'CrossUser',
      imageFrom: 'ImageFrom',
      imageTo: 'ImageTo',
      isSuccess: 'IsSuccess',
      layerTasks: 'LayerTasks',
      progress: 'Progress',
      requestId: 'RequestId',
      syncBatchTaskId: 'SyncBatchTaskId',
      syncRuleId: 'SyncRuleId',
      syncTaskId: 'SyncTaskId',
      syncTransAccelerate: 'SyncTransAccelerate',
      syncedSize: 'SyncedSize',
      taskIssue: 'TaskIssue',
      taskStatus: 'TaskStatus',
      taskTrigger: 'TaskTrigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      crossUser: 'boolean',
      imageFrom: GetRepoSyncTaskResponseBodyImageFrom,
      imageTo: GetRepoSyncTaskResponseBodyImageTo,
      isSuccess: 'boolean',
      layerTasks: { 'type': 'array', 'itemType': GetRepoSyncTaskResponseBodyLayerTasks },
      progress: 'number',
      requestId: 'string',
      syncBatchTaskId: 'string',
      syncRuleId: 'string',
      syncTaskId: 'string',
      syncTransAccelerate: 'boolean',
      syncedSize: 'number',
      taskIssue: 'string',
      taskStatus: 'string',
      taskTrigger: 'string',
    };
  }

  validate() {
    if(this.imageFrom && typeof (this.imageFrom as any).validate === 'function') {
      (this.imageFrom as any).validate();
    }
    if(this.imageTo && typeof (this.imageTo as any).validate === 'function') {
      (this.imageTo as any).validate();
    }
    if(Array.isArray(this.layerTasks)) {
      $dara.Model.validateArray(this.layerTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoSyncTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRepoSyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRepoSyncTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagRequest extends $dara.Model {
  /**
   * @remarks
   * The return value of status code.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **GetRepoTag**.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-tquyps22md8p****
   */
  repoId?: string;
  /**
   * @remarks
   * The number of milliseconds that have elapsed since the image was created.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The size of the image. Unit: Bytes.
   * 
   * @example
   * 67bfbcc12b67936ec7f867927817cbb071832b873dbcaed312a1930ba5f1****
   */
  digest?: string;
  /**
   * @remarks
   * crr-tquyps22md8p****
   * 
   * @example
   * 1572839125000
   */
  imageCreate?: number;
  /**
   * @example
   * 45023655bf39c382e26a8607d057c27871dee163c1ecf48cc1ebf2a1****
   */
  imageId?: string;
  /**
   * @remarks
   * The number of milliseconds that have elapsed since the image was last updated.
   * 
   * @example
   * 27107966
   */
  imageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1572875608000
   */
  imageUpdate?: number;
  /**
   * @remarks
   * The status of the image. Valid values:
   * 
   * *   `NORMAL`: The image is normal.
   * *   `DELETING`: The image is being deleted.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * 1.0
   * 
   * @example
   * 031572FA-7D8F-4C05-B790-1071E0E05DE6
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The version of the repository.
   * 
   * @example
   * 1.0
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      digest: 'Digest',
      imageCreate: 'ImageCreate',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageUpdate: 'ImageUpdate',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      digest: 'string',
      imageCreate: 'number',
      imageId: 'string',
      imageSize: 'number',
      imageUpdate: 'number',
      isSuccess: 'boolean',
      requestId: 'string',
      status: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRepoTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRepoTagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanStatusRequest extends $dara.Model {
  /**
   * @example
   * 67bfbcc12b67936ec7f867927817cbb071832b873dbcaed312a1930ba5f1d529
   */
  digest?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-2j88dtld8yel****
   */
  instanceId?: string;
  /**
   * @example
   * crr-uf082u9dg8do****
   */
  repoId?: string;
  /**
   * @example
   * 838152F9-F725-5A52-A344-8972D65AC045
   */
  scanTaskId?: string;
  /**
   * @example
   * 1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      scanTaskId: 'ScanTaskId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      instanceId: 'string',
      repoId: 'string',
      scanTaskId: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanStatusResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * BC648259-91A7-4502-BED3-EDF64361FA83
   */
  requestId?: string;
  /**
   * @example
   * ACR_SCAN_SERVICE
   */
  scanService?: string;
  /**
   * @example
   * COMPLETE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      scanService: 'ScanService',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      scanService: 'string',
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

export class GetRepoTagScanStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRepoTagScanStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRepoTagScanStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The number of unknown-severity vulnerabilities.
   * 
   * @example
   * sha256:c9f370a4eb1c00d0b0d7212a0a9fa4a7697756c90f0f680afaf9737a25725f4c
   */
  digest?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-2j88dtld8yel****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the image tag.
   * 
   * @example
   * crr-c2i5yk6h6pu9d5o8
   */
  repoId?: string;
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * 47A3E5A3-6AD4-5F02-93B8-59F778AE25D4
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The ID of the security scan task.
   * 
   * @example
   * 1
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      scanTaskId: 'ScanTaskId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      instanceId: 'string',
      repoId: 'string',
      scanTaskId: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of medium-severity vulnerabilities.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The number of low-severity vulnerabilities.
   * 
   * @example
   * 22
   */
  highSeverity?: number;
  /**
   * @remarks
   * The number of high-severity vulnerabilities.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * 89
   */
  lowSeverity?: number;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * 81
   */
  mediumSeverity?: number;
  /**
   * @remarks
   * The total number of vulnerabilities detected on images.
   * 
   * @example
   * BC648259-91A7-4502-BED3-EDF64361FA83
   */
  requestId?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * 196
   */
  totalSeverity?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4
   */
  unknownSeverity?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      highSeverity: 'HighSeverity',
      isSuccess: 'IsSuccess',
      lowSeverity: 'LowSeverity',
      mediumSeverity: 'MediumSeverity',
      requestId: 'RequestId',
      totalSeverity: 'TotalSeverity',
      unknownSeverity: 'UnknownSeverity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      highSeverity: 'number',
      isSuccess: 'boolean',
      lowSeverity: 'number',
      mediumSeverity: 'number',
      requestId: 'string',
      totalSeverity: 'number',
      unknownSeverity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepoTagScanSummaryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRepoTagScanSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRepoTagScanSummaryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * @example
   * crr-03cuozrsqhkw****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The time when the repository was created.
   * 
   * @example
   * 1570759546000
   */
  createTime?: number;
  /**
   * @remarks
   * The details of the repository.
   * 
   * @example
   * test
   */
  detail?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The time when the repository was last modified.
   * 
   * @example
   * 1570759546100
   */
  modifiedTime?: number;
  /**
   * @remarks
   * Indicates how the repository was created. Valid values:
   * 
   * *   `MANUAL`: The repository was manually created.
   * *   `AUTO`: The repository was automatically created.
   * 
   * @example
   * MANUAL
   */
  repoBuildType?: string;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * @example
   * crr-l5eoubonp0l****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The status of the repository.
   * 
   * @example
   * NORMAL
   */
  repoStatus?: string;
  /**
   * @remarks
   * The type of the repository. Valid values:
   * 
   * *   `PUBLIC`: public repository.
   * *   `PRIVATE`: private repository.
   * 
   * @example
   * PRIVATE
   */
  repoType?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 915E6734-3E50-4640-8DBA-126D2D94DE29
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmv36i4is****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The summary of the repository.
   * 
   * @example
   * Automatically created repository
   */
  summary?: string;
  /**
   * @remarks
   * Indicates whether the feature of image tag immutability is enabled. Valid values:
   * 
   * *   `true`: The feature of image tag immutability is enabled.
   * *   `false`: The feature of image tag immutability is disabled.
   * 
   * @example
   * true
   */
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      detail: 'Detail',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      modifiedTime: 'ModifiedTime',
      repoBuildType: 'RepoBuildType',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
      repoType: 'RepoType',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      summary: 'Summary',
      tagImmutability: 'TagImmutability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'number',
      detail: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      modifiedTime: 'number',
      repoBuildType: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
      repoType: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      summary: 'string',
      tagImmutability: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRepositoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRepositoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactBuildTaskLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the artifact build task.
   * 
   * This parameter is required.
   * 
   * @example
   * i2a-1yu****
   */
  buildTaskId?: string;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-shac42yvqzvq****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. If you specify a value greater than 100 for this parameter, the system reports a parameter error or uses 100 as the maximum value.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      buildTaskId: 'BuildTaskId',
      instanceId: 'InstanceId',
      page: 'Page',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTaskId: 'string',
      instanceId: 'string',
      page: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactBuildTaskLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log entries of the artifact build task.
   */
  buildTaskLogs?: ListArtifactBuildTaskLogResponseBodyBuildTaskLogs[];
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: successful
   * *   `false`: failed
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C4C7DD0C-C9D6-437A-A7EE-121EFD70D002
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of log entries.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      buildTaskLogs: 'BuildTaskLogs',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTaskLogs: { 'type': 'array', 'itemType': ListArtifactBuildTaskLogResponseBodyBuildTaskLogs },
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.buildTaskLogs)) {
      $dara.Model.validateArray(this.buildTaskLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactBuildTaskLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListArtifactBuildTaskLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListArtifactBuildTaskLogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactLifecycleRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable lifecycle management for the artifact.
   * 
   * @example
   * true
   */
  enableDeleteTag?: boolean;
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-eztul9ucz76q****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      enableDeleteTag: 'EnableDeleteTag',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableDeleteTag: 'boolean',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactLifecycleRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F92D82F9-A4C4-5A4A-97B9-E495BF1B****
   */
  requestId?: string;
  /**
   * @remarks
   * _
   */
  rules?: ListArtifactLifecycleRuleResponseBodyRules[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 39
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListArtifactLifecycleRuleResponseBodyRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactLifecycleRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListArtifactLifecycleRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListArtifactLifecycleRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactSubscriptionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-c0o11woew0k****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. If you specify a value greater than 100 for this parameter, the system reports a parameter error or uses 100 as the maximum value.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactSubscriptionRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 07FC5654-C82A-59FA-A9D1-78B4EE443F86
   */
  requestId?: string;
  /**
   * @remarks
   * The queried artifact subscription rules.
   */
  rules?: ListArtifactSubscriptionRuleResponseBodyRules[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListArtifactSubscriptionRuleResponseBodyRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactSubscriptionRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListArtifactSubscriptionRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListArtifactSubscriptionRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactSubscriptionTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-m9ob8792vm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactSubscriptionTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 81E7A039-A4EF-57D9-A100-88E5DCEF9D56
   */
  requestId?: string;
  /**
   * @remarks
   * The queried artifact subscription tasks.
   */
  tasks?: ListArtifactSubscriptionTaskResponseBodyTasks[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListArtifactSubscriptionTaskResponseBodyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactSubscriptionTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListArtifactSubscriptionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListArtifactSubscriptionTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-4cdrlqmhn4gm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * ns1
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of delivery chains.
   */
  chains?: ListChainResponseBodyChains[];
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 85A99B10-3926-5201-958E-C06FA47F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of delivery chains.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      chains: 'Chains',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chains: { 'type': 'array', 'itemType': ListChainResponseBodyChains },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.chains)) {
      $dara.Model.validateArray(this.chains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListChainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListChainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The operation that you want to perform. Set this parameter to **ListChainInstance**.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The time when the delivery chain started.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The time when the delivery chain is completed.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the delivery chain.
   * 
   * @example
   * test-namespace
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   */
  chainInstances?: ListChainInstanceResponseBodyChainInstances[];
  /**
   * @remarks
   * The version of the delivery chain.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The execution record of the delivery chain.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * 30
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * @example
   * 838D1602-6D8F-47FB-B60A-656645D2****
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      chainInstances: 'ChainInstances',
      code: 'Code',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainInstances: { 'type': 'array', 'itemType': ListChainInstanceResponseBodyChainInstances },
      code: 'string',
      instanceId: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.chainInstances)) {
      $dara.Model.validateArray(this.chainInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChainInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListChainInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListChainInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @remarks
   * The status of the namespace. Valid values:
   * 
   * *   `NORMAL`: The namespace is normal.
   * *   `DELETING`: The namespace is being deleted.
   * 
   * @example
   * NORMAL
   */
  namespaceStatus?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The namespaces.
   */
  namespaces?: ListChartNamespaceResponseBodyNamespaces[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F56D589D-AF7F-4900-BA46-62C780AC2C10
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      namespaces: 'Namespaces',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      namespaces: { 'type': 'array', 'itemType': ListChartNamespaceResponseBodyNamespaces },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartNamespaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListChartNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListChartNamespaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * The chart whose versions you want to query.
   * 
   * @example
   * null
   */
  chart?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * repo1
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  repoNamespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      chart: 'Chart',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chart: 'string',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartReleaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of chart versions.
   */
  chartReleases?: ListChartReleaseResponseBodyChartReleases[];
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F68823F6-F1B5-4A4E-8421-A83CAB8F2963
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      chartReleases: 'ChartReleases',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartReleases: { 'type': 'array', 'itemType': ListChartReleaseResponseBodyChartReleases },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chartReleases)) {
      $dara.Model.validateArray(this.chartReleases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartReleaseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListChartReleaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListChartReleaseResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartRepositoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * ns1
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * @example
   * repo1
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The status of the chart repositories that you want to query. Valid values:
   * 
   * *   `ALL`: query repositories of all status.
   * *   `NORMAL`: query normal repositories.
   * *   `DELETING`: query repositories that are being deleted.
   * 
   * @example
   * ALL
   */
  repoStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartRepositoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The queried repositories.
   */
  repositories?: ListChartRepositoryResponseBodyRepositories[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0AB62FB8-6873-4032-8515-4578D27523B7
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repositories: 'Repositories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      repositories: { 'type': 'array', 'itemType': ListChartRepositoryResponseBodyRepositories },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.repositories)) {
      $dara.Model.validateArray(this.repositories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChartRepositoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListChartRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListChartRepositoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * *   `cr:Artifact:DeliveryChainCompleted`: The delivery chain is processed.
   * *   `cr:Artifact:SynchronizationCompleted`: The image is replicated.
   * *   `cr:Artifact:BuildCompleted`: The image is built.
   * *   `cr:Artifact:ScanCompleted`: The image is scanned.
   * *   `cr:Artifact:SigningCompleted`: The image is signed.
   * 
   * @example
   * cr:Artifact:DeliveryChainCompleted
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The ID of the event notification rule.
   * 
   * @example
   * crecr-n6pbhgjxtla***
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      eventType: 'EventType',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventType: 'string',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of historical events.
   * 
   * @example
   * []
   */
  records?: ListEventCenterRecordResponseBodyRecords[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 665C7A5E-BAEC-5BCD-AF9F-5F9260D672BF
   */
  requestId?: string;
  /**
   * @remarks
   * The total entries of historical events.
   * 
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      records: 'Records',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListEventCenterRecordResponseBodyRecords },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEventCenterRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEventCenterRecordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRuleNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRuleNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 031572FA-7D8F-4C05-B790-1071E0E05DE6
   */
  requestId?: string;
  /**
   * @remarks
   * The list of names of event notification rules.
   * 
   * @example
   * [{\\"RuleName\\": \\"mlf\\", \\"RuleId\\": \\"crecr-73q93pgljm1pc2fp\\"}]
   */
  ruleNames?: ListEventCenterRuleNameResponseBodyRuleNames[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      ruleNames: 'RuleNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      ruleNames: { 'type': 'array', 'itemType': ListEventCenterRuleNameResponseBodyRuleNames },
    };
  }

  validate() {
    if(Array.isArray(this.ruleNames)) {
      $dara.Model.validateArray(this.ruleNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventCenterRuleNameResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEventCenterRuleNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEventCenterRuleNameResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   * 
   * @deprecated
   */
  instanceName?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   `PENDING`: The instance is being initialized.
   * *   `INIT_ERROR`: The initialization of the instance fails.
   * *   `STARTING`: The instance is being started.
   * *   `RUNNING`: The instance is running.
   * *   `STOPPING`: The instance is being stopped.
   * *   `STOPPED`: The instance is stopped.
   * *   `DELETING`: The instance is being deleted.
   * *   `DELETED`: The instance is deleted.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmv36i4is****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      instanceStatus: 'string',
      pageNo: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The queried instances.
   */
  instances?: ListInstanceResponseBodyInstances[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A2A9BA68-B264-4953-9154-CE61B1C03BA6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12121
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instances: 'Instances',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instances: { 'type': 'array', 'itemType': ListInstanceResponseBodyInstances },
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the module that you want to access. Valid values:
   * 
   * *   `Registry`: image repositories.
   * *   `Chart`: Helm charts.
   * 
   * @example
   * Chart
   */
  moduleName?: string;
  /**
   * @remarks
   * Specify whether to return endpoints in simple mode. If yes, no access control information about the endpoint is returned.
   * 
   * @example
   * false
   */
  summary?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      moduleName: 'string',
      summary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The endpoints of the instance.
   */
  endpoints?: ListInstanceEndpointResponseBodyEndpoints[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B21A877-66A2-4095-90EB-20A7781A4A67
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endpoints: 'Endpoints',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endpoints: { 'type': 'array', 'itemType': ListInstanceEndpointResponseBodyEndpoints },
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceEndpointResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceEndpointResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRegionRequest extends $dara.Model {
  /**
   * @remarks
   * The language used for response parameters. Set this parameter to `zh-CN`.
   * 
   * @example
   * zh-CN
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The list of regions.
   */
  regions?: ListInstanceRegionResponseBodyRegions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 11F182E1-0F84-4F5B-8D3B-61E991482727
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      regions: { 'type': 'array', 'itemType': ListInstanceRegionResponseBodyRegions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRegionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceRegionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstanceRegionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-94klsruryslx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * test-namespace
   */
  namespaceName?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * NORMAL
   */
  namespaceStatus?: string;
  /**
   * @remarks
   * The list of namespaces.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      namespaceStatus: 'NamespaceStatus',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      namespaceStatus: 'string',
      pageNo: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  namespaces?: ListNamespaceResponseBodyNamespaces[];
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B7E5FCA5-55ED-451C-9649-0BB2B93387D0
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      namespaces: 'Namespaces',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      namespaces: { 'type': 'array', 'itemType': ListNamespaceResponseBodyNamespaces },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNamespaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-tquyps22md8****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of image building records.
   */
  buildRecords?: ListRepoBuildRecordResponseBodyBuildRecords[];
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9D23DEDF-E91D-434B-B7D5-9D12C648D166
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecords: 'BuildRecords',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecords: { 'type': 'array', 'itemType': ListRepoBuildRecordResponseBodyBuildRecords },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildRecords)) {
      $dara.Model.validateArray(this.buildRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRepoBuildRecordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepoBuildRecordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building record.
   * 
   * This parameter is required.
   * 
   * @example
   * C5B4D5D7-A1C6-4E9B-ABD2-401361C4****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-nmbv37dlv5d3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The offset of log lines.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-z4dvahhku9wv4****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      instanceId: 'InstanceId',
      offset: 'Offset',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      instanceId: 'string',
      offset: 'number',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The log content of the image building record.
   */
  buildRecordLogs?: ListRepoBuildRecordLogResponseBodyBuildRecordLogs[];
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4CE1F661-75DD-4EBD-A4AD-057B26834ABB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1000
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordLogs: 'BuildRecordLogs',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordLogs: { 'type': 'array', 'itemType': ListRepoBuildRecordLogResponseBodyBuildRecordLogs },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildRecordLogs)) {
      $dara.Model.validateArray(this.buildRecordLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRepoBuildRecordLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepoBuildRecordLogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-tquyps22md8****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of image building rules.
   */
  buildRules?: ListRepoBuildRuleResponseBodyBuildRules[];
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 42D782C8-E8F6-4A32-BEA0-6A6AC854C22A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      buildRules: 'BuildRules',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRules: { 'type': 'array', 'itemType': ListRepoBuildRuleResponseBodyBuildRules },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildRules)) {
      $dara.Model.validateArray(this.buildRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRepoBuildRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepoBuildRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test-namespace
   */
  namespaceName?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The ID of the destination instance.
   * 
   * @example
   * cri-k77rd2eo9ztt****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The region ID of the destination instance.
   * 
   * @example
   * cn-shenzhen
   */
  targetRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      targetInstanceId: 'TargetInstanceId',
      targetRegionId: 'TargetRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      namespaceName: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoName: 'string',
      targetInstanceId: 'string',
      targetRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 838D1602-6D8F-47FB-B60A-656645D2****
   */
  requestId?: string;
  /**
   * @remarks
   * The queried synchronization rules.
   */
  syncRules?: ListRepoSyncRuleResponseBodySyncRules[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      syncRules: 'SyncRules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      syncRules: { 'type': 'array', 'itemType': ListRepoSyncRuleResponseBodySyncRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.syncRules)) {
      $dara.Model.validateArray(this.syncRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRepoSyncRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepoSyncRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * test
   */
  repoName?: string;
  /**
   * @example
   * ns
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The ID of the synchronization task record, which is the same as SyncBatchTaskId in the response.
   * 
   * >  If an image meets multiple synchronization rules and multiple synchronization tasks are generated for the image, these synchronization tasks use the same SyncBatchTaskId.
   * 
   * @example
   * crsr-7lph66uloi6h****
   */
  syncRecordId?: string;
  /**
   * @example
   * nginx
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      syncRecordId: 'SyncRecordId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
      syncRecordId: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 7640819A-FB5B-4E25-A227-97717F62****
   */
  requestId?: string;
  /**
   * @remarks
   * Details about synchronization tasks.
   */
  syncTasks?: ListRepoSyncTaskResponseBodySyncTasks[];
  /**
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      syncTasks: 'SyncTasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      syncTasks: { 'type': 'array', 'itemType': ListRepoSyncTaskResponseBodySyncTasks },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.syncTasks)) {
      $dara.Model.validateArray(this.syncTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoSyncTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRepoSyncTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepoSyncTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-tquyps22md8p****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The images.
   */
  images?: ListRepoTagResponseBodyImages[];
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 031572FA-7D8F-4C05-B790-1071E0E05DE6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      images: 'Images',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      images: { 'type': 'array', 'itemType': ListRepoTagResponseBodyImages },
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRepoTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepoTagResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagScanResultRequest extends $dara.Model {
  /**
   * @remarks
   * The digest of the image.
   * 
   * @example
   * sha256:6b0b094f8a904f8fb6602427aed0d1fa
   */
  digest?: string;
  /**
   * @remarks
   * The parameter whose value that you want to query. Fox example, if the value is `FixCmd`, only the `FixCmd` parameter is returned.
   * 
   * @example
   * FixCmd
   */
  filterValue?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-2j88dtld8yel****
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-uf082u9dg8do****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the security scan task.
   * 
   * @example
   * 6b0b094f-8a90-4f8f-b660-2427aed0****
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   `cve`: image system vulnerability
   * *   `sca`: image application vulnerability
   * 
   * @example
   * sca
   */
  scanType?: string;
  /**
   * @remarks
   * The severity of the vulnerability. Valid values:
   * 
   * *   `High`
   * *   `Medium`
   * *   `Low`
   * *   `Unknown`
   * 
   * @example
   * High
   */
  severity?: string;
  /**
   * @remarks
   * The name of the image tag.
   * 
   * @example
   * 1
   */
  tag?: string;
  /**
   * @remarks
   * The keyword for fuzzy search used in scanning. The value can be a CVE name.
   * 
   * @example
   * CVE-2021
   */
  vulQueryKey?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      filterValue: 'FilterValue',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoId: 'RepoId',
      scanTaskId: 'ScanTaskId',
      scanType: 'ScanType',
      severity: 'Severity',
      tag: 'Tag',
      vulQueryKey: 'VulQueryKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      filterValue: 'string',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoId: 'string',
      scanTaskId: 'string',
      scanType: 'string',
      severity: 'string',
      tag: 'string',
      vulQueryKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagScanResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 56B5C92F-F5D9-46E0-823F-EC71D1892DAA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of vulnerabilities detected on images.
   * 
   * @example
   * 196
   */
  totalCount?: number;
  /**
   * @remarks
   * The details about the detected vulnerabilities.
   */
  vulnerabilities?: ListRepoTagScanResultResponseBodyVulnerabilities[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vulnerabilities: 'Vulnerabilities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vulnerabilities: { 'type': 'array', 'itemType': ListRepoTagScanResultResponseBodyVulnerabilities },
    };
  }

  validate() {
    if(Array.isArray(this.vulnerabilities)) {
      $dara.Model.validateArray(this.vulnerabilities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTagScanResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRepoTagScanResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepoTagScanResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-tquyps22md8p****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2CA76D52-A8F0-4D0B-854E-FBD9F6C99049
   */
  requestId?: string;
  /**
   * @remarks
   * The triggers of the repository.
   */
  triggers?: ListRepoTriggerResponseBodyTriggers[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      triggers: { 'type': 'array', 'itemType': ListRepoTriggerResponseBodyTriggers },
    };
  }

  validate() {
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoTriggerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRepoTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepoTriggerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. If you specify a value larger than 100 for this parameter, the system reports a parameter error or uses 100 as the maximum value.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * repo-test
   */
  repoName?: string;
  /**
   * @example
   * repo-namespace-test
   */
  repoNamespaceName?: string;
  /**
   * @example
   * ALL
   */
  repoStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoStatus: 'RepoStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  repositories?: ListRepositoryResponseBodyRepositories[];
  /**
   * @example
   * 5241C090-DA69-4B0F-8E3F-2F24FDE1110E
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repositories: 'Repositories',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      repositories: { 'type': 'array', 'itemType': ListRepositoryResponseBodyRepositories },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.repositories)) {
      $dara.Model.validateArray(this.repositories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRepositoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScanBaselineByTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The image digest.
   * 
   * @example
   * sha256:1c89806cfaf66d2990e2cf1131ebd56ff24b133745a33abf1228*************
   */
  digest?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-***********
   */
  instanceId?: string;
  /**
   * @remarks
   * The severity of the risk.
   * 
   * @example
   * High
   */
  level?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The repository ID.
   * 
   * @example
   * crr-**************
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the image scan task.
   * 
   * @example
   * 3e526d7e-4b45-4703-b046-***********
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * 1.1.36
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      instanceId: 'InstanceId',
      level: 'Level',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoId: 'RepoId',
      scanTaskId: 'ScanTaskId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      instanceId: 'string',
      level: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoId: 'string',
      scanTaskId: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScanBaselineByTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: number;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: successful
   * *   `false`: failed
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5259118F-79E2-57E9-9AEA-551586F4FAED
   */
  requestId?: string;
  /**
   * @remarks
   * The queried baseline risks.
   */
  scanBaselines?: ListScanBaselineByTaskResponseBodyScanBaselines[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scanBaselines: 'ScanBaselines',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      scanBaselines: { 'type': 'array', 'itemType': ListScanBaselineByTaskResponseBodyScanBaselines },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scanBaselines)) {
      $dara.Model.validateArray(this.scanBaselines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScanBaselineByTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListScanBaselineByTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListScanBaselineByTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScanMaliciousFileByTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The image digest.
   * 
   * @example
   * sha256:aa4bffff6406785e930dab1f94c9a1297ba22xxxx71d71504a015764*********
   */
  digest?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-gu94qynvpwk*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The severity of the malicious file.
   * 
   * @example
   * High
   */
  level?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. If you specify a value greater than 100 for this parameter, the system reports a parameter error or uses 100 as the maximum value.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The image repository ID.
   * 
   * @example
   * crr-h1y4l279wb8*****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the image scan task.
   * 
   * @example
   * 79ee6bc2-3288-4c56-b967-**********
   */
  scanTaskId?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * V6.11
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      instanceId: 'InstanceId',
      level: 'Level',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      repoId: 'RepoId',
      scanTaskId: 'ScanTaskId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      instanceId: 'string',
      level: 'string',
      pageNo: 'number',
      pageSize: 'number',
      repoId: 'string',
      scanTaskId: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScanMaliciousFileByTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: number;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: successful
   * *   `false`: failed
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 52AE49C8-B91A-5C1A-821F-C34324B42F7C
   */
  requestId?: string;
  /**
   * @remarks
   * The queried malicious files.
   */
  scanMaliciousFiles?: ListScanMaliciousFileByTaskResponseBodyScanMaliciousFiles[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scanMaliciousFiles: 'ScanMaliciousFiles',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      scanMaliciousFiles: { 'type': 'array', 'itemType': ListScanMaliciousFileByTaskResponseBodyScanMaliciousFiles },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scanMaliciousFiles)) {
      $dara.Model.validateArray(this.scanMaliciousFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScanMaliciousFileByTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListScanMaliciousFileByTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListScanMaliciousFileByTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request or if no next query exists. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAfj+3fkqd8igM6VLaQjlaYc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region in which the resources are deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify a maximum of 20 resource IDs.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resources. Instance resources are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag list.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAfj+3fkqd8igM6VLaQjlaYc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7FF809ED-B42F-5AC3-9A17-CFE14BE32A8E
   */
  requestId?: string;
  /**
   * @remarks
   * The tags that are added to the resource.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  validate() {
    if(this.tagResources && typeof (this.tagResources as any).validate === 'function') {
      (this.tagResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetLoginPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new password that you specify to log on to the instance. The password must be 8 to 32 bits in length, and must contain at least two of the following character types: letters, special characters, and digits.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetLoginPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EB9C5722-51E2-4497-A573-575B0CA5CE0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetLoginPasswordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetLoginPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetLoginPasswordResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the resources.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify a maximum of 20 resource IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Instance resources are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag list.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E9A586D0-3977-5C28-A44D-55D3A9CD53CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resource. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >If you specify both this parameter and the TagKey parameter, this parameter does not take effect.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The ID of the region in which the resources are deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource IDs. You can specify a maximum of 20 resource IDs.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resources. Instance resources are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of tag N added to the resource. Valid values of N: 1 to 20.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 724402D0-75CD-4794-BC20-7D3720823AE0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactLifecycleRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically execute the lifecycle management rule.
   * 
   * @example
   * false
   */
  auto?: boolean;
  /**
   * @remarks
   * Specifies whether to enable lifecycle management for the artifact.
   * 
   * @example
   * true
   */
  enableDeleteTag?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-r6ym0lerldp****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * test_1
   */
  repoName?: string;
  /**
   * @remarks
   * The number of images that you want to retain.
   * 
   * @example
   * 30
   */
  retentionTagCount?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cralr-luq6qiegzvx****
   */
  ruleId?: string;
  /**
   * @remarks
   * The execution cycle of the lifecycle management rule.
   * 
   * @example
   * WEEK
   */
  scheduleTime?: string;
  /**
   * @remarks
   * The deletion scope of artifacts.
   * 
   * @example
   * REPO
   */
  scope?: string;
  /**
   * @remarks
   * The regular expression that indicates which image tags you want to retain.
   * 
   * @example
   * .*production_.*
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      auto: 'Auto',
      enableDeleteTag: 'EnableDeleteTag',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      retentionTagCount: 'RetentionTagCount',
      ruleId: 'RuleId',
      scheduleTime: 'ScheduleTime',
      scope: 'Scope',
      tagRegexp: 'TagRegexp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auto: 'boolean',
      enableDeleteTag: 'boolean',
      instanceId: 'string',
      namespaceName: 'string',
      repoName: 'string',
      retentionTagCount: 'number',
      ruleId: 'string',
      scheduleTime: 'string',
      scope: 'string',
      tagRegexp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactLifecycleRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BF92FC2E-455F-5600-A276-D2150A59****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactLifecycleRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateArtifactLifecycleRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateArtifactLifecycleRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactSubscriptionRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable an acceleration link for image subscription. The subscription acceleration feature is in public preview. The feature is optimized based on scheduling policies and network links to accelerate image subscription.
   * 
   * @example
   * true
   */
  accelerate?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-c0o11woew0k****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the Container Registry namespace.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * Specifies whether to overwrite the original image.
   * 
   * @example
   * true
   */
  override?: string;
  /**
   * @remarks
   * The operating system and architecture. If the source repository contains multi-arch images, only the images with the specified operating system and architecture are subscribed to the destination repository of the Enterprise Edition instance.
   */
  platform?: string[];
  /**
   * @remarks
   * The name of the Container Registry repository.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * crasr-mdbpung4i1rm****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the source namespace.
   * 
   * @example
   * library
   */
  sourceNamespaceName?: string;
  /**
   * @remarks
   * The source of the artifacts.
   * 
   * Valid values:
   * 
   * *   DOCKER_HUB: Docker Hub
   * *   GCR: GCR
   * *   QUAY: Quay.io
   * 
   * @example
   * DOCKER_HUB
   */
  sourceProvider?: string;
  /**
   * @remarks
   * The source repository.
   * 
   * @example
   * nginx
   */
  sourceRepoName?: string;
  /**
   * @remarks
   * The number of subscribed images.
   * 
   * @example
   * 1
   * 
   * **if can be null:**
   * false
   */
  tagCount?: number;
  /**
   * @remarks
   * The image tags in the subscription source repository. Regular expressions are supported.
   * 
   * @example
   * release-v.*
   */
  tagRegexp?: string;
  static names(): { [key: string]: string } {
    return {
      accelerate: 'Accelerate',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      override: 'Override',
      platform: 'Platform',
      repoName: 'RepoName',
      ruleId: 'RuleId',
      sourceNamespaceName: 'SourceNamespaceName',
      sourceProvider: 'SourceProvider',
      sourceRepoName: 'SourceRepoName',
      tagCount: 'TagCount',
      tagRegexp: 'TagRegexp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerate: 'string',
      instanceId: 'string',
      namespaceName: 'string',
      override: 'string',
      platform: { 'type': 'array', 'itemType': 'string' },
      repoName: 'string',
      ruleId: 'string',
      sourceNamespaceName: 'string',
      sourceProvider: 'string',
      sourceRepoName: 'string',
      tagCount: 'number',
      tagRegexp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.platform)) {
      $dara.Model.validateArray(this.platform);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactSubscriptionRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 02B27D80-FD32-5155-931A-93700779BB9E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateArtifactSubscriptionRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateArtifactSubscriptionRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateArtifactSubscriptionRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChainRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the delivery chain in the JSON format.
   * 
   * This parameter is required.
   * 
   * @example
   * chainconfig
   */
  chainConfig?: string;
  /**
   * @remarks
   * The ID of the delivery chain.
   * 
   * This parameter is required.
   * 
   * @example
   * chi-02ymhtwl3cq8****
   */
  chainId?: string;
  /**
   * @remarks
   * The description of the delivery chain.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-4cdrlqmhn4gm****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the delivery chain.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Repositories in which the delivery chain does not take effect.
   */
  scopeExclude?: string[];
  static names(): { [key: string]: string } {
    return {
      chainConfig: 'ChainConfig',
      chainId: 'ChainId',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      scopeExclude: 'ScopeExclude',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chainConfig: 'string',
      chainId: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      scopeExclude: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scopeExclude)) {
      $dara.Model.validateArray(this.scopeExclude);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 85A99B10-3926-5201-958E-C06FA47F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateChainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateChainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChartNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically create repositories in the namespace. Valid values:
   * 
   * *   `true`: automatically creates repositories in the namespace.
   * *   `false`: does not automatically create repositories in the namespace.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  /**
   * @remarks
   * The default type of the repository. Valid values:
   * 
   * *   `PUBLIC`: a public repository
   * *   `PRIVATE`: a private repository
   * 
   * @example
   * PUBLIC
   */
  defaultRepoType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChartNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
   * 
   * *   `true`: successful
   * *   `false`: failed
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6877B80A-2895-44C4-BC9E-703B157DEE66
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChartNamespaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateChartNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateChartNamespaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChartRepositoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  repoName?: string;
  /**
   * @remarks
   * The name of the namespace to which the repository belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * The type of the repository. Valid values:
   * 
   * *   `PUBLIC`: a public repository.
   * *   `PRIVATE`: a private repository.
   * 
   * @example
   * PUBLIC
   */
  repoType?: string;
  /**
   * @remarks
   * The summary of the repository.
   * 
   * @example
   * test
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoType: 'RepoType',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoType: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChartRepositoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EB9C5722-51E2-4497-A573-575B0CA5CE0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateChartRepositoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateChartRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateChartRepositoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventCenterRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The event notification channel.
   * 
   * @example
   * EVENT_BRIDGE
   */
  eventChannel?: string;
  /**
   * @remarks
   * The event configuration.
   * 
   * @example
   * {
   *         "notifyMethod":"http",
   *         "notifyConfig":{
   *             "Url":"http://www.aliyundoc.com",
   *             "id":"MaAV3HgTkO5Fh8l1V********",
   *         },
   *         "notifyFilter":{}
   *     }
   */
  eventConfig?: string;
  /**
   * @remarks
   * The event scope. Valid values:
   * 
   * *   `INSTANCE`
   * *   `NAMESPACE`
   * *   `REPO`
   * 
   * Default value: `INSTANCE`
   * 
   * @example
   * INSTANCE
   */
  eventScope?: string;
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * *   `cr:Artifact:DeliveryChainCompleted`: The delivery chain is processed.
   * *   `cr:Artifact:SynchronizationCompleted`: The image is replicated.
   * *   `cr:Artifact:BuildCompleted`: The image is built.
   * *   `cr:Artifact:ScanCompleted`: The image is scanned.
   * *   `cr:Artifact:SigningCompleted`: The image is signed.
   * 
   * @example
   * cr:Artifact:DeliveryChainCompleted
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespaces to which the event notification rule applies.
   * 
   * @example
   * ns
   */
  namespaces?: string[];
  /**
   * @remarks
   * The names of the repositories to which the event notification rule applies.
   * 
   * @example
   * reponame
   */
  repoNames?: string[];
  /**
   * @remarks
   * The regular expression for image tags.
   * 
   * @example
   * .*
   */
  repoTagFilterPattern?: string;
  /**
   * @remarks
   * The ID of the event notification rule.
   * 
   * This parameter is required.
   * 
   * @example
   * crecr-n6pbhgjxt*****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the event notification rule.
   * 
   * @example
   * chain-demo
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      eventChannel: 'EventChannel',
      eventConfig: 'EventConfig',
      eventScope: 'EventScope',
      eventType: 'EventType',
      instanceId: 'InstanceId',
      namespaces: 'Namespaces',
      repoNames: 'RepoNames',
      repoTagFilterPattern: 'RepoTagFilterPattern',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventChannel: 'string',
      eventConfig: 'string',
      eventScope: 'string',
      eventType: 'string',
      instanceId: 'string',
      namespaces: { 'type': 'array', 'itemType': 'string' },
      repoNames: { 'type': 'array', 'itemType': 'string' },
      repoTagFilterPattern: 'string',
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    if(Array.isArray(this.repoNames)) {
      $dara.Model.validateArray(this.repoNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventCenterRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The event notification channel.
   * 
   * @example
   * EVENT_BRIDGE
   */
  eventChannel?: string;
  /**
   * @remarks
   * The event configuration.
   * 
   * @example
   * {
   *         "notifyMethod":"http",
   *         "notifyConfig":{
   *             "Url":"http://www.aliyundoc.com",
   *             "id":"MaAV3HgTkO5Fh8l1V********",
   *         },
   *         "notifyFilter":{}
   *     }
   */
  eventConfig?: string;
  /**
   * @remarks
   * The event scope. Valid values:
   * 
   * *   `INSTANCE`
   * *   `NAMESPACE`
   * *   `REPO`
   * 
   * Default value: `INSTANCE`
   * 
   * @example
   * INSTANCE
   */
  eventScope?: string;
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * *   `cr:Artifact:DeliveryChainCompleted`: The delivery chain is processed.
   * *   `cr:Artifact:SynchronizationCompleted`: The image is replicated.
   * *   `cr:Artifact:BuildCompleted`: The image is built.
   * *   `cr:Artifact:ScanCompleted`: The image is scanned.
   * *   `cr:Artifact:SigningCompleted`: The image is signed.
   * 
   * @example
   * cr:Artifact:DeliveryChainCompleted
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespaces to which the event notification rule applies.
   * 
   * @example
   * ns
   */
  namespacesShrink?: string;
  /**
   * @remarks
   * The names of the repositories to which the event notification rule applies.
   * 
   * @example
   * reponame
   */
  repoNamesShrink?: string;
  /**
   * @remarks
   * The regular expression for image tags.
   * 
   * @example
   * .*
   */
  repoTagFilterPattern?: string;
  /**
   * @remarks
   * The ID of the event notification rule.
   * 
   * This parameter is required.
   * 
   * @example
   * crecr-n6pbhgjxt*****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the event notification rule.
   * 
   * @example
   * chain-demo
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      eventChannel: 'EventChannel',
      eventConfig: 'EventConfig',
      eventScope: 'EventScope',
      eventType: 'EventType',
      instanceId: 'InstanceId',
      namespacesShrink: 'Namespaces',
      repoNamesShrink: 'RepoNames',
      repoTagFilterPattern: 'RepoTagFilterPattern',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventChannel: 'string',
      eventConfig: 'string',
      eventScope: 'string',
      eventType: 'string',
      instanceId: 'string',
      namespacesShrink: 'string',
      repoNamesShrink: 'string',
      repoTagFilterPattern: 'string',
      ruleId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventCenterRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 031572FA-7D8F-4C05-B790-1071E0E05DE6
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the event notification rule.
   * 
   * @example
   * crecr-n6pbhgjxt*****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventCenterRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEventCenterRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateEventCenterRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceEndpointStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the instance endpoint. Valid values:
   * 
   * *   `true`: enables the instance endpoint.
   * *   `false`: disables the instance endpoint
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The type of the endpoint. Set the value to Internet.
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  endpointType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the module that you want to access. Valid values:
   * 
   * *   `Registry`: the image repository.
   * *   `Chart`: a Helm chart.
   * 
   * @example
   * Chart
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      endpointType: 'EndpointType',
      instanceId: 'InstanceId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      endpointType: 'string',
      instanceId: 'string',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceEndpointStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2FC14396-A16A-42BA-AAE4-BB94D956DF09
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceEndpointStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateInstanceEndpointStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateInstanceEndpointStatusResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically create a repository when an image is pushed to the namespace.
   * 
   * @example
   * true
   */
  autoCreateRepo?: boolean;
  /**
   * @remarks
   * The default type of the repository. Valid values:
   * 
   * *   `PUBLIC`: The repository is a public repository.
   * *   `PRIVATE`: The repository is a private repository.
   * 
   * @example
   * PRIVATE
   */
  defaultRepoType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreateRepo: 'AutoCreateRepo',
      defaultRepoType: 'DefaultRepoType',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRepo: 'boolean',
      defaultRepoType: 'string',
      instanceId: 'string',
      namespaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 90B8475C-C066-4B92-946E-4D0DECB514E8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNamespaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNamespaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNamespaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoBuildRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Building arguments.
   */
  buildArgs?: string[];
  /**
   * @remarks
   * The ID of the building rule.
   * 
   * This parameter is required.
   * 
   * @example
   * crbr-ly77w5i3t31f****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The path of the Dockerfile.
   * 
   * @example
   * /
   */
  dockerfileLocation?: string;
  /**
   * @remarks
   * The name of the Dockerfile.
   * 
   * @example
   * Dockerfile
   */
  dockerfileName?: string;
  /**
   * @remarks
   * The tag of the image.
   * 
   * @example
   * v0.9.5
   */
  imageTag?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * Architecture for image building. Valid values:
   * 
   * *   `linux/amd64`
   * *   `linux/arm64`
   * *   `linux/386`
   * *   `linux/arm/v7`
   * *   `linux/arm/v6`
   * 
   * Default value: `linux/amd64`
   * 
   * @example
   * linux/amd64
   */
  platforms?: string[];
  /**
   * @remarks
   * The name of the push that triggers the building rule.
   * 
   * @example
   * master
   */
  pushName?: string;
  /**
   * @remarks
   * The type of the push that triggers the building rule. Valid values:
   * 
   * *   `GIT_TAG`: tag push
   * *   `GIT_BRANCH`: branch push
   * 
   * @example
   * GIT_BRANCH
   */
  pushType?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-tquyps22md8p****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      buildArgs: 'BuildArgs',
      buildRuleId: 'BuildRuleId',
      dockerfileLocation: 'DockerfileLocation',
      dockerfileName: 'DockerfileName',
      imageTag: 'ImageTag',
      instanceId: 'InstanceId',
      platforms: 'Platforms',
      pushName: 'PushName',
      pushType: 'PushType',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildArgs: { 'type': 'array', 'itemType': 'string' },
      buildRuleId: 'string',
      dockerfileLocation: 'string',
      dockerfileName: 'string',
      imageTag: 'string',
      instanceId: 'string',
      platforms: { 'type': 'array', 'itemType': 'string' },
      pushName: 'string',
      pushType: 'string',
      repoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildArgs)) {
      $dara.Model.validateArray(this.buildArgs);
    }
    if(Array.isArray(this.platforms)) {
      $dara.Model.validateArray(this.platforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoBuildRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the building rule.
   * 
   * @example
   * crbr-ly77w5i3t31f****
   */
  buildRuleId?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BC648259-91A7-4502-BED3-EDF64361FA83
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buildRuleId: 'BuildRuleId',
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRuleId: 'string',
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoBuildRuleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRepoBuildRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRepoBuildRuleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoSourceCodeRepoRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic image building when code is committed. Valid values:
   * 
   * *   `true`: enables automatic image building when code is committed.
   * *   `false`: disables automatic image building when code is committed.
   * 
   * @example
   * true
   */
  autoBuild?: string;
  /**
   * @remarks
   * The ID of the source code repository.
   * 
   * @example
   * crr-cp7d6sget5r****
   */
  codeRepoId?: string;
  /**
   * @remarks
   * The name of the source code repository.
   * 
   * This parameter is required.
   * 
   * @example
   * repo
   */
  codeRepoName?: string;
  /**
   * @remarks
   * The namespace to which the source code repository belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * namespace
   */
  codeRepoNamespaceName?: string;
  /**
   * @remarks
   * The type of the source code hosting platform. Valid values: GITHUB, GITLAB, GITEE, CODE, and CODEUP.
   * 
   * This parameter is required.
   * 
   * @example
   * GITHUB
   */
  codeRepoType?: string;
  /**
   * @remarks
   * Specifies whether to disable building caches. Valid values:
   * 
   * *   `true`: disables building caches.
   * *   `false`: enables building caches.
   * 
   * @example
   * false
   */
  disableCacheBuild?: string;
  /**
   * @remarks
   * The ID of the Container Registry Enterprise Edition instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-shac42yvqzvq****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable Build With Servers Deployed Outside Chinese Mainland. Valid values:
   * 
   * *   `true`: enables Build With Servers Deployed Outside Chinese Mainland.
   * *   `false`: disables Build With Servers Deployed Outside Chinese Mainland.
   * 
   * @example
   * false
   */
  overseaBuild?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-gzsrlevmvoa****
   */
  repoId?: string;
  static names(): { [key: string]: string } {
    return {
      autoBuild: 'AutoBuild',
      codeRepoId: 'CodeRepoId',
      codeRepoName: 'CodeRepoName',
      codeRepoNamespaceName: 'CodeRepoNamespaceName',
      codeRepoType: 'CodeRepoType',
      disableCacheBuild: 'DisableCacheBuild',
      instanceId: 'InstanceId',
      overseaBuild: 'OverseaBuild',
      repoId: 'RepoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuild: 'string',
      codeRepoId: 'string',
      codeRepoName: 'string',
      codeRepoNamespaceName: 'string',
      codeRepoType: 'string',
      disableCacheBuild: 'string',
      instanceId: 'string',
      overseaBuild: 'string',
      repoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoSourceCodeRepoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F56D589D-AF7F-4900-BA46-62C780AC2C10
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoSourceCodeRepoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRepoSourceCodeRepoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRepoSourceCodeRepoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoTriggerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * This parameter is required.
   * 
   * @example
   * crr-tquyps22md8p****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the trigger.
   * 
   * This parameter is required.
   * 
   * @example
   * crw-k7bdx4kt52ty****
   */
  triggerId?: string;
  /**
   * @remarks
   * The name of the trigger.
   * 
   * You can specify the TriggerName or TriggerUrl parameter. The TriggerName parameter is optional.
   * 
   * @example
   * test_trigger
   */
  triggerName?: string;
  /**
   * @remarks
   * The image tag based on which the trigger is set.
   * 
   * @example
   * master
   */
  triggerTag?: string;
  /**
   * @remarks
   * The type of the trigger. Valid values:
   * 
   * *   `ALL`: a trigger that supports both tags and regular expressions.
   * *   `TAG_LISTTAG`: a tag-based trigger.
   * *   `TAG_REG_EXP`: a regular expression-based trigger.
   * 
   * @example
   * TAG_LIST
   */
  triggerType?: string;
  /**
   * @remarks
   * The URL of the trigger.
   * 
   * @example
   * https://www.test.com
   */
  triggerUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      triggerId: 'TriggerId',
      triggerName: 'TriggerName',
      triggerTag: 'TriggerTag',
      triggerType: 'TriggerType',
      triggerUrl: 'TriggerUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoId: 'string',
      triggerId: 'string',
      triggerName: 'string',
      triggerTag: 'string',
      triggerType: 'string',
      triggerUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 32535049-ED91-4589-98C0-7C88766EDF1F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepoTriggerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRepoTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRepoTriggerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryRequest extends $dara.Model {
  /**
   * @example
   * repo-for-test
   */
  detail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cri-kmsiwlxxdcva****
   */
  instanceId?: string;
  /**
   * @example
   * crr-tquyps22md8p****
   */
  repoId?: string;
  /**
   * @example
   * dsp/domain-microapp
   */
  repoName?: string;
  /**
   * @example
   * ejiayou-other
   */
  repoNamespaceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PUBLIC
   */
  repoType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test repo
   */
  summary?: string;
  /**
   * @example
   * true
   */
  tagImmutability?: boolean;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceId: 'InstanceId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespaceName: 'RepoNamespaceName',
      repoType: 'RepoType',
      summary: 'Summary',
      tagImmutability: 'TagImmutability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      instanceId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespaceName: 'string',
      repoType: 'string',
      summary: 'string',
      tagImmutability: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * CC43EC6B-0DD4-40AE-8811-B0519617051A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRepositoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRepositoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRepositoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Cancels an artifact building task.
   * 
   * @param request - CancelArtifactBuildTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelArtifactBuildTaskResponse
   */
  async cancelArtifactBuildTaskWithOptions(request: CancelArtifactBuildTaskRequest, runtime: $dara.RuntimeOptions): Promise<CancelArtifactBuildTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildTaskId)) {
      query["BuildTaskId"] = request.buildTaskId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelArtifactBuildTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelArtifactBuildTaskResponse>(await this.callApi(params, req, runtime), new CancelArtifactBuildTaskResponse({}));
    } else {
      return $dara.cast<CancelArtifactBuildTaskResponse>(await this.execute(params, req, runtime), new CancelArtifactBuildTaskResponse({}));
    }

  }

  /**
   * Cancels an artifact building task.
   * 
   * @param request - CancelArtifactBuildTaskRequest
   * @returns CancelArtifactBuildTaskResponse
   */
  async cancelArtifactBuildTask(request: CancelArtifactBuildTaskRequest): Promise<CancelArtifactBuildTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelArtifactBuildTaskWithOptions(request, runtime);
  }

  /**
   * Cancels an image building task of a repository.
   * 
   * @param request - CancelRepoBuildRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRepoBuildRecordResponse
   */
  async cancelRepoBuildRecordWithOptions(request: CancelRepoBuildRecordRequest, runtime: $dara.RuntimeOptions): Promise<CancelRepoBuildRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildRecordId)) {
      query["BuildRecordId"] = request.buildRecordId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRepoBuildRecord",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelRepoBuildRecordResponse>(await this.callApi(params, req, runtime), new CancelRepoBuildRecordResponse({}));
    } else {
      return $dara.cast<CancelRepoBuildRecordResponse>(await this.execute(params, req, runtime), new CancelRepoBuildRecordResponse({}));
    }

  }

  /**
   * Cancels an image building task of a repository.
   * 
   * @param request - CancelRepoBuildRecordRequest
   * @returns CancelRepoBuildRecordResponse
   */
  async cancelRepoBuildRecord(request: CancelRepoBuildRecordRequest): Promise<CancelRepoBuildRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelRepoBuildRecordWithOptions(request, runtime);
  }

  /**
   * Cancels a single replication task.
   * 
   * @param request - CancelRepoSyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRepoSyncTaskResponse
   */
  async cancelRepoSyncTaskWithOptions(request: CancelRepoSyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<CancelRepoSyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.syncTaskId)) {
      query["SyncTaskId"] = request.syncTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRepoSyncTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelRepoSyncTaskResponse>(await this.callApi(params, req, runtime), new CancelRepoSyncTaskResponse({}));
    } else {
      return $dara.cast<CancelRepoSyncTaskResponse>(await this.execute(params, req, runtime), new CancelRepoSyncTaskResponse({}));
    }

  }

  /**
   * Cancels a single replication task.
   * 
   * @param request - CancelRepoSyncTaskRequest
   * @returns CancelRepoSyncTaskResponse
   */
  async cancelRepoSyncTask(request: CancelRepoSyncTaskRequest): Promise<CancelRepoSyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelRepoSyncTaskWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which a resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
    } else {
      return $dara.cast<ChangeResourceGroupResponse>(await this.execute(params, req, runtime), new ChangeResourceGroupResponse({}));
    }

  }

  /**
   * Changes the resource group to which a resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Create image repository acceleration rules for image building.
   * 
   * @remarks
   * You can create building rules of accelerated images only for image repositories of Container Registry Advanced Edition instances. You cannot create building rules of accelerated images for image repositories of Container Registry Basic Edition instances. For more information, see [Specifications of different editions](https://www.alibabacloud.com/help/en/acr/product-overview/what-is-container-registry?spm=openapi-amp.newDocPublishment.0.0.bf82281fRj7rmV#section-n3q-ps7-x6k).
   * Accelerated images are not supported in Alibaba Finance Cloud regions or Alibaba Gov Cloud regions.
   * 
   * @param tmpReq - CreateArtifactBuildRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateArtifactBuildRuleResponse
   */
  async createArtifactBuildRuleWithOptions(tmpReq: CreateArtifactBuildRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateArtifactBuildRuleResponse> {
    tmpReq.validate();
    let request = new CreateArtifactBuildRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.scopeId)) {
      query["ScopeId"] = request.scopeId;
    }

    if (!$dara.isNull(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateArtifactBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateArtifactBuildRuleResponse>(await this.callApi(params, req, runtime), new CreateArtifactBuildRuleResponse({}));
    } else {
      return $dara.cast<CreateArtifactBuildRuleResponse>(await this.execute(params, req, runtime), new CreateArtifactBuildRuleResponse({}));
    }

  }

  /**
   * Create image repository acceleration rules for image building.
   * 
   * @remarks
   * You can create building rules of accelerated images only for image repositories of Container Registry Advanced Edition instances. You cannot create building rules of accelerated images for image repositories of Container Registry Basic Edition instances. For more information, see [Specifications of different editions](https://www.alibabacloud.com/help/en/acr/product-overview/what-is-container-registry?spm=openapi-amp.newDocPublishment.0.0.bf82281fRj7rmV#section-n3q-ps7-x6k).
   * Accelerated images are not supported in Alibaba Finance Cloud regions or Alibaba Gov Cloud regions.
   * 
   * @param request - CreateArtifactBuildRuleRequest
   * @returns CreateArtifactBuildRuleResponse
   */
  async createArtifactBuildRule(request: CreateArtifactBuildRuleRequest): Promise<CreateArtifactBuildRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createArtifactBuildRuleWithOptions(request, runtime);
  }

  /**
   * Creates a lifecycle management rule for an artifact.
   * 
   * @param request - CreateArtifactLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateArtifactLifecycleRuleResponse
   */
  async createArtifactLifecycleRuleWithOptions(request: CreateArtifactLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateArtifactLifecycleRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auto)) {
      query["Auto"] = request.auto;
    }

    if (!$dara.isNull(request.enableDeleteTag)) {
      query["EnableDeleteTag"] = request.enableDeleteTag;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.retentionTagCount)) {
      query["RetentionTagCount"] = request.retentionTagCount;
    }

    if (!$dara.isNull(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.tagRegexp)) {
      query["TagRegexp"] = request.tagRegexp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateArtifactLifecycleRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateArtifactLifecycleRuleResponse>(await this.callApi(params, req, runtime), new CreateArtifactLifecycleRuleResponse({}));
    } else {
      return $dara.cast<CreateArtifactLifecycleRuleResponse>(await this.execute(params, req, runtime), new CreateArtifactLifecycleRuleResponse({}));
    }

  }

  /**
   * Creates a lifecycle management rule for an artifact.
   * 
   * @param request - CreateArtifactLifecycleRuleRequest
   * @returns CreateArtifactLifecycleRuleResponse
   */
  async createArtifactLifecycleRule(request: CreateArtifactLifecycleRuleRequest): Promise<CreateArtifactLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createArtifactLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * Creates an artifact subscription rule.
   * 
   * @param request - CreateArtifactSubscriptionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateArtifactSubscriptionRuleResponse
   */
  async createArtifactSubscriptionRuleWithOptions(request: CreateArtifactSubscriptionRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateArtifactSubscriptionRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accelerate)) {
      query["Accelerate"] = request.accelerate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.override)) {
      query["Override"] = request.override;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.sourceNamespaceName)) {
      query["SourceNamespaceName"] = request.sourceNamespaceName;
    }

    if (!$dara.isNull(request.sourceProvider)) {
      query["SourceProvider"] = request.sourceProvider;
    }

    if (!$dara.isNull(request.sourceRepoName)) {
      query["SourceRepoName"] = request.sourceRepoName;
    }

    if (!$dara.isNull(request.tagCount)) {
      query["TagCount"] = request.tagCount;
    }

    if (!$dara.isNull(request.tagRegexp)) {
      query["TagRegexp"] = request.tagRegexp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateArtifactSubscriptionRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateArtifactSubscriptionRuleResponse>(await this.callApi(params, req, runtime), new CreateArtifactSubscriptionRuleResponse({}));
    } else {
      return $dara.cast<CreateArtifactSubscriptionRuleResponse>(await this.execute(params, req, runtime), new CreateArtifactSubscriptionRuleResponse({}));
    }

  }

  /**
   * Creates an artifact subscription rule.
   * 
   * @param request - CreateArtifactSubscriptionRuleRequest
   * @returns CreateArtifactSubscriptionRuleResponse
   */
  async createArtifactSubscriptionRule(request: CreateArtifactSubscriptionRuleRequest): Promise<CreateArtifactSubscriptionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createArtifactSubscriptionRuleWithOptions(request, runtime);
  }

  /**
   * Creates an artifact subscription task.
   * 
   * @param request - CreateArtifactSubscriptionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateArtifactSubscriptionTaskResponse
   */
  async createArtifactSubscriptionTaskWithOptions(request: CreateArtifactSubscriptionTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreateArtifactSubscriptionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateArtifactSubscriptionTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateArtifactSubscriptionTaskResponse>(await this.callApi(params, req, runtime), new CreateArtifactSubscriptionTaskResponse({}));
    } else {
      return $dara.cast<CreateArtifactSubscriptionTaskResponse>(await this.execute(params, req, runtime), new CreateArtifactSubscriptionTaskResponse({}));
    }

  }

  /**
   * Creates an artifact subscription task.
   * 
   * @param request - CreateArtifactSubscriptionTaskRequest
   * @returns CreateArtifactSubscriptionTaskResponse
   */
  async createArtifactSubscriptionTask(request: CreateArtifactSubscriptionTaskRequest): Promise<CreateArtifactSubscriptionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createArtifactSubscriptionTaskWithOptions(request, runtime);
  }

  /**
   * Creates an image building record based on an existing record.
   * 
   * @param request - CreateBuildRecordByRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBuildRecordByRecordResponse
   */
  async createBuildRecordByRecordWithOptions(request: CreateBuildRecordByRecordRequest, runtime: $dara.RuntimeOptions): Promise<CreateBuildRecordByRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildRecordId)) {
      query["BuildRecordId"] = request.buildRecordId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBuildRecordByRecord",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateBuildRecordByRecordResponse>(await this.callApi(params, req, runtime), new CreateBuildRecordByRecordResponse({}));
    } else {
      return $dara.cast<CreateBuildRecordByRecordResponse>(await this.execute(params, req, runtime), new CreateBuildRecordByRecordResponse({}));
    }

  }

  /**
   * Creates an image building record based on an existing record.
   * 
   * @param request - CreateBuildRecordByRecordRequest
   * @returns CreateBuildRecordByRecordResponse
   */
  async createBuildRecordByRecord(request: CreateBuildRecordByRecordRequest): Promise<CreateBuildRecordByRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBuildRecordByRecordWithOptions(request, runtime);
  }

  /**
   * Creates an image building record based on a rule.
   * 
   * @param request - CreateBuildRecordByRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBuildRecordByRuleResponse
   */
  async createBuildRecordByRuleWithOptions(request: CreateBuildRecordByRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateBuildRecordByRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildRuleId)) {
      query["BuildRuleId"] = request.buildRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBuildRecordByRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateBuildRecordByRuleResponse>(await this.callApi(params, req, runtime), new CreateBuildRecordByRuleResponse({}));
    } else {
      return $dara.cast<CreateBuildRecordByRuleResponse>(await this.execute(params, req, runtime), new CreateBuildRecordByRuleResponse({}));
    }

  }

  /**
   * Creates an image building record based on a rule.
   * 
   * @param request - CreateBuildRecordByRuleRequest
   * @returns CreateBuildRecordByRuleResponse
   */
  async createBuildRecordByRule(request: CreateBuildRecordByRuleRequest): Promise<CreateBuildRecordByRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBuildRecordByRuleWithOptions(request, runtime);
  }

  /**
   * Creates a delivery chain.
   * 
   * @param request - CreateChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChainResponse
   */
  async createChainWithOptions(request: CreateChainRequest, runtime: $dara.RuntimeOptions): Promise<CreateChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chainConfig)) {
      query["ChainConfig"] = request.chainConfig;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.scopeExclude)) {
      query["ScopeExclude"] = request.scopeExclude;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateChainResponse>(await this.callApi(params, req, runtime), new CreateChainResponse({}));
    } else {
      return $dara.cast<CreateChainResponse>(await this.execute(params, req, runtime), new CreateChainResponse({}));
    }

  }

  /**
   * Creates a delivery chain.
   * 
   * @param request - CreateChainRequest
   * @returns CreateChainResponse
   */
  async createChain(request: CreateChainRequest): Promise<CreateChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChainWithOptions(request, runtime);
  }

  /**
   * Creates a chart namespace in an instance.
   * 
   * @param request - CreateChartNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChartNamespaceResponse
   */
  async createChartNamespaceWithOptions(request: CreateChartNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<CreateChartNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoCreateRepo)) {
      query["AutoCreateRepo"] = request.autoCreateRepo;
    }

    if (!$dara.isNull(request.defaultRepoType)) {
      query["DefaultRepoType"] = request.defaultRepoType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateChartNamespaceResponse>(await this.callApi(params, req, runtime), new CreateChartNamespaceResponse({}));
    } else {
      return $dara.cast<CreateChartNamespaceResponse>(await this.execute(params, req, runtime), new CreateChartNamespaceResponse({}));
    }

  }

  /**
   * Creates a chart namespace in an instance.
   * 
   * @param request - CreateChartNamespaceRequest
   * @returns CreateChartNamespaceResponse
   */
  async createChartNamespace(request: CreateChartNamespaceRequest): Promise<CreateChartNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChartNamespaceWithOptions(request, runtime);
  }

  /**
   * Creates a chart repository.
   * 
   * @param request - CreateChartRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChartRepositoryResponse
   */
  async createChartRepositoryWithOptions(request: CreateChartRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<CreateChartRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.repoType)) {
      query["RepoType"] = request.repoType;
    }

    if (!$dara.isNull(request.summary)) {
      query["Summary"] = request.summary;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateChartRepositoryResponse>(await this.callApi(params, req, runtime), new CreateChartRepositoryResponse({}));
    } else {
      return $dara.cast<CreateChartRepositoryResponse>(await this.execute(params, req, runtime), new CreateChartRepositoryResponse({}));
    }

  }

  /**
   * Creates a chart repository.
   * 
   * @param request - CreateChartRepositoryRequest
   * @returns CreateChartRepositoryResponse
   */
  async createChartRepository(request: CreateChartRepositoryRequest): Promise<CreateChartRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChartRepositoryWithOptions(request, runtime);
  }

  /**
   * Creates a whitelist policy for the public endpoint of the instance.
   * 
   * @param request - CreateInstanceEndpointAclPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceEndpointAclPolicyResponse
   */
  async createInstanceEndpointAclPolicyWithOptions(request: CreateInstanceEndpointAclPolicyRequest, runtime: $dara.RuntimeOptions): Promise<CreateInstanceEndpointAclPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.entry)) {
      query["Entry"] = request.entry;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceEndpointAclPolicy",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateInstanceEndpointAclPolicyResponse>(await this.callApi(params, req, runtime), new CreateInstanceEndpointAclPolicyResponse({}));
    } else {
      return $dara.cast<CreateInstanceEndpointAclPolicyResponse>(await this.execute(params, req, runtime), new CreateInstanceEndpointAclPolicyResponse({}));
    }

  }

  /**
   * Creates a whitelist policy for the public endpoint of the instance.
   * 
   * @param request - CreateInstanceEndpointAclPolicyRequest
   * @returns CreateInstanceEndpointAclPolicyResponse
   */
  async createInstanceEndpointAclPolicy(request: CreateInstanceEndpointAclPolicyRequest): Promise<CreateInstanceEndpointAclPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceEndpointAclPolicyWithOptions(request, runtime);
  }

  /**
   * Associates a virtual private cloud (VPC) with a Container Registry instance.
   * 
   * @remarks
   * The VPC quota must be purchased separately.
   * 
   * @param request - CreateInstanceVpcEndpointLinkedVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceVpcEndpointLinkedVpcResponse
   */
  async createInstanceVpcEndpointLinkedVpcWithOptions(request: CreateInstanceVpcEndpointLinkedVpcRequest, runtime: $dara.RuntimeOptions): Promise<CreateInstanceVpcEndpointLinkedVpcResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableCreateDNSRecordInPvzt)) {
      query["EnableCreateDNSRecordInPvzt"] = request.enableCreateDNSRecordInPvzt;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceVpcEndpointLinkedVpc",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateInstanceVpcEndpointLinkedVpcResponse>(await this.callApi(params, req, runtime), new CreateInstanceVpcEndpointLinkedVpcResponse({}));
    } else {
      return $dara.cast<CreateInstanceVpcEndpointLinkedVpcResponse>(await this.execute(params, req, runtime), new CreateInstanceVpcEndpointLinkedVpcResponse({}));
    }

  }

  /**
   * Associates a virtual private cloud (VPC) with a Container Registry instance.
   * 
   * @remarks
   * The VPC quota must be purchased separately.
   * 
   * @param request - CreateInstanceVpcEndpointLinkedVpcRequest
   * @returns CreateInstanceVpcEndpointLinkedVpcResponse
   */
  async createInstanceVpcEndpointLinkedVpc(request: CreateInstanceVpcEndpointLinkedVpcRequest): Promise<CreateInstanceVpcEndpointLinkedVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceVpcEndpointLinkedVpcWithOptions(request, runtime);
  }

  /**
   * Creates a namespace of image repositories.
   * 
   * @param request - CreateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNamespaceResponse
   */
  async createNamespaceWithOptions(request: CreateNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<CreateNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoCreateRepo)) {
      query["AutoCreateRepo"] = request.autoCreateRepo;
    }

    if (!$dara.isNull(request.defaultRepoType)) {
      query["DefaultRepoType"] = request.defaultRepoType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateNamespaceResponse>(await this.callApi(params, req, runtime), new CreateNamespaceResponse({}));
    } else {
      return $dara.cast<CreateNamespaceResponse>(await this.execute(params, req, runtime), new CreateNamespaceResponse({}));
    }

  }

  /**
   * Creates a namespace of image repositories.
   * 
   * @param request - CreateNamespaceRequest
   * @returns CreateNamespaceResponse
   */
  async createNamespace(request: CreateNamespaceRequest): Promise<CreateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  /**
   * Creates an image building rule for a repository.
   * 
   * @param request - CreateRepoBuildRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoBuildRuleResponse
   */
  async createRepoBuildRuleWithOptions(request: CreateRepoBuildRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateRepoBuildRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildArgs)) {
      query["BuildArgs"] = request.buildArgs;
    }

    if (!$dara.isNull(request.dockerfileLocation)) {
      query["DockerfileLocation"] = request.dockerfileLocation;
    }

    if (!$dara.isNull(request.dockerfileName)) {
      query["DockerfileName"] = request.dockerfileName;
    }

    if (!$dara.isNull(request.imageTag)) {
      query["ImageTag"] = request.imageTag;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.platforms)) {
      query["Platforms"] = request.platforms;
    }

    if (!$dara.isNull(request.pushName)) {
      query["PushName"] = request.pushName;
    }

    if (!$dara.isNull(request.pushType)) {
      query["PushType"] = request.pushType;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new CreateRepoBuildRuleResponse({}));
    } else {
      return $dara.cast<CreateRepoBuildRuleResponse>(await this.execute(params, req, runtime), new CreateRepoBuildRuleResponse({}));
    }

  }

  /**
   * Creates an image building rule for a repository.
   * 
   * @param request - CreateRepoBuildRuleRequest
   * @returns CreateRepoBuildRuleResponse
   */
  async createRepoBuildRule(request: CreateRepoBuildRuleRequest): Promise<CreateRepoBuildRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoBuildRuleWithOptions(request, runtime);
  }

  /**
   * Binds a source code repository to an image repository.
   * 
   * @param request - CreateRepoSourceCodeRepoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoSourceCodeRepoResponse
   */
  async createRepoSourceCodeRepoWithOptions(request: CreateRepoSourceCodeRepoRequest, runtime: $dara.RuntimeOptions): Promise<CreateRepoSourceCodeRepoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoBuild)) {
      query["AutoBuild"] = request.autoBuild;
    }

    if (!$dara.isNull(request.codeRepoName)) {
      query["CodeRepoName"] = request.codeRepoName;
    }

    if (!$dara.isNull(request.codeRepoNamespaceName)) {
      query["CodeRepoNamespaceName"] = request.codeRepoNamespaceName;
    }

    if (!$dara.isNull(request.codeRepoType)) {
      query["CodeRepoType"] = request.codeRepoType;
    }

    if (!$dara.isNull(request.disableCacheBuild)) {
      query["DisableCacheBuild"] = request.disableCacheBuild;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.overseaBuild)) {
      query["OverseaBuild"] = request.overseaBuild;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoSourceCodeRepo",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRepoSourceCodeRepoResponse>(await this.callApi(params, req, runtime), new CreateRepoSourceCodeRepoResponse({}));
    } else {
      return $dara.cast<CreateRepoSourceCodeRepoResponse>(await this.execute(params, req, runtime), new CreateRepoSourceCodeRepoResponse({}));
    }

  }

  /**
   * Binds a source code repository to an image repository.
   * 
   * @param request - CreateRepoSourceCodeRepoRequest
   * @returns CreateRepoSourceCodeRepoResponse
   */
  async createRepoSourceCodeRepo(request: CreateRepoSourceCodeRepoRequest): Promise<CreateRepoSourceCodeRepoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoSourceCodeRepoWithOptions(request, runtime);
  }

  /**
   * Creates an image synchronization rule for an image repository.
   * 
   * @param request - CreateRepoSyncRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoSyncRuleResponse
   */
  async createRepoSyncRuleWithOptions(request: CreateRepoSyncRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateRepoSyncRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNameFilter)) {
      query["RepoNameFilter"] = request.repoNameFilter;
    }

    if (!$dara.isNull(request.syncRuleName)) {
      query["SyncRuleName"] = request.syncRuleName;
    }

    if (!$dara.isNull(request.syncScope)) {
      query["SyncScope"] = request.syncScope;
    }

    if (!$dara.isNull(request.syncTrigger)) {
      query["SyncTrigger"] = request.syncTrigger;
    }

    if (!$dara.isNull(request.tagFilter)) {
      query["TagFilter"] = request.tagFilter;
    }

    if (!$dara.isNull(request.targetInstanceId)) {
      query["TargetInstanceId"] = request.targetInstanceId;
    }

    if (!$dara.isNull(request.targetNamespaceName)) {
      query["TargetNamespaceName"] = request.targetNamespaceName;
    }

    if (!$dara.isNull(request.targetRegionId)) {
      query["TargetRegionId"] = request.targetRegionId;
    }

    if (!$dara.isNull(request.targetRepoName)) {
      query["TargetRepoName"] = request.targetRepoName;
    }

    if (!$dara.isNull(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoSyncRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRepoSyncRuleResponse>(await this.callApi(params, req, runtime), new CreateRepoSyncRuleResponse({}));
    } else {
      return $dara.cast<CreateRepoSyncRuleResponse>(await this.execute(params, req, runtime), new CreateRepoSyncRuleResponse({}));
    }

  }

  /**
   * Creates an image synchronization rule for an image repository.
   * 
   * @param request - CreateRepoSyncRuleRequest
   * @returns CreateRepoSyncRuleResponse
   */
  async createRepoSyncRule(request: CreateRepoSyncRuleRequest): Promise<CreateRepoSyncRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoSyncRuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateRepoSyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoSyncTaskResponse
   */
  async createRepoSyncTaskWithOptions(request: CreateRepoSyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreateRepoSyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.override)) {
      query["Override"] = request.override;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.targetInstanceId)) {
      query["TargetInstanceId"] = request.targetInstanceId;
    }

    if (!$dara.isNull(request.targetNamespace)) {
      query["TargetNamespace"] = request.targetNamespace;
    }

    if (!$dara.isNull(request.targetRegionId)) {
      query["TargetRegionId"] = request.targetRegionId;
    }

    if (!$dara.isNull(request.targetRepoName)) {
      query["TargetRepoName"] = request.targetRepoName;
    }

    if (!$dara.isNull(request.targetTag)) {
      query["TargetTag"] = request.targetTag;
    }

    if (!$dara.isNull(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoSyncTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRepoSyncTaskResponse>(await this.callApi(params, req, runtime), new CreateRepoSyncTaskResponse({}));
    } else {
      return $dara.cast<CreateRepoSyncTaskResponse>(await this.execute(params, req, runtime), new CreateRepoSyncTaskResponse({}));
    }

  }

  /**
   * @param request - CreateRepoSyncTaskRequest
   * @returns CreateRepoSyncTaskResponse
   */
  async createRepoSyncTask(request: CreateRepoSyncTaskRequest): Promise<CreateRepoSyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoSyncTaskWithOptions(request, runtime);
  }

  /**
   * Creates an image replication task based on a manual replication rule.
   * 
   * @param request - CreateRepoSyncTaskByRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoSyncTaskByRuleResponse
   */
  async createRepoSyncTaskByRuleWithOptions(request: CreateRepoSyncTaskByRuleRequest, runtime: $dara.RuntimeOptions): Promise<CreateRepoSyncTaskByRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.syncRuleId)) {
      query["SyncRuleId"] = request.syncRuleId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoSyncTaskByRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRepoSyncTaskByRuleResponse>(await this.callApi(params, req, runtime), new CreateRepoSyncTaskByRuleResponse({}));
    } else {
      return $dara.cast<CreateRepoSyncTaskByRuleResponse>(await this.execute(params, req, runtime), new CreateRepoSyncTaskByRuleResponse({}));
    }

  }

  /**
   * Creates an image replication task based on a manual replication rule.
   * 
   * @param request - CreateRepoSyncTaskByRuleRequest
   * @returns CreateRepoSyncTaskByRuleResponse
   */
  async createRepoSyncTaskByRule(request: CreateRepoSyncTaskByRuleRequest): Promise<CreateRepoSyncTaskByRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoSyncTaskByRuleWithOptions(request, runtime);
  }

  /**
   * Creates an image tag based on an existing image tag in an image repository.
   * 
   * @param request - CreateRepoTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoTagResponse
   */
  async createRepoTagWithOptions(request: CreateRepoTagRequest, runtime: $dara.RuntimeOptions): Promise<CreateRepoTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fromTag)) {
      query["FromTag"] = request.fromTag;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.toTag)) {
      query["ToTag"] = request.toTag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoTag",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRepoTagResponse>(await this.callApi(params, req, runtime), new CreateRepoTagResponse({}));
    } else {
      return $dara.cast<CreateRepoTagResponse>(await this.execute(params, req, runtime), new CreateRepoTagResponse({}));
    }

  }

  /**
   * Creates an image tag based on an existing image tag in an image repository.
   * 
   * @param request - CreateRepoTagRequest
   * @returns CreateRepoTagResponse
   */
  async createRepoTag(request: CreateRepoTagRequest): Promise<CreateRepoTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoTagWithOptions(request, runtime);
  }

  /**
   * @param request - CreateRepoTagScanTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoTagScanTaskResponse
   */
  async createRepoTagScanTaskWithOptions(request: CreateRepoTagScanTaskRequest, runtime: $dara.RuntimeOptions): Promise<CreateRepoTagScanTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.scanService)) {
      query["ScanService"] = request.scanService;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoTagScanTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRepoTagScanTaskResponse>(await this.callApi(params, req, runtime), new CreateRepoTagScanTaskResponse({}));
    } else {
      return $dara.cast<CreateRepoTagScanTaskResponse>(await this.execute(params, req, runtime), new CreateRepoTagScanTaskResponse({}));
    }

  }

  /**
   * @param request - CreateRepoTagScanTaskRequest
   * @returns CreateRepoTagScanTaskResponse
   */
  async createRepoTagScanTask(request: CreateRepoTagScanTaskRequest): Promise<CreateRepoTagScanTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoTagScanTaskWithOptions(request, runtime);
  }

  /**
   * Creates a trigger for a repository.
   * 
   * @param request - CreateRepoTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoTriggerResponse
   */
  async createRepoTriggerWithOptions(request: CreateRepoTriggerRequest, runtime: $dara.RuntimeOptions): Promise<CreateRepoTriggerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.triggerName)) {
      query["TriggerName"] = request.triggerName;
    }

    if (!$dara.isNull(request.triggerTag)) {
      query["TriggerTag"] = request.triggerTag;
    }

    if (!$dara.isNull(request.triggerType)) {
      query["TriggerType"] = request.triggerType;
    }

    if (!$dara.isNull(request.triggerUrl)) {
      query["TriggerUrl"] = request.triggerUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoTrigger",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRepoTriggerResponse>(await this.callApi(params, req, runtime), new CreateRepoTriggerResponse({}));
    } else {
      return $dara.cast<CreateRepoTriggerResponse>(await this.execute(params, req, runtime), new CreateRepoTriggerResponse({}));
    }

  }

  /**
   * Creates a trigger for a repository.
   * 
   * @param request - CreateRepoTriggerRequest
   * @returns CreateRepoTriggerResponse
   */
  async createRepoTrigger(request: CreateRepoTriggerRequest): Promise<CreateRepoTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoTriggerWithOptions(request, runtime);
  }

  /**
   * Creates an image repository.
   * 
   * @param request - CreateRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepositoryResponse
   */
  async createRepositoryWithOptions(request: CreateRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<CreateRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.detail)) {
      query["Detail"] = request.detail;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.repoType)) {
      query["RepoType"] = request.repoType;
    }

    if (!$dara.isNull(request.summary)) {
      query["Summary"] = request.summary;
    }

    if (!$dara.isNull(request.tagImmutability)) {
      query["TagImmutability"] = request.tagImmutability;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRepositoryResponse>(await this.callApi(params, req, runtime), new CreateRepositoryResponse({}));
    } else {
      return $dara.cast<CreateRepositoryResponse>(await this.execute(params, req, runtime), new CreateRepositoryResponse({}));
    }

  }

  /**
   * Creates an image repository.
   * 
   * @param request - CreateRepositoryRequest
   * @returns CreateRepositoryResponse
   */
  async createRepository(request: CreateRepositoryRequest): Promise<CreateRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepositoryWithOptions(request, runtime);
  }

  /**
   * Deletes an artifact lifecycle management rule.
   * 
   * @param request - DeleteArtifactLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteArtifactLifecycleRuleResponse
   */
  async deleteArtifactLifecycleRuleWithOptions(request: DeleteArtifactLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteArtifactLifecycleRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteArtifactLifecycleRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteArtifactLifecycleRuleResponse>(await this.callApi(params, req, runtime), new DeleteArtifactLifecycleRuleResponse({}));
    } else {
      return $dara.cast<DeleteArtifactLifecycleRuleResponse>(await this.execute(params, req, runtime), new DeleteArtifactLifecycleRuleResponse({}));
    }

  }

  /**
   * Deletes an artifact lifecycle management rule.
   * 
   * @param request - DeleteArtifactLifecycleRuleRequest
   * @returns DeleteArtifactLifecycleRuleResponse
   */
  async deleteArtifactLifecycleRule(request: DeleteArtifactLifecycleRuleRequest): Promise<DeleteArtifactLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteArtifactLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * Deletes an artifact subscription rule.
   * 
   * @param request - DeleteArtifactSubscriptionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteArtifactSubscriptionRuleResponse
   */
  async deleteArtifactSubscriptionRuleWithOptions(request: DeleteArtifactSubscriptionRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteArtifactSubscriptionRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteArtifactSubscriptionRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteArtifactSubscriptionRuleResponse>(await this.callApi(params, req, runtime), new DeleteArtifactSubscriptionRuleResponse({}));
    } else {
      return $dara.cast<DeleteArtifactSubscriptionRuleResponse>(await this.execute(params, req, runtime), new DeleteArtifactSubscriptionRuleResponse({}));
    }

  }

  /**
   * Deletes an artifact subscription rule.
   * 
   * @param request - DeleteArtifactSubscriptionRuleRequest
   * @returns DeleteArtifactSubscriptionRuleResponse
   */
  async deleteArtifactSubscriptionRule(request: DeleteArtifactSubscriptionRuleRequest): Promise<DeleteArtifactSubscriptionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteArtifactSubscriptionRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a delivery pipeline.
   * 
   * @param request - DeleteChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChainResponse
   */
  async deleteChainWithOptions(request: DeleteChainRequest, runtime: $dara.RuntimeOptions): Promise<DeleteChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chainId)) {
      query["ChainId"] = request.chainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteChainResponse>(await this.callApi(params, req, runtime), new DeleteChainResponse({}));
    } else {
      return $dara.cast<DeleteChainResponse>(await this.execute(params, req, runtime), new DeleteChainResponse({}));
    }

  }

  /**
   * Deletes a delivery pipeline.
   * 
   * @param request - DeleteChainRequest
   * @returns DeleteChainResponse
   */
  async deleteChain(request: DeleteChainRequest): Promise<DeleteChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChainWithOptions(request, runtime);
  }

  /**
   * Deletes a chart namespace from an instance.
   * 
   * @remarks
   * >  If you delete a chart namespace, all repositories in the namespace and the charts in all repositories are deleted.
   * 
   * @param request - DeleteChartNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChartNamespaceResponse
   */
  async deleteChartNamespaceWithOptions(request: DeleteChartNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteChartNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteChartNamespaceResponse>(await this.callApi(params, req, runtime), new DeleteChartNamespaceResponse({}));
    } else {
      return $dara.cast<DeleteChartNamespaceResponse>(await this.execute(params, req, runtime), new DeleteChartNamespaceResponse({}));
    }

  }

  /**
   * Deletes a chart namespace from an instance.
   * 
   * @remarks
   * >  If you delete a chart namespace, all repositories in the namespace and the charts in all repositories are deleted.
   * 
   * @param request - DeleteChartNamespaceRequest
   * @returns DeleteChartNamespaceResponse
   */
  async deleteChartNamespace(request: DeleteChartNamespaceRequest): Promise<DeleteChartNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChartNamespaceWithOptions(request, runtime);
  }

  /**
   * Deletes a chart version from a chart repository.
   * 
   * @param request - DeleteChartReleaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChartReleaseResponse
   */
  async deleteChartReleaseWithOptions(request: DeleteChartReleaseRequest, runtime: $dara.RuntimeOptions): Promise<DeleteChartReleaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chart)) {
      query["Chart"] = request.chart;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.release)) {
      query["Release"] = request.release;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChartRelease",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteChartReleaseResponse>(await this.callApi(params, req, runtime), new DeleteChartReleaseResponse({}));
    } else {
      return $dara.cast<DeleteChartReleaseResponse>(await this.execute(params, req, runtime), new DeleteChartReleaseResponse({}));
    }

  }

  /**
   * Deletes a chart version from a chart repository.
   * 
   * @param request - DeleteChartReleaseRequest
   * @returns DeleteChartReleaseResponse
   */
  async deleteChartRelease(request: DeleteChartReleaseRequest): Promise<DeleteChartReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChartReleaseWithOptions(request, runtime);
  }

  /**
   * Deletes a chart repository from an instance.
   * 
   * @param request - DeleteChartRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChartRepositoryResponse
   */
  async deleteChartRepositoryWithOptions(request: DeleteChartRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<DeleteChartRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteChartRepositoryResponse>(await this.callApi(params, req, runtime), new DeleteChartRepositoryResponse({}));
    } else {
      return $dara.cast<DeleteChartRepositoryResponse>(await this.execute(params, req, runtime), new DeleteChartRepositoryResponse({}));
    }

  }

  /**
   * Deletes a chart repository from an instance.
   * 
   * @param request - DeleteChartRepositoryRequest
   * @returns DeleteChartRepositoryResponse
   */
  async deleteChartRepository(request: DeleteChartRepositoryRequest): Promise<DeleteChartRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChartRepositoryWithOptions(request, runtime);
  }

  /**
   * Deletes an event notification rule.
   * 
   * @param request - DeleteEventCenterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventCenterRuleResponse
   */
  async deleteEventCenterRuleWithOptions(request: DeleteEventCenterRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteEventCenterRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventCenterRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteEventCenterRuleResponse>(await this.callApi(params, req, runtime), new DeleteEventCenterRuleResponse({}));
    } else {
      return $dara.cast<DeleteEventCenterRuleResponse>(await this.execute(params, req, runtime), new DeleteEventCenterRuleResponse({}));
    }

  }

  /**
   * Deletes an event notification rule.
   * 
   * @param request - DeleteEventCenterRuleRequest
   * @returns DeleteEventCenterRuleResponse
   */
  async deleteEventCenterRule(request: DeleteEventCenterRuleRequest): Promise<DeleteEventCenterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventCenterRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a whitelist policy for the public endpoint of an instance.
   * 
   * @param request - DeleteInstanceEndpointAclPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceEndpointAclPolicyResponse
   */
  async deleteInstanceEndpointAclPolicyWithOptions(request: DeleteInstanceEndpointAclPolicyRequest, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceEndpointAclPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.entry)) {
      query["Entry"] = request.entry;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceEndpointAclPolicy",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteInstanceEndpointAclPolicyResponse>(await this.callApi(params, req, runtime), new DeleteInstanceEndpointAclPolicyResponse({}));
    } else {
      return $dara.cast<DeleteInstanceEndpointAclPolicyResponse>(await this.execute(params, req, runtime), new DeleteInstanceEndpointAclPolicyResponse({}));
    }

  }

  /**
   * Deletes a whitelist policy for the public endpoint of an instance.
   * 
   * @param request - DeleteInstanceEndpointAclPolicyRequest
   * @returns DeleteInstanceEndpointAclPolicyResponse
   */
  async deleteInstanceEndpointAclPolicy(request: DeleteInstanceEndpointAclPolicyRequest): Promise<DeleteInstanceEndpointAclPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceEndpointAclPolicyWithOptions(request, runtime);
  }

  /**
   * Disassociates a virtual private cloud (VPC) from an instance.
   * 
   * @param request - DeleteInstanceVpcEndpointLinkedVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceVpcEndpointLinkedVpcResponse
   */
  async deleteInstanceVpcEndpointLinkedVpcWithOptions(request: DeleteInstanceVpcEndpointLinkedVpcRequest, runtime: $dara.RuntimeOptions): Promise<DeleteInstanceVpcEndpointLinkedVpcResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceVpcEndpointLinkedVpc",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteInstanceVpcEndpointLinkedVpcResponse>(await this.callApi(params, req, runtime), new DeleteInstanceVpcEndpointLinkedVpcResponse({}));
    } else {
      return $dara.cast<DeleteInstanceVpcEndpointLinkedVpcResponse>(await this.execute(params, req, runtime), new DeleteInstanceVpcEndpointLinkedVpcResponse({}));
    }

  }

  /**
   * Disassociates a virtual private cloud (VPC) from an instance.
   * 
   * @param request - DeleteInstanceVpcEndpointLinkedVpcRequest
   * @returns DeleteInstanceVpcEndpointLinkedVpcResponse
   */
  async deleteInstanceVpcEndpointLinkedVpc(request: DeleteInstanceVpcEndpointLinkedVpcRequest): Promise<DeleteInstanceVpcEndpointLinkedVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceVpcEndpointLinkedVpcWithOptions(request, runtime);
  }

  /**
   * Deletes a namespace.
   * 
   * @remarks
   * > After you delete a namespace, all repositories in the namespace and all images in these repositories are deleted as well.
   * 
   * @param request - DeleteNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespaceWithOptions(request: DeleteNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<DeleteNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new DeleteNamespaceResponse({}));
    } else {
      return $dara.cast<DeleteNamespaceResponse>(await this.execute(params, req, runtime), new DeleteNamespaceResponse({}));
    }

  }

  /**
   * Deletes a namespace.
   * 
   * @remarks
   * > After you delete a namespace, all repositories in the namespace and all images in these repositories are deleted as well.
   * 
   * @param request - DeleteNamespaceRequest
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespace(request: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  /**
   * Deletes an image building rule of a repository.
   * 
   * @param request - DeleteRepoBuildRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRepoBuildRuleResponse
   */
  async deleteRepoBuildRuleWithOptions(request: DeleteRepoBuildRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteRepoBuildRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildRuleId)) {
      query["BuildRuleId"] = request.buildRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRepoBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new DeleteRepoBuildRuleResponse({}));
    } else {
      return $dara.cast<DeleteRepoBuildRuleResponse>(await this.execute(params, req, runtime), new DeleteRepoBuildRuleResponse({}));
    }

  }

  /**
   * Deletes an image building rule of a repository.
   * 
   * @param request - DeleteRepoBuildRuleRequest
   * @returns DeleteRepoBuildRuleResponse
   */
  async deleteRepoBuildRule(request: DeleteRepoBuildRuleRequest): Promise<DeleteRepoBuildRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRepoBuildRuleWithOptions(request, runtime);
  }

  /**
   * Deletes an image replication rule of an image repository.
   * 
   * @param request - DeleteRepoSyncRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRepoSyncRuleResponse
   */
  async deleteRepoSyncRuleWithOptions(request: DeleteRepoSyncRuleRequest, runtime: $dara.RuntimeOptions): Promise<DeleteRepoSyncRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.syncRuleId)) {
      query["SyncRuleId"] = request.syncRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRepoSyncRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRepoSyncRuleResponse>(await this.callApi(params, req, runtime), new DeleteRepoSyncRuleResponse({}));
    } else {
      return $dara.cast<DeleteRepoSyncRuleResponse>(await this.execute(params, req, runtime), new DeleteRepoSyncRuleResponse({}));
    }

  }

  /**
   * Deletes an image replication rule of an image repository.
   * 
   * @param request - DeleteRepoSyncRuleRequest
   * @returns DeleteRepoSyncRuleResponse
   */
  async deleteRepoSyncRule(request: DeleteRepoSyncRuleRequest): Promise<DeleteRepoSyncRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRepoSyncRuleWithOptions(request, runtime);
  }

  /**
   * Deletes an image tag.
   * 
   * @param request - DeleteRepoTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRepoTagResponse
   */
  async deleteRepoTagWithOptions(request: DeleteRepoTagRequest, runtime: $dara.RuntimeOptions): Promise<DeleteRepoTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRepoTag",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRepoTagResponse>(await this.callApi(params, req, runtime), new DeleteRepoTagResponse({}));
    } else {
      return $dara.cast<DeleteRepoTagResponse>(await this.execute(params, req, runtime), new DeleteRepoTagResponse({}));
    }

  }

  /**
   * Deletes an image tag.
   * 
   * @param request - DeleteRepoTagRequest
   * @returns DeleteRepoTagResponse
   */
  async deleteRepoTag(request: DeleteRepoTagRequest): Promise<DeleteRepoTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRepoTagWithOptions(request, runtime);
  }

  /**
   * Deletes a trigger of an image repository.
   * 
   * @param request - DeleteRepoTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRepoTriggerResponse
   */
  async deleteRepoTriggerWithOptions(request: DeleteRepoTriggerRequest, runtime: $dara.RuntimeOptions): Promise<DeleteRepoTriggerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.triggerId)) {
      query["TriggerId"] = request.triggerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRepoTrigger",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRepoTriggerResponse>(await this.callApi(params, req, runtime), new DeleteRepoTriggerResponse({}));
    } else {
      return $dara.cast<DeleteRepoTriggerResponse>(await this.execute(params, req, runtime), new DeleteRepoTriggerResponse({}));
    }

  }

  /**
   * Deletes a trigger of an image repository.
   * 
   * @param request - DeleteRepoTriggerRequest
   * @returns DeleteRepoTriggerResponse
   */
  async deleteRepoTrigger(request: DeleteRepoTriggerRequest): Promise<DeleteRepoTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRepoTriggerWithOptions(request, runtime);
  }

  /**
   * Deletes an image repository.
   * 
   * @remarks
   * If you delete a repository, all images in the repository are also deleted.
   * 
   * @param request - DeleteRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRepositoryResponse
   */
  async deleteRepositoryWithOptions(request: DeleteRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<DeleteRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRepositoryResponse>(await this.callApi(params, req, runtime), new DeleteRepositoryResponse({}));
    } else {
      return $dara.cast<DeleteRepositoryResponse>(await this.execute(params, req, runtime), new DeleteRepositoryResponse({}));
    }

  }

  /**
   * Deletes an image repository.
   * 
   * @remarks
   * If you delete a repository, all images in the repository are also deleted.
   * 
   * @param request - DeleteRepositoryRequest
   * @returns DeleteRepositoryResponse
   */
  async deleteRepository(request: DeleteRepositoryRequest): Promise<DeleteRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRepositoryWithOptions(request, runtime);
  }

  /**
   * @param request - GetArtifactBuildRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactBuildRuleResponse
   */
  async getArtifactBuildRuleWithOptions(request: GetArtifactBuildRuleRequest, runtime: $dara.RuntimeOptions): Promise<GetArtifactBuildRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifactBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetArtifactBuildRuleResponse>(await this.callApi(params, req, runtime), new GetArtifactBuildRuleResponse({}));
    } else {
      return $dara.cast<GetArtifactBuildRuleResponse>(await this.execute(params, req, runtime), new GetArtifactBuildRuleResponse({}));
    }

  }

  /**
   * @param request - GetArtifactBuildRuleRequest
   * @returns GetArtifactBuildRuleResponse
   */
  async getArtifactBuildRule(request: GetArtifactBuildRuleRequest): Promise<GetArtifactBuildRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactBuildRuleWithOptions(request, runtime);
  }

  /**
   * Queries the details of an artifact building task.
   * 
   * @param request - GetArtifactBuildTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactBuildTaskResponse
   */
  async getArtifactBuildTaskWithOptions(request: GetArtifactBuildTaskRequest, runtime: $dara.RuntimeOptions): Promise<GetArtifactBuildTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifactBuildTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetArtifactBuildTaskResponse>(await this.callApi(params, req, runtime), new GetArtifactBuildTaskResponse({}));
    } else {
      return $dara.cast<GetArtifactBuildTaskResponse>(await this.execute(params, req, runtime), new GetArtifactBuildTaskResponse({}));
    }

  }

  /**
   * Queries the details of an artifact building task.
   * 
   * @param request - GetArtifactBuildTaskRequest
   * @returns GetArtifactBuildTaskResponse
   */
  async getArtifactBuildTask(request: GetArtifactBuildTaskRequest): Promise<GetArtifactBuildTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactBuildTaskWithOptions(request, runtime);
  }

  /**
   * Queries the lifecycle management rules of an artifact.
   * 
   * @param request - GetArtifactLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactLifecycleRuleResponse
   */
  async getArtifactLifecycleRuleWithOptions(request: GetArtifactLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<GetArtifactLifecycleRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifactLifecycleRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetArtifactLifecycleRuleResponse>(await this.callApi(params, req, runtime), new GetArtifactLifecycleRuleResponse({}));
    } else {
      return $dara.cast<GetArtifactLifecycleRuleResponse>(await this.execute(params, req, runtime), new GetArtifactLifecycleRuleResponse({}));
    }

  }

  /**
   * Queries the lifecycle management rules of an artifact.
   * 
   * @param request - GetArtifactLifecycleRuleRequest
   * @returns GetArtifactLifecycleRuleResponse
   */
  async getArtifactLifecycleRule(request: GetArtifactLifecycleRuleRequest): Promise<GetArtifactLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * Queries the information about an artifact subscription rule.
   * 
   * @param request - GetArtifactSubscriptionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactSubscriptionRuleResponse
   */
  async getArtifactSubscriptionRuleWithOptions(request: GetArtifactSubscriptionRuleRequest, runtime: $dara.RuntimeOptions): Promise<GetArtifactSubscriptionRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifactSubscriptionRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetArtifactSubscriptionRuleResponse>(await this.callApi(params, req, runtime), new GetArtifactSubscriptionRuleResponse({}));
    } else {
      return $dara.cast<GetArtifactSubscriptionRuleResponse>(await this.execute(params, req, runtime), new GetArtifactSubscriptionRuleResponse({}));
    }

  }

  /**
   * Queries the information about an artifact subscription rule.
   * 
   * @param request - GetArtifactSubscriptionRuleRequest
   * @returns GetArtifactSubscriptionRuleResponse
   */
  async getArtifactSubscriptionRule(request: GetArtifactSubscriptionRuleRequest): Promise<GetArtifactSubscriptionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactSubscriptionRuleWithOptions(request, runtime);
  }

  /**
   * Queries an artifact subscription task.
   * 
   * @param request - GetArtifactSubscriptionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactSubscriptionTaskResponse
   */
  async getArtifactSubscriptionTaskWithOptions(request: GetArtifactSubscriptionTaskRequest, runtime: $dara.RuntimeOptions): Promise<GetArtifactSubscriptionTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifactSubscriptionTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetArtifactSubscriptionTaskResponse>(await this.callApi(params, req, runtime), new GetArtifactSubscriptionTaskResponse({}));
    } else {
      return $dara.cast<GetArtifactSubscriptionTaskResponse>(await this.execute(params, req, runtime), new GetArtifactSubscriptionTaskResponse({}));
    }

  }

  /**
   * Queries an artifact subscription task.
   * 
   * @param request - GetArtifactSubscriptionTaskRequest
   * @returns GetArtifactSubscriptionTaskResponse
   */
  async getArtifactSubscriptionTask(request: GetArtifactSubscriptionTaskRequest): Promise<GetArtifactSubscriptionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactSubscriptionTaskWithOptions(request, runtime);
  }

  /**
   * Queries the details of an artifact subscription task.
   * 
   * @param request - GetArtifactSubscriptionTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactSubscriptionTaskResultResponse
   */
  async getArtifactSubscriptionTaskResultWithOptions(request: GetArtifactSubscriptionTaskResultRequest, runtime: $dara.RuntimeOptions): Promise<GetArtifactSubscriptionTaskResultResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifactSubscriptionTaskResult",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetArtifactSubscriptionTaskResultResponse>(await this.callApi(params, req, runtime), new GetArtifactSubscriptionTaskResultResponse({}));
    } else {
      return $dara.cast<GetArtifactSubscriptionTaskResultResponse>(await this.execute(params, req, runtime), new GetArtifactSubscriptionTaskResultResponse({}));
    }

  }

  /**
   * Queries the details of an artifact subscription task.
   * 
   * @param request - GetArtifactSubscriptionTaskResultRequest
   * @returns GetArtifactSubscriptionTaskResultResponse
   */
  async getArtifactSubscriptionTaskResult(request: GetArtifactSubscriptionTaskResultRequest): Promise<GetArtifactSubscriptionTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactSubscriptionTaskResultWithOptions(request, runtime);
  }

  /**
   * Queries a temporary username and a token that you can use to log on to a Container Registry instance.
   * 
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * @param request - GetAuthorizationTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuthorizationTokenResponse
   */
  async getAuthorizationTokenWithOptions(request: GetAuthorizationTokenRequest, runtime: $dara.RuntimeOptions): Promise<GetAuthorizationTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuthorizationToken",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAuthorizationTokenResponse>(await this.callApi(params, req, runtime), new GetAuthorizationTokenResponse({}));
    } else {
      return $dara.cast<GetAuthorizationTokenResponse>(await this.execute(params, req, runtime), new GetAuthorizationTokenResponse({}));
    }

  }

  /**
   * Queries a temporary username and a token that you can use to log on to a Container Registry instance.
   * 
   * @remarks
   * The ID of the Container Registry instance.
   * 
   * @param request - GetAuthorizationTokenRequest
   * @returns GetAuthorizationTokenResponse
   */
  async getAuthorizationToken(request: GetAuthorizationTokenRequest): Promise<GetAuthorizationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuthorizationTokenWithOptions(request, runtime);
  }

  /**
   * @param request - GetChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChainResponse
   */
  async getChainWithOptions(request: GetChainRequest, runtime: $dara.RuntimeOptions): Promise<GetChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chainId)) {
      query["ChainId"] = request.chainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetChainResponse>(await this.callApi(params, req, runtime), new GetChainResponse({}));
    } else {
      return $dara.cast<GetChainResponse>(await this.execute(params, req, runtime), new GetChainResponse({}));
    }

  }

  /**
   * @param request - GetChainRequest
   * @returns GetChainResponse
   */
  async getChain(request: GetChainRequest): Promise<GetChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChainWithOptions(request, runtime);
  }

  /**
   * Queries a chart namespace in an instance.
   * 
   * @param request - GetChartNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChartNamespaceResponse
   */
  async getChartNamespaceWithOptions(request: GetChartNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<GetChartNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetChartNamespaceResponse>(await this.callApi(params, req, runtime), new GetChartNamespaceResponse({}));
    } else {
      return $dara.cast<GetChartNamespaceResponse>(await this.execute(params, req, runtime), new GetChartNamespaceResponse({}));
    }

  }

  /**
   * Queries a chart namespace in an instance.
   * 
   * @param request - GetChartNamespaceRequest
   * @returns GetChartNamespaceResponse
   */
  async getChartNamespace(request: GetChartNamespaceRequest): Promise<GetChartNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChartNamespaceWithOptions(request, runtime);
  }

  /**
   * Queries the information about a chart repository.
   * 
   * @param request - GetChartRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChartRepositoryResponse
   */
  async getChartRepositoryWithOptions(request: GetChartRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<GetChartRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetChartRepositoryResponse>(await this.callApi(params, req, runtime), new GetChartRepositoryResponse({}));
    } else {
      return $dara.cast<GetChartRepositoryResponse>(await this.execute(params, req, runtime), new GetChartRepositoryResponse({}));
    }

  }

  /**
   * Queries the information about a chart repository.
   * 
   * @param request - GetChartRepositoryRequest
   * @returns GetChartRepositoryResponse
   */
  async getChartRepository(request: GetChartRepositoryRequest): Promise<GetChartRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChartRepositoryWithOptions(request, runtime);
  }

  /**
   * The ID of the resource group to which the instance belongs.
   * 
   * @param request - GetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: GetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<GetInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
    } else {
      return $dara.cast<GetInstanceResponse>(await this.execute(params, req, runtime), new GetInstanceResponse({}));
    }

  }

  /**
   * The ID of the resource group to which the instance belongs.
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: GetInstanceRequest): Promise<GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the number of instances.
   * 
   * @param request - GetInstanceCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceCountResponse
   */
  async getInstanceCountWithOptions(runtime: $dara.RuntimeOptions): Promise<GetInstanceCountResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceCount",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceCountResponse>(await this.callApi(params, req, runtime), new GetInstanceCountResponse({}));
    } else {
      return $dara.cast<GetInstanceCountResponse>(await this.execute(params, req, runtime), new GetInstanceCountResponse({}));
    }

  }

  /**
   * Queries the number of instances.
   * @returns GetInstanceCountResponse
   */
  async getInstanceCount(): Promise<GetInstanceCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceCountWithOptions(runtime);
  }

  /**
   * Queries the endpoint of an instance.
   * 
   * @param request - GetInstanceEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceEndpointResponse
   */
  async getInstanceEndpointWithOptions(request: GetInstanceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<GetInstanceEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceEndpoint",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceEndpointResponse>(await this.callApi(params, req, runtime), new GetInstanceEndpointResponse({}));
    } else {
      return $dara.cast<GetInstanceEndpointResponse>(await this.execute(params, req, runtime), new GetInstanceEndpointResponse({}));
    }

  }

  /**
   * Queries the endpoint of an instance.
   * 
   * @param request - GetInstanceEndpointRequest
   * @returns GetInstanceEndpointResponse
   */
  async getInstanceEndpoint(request: GetInstanceEndpointRequest): Promise<GetInstanceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceEndpointWithOptions(request, runtime);
  }

  /**
   * Queries the quota usage of an instance.
   * 
   * @param request - GetInstanceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceUsageResponse
   */
  async getInstanceUsageWithOptions(request: GetInstanceUsageRequest, runtime: $dara.RuntimeOptions): Promise<GetInstanceUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceUsage",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceUsageResponse>(await this.callApi(params, req, runtime), new GetInstanceUsageResponse({}));
    } else {
      return $dara.cast<GetInstanceUsageResponse>(await this.execute(params, req, runtime), new GetInstanceUsageResponse({}));
    }

  }

  /**
   * Queries the quota usage of an instance.
   * 
   * @param request - GetInstanceUsageRequest
   * @returns GetInstanceUsageResponse
   */
  async getInstanceUsage(request: GetInstanceUsageRequest): Promise<GetInstanceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceUsageWithOptions(request, runtime);
  }

  /**
   * Queries the endpoints of the virtual private clouds (VPCs) in which a Container Registry instance is deployed.
   * 
   * @param request - GetInstanceVpcEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceVpcEndpointResponse
   */
  async getInstanceVpcEndpointWithOptions(request: GetInstanceVpcEndpointRequest, runtime: $dara.RuntimeOptions): Promise<GetInstanceVpcEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceVpcEndpoint",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstanceVpcEndpointResponse>(await this.callApi(params, req, runtime), new GetInstanceVpcEndpointResponse({}));
    } else {
      return $dara.cast<GetInstanceVpcEndpointResponse>(await this.execute(params, req, runtime), new GetInstanceVpcEndpointResponse({}));
    }

  }

  /**
   * Queries the endpoints of the virtual private clouds (VPCs) in which a Container Registry instance is deployed.
   * 
   * @param request - GetInstanceVpcEndpointRequest
   * @returns GetInstanceVpcEndpointResponse
   */
  async getInstanceVpcEndpoint(request: GetInstanceVpcEndpointRequest): Promise<GetInstanceVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceVpcEndpointWithOptions(request, runtime);
  }

  /**
   * Queries the information about a namespace.
   * 
   * @param request - GetNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNamespaceResponse
   */
  async getNamespaceWithOptions(request: GetNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<GetNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetNamespaceResponse>(await this.callApi(params, req, runtime), new GetNamespaceResponse({}));
    } else {
      return $dara.cast<GetNamespaceResponse>(await this.execute(params, req, runtime), new GetNamespaceResponse({}));
    }

  }

  /**
   * Queries the information about a namespace.
   * 
   * @param request - GetNamespaceRequest
   * @returns GetNamespaceResponse
   */
  async getNamespace(request: GetNamespaceRequest): Promise<GetNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNamespaceWithOptions(request, runtime);
  }

  /**
   * Queries the information about image building records of a repository.
   * 
   * @remarks
   * ***
   * 
   * @param request - GetRepoBuildRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepoBuildRecordResponse
   */
  async getRepoBuildRecordWithOptions(request: GetRepoBuildRecordRequest, runtime: $dara.RuntimeOptions): Promise<GetRepoBuildRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildRecordId)) {
      query["BuildRecordId"] = request.buildRecordId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepoBuildRecord",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRepoBuildRecordResponse>(await this.callApi(params, req, runtime), new GetRepoBuildRecordResponse({}));
    } else {
      return $dara.cast<GetRepoBuildRecordResponse>(await this.execute(params, req, runtime), new GetRepoBuildRecordResponse({}));
    }

  }

  /**
   * Queries the information about image building records of a repository.
   * 
   * @remarks
   * ***
   * 
   * @param request - GetRepoBuildRecordRequest
   * @returns GetRepoBuildRecordResponse
   */
  async getRepoBuildRecord(request: GetRepoBuildRecordRequest): Promise<GetRepoBuildRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepoBuildRecordWithOptions(request, runtime);
  }

  /**
   * Queries the status of an image building task.
   * 
   * @param request - GetRepoBuildRecordStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepoBuildRecordStatusResponse
   */
  async getRepoBuildRecordStatusWithOptions(request: GetRepoBuildRecordStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetRepoBuildRecordStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildRecordId)) {
      query["BuildRecordId"] = request.buildRecordId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepoBuildRecordStatus",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRepoBuildRecordStatusResponse>(await this.callApi(params, req, runtime), new GetRepoBuildRecordStatusResponse({}));
    } else {
      return $dara.cast<GetRepoBuildRecordStatusResponse>(await this.execute(params, req, runtime), new GetRepoBuildRecordStatusResponse({}));
    }

  }

  /**
   * Queries the status of an image building task.
   * 
   * @param request - GetRepoBuildRecordStatusRequest
   * @returns GetRepoBuildRecordStatusResponse
   */
  async getRepoBuildRecordStatus(request: GetRepoBuildRecordStatusRequest): Promise<GetRepoBuildRecordStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepoBuildRecordStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about the source code repository that is bound to an image repository.
   * 
   * @param request - GetRepoSourceCodeRepoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepoSourceCodeRepoResponse
   */
  async getRepoSourceCodeRepoWithOptions(request: GetRepoSourceCodeRepoRequest, runtime: $dara.RuntimeOptions): Promise<GetRepoSourceCodeRepoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepoSourceCodeRepo",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRepoSourceCodeRepoResponse>(await this.callApi(params, req, runtime), new GetRepoSourceCodeRepoResponse({}));
    } else {
      return $dara.cast<GetRepoSourceCodeRepoResponse>(await this.execute(params, req, runtime), new GetRepoSourceCodeRepoResponse({}));
    }

  }

  /**
   * Queries the information about the source code repository that is bound to an image repository.
   * 
   * @param request - GetRepoSourceCodeRepoRequest
   * @returns GetRepoSourceCodeRepoResponse
   */
  async getRepoSourceCodeRepo(request: GetRepoSourceCodeRepoRequest): Promise<GetRepoSourceCodeRepoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepoSourceCodeRepoWithOptions(request, runtime);
  }

  /**
   * Queries an image synchronization task in an instance.
   * 
   * @param request - GetRepoSyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepoSyncTaskResponse
   */
  async getRepoSyncTaskWithOptions(request: GetRepoSyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<GetRepoSyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.syncTaskId)) {
      query["SyncTaskId"] = request.syncTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepoSyncTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRepoSyncTaskResponse>(await this.callApi(params, req, runtime), new GetRepoSyncTaskResponse({}));
    } else {
      return $dara.cast<GetRepoSyncTaskResponse>(await this.execute(params, req, runtime), new GetRepoSyncTaskResponse({}));
    }

  }

  /**
   * Queries an image synchronization task in an instance.
   * 
   * @param request - GetRepoSyncTaskRequest
   * @returns GetRepoSyncTaskResponse
   */
  async getRepoSyncTask(request: GetRepoSyncTaskRequest): Promise<GetRepoSyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepoSyncTaskWithOptions(request, runtime);
  }

  /**
   * The version of the repository.
   * 
   * @param request - GetRepoTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepoTagResponse
   */
  async getRepoTagWithOptions(request: GetRepoTagRequest, runtime: $dara.RuntimeOptions): Promise<GetRepoTagResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepoTag",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRepoTagResponse>(await this.callApi(params, req, runtime), new GetRepoTagResponse({}));
    } else {
      return $dara.cast<GetRepoTagResponse>(await this.execute(params, req, runtime), new GetRepoTagResponse({}));
    }

  }

  /**
   * The version of the repository.
   * 
   * @param request - GetRepoTagRequest
   * @returns GetRepoTagResponse
   */
  async getRepoTag(request: GetRepoTagRequest): Promise<GetRepoTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepoTagWithOptions(request, runtime);
  }

  /**
   * @param request - GetRepoTagScanStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepoTagScanStatusResponse
   */
  async getRepoTagScanStatusWithOptions(request: GetRepoTagScanStatusRequest, runtime: $dara.RuntimeOptions): Promise<GetRepoTagScanStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.scanTaskId)) {
      query["ScanTaskId"] = request.scanTaskId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepoTagScanStatus",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRepoTagScanStatusResponse>(await this.callApi(params, req, runtime), new GetRepoTagScanStatusResponse({}));
    } else {
      return $dara.cast<GetRepoTagScanStatusResponse>(await this.execute(params, req, runtime), new GetRepoTagScanStatusResponse({}));
    }

  }

  /**
   * @param request - GetRepoTagScanStatusRequest
   * @returns GetRepoTagScanStatusResponse
   */
  async getRepoTagScanStatus(request: GetRepoTagScanStatusRequest): Promise<GetRepoTagScanStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepoTagScanStatusWithOptions(request, runtime);
  }

  /**
   * @param request - GetRepoTagScanSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepoTagScanSummaryResponse
   */
  async getRepoTagScanSummaryWithOptions(request: GetRepoTagScanSummaryRequest, runtime: $dara.RuntimeOptions): Promise<GetRepoTagScanSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.scanTaskId)) {
      query["ScanTaskId"] = request.scanTaskId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepoTagScanSummary",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRepoTagScanSummaryResponse>(await this.callApi(params, req, runtime), new GetRepoTagScanSummaryResponse({}));
    } else {
      return $dara.cast<GetRepoTagScanSummaryResponse>(await this.execute(params, req, runtime), new GetRepoTagScanSummaryResponse({}));
    }

  }

  /**
   * @param request - GetRepoTagScanSummaryRequest
   * @returns GetRepoTagScanSummaryResponse
   */
  async getRepoTagScanSummary(request: GetRepoTagScanSummaryRequest): Promise<GetRepoTagScanSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepoTagScanSummaryWithOptions(request, runtime);
  }

  /**
   * Queries details about an image repository.
   * 
   * @param request - GetRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepositoryResponse
   */
  async getRepositoryWithOptions(request: GetRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<GetRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRepositoryResponse>(await this.callApi(params, req, runtime), new GetRepositoryResponse({}));
    } else {
      return $dara.cast<GetRepositoryResponse>(await this.execute(params, req, runtime), new GetRepositoryResponse({}));
    }

  }

  /**
   * Queries details about an image repository.
   * 
   * @param request - GetRepositoryRequest
   * @returns GetRepositoryResponse
   */
  async getRepository(request: GetRepositoryRequest): Promise<GetRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepositoryWithOptions(request, runtime);
  }

  /**
   * Queries the log entries of an artifact building task.
   * 
   * @param request - ListArtifactBuildTaskLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactBuildTaskLogResponse
   */
  async listArtifactBuildTaskLogWithOptions(request: ListArtifactBuildTaskLogRequest, runtime: $dara.RuntimeOptions): Promise<ListArtifactBuildTaskLogResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListArtifactBuildTaskLog",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListArtifactBuildTaskLogResponse>(await this.callApi(params, req, runtime), new ListArtifactBuildTaskLogResponse({}));
    } else {
      return $dara.cast<ListArtifactBuildTaskLogResponse>(await this.execute(params, req, runtime), new ListArtifactBuildTaskLogResponse({}));
    }

  }

  /**
   * Queries the log entries of an artifact building task.
   * 
   * @param request - ListArtifactBuildTaskLogRequest
   * @returns ListArtifactBuildTaskLogResponse
   */
  async listArtifactBuildTaskLog(request: ListArtifactBuildTaskLogRequest): Promise<ListArtifactBuildTaskLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listArtifactBuildTaskLogWithOptions(request, runtime);
  }

  /**
   * Queries the lifecycle management rules of an artifact.
   * 
   * @param request - ListArtifactLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactLifecycleRuleResponse
   */
  async listArtifactLifecycleRuleWithOptions(request: ListArtifactLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<ListArtifactLifecycleRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListArtifactLifecycleRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListArtifactLifecycleRuleResponse>(await this.callApi(params, req, runtime), new ListArtifactLifecycleRuleResponse({}));
    } else {
      return $dara.cast<ListArtifactLifecycleRuleResponse>(await this.execute(params, req, runtime), new ListArtifactLifecycleRuleResponse({}));
    }

  }

  /**
   * Queries the lifecycle management rules of an artifact.
   * 
   * @param request - ListArtifactLifecycleRuleRequest
   * @returns ListArtifactLifecycleRuleResponse
   */
  async listArtifactLifecycleRule(request: ListArtifactLifecycleRuleRequest): Promise<ListArtifactLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listArtifactLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * Lists the subscription rules of artifacts.
   * 
   * @param request - ListArtifactSubscriptionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactSubscriptionRuleResponse
   */
  async listArtifactSubscriptionRuleWithOptions(request: ListArtifactSubscriptionRuleRequest, runtime: $dara.RuntimeOptions): Promise<ListArtifactSubscriptionRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListArtifactSubscriptionRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListArtifactSubscriptionRuleResponse>(await this.callApi(params, req, runtime), new ListArtifactSubscriptionRuleResponse({}));
    } else {
      return $dara.cast<ListArtifactSubscriptionRuleResponse>(await this.execute(params, req, runtime), new ListArtifactSubscriptionRuleResponse({}));
    }

  }

  /**
   * Lists the subscription rules of artifacts.
   * 
   * @param request - ListArtifactSubscriptionRuleRequest
   * @returns ListArtifactSubscriptionRuleResponse
   */
  async listArtifactSubscriptionRule(request: ListArtifactSubscriptionRuleRequest): Promise<ListArtifactSubscriptionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listArtifactSubscriptionRuleWithOptions(request, runtime);
  }

  /**
   * Lists artifact subscription tasks.
   * 
   * @param request - ListArtifactSubscriptionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactSubscriptionTaskResponse
   */
  async listArtifactSubscriptionTaskWithOptions(request: ListArtifactSubscriptionTaskRequest, runtime: $dara.RuntimeOptions): Promise<ListArtifactSubscriptionTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListArtifactSubscriptionTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListArtifactSubscriptionTaskResponse>(await this.callApi(params, req, runtime), new ListArtifactSubscriptionTaskResponse({}));
    } else {
      return $dara.cast<ListArtifactSubscriptionTaskResponse>(await this.execute(params, req, runtime), new ListArtifactSubscriptionTaskResponse({}));
    }

  }

  /**
   * Lists artifact subscription tasks.
   * 
   * @param request - ListArtifactSubscriptionTaskRequest
   * @returns ListArtifactSubscriptionTaskResponse
   */
  async listArtifactSubscriptionTask(request: ListArtifactSubscriptionTaskRequest): Promise<ListArtifactSubscriptionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listArtifactSubscriptionTaskWithOptions(request, runtime);
  }

  /**
   * Queries delivery chains.
   * 
   * @param request - ListChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChainResponse
   */
  async listChainWithOptions(request: ListChainRequest, runtime: $dara.RuntimeOptions): Promise<ListChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListChainResponse>(await this.callApi(params, req, runtime), new ListChainResponse({}));
    } else {
      return $dara.cast<ListChainResponse>(await this.execute(params, req, runtime), new ListChainResponse({}));
    }

  }

  /**
   * Queries delivery chains.
   * 
   * @param request - ListChainRequest
   * @returns ListChainResponse
   */
  async listChain(request: ListChainRequest): Promise<ListChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChainWithOptions(request, runtime);
  }

  /**
   * The response code.
   * 
   * @param request - ListChainInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChainInstanceResponse
   */
  async listChainInstanceWithOptions(request: ListChainInstanceRequest, runtime: $dara.RuntimeOptions): Promise<ListChainInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChainInstance",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListChainInstanceResponse>(await this.callApi(params, req, runtime), new ListChainInstanceResponse({}));
    } else {
      return $dara.cast<ListChainInstanceResponse>(await this.execute(params, req, runtime), new ListChainInstanceResponse({}));
    }

  }

  /**
   * The response code.
   * 
   * @param request - ListChainInstanceRequest
   * @returns ListChainInstanceResponse
   */
  async listChainInstance(request: ListChainInstanceRequest): Promise<ListChainInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChainInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the chart namespaces of a Container Registry instance.
   * 
   * @param request - ListChartNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChartNamespaceResponse
   */
  async listChartNamespaceWithOptions(request: ListChartNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<ListChartNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.namespaceStatus)) {
      query["NamespaceStatus"] = request.namespaceStatus;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListChartNamespaceResponse>(await this.callApi(params, req, runtime), new ListChartNamespaceResponse({}));
    } else {
      return $dara.cast<ListChartNamespaceResponse>(await this.execute(params, req, runtime), new ListChartNamespaceResponse({}));
    }

  }

  /**
   * Queries the chart namespaces of a Container Registry instance.
   * 
   * @param request - ListChartNamespaceRequest
   * @returns ListChartNamespaceResponse
   */
  async listChartNamespace(request: ListChartNamespaceRequest): Promise<ListChartNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChartNamespaceWithOptions(request, runtime);
  }

  /**
   * Queries the versions of a chart in a chart repository.
   * 
   * @param request - ListChartReleaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChartReleaseResponse
   */
  async listChartReleaseWithOptions(request: ListChartReleaseRequest, runtime: $dara.RuntimeOptions): Promise<ListChartReleaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chart)) {
      query["Chart"] = request.chart;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChartRelease",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListChartReleaseResponse>(await this.callApi(params, req, runtime), new ListChartReleaseResponse({}));
    } else {
      return $dara.cast<ListChartReleaseResponse>(await this.execute(params, req, runtime), new ListChartReleaseResponse({}));
    }

  }

  /**
   * Queries the versions of a chart in a chart repository.
   * 
   * @param request - ListChartReleaseRequest
   * @returns ListChartReleaseResponse
   */
  async listChartRelease(request: ListChartReleaseRequest): Promise<ListChartReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChartReleaseWithOptions(request, runtime);
  }

  /**
   * Queries the chart repositories of a Container Registry instance.
   * 
   * @param request - ListChartRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChartRepositoryResponse
   */
  async listChartRepositoryWithOptions(request: ListChartRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<ListChartRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.repoStatus)) {
      query["RepoStatus"] = request.repoStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListChartRepositoryResponse>(await this.callApi(params, req, runtime), new ListChartRepositoryResponse({}));
    } else {
      return $dara.cast<ListChartRepositoryResponse>(await this.execute(params, req, runtime), new ListChartRepositoryResponse({}));
    }

  }

  /**
   * Queries the chart repositories of a Container Registry instance.
   * 
   * @param request - ListChartRepositoryRequest
   * @returns ListChartRepositoryResponse
   */
  async listChartRepository(request: ListChartRepositoryRequest): Promise<ListChartRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChartRepositoryWithOptions(request, runtime);
  }

  /**
   * Queries the historical events of an event rule.
   * 
   * @param request - ListEventCenterRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEventCenterRecordResponse
   */
  async listEventCenterRecordWithOptions(request: ListEventCenterRecordRequest, runtime: $dara.RuntimeOptions): Promise<ListEventCenterRecordResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEventCenterRecord",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListEventCenterRecordResponse>(await this.callApi(params, req, runtime), new ListEventCenterRecordResponse({}));
    } else {
      return $dara.cast<ListEventCenterRecordResponse>(await this.execute(params, req, runtime), new ListEventCenterRecordResponse({}));
    }

  }

  /**
   * Queries the historical events of an event rule.
   * 
   * @param request - ListEventCenterRecordRequest
   * @returns ListEventCenterRecordResponse
   */
  async listEventCenterRecord(request: ListEventCenterRecordRequest): Promise<ListEventCenterRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEventCenterRecordWithOptions(request, runtime);
  }

  /**
   * Queries the names of event notification rules.
   * 
   * @param request - ListEventCenterRuleNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEventCenterRuleNameResponse
   */
  async listEventCenterRuleNameWithOptions(request: ListEventCenterRuleNameRequest, runtime: $dara.RuntimeOptions): Promise<ListEventCenterRuleNameResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEventCenterRuleName",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListEventCenterRuleNameResponse>(await this.callApi(params, req, runtime), new ListEventCenterRuleNameResponse({}));
    } else {
      return $dara.cast<ListEventCenterRuleNameResponse>(await this.execute(params, req, runtime), new ListEventCenterRuleNameResponse({}));
    }

  }

  /**
   * Queries the names of event notification rules.
   * 
   * @param request - ListEventCenterRuleNameRequest
   * @returns ListEventCenterRuleNameResponse
   */
  async listEventCenterRuleName(request: ListEventCenterRuleNameRequest): Promise<ListEventCenterRuleNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEventCenterRuleNameWithOptions(request, runtime);
  }

  /**
   * Queries Container Registry instances.
   * 
   * @param request - ListInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceResponse
   */
  async listInstanceWithOptions(request: ListInstanceRequest, runtime: $dara.RuntimeOptions): Promise<ListInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstance",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstanceResponse>(await this.callApi(params, req, runtime), new ListInstanceResponse({}));
    } else {
      return $dara.cast<ListInstanceResponse>(await this.execute(params, req, runtime), new ListInstanceResponse({}));
    }

  }

  /**
   * Queries Container Registry instances.
   * 
   * @param request - ListInstanceRequest
   * @returns ListInstanceResponse
   */
  async listInstance(request: ListInstanceRequest): Promise<ListInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the endpoints of a Container Registry instance.
   * 
   * @param request - ListInstanceEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceEndpointResponse
   */
  async listInstanceEndpointWithOptions(request: ListInstanceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<ListInstanceEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.summary)) {
      query["Summary"] = request.summary;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceEndpoint",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstanceEndpointResponse>(await this.callApi(params, req, runtime), new ListInstanceEndpointResponse({}));
    } else {
      return $dara.cast<ListInstanceEndpointResponse>(await this.execute(params, req, runtime), new ListInstanceEndpointResponse({}));
    }

  }

  /**
   * Queries the endpoints of a Container Registry instance.
   * 
   * @param request - ListInstanceEndpointRequest
   * @returns ListInstanceEndpointResponse
   */
  async listInstanceEndpoint(request: ListInstanceEndpointRequest): Promise<ListInstanceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceEndpointWithOptions(request, runtime);
  }

  /**
   * Queries regions in which you can create Container Registry instances.
   * 
   * @param request - ListInstanceRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceRegionResponse
   */
  async listInstanceRegionWithOptions(request: ListInstanceRegionRequest, runtime: $dara.RuntimeOptions): Promise<ListInstanceRegionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceRegion",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstanceRegionResponse>(await this.callApi(params, req, runtime), new ListInstanceRegionResponse({}));
    } else {
      return $dara.cast<ListInstanceRegionResponse>(await this.execute(params, req, runtime), new ListInstanceRegionResponse({}));
    }

  }

  /**
   * Queries regions in which you can create Container Registry instances.
   * 
   * @param request - ListInstanceRegionRequest
   * @returns ListInstanceRegionResponse
   */
  async listInstanceRegion(request: ListInstanceRegionRequest): Promise<ListInstanceRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceRegionWithOptions(request, runtime);
  }

  /**
   * cri-94klsruryslx****
   * 
   * @param request - ListNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNamespaceResponse
   */
  async listNamespaceWithOptions(request: ListNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<ListNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.namespaceStatus)) {
      query["NamespaceStatus"] = request.namespaceStatus;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListNamespaceResponse>(await this.callApi(params, req, runtime), new ListNamespaceResponse({}));
    } else {
      return $dara.cast<ListNamespaceResponse>(await this.execute(params, req, runtime), new ListNamespaceResponse({}));
    }

  }

  /**
   * cri-94klsruryslx****
   * 
   * @param request - ListNamespaceRequest
   * @returns ListNamespaceResponse
   */
  async listNamespace(request: ListNamespaceRequest): Promise<ListNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNamespaceWithOptions(request, runtime);
  }

  /**
   * Queries image building records of an image repository.
   * 
   * @param request - ListRepoBuildRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoBuildRecordResponse
   */
  async listRepoBuildRecordWithOptions(request: ListRepoBuildRecordRequest, runtime: $dara.RuntimeOptions): Promise<ListRepoBuildRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoBuildRecord",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRepoBuildRecordResponse>(await this.callApi(params, req, runtime), new ListRepoBuildRecordResponse({}));
    } else {
      return $dara.cast<ListRepoBuildRecordResponse>(await this.execute(params, req, runtime), new ListRepoBuildRecordResponse({}));
    }

  }

  /**
   * Queries image building records of an image repository.
   * 
   * @param request - ListRepoBuildRecordRequest
   * @returns ListRepoBuildRecordResponse
   */
  async listRepoBuildRecord(request: ListRepoBuildRecordRequest): Promise<ListRepoBuildRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoBuildRecordWithOptions(request, runtime);
  }

  /**
   * Queries the log of an image building record.
   * 
   * @param request - ListRepoBuildRecordLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoBuildRecordLogResponse
   */
  async listRepoBuildRecordLogWithOptions(request: ListRepoBuildRecordLogRequest, runtime: $dara.RuntimeOptions): Promise<ListRepoBuildRecordLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildRecordId)) {
      query["BuildRecordId"] = request.buildRecordId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoBuildRecordLog",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRepoBuildRecordLogResponse>(await this.callApi(params, req, runtime), new ListRepoBuildRecordLogResponse({}));
    } else {
      return $dara.cast<ListRepoBuildRecordLogResponse>(await this.execute(params, req, runtime), new ListRepoBuildRecordLogResponse({}));
    }

  }

  /**
   * Queries the log of an image building record.
   * 
   * @param request - ListRepoBuildRecordLogRequest
   * @returns ListRepoBuildRecordLogResponse
   */
  async listRepoBuildRecordLog(request: ListRepoBuildRecordLogRequest): Promise<ListRepoBuildRecordLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoBuildRecordLogWithOptions(request, runtime);
  }

  /**
   * Queries image building rules of a repository.
   * 
   * @param request - ListRepoBuildRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoBuildRuleResponse
   */
  async listRepoBuildRuleWithOptions(request: ListRepoBuildRuleRequest, runtime: $dara.RuntimeOptions): Promise<ListRepoBuildRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new ListRepoBuildRuleResponse({}));
    } else {
      return $dara.cast<ListRepoBuildRuleResponse>(await this.execute(params, req, runtime), new ListRepoBuildRuleResponse({}));
    }

  }

  /**
   * Queries image building rules of a repository.
   * 
   * @param request - ListRepoBuildRuleRequest
   * @returns ListRepoBuildRuleResponse
   */
  async listRepoBuildRule(request: ListRepoBuildRuleRequest): Promise<ListRepoBuildRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoBuildRuleWithOptions(request, runtime);
  }

  /**
   * Queries image synchronization rules of a repository.
   * 
   * @param request - ListRepoSyncRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoSyncRuleResponse
   */
  async listRepoSyncRuleWithOptions(request: ListRepoSyncRuleRequest, runtime: $dara.RuntimeOptions): Promise<ListRepoSyncRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.targetInstanceId)) {
      query["TargetInstanceId"] = request.targetInstanceId;
    }

    if (!$dara.isNull(request.targetRegionId)) {
      query["TargetRegionId"] = request.targetRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoSyncRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRepoSyncRuleResponse>(await this.callApi(params, req, runtime), new ListRepoSyncRuleResponse({}));
    } else {
      return $dara.cast<ListRepoSyncRuleResponse>(await this.execute(params, req, runtime), new ListRepoSyncRuleResponse({}));
    }

  }

  /**
   * Queries image synchronization rules of a repository.
   * 
   * @param request - ListRepoSyncRuleRequest
   * @returns ListRepoSyncRuleResponse
   */
  async listRepoSyncRule(request: ListRepoSyncRuleRequest): Promise<ListRepoSyncRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoSyncRuleWithOptions(request, runtime);
  }

  /**
   * Indicates whether automatic link is used.
   * 
   * @param request - ListRepoSyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoSyncTaskResponse
   */
  async listRepoSyncTaskWithOptions(request: ListRepoSyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<ListRepoSyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.syncRecordId)) {
      query["SyncRecordId"] = request.syncRecordId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoSyncTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRepoSyncTaskResponse>(await this.callApi(params, req, runtime), new ListRepoSyncTaskResponse({}));
    } else {
      return $dara.cast<ListRepoSyncTaskResponse>(await this.execute(params, req, runtime), new ListRepoSyncTaskResponse({}));
    }

  }

  /**
   * Indicates whether automatic link is used.
   * 
   * @param request - ListRepoSyncTaskRequest
   * @returns ListRepoSyncTaskResponse
   */
  async listRepoSyncTask(request: ListRepoSyncTaskRequest): Promise<ListRepoSyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoSyncTaskWithOptions(request, runtime);
  }

  /**
   * Queries image tags in a repository.
   * 
   * @param request - ListRepoTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoTagResponse
   */
  async listRepoTagWithOptions(request: ListRepoTagRequest, runtime: $dara.RuntimeOptions): Promise<ListRepoTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoTag",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRepoTagResponse>(await this.callApi(params, req, runtime), new ListRepoTagResponse({}));
    } else {
      return $dara.cast<ListRepoTagResponse>(await this.execute(params, req, runtime), new ListRepoTagResponse({}));
    }

  }

  /**
   * Queries image tags in a repository.
   * 
   * @param request - ListRepoTagRequest
   * @returns ListRepoTagResponse
   */
  async listRepoTag(request: ListRepoTagRequest): Promise<ListRepoTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoTagWithOptions(request, runtime);
  }

  /**
   * Queries the results of a security scan that is created for an image tag.
   * 
   * @param request - ListRepoTagScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoTagScanResultResponse
   */
  async listRepoTagScanResultWithOptions(request: ListRepoTagScanResultRequest, runtime: $dara.RuntimeOptions): Promise<ListRepoTagScanResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!$dara.isNull(request.filterValue)) {
      query["FilterValue"] = request.filterValue;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.scanTaskId)) {
      query["ScanTaskId"] = request.scanTaskId;
    }

    if (!$dara.isNull(request.scanType)) {
      query["ScanType"] = request.scanType;
    }

    if (!$dara.isNull(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vulQueryKey)) {
      query["VulQueryKey"] = request.vulQueryKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoTagScanResult",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRepoTagScanResultResponse>(await this.callApi(params, req, runtime), new ListRepoTagScanResultResponse({}));
    } else {
      return $dara.cast<ListRepoTagScanResultResponse>(await this.execute(params, req, runtime), new ListRepoTagScanResultResponse({}));
    }

  }

  /**
   * Queries the results of a security scan that is created for an image tag.
   * 
   * @param request - ListRepoTagScanResultRequest
   * @returns ListRepoTagScanResultResponse
   */
  async listRepoTagScanResult(request: ListRepoTagScanResultRequest): Promise<ListRepoTagScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoTagScanResultWithOptions(request, runtime);
  }

  /**
   * Queries the triggers of a repository.
   * 
   * @param request - ListRepoTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoTriggerResponse
   */
  async listRepoTriggerWithOptions(request: ListRepoTriggerRequest, runtime: $dara.RuntimeOptions): Promise<ListRepoTriggerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoTrigger",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRepoTriggerResponse>(await this.callApi(params, req, runtime), new ListRepoTriggerResponse({}));
    } else {
      return $dara.cast<ListRepoTriggerResponse>(await this.execute(params, req, runtime), new ListRepoTriggerResponse({}));
    }

  }

  /**
   * Queries the triggers of a repository.
   * 
   * @param request - ListRepoTriggerRequest
   * @returns ListRepoTriggerResponse
   */
  async listRepoTrigger(request: ListRepoTriggerRequest): Promise<ListRepoTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoTriggerWithOptions(request, runtime);
  }

  /**
   * Queries image repositories.
   * 
   * @param request - ListRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepositoryResponse
   */
  async listRepositoryWithOptions(request: ListRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<ListRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.repoStatus)) {
      query["RepoStatus"] = request.repoStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRepositoryResponse>(await this.callApi(params, req, runtime), new ListRepositoryResponse({}));
    } else {
      return $dara.cast<ListRepositoryResponse>(await this.execute(params, req, runtime), new ListRepositoryResponse({}));
    }

  }

  /**
   * Queries image repositories.
   * 
   * @param request - ListRepositoryRequest
   * @returns ListRepositoryResponse
   */
  async listRepository(request: ListRepositoryRequest): Promise<ListRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepositoryWithOptions(request, runtime);
  }

  /**
   * Queries the baseline risks of a scan task by page.
   * 
   * @remarks
   * Before you call this operation, use a Security Center scan engine to scan the image.
   * 
   * @param request - ListScanBaselineByTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScanBaselineByTaskResponse
   */
  async listScanBaselineByTaskWithOptions(request: ListScanBaselineByTaskRequest, runtime: $dara.RuntimeOptions): Promise<ListScanBaselineByTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScanBaselineByTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListScanBaselineByTaskResponse>(await this.callApi(params, req, runtime), new ListScanBaselineByTaskResponse({}));
    } else {
      return $dara.cast<ListScanBaselineByTaskResponse>(await this.execute(params, req, runtime), new ListScanBaselineByTaskResponse({}));
    }

  }

  /**
   * Queries the baseline risks of a scan task by page.
   * 
   * @remarks
   * Before you call this operation, use a Security Center scan engine to scan the image.
   * 
   * @param request - ListScanBaselineByTaskRequest
   * @returns ListScanBaselineByTaskResponse
   */
  async listScanBaselineByTask(request: ListScanBaselineByTaskRequest): Promise<ListScanBaselineByTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScanBaselineByTaskWithOptions(request, runtime);
  }

  /**
   * Queries the malicious files of a scan task by page.
   * 
   * @remarks
   * Before you call this operation, use a Security Center scan engine to scan the image.
   * 
   * @param request - ListScanMaliciousFileByTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScanMaliciousFileByTaskResponse
   */
  async listScanMaliciousFileByTaskWithOptions(request: ListScanMaliciousFileByTaskRequest, runtime: $dara.RuntimeOptions): Promise<ListScanMaliciousFileByTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScanMaliciousFileByTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListScanMaliciousFileByTaskResponse>(await this.callApi(params, req, runtime), new ListScanMaliciousFileByTaskResponse({}));
    } else {
      return $dara.cast<ListScanMaliciousFileByTaskResponse>(await this.execute(params, req, runtime), new ListScanMaliciousFileByTaskResponse({}));
    }

  }

  /**
   * Queries the malicious files of a scan task by page.
   * 
   * @remarks
   * Before you call this operation, use a Security Center scan engine to scan the image.
   * 
   * @param request - ListScanMaliciousFileByTaskRequest
   * @returns ListScanMaliciousFileByTaskResponse
   */
  async listScanMaliciousFileByTask(request: ListScanMaliciousFileByTaskRequest): Promise<ListScanMaliciousFileByTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScanMaliciousFileByTaskWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to cloud resources. Instance resources are supported.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * Queries the tags that are added to cloud resources. Instance resources are supported.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Resets the logon password of a Container Registry instance.
   * 
   * @param request - ResetLoginPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetLoginPasswordResponse
   */
  async resetLoginPasswordWithOptions(request: ResetLoginPasswordRequest, runtime: $dara.RuntimeOptions): Promise<ResetLoginPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetLoginPassword",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResetLoginPasswordResponse>(await this.callApi(params, req, runtime), new ResetLoginPasswordResponse({}));
    } else {
      return $dara.cast<ResetLoginPasswordResponse>(await this.execute(params, req, runtime), new ResetLoginPasswordResponse({}));
    }

  }

  /**
   * Resets the logon password of a Container Registry instance.
   * 
   * @param request - ResetLoginPasswordRequest
   * @returns ResetLoginPasswordResponse
   */
  async resetLoginPassword(request: ResetLoginPasswordRequest): Promise<ResetLoginPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetLoginPasswordWithOptions(request, runtime);
  }

  /**
   * Adds tags to resources. Instance resources are supported.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * Adds tags to resources. Instance resources are supported.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from resources. Instance resources are supported.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * Removes tags from resources. Instance resources are supported.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates a lifecycle management rule of an artifact.
   * 
   * @param request - UpdateArtifactLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateArtifactLifecycleRuleResponse
   */
  async updateArtifactLifecycleRuleWithOptions(request: UpdateArtifactLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<UpdateArtifactLifecycleRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auto)) {
      query["Auto"] = request.auto;
    }

    if (!$dara.isNull(request.enableDeleteTag)) {
      query["EnableDeleteTag"] = request.enableDeleteTag;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.retentionTagCount)) {
      query["RetentionTagCount"] = request.retentionTagCount;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.tagRegexp)) {
      query["TagRegexp"] = request.tagRegexp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateArtifactLifecycleRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateArtifactLifecycleRuleResponse>(await this.callApi(params, req, runtime), new UpdateArtifactLifecycleRuleResponse({}));
    } else {
      return $dara.cast<UpdateArtifactLifecycleRuleResponse>(await this.execute(params, req, runtime), new UpdateArtifactLifecycleRuleResponse({}));
    }

  }

  /**
   * Updates a lifecycle management rule of an artifact.
   * 
   * @param request - UpdateArtifactLifecycleRuleRequest
   * @returns UpdateArtifactLifecycleRuleResponse
   */
  async updateArtifactLifecycleRule(request: UpdateArtifactLifecycleRuleRequest): Promise<UpdateArtifactLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateArtifactLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * Updates an artifact subscription rule.
   * 
   * @param request - UpdateArtifactSubscriptionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateArtifactSubscriptionRuleResponse
   */
  async updateArtifactSubscriptionRuleWithOptions(request: UpdateArtifactSubscriptionRuleRequest, runtime: $dara.RuntimeOptions): Promise<UpdateArtifactSubscriptionRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accelerate)) {
      query["Accelerate"] = request.accelerate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.override)) {
      query["Override"] = request.override;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.sourceNamespaceName)) {
      query["SourceNamespaceName"] = request.sourceNamespaceName;
    }

    if (!$dara.isNull(request.sourceProvider)) {
      query["SourceProvider"] = request.sourceProvider;
    }

    if (!$dara.isNull(request.sourceRepoName)) {
      query["SourceRepoName"] = request.sourceRepoName;
    }

    if (!$dara.isNull(request.tagCount)) {
      query["TagCount"] = request.tagCount;
    }

    if (!$dara.isNull(request.tagRegexp)) {
      query["TagRegexp"] = request.tagRegexp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateArtifactSubscriptionRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateArtifactSubscriptionRuleResponse>(await this.callApi(params, req, runtime), new UpdateArtifactSubscriptionRuleResponse({}));
    } else {
      return $dara.cast<UpdateArtifactSubscriptionRuleResponse>(await this.execute(params, req, runtime), new UpdateArtifactSubscriptionRuleResponse({}));
    }

  }

  /**
   * Updates an artifact subscription rule.
   * 
   * @param request - UpdateArtifactSubscriptionRuleRequest
   * @returns UpdateArtifactSubscriptionRuleResponse
   */
  async updateArtifactSubscriptionRule(request: UpdateArtifactSubscriptionRuleRequest): Promise<UpdateArtifactSubscriptionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateArtifactSubscriptionRuleWithOptions(request, runtime);
  }

  /**
   * Updates the information about a delivery chain, such as the node execution sequence of the delivery chain.
   * 
   * @param request - UpdateChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateChainResponse
   */
  async updateChainWithOptions(request: UpdateChainRequest, runtime: $dara.RuntimeOptions): Promise<UpdateChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chainConfig)) {
      query["ChainConfig"] = request.chainConfig;
    }

    if (!$dara.isNull(request.chainId)) {
      query["ChainId"] = request.chainId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.scopeExclude)) {
      query["ScopeExclude"] = request.scopeExclude;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateChainResponse>(await this.callApi(params, req, runtime), new UpdateChainResponse({}));
    } else {
      return $dara.cast<UpdateChainResponse>(await this.execute(params, req, runtime), new UpdateChainResponse({}));
    }

  }

  /**
   * Updates the information about a delivery chain, such as the node execution sequence of the delivery chain.
   * 
   * @param request - UpdateChainRequest
   * @returns UpdateChainResponse
   */
  async updateChain(request: UpdateChainRequest): Promise<UpdateChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateChainWithOptions(request, runtime);
  }

  /**
   * Updates a chart namespace.
   * 
   * @param request - UpdateChartNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateChartNamespaceResponse
   */
  async updateChartNamespaceWithOptions(request: UpdateChartNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<UpdateChartNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoCreateRepo)) {
      query["AutoCreateRepo"] = request.autoCreateRepo;
    }

    if (!$dara.isNull(request.defaultRepoType)) {
      query["DefaultRepoType"] = request.defaultRepoType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateChartNamespaceResponse>(await this.callApi(params, req, runtime), new UpdateChartNamespaceResponse({}));
    } else {
      return $dara.cast<UpdateChartNamespaceResponse>(await this.execute(params, req, runtime), new UpdateChartNamespaceResponse({}));
    }

  }

  /**
   * Updates a chart namespace.
   * 
   * @param request - UpdateChartNamespaceRequest
   * @returns UpdateChartNamespaceResponse
   */
  async updateChartNamespace(request: UpdateChartNamespaceRequest): Promise<UpdateChartNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateChartNamespaceWithOptions(request, runtime);
  }

  /**
   * Updates a chart repository of a Container Registry instance.
   * 
   * @param request - UpdateChartRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateChartRepositoryResponse
   */
  async updateChartRepositoryWithOptions(request: UpdateChartRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<UpdateChartRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.repoType)) {
      query["RepoType"] = request.repoType;
    }

    if (!$dara.isNull(request.summary)) {
      query["Summary"] = request.summary;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateChartRepositoryResponse>(await this.callApi(params, req, runtime), new UpdateChartRepositoryResponse({}));
    } else {
      return $dara.cast<UpdateChartRepositoryResponse>(await this.execute(params, req, runtime), new UpdateChartRepositoryResponse({}));
    }

  }

  /**
   * Updates a chart repository of a Container Registry instance.
   * 
   * @param request - UpdateChartRepositoryRequest
   * @returns UpdateChartRepositoryResponse
   */
  async updateChartRepository(request: UpdateChartRepositoryRequest): Promise<UpdateChartRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateChartRepositoryWithOptions(request, runtime);
  }

  /**
   * Updates an event notification rule.
   * 
   * @param tmpReq - UpdateEventCenterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEventCenterRuleResponse
   */
  async updateEventCenterRuleWithOptions(tmpReq: UpdateEventCenterRuleRequest, runtime: $dara.RuntimeOptions): Promise<UpdateEventCenterRuleResponse> {
    tmpReq.validate();
    let request = new UpdateEventCenterRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.namespaces)) {
      request.namespacesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.namespaces, "Namespaces", "json");
    }

    if (!$dara.isNull(tmpReq.repoNames)) {
      request.repoNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repoNames, "RepoNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.eventChannel)) {
      query["EventChannel"] = request.eventChannel;
    }

    if (!$dara.isNull(request.eventConfig)) {
      query["EventConfig"] = request.eventConfig;
    }

    if (!$dara.isNull(request.eventScope)) {
      query["EventScope"] = request.eventScope;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespacesShrink)) {
      query["Namespaces"] = request.namespacesShrink;
    }

    if (!$dara.isNull(request.repoNamesShrink)) {
      query["RepoNames"] = request.repoNamesShrink;
    }

    if (!$dara.isNull(request.repoTagFilterPattern)) {
      query["RepoTagFilterPattern"] = request.repoTagFilterPattern;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEventCenterRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateEventCenterRuleResponse>(await this.callApi(params, req, runtime), new UpdateEventCenterRuleResponse({}));
    } else {
      return $dara.cast<UpdateEventCenterRuleResponse>(await this.execute(params, req, runtime), new UpdateEventCenterRuleResponse({}));
    }

  }

  /**
   * Updates an event notification rule.
   * 
   * @param request - UpdateEventCenterRuleRequest
   * @returns UpdateEventCenterRuleResponse
   */
  async updateEventCenterRule(request: UpdateEventCenterRuleRequest): Promise<UpdateEventCenterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEventCenterRuleWithOptions(request, runtime);
  }

  /**
   * Updates the status of an instance endpoint.
   * 
   * @param request - UpdateInstanceEndpointStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceEndpointStatusResponse
   */
  async updateInstanceEndpointStatusWithOptions(request: UpdateInstanceEndpointStatusRequest, runtime: $dara.RuntimeOptions): Promise<UpdateInstanceEndpointStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceEndpointStatus",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateInstanceEndpointStatusResponse>(await this.callApi(params, req, runtime), new UpdateInstanceEndpointStatusResponse({}));
    } else {
      return $dara.cast<UpdateInstanceEndpointStatusResponse>(await this.execute(params, req, runtime), new UpdateInstanceEndpointStatusResponse({}));
    }

  }

  /**
   * Updates the status of an instance endpoint.
   * 
   * @param request - UpdateInstanceEndpointStatusRequest
   * @returns UpdateInstanceEndpointStatusResponse
   */
  async updateInstanceEndpointStatus(request: UpdateInstanceEndpointStatusRequest): Promise<UpdateInstanceEndpointStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceEndpointStatusWithOptions(request, runtime);
  }

  /**
   * Updates a namespace.
   * 
   * @param request - UpdateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNamespaceResponse
   */
  async updateNamespaceWithOptions(request: UpdateNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<UpdateNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoCreateRepo)) {
      query["AutoCreateRepo"] = request.autoCreateRepo;
    }

    if (!$dara.isNull(request.defaultRepoType)) {
      query["DefaultRepoType"] = request.defaultRepoType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateNamespaceResponse>(await this.callApi(params, req, runtime), new UpdateNamespaceResponse({}));
    } else {
      return $dara.cast<UpdateNamespaceResponse>(await this.execute(params, req, runtime), new UpdateNamespaceResponse({}));
    }

  }

  /**
   * Updates a namespace.
   * 
   * @param request - UpdateNamespaceRequest
   * @returns UpdateNamespaceResponse
   */
  async updateNamespace(request: UpdateNamespaceRequest): Promise<UpdateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNamespaceWithOptions(request, runtime);
  }

  /**
   * Updates an image building rule for a repository.
   * 
   * @param request - UpdateRepoBuildRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRepoBuildRuleResponse
   */
  async updateRepoBuildRuleWithOptions(request: UpdateRepoBuildRuleRequest, runtime: $dara.RuntimeOptions): Promise<UpdateRepoBuildRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildArgs)) {
      query["BuildArgs"] = request.buildArgs;
    }

    if (!$dara.isNull(request.buildRuleId)) {
      query["BuildRuleId"] = request.buildRuleId;
    }

    if (!$dara.isNull(request.dockerfileLocation)) {
      query["DockerfileLocation"] = request.dockerfileLocation;
    }

    if (!$dara.isNull(request.dockerfileName)) {
      query["DockerfileName"] = request.dockerfileName;
    }

    if (!$dara.isNull(request.imageTag)) {
      query["ImageTag"] = request.imageTag;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.platforms)) {
      query["Platforms"] = request.platforms;
    }

    if (!$dara.isNull(request.pushName)) {
      query["PushName"] = request.pushName;
    }

    if (!$dara.isNull(request.pushType)) {
      query["PushType"] = request.pushType;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRepoBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new UpdateRepoBuildRuleResponse({}));
    } else {
      return $dara.cast<UpdateRepoBuildRuleResponse>(await this.execute(params, req, runtime), new UpdateRepoBuildRuleResponse({}));
    }

  }

  /**
   * Updates an image building rule for a repository.
   * 
   * @param request - UpdateRepoBuildRuleRequest
   * @returns UpdateRepoBuildRuleResponse
   */
  async updateRepoBuildRule(request: UpdateRepoBuildRuleRequest): Promise<UpdateRepoBuildRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRepoBuildRuleWithOptions(request, runtime);
  }

  /**
   * Updates the URL of the source code repository that is bound to an image repository.
   * 
   * @param request - UpdateRepoSourceCodeRepoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRepoSourceCodeRepoResponse
   */
  async updateRepoSourceCodeRepoWithOptions(request: UpdateRepoSourceCodeRepoRequest, runtime: $dara.RuntimeOptions): Promise<UpdateRepoSourceCodeRepoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoBuild)) {
      query["AutoBuild"] = request.autoBuild;
    }

    if (!$dara.isNull(request.codeRepoId)) {
      query["CodeRepoId"] = request.codeRepoId;
    }

    if (!$dara.isNull(request.codeRepoName)) {
      query["CodeRepoName"] = request.codeRepoName;
    }

    if (!$dara.isNull(request.codeRepoNamespaceName)) {
      query["CodeRepoNamespaceName"] = request.codeRepoNamespaceName;
    }

    if (!$dara.isNull(request.codeRepoType)) {
      query["CodeRepoType"] = request.codeRepoType;
    }

    if (!$dara.isNull(request.disableCacheBuild)) {
      query["DisableCacheBuild"] = request.disableCacheBuild;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.overseaBuild)) {
      query["OverseaBuild"] = request.overseaBuild;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRepoSourceCodeRepo",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRepoSourceCodeRepoResponse>(await this.callApi(params, req, runtime), new UpdateRepoSourceCodeRepoResponse({}));
    } else {
      return $dara.cast<UpdateRepoSourceCodeRepoResponse>(await this.execute(params, req, runtime), new UpdateRepoSourceCodeRepoResponse({}));
    }

  }

  /**
   * Updates the URL of the source code repository that is bound to an image repository.
   * 
   * @param request - UpdateRepoSourceCodeRepoRequest
   * @returns UpdateRepoSourceCodeRepoResponse
   */
  async updateRepoSourceCodeRepo(request: UpdateRepoSourceCodeRepoRequest): Promise<UpdateRepoSourceCodeRepoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRepoSourceCodeRepoWithOptions(request, runtime);
  }

  /**
   * Updates a trigger of an image repository.
   * 
   * @param request - UpdateRepoTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRepoTriggerResponse
   */
  async updateRepoTriggerWithOptions(request: UpdateRepoTriggerRequest, runtime: $dara.RuntimeOptions): Promise<UpdateRepoTriggerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.triggerId)) {
      query["TriggerId"] = request.triggerId;
    }

    if (!$dara.isNull(request.triggerName)) {
      query["TriggerName"] = request.triggerName;
    }

    if (!$dara.isNull(request.triggerTag)) {
      query["TriggerTag"] = request.triggerTag;
    }

    if (!$dara.isNull(request.triggerType)) {
      query["TriggerType"] = request.triggerType;
    }

    if (!$dara.isNull(request.triggerUrl)) {
      query["TriggerUrl"] = request.triggerUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRepoTrigger",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRepoTriggerResponse>(await this.callApi(params, req, runtime), new UpdateRepoTriggerResponse({}));
    } else {
      return $dara.cast<UpdateRepoTriggerResponse>(await this.execute(params, req, runtime), new UpdateRepoTriggerResponse({}));
    }

  }

  /**
   * Updates a trigger of an image repository.
   * 
   * @param request - UpdateRepoTriggerRequest
   * @returns UpdateRepoTriggerResponse
   */
  async updateRepoTrigger(request: UpdateRepoTriggerRequest): Promise<UpdateRepoTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRepoTriggerWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
   * 
   * @param request - UpdateRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRepositoryResponse
   */
  async updateRepositoryWithOptions(request: UpdateRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<UpdateRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.detail)) {
      query["Detail"] = request.detail;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.repoType)) {
      query["RepoType"] = request.repoType;
    }

    if (!$dara.isNull(request.summary)) {
      query["Summary"] = request.summary;
    }

    if (!$dara.isNull(request.tagImmutability)) {
      query["TagImmutability"] = request.tagImmutability;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRepositoryResponse>(await this.callApi(params, req, runtime), new UpdateRepositoryResponse({}));
    } else {
      return $dara.cast<UpdateRepositoryResponse>(await this.execute(params, req, runtime), new UpdateRepositoryResponse({}));
    }

  }

  /**
   * The ID of the request.
   * 
   * @param request - UpdateRepositoryRequest
   * @returns UpdateRepositoryResponse
   */
  async updateRepository(request: UpdateRepositoryRequest): Promise<UpdateRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRepositoryWithOptions(request, runtime);
  }

}
