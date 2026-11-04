// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { E2BNetwork } from "./E2bnetwork";
import { InnerSandboxRuntimeConfig } from "./InnerSandboxRuntimeConfig";
import { InnerSandboxVolumeMount } from "./InnerSandboxVolumeMount";


export class E2BSandboxResourceTags extends $dara.Model {
  /**
   * @example
   * project
   */
  tagKey?: string;
  /**
   * @example
   * demo
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
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

export class E2BSandbox extends $dara.Model {
  /**
   * @remarks
   * The access endpoint.
   * 
   * @example
   * sbx-xxxx.ap-southeast-1.sandbox.aliyun.com
   */
  accessEndpoint?: string;
  /**
   * @remarks
   * Specifies whether the sandbox is allowed to access the external network.
   */
  allowInternetAccess?: boolean;
  /**
   * @remarks
   * The vCPU specifications.
   * 
   * @example
   * 2
   */
  cpuCount?: number;
  /**
   * @remarks
   * The ephemeral disk specifications.
   * 
   * @example
   * 10240
   */
  diskSizeMB?: number;
  /**
   * @remarks
   * The access domain name of the sandbox.
   * 
   * @example
   * ap-southeast-1.sandbox.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2026-09-04T02:03:43.826Z
   */
  endAt?: string;
  /**
   * @remarks
   * The environment variables.
   */
  envVars?: { [key: string]: string };
  /**
   * @remarks
   * The authentication token for accessing the envd daemon process in the sandbox, in UUID format. This token is automatically generated only when secure is set to true.
   * 
   * @example
   * 4b1e9d07-****
   */
  envdAccessToken?: string;
  /**
   * @remarks
   * The Function Compute function name.
   * 
   * @example
   * template-d391c80b5d1527de
   */
  fcFunctionName?: string;
  /**
   * @remarks
   * The Function Compute instance ID.
   * 
   * @example
   * c-6a9d1501-133e6f48-b3f07782dd47
   */
  fcInstanceID?: string;
  /**
   * @remarks
   * The Function Compute session ID corresponding to the sandbox, in UUID format. This ID is used to locate the underlying session when pausing, resuming, or deleting the sandbox.
   * 
   * @example
   * 3a7ecd09-****
   */
  fcSessionID?: string;
  /**
   * @remarks
   * The sandbox version.
   * 
   * @example
   * 2
   */
  generation?: number;
  /**
   * @remarks
   * The memory specifications.
   * 
   * @example
   * 2
   */
  memoryMB?: number;
  /**
   * @remarks
   * The metadata configuration.
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The network configuration.
   */
  network?: E2BNetwork;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  resourceTags?: E2BSandboxResourceTags[];
  /**
   * @remarks
   * The runtime configuration.
   */
  runtime?: InnerSandboxRuntimeConfig;
  /**
   * @remarks
   * The unique identifier of the sandbox.
   * 
   * @example
   * sbx-xxxx
   */
  sandboxID?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2026-09-04T02:02:43.826Z
   */
  startedAt?: string;
  /**
   * @remarks
   * The sandbox state. Valid values:
   * - running: The sandbox is running.
   * - pausing: The sandbox is pausing.
   * - paused: The sandbox is paused.
   * - resuming: The sandbox is resuming.
   * - pause_fail: The pause operation failed.
   * - resume_fail: The resume operation failed.
   * - snapshotting: A snapshot is being created.
   * - snapshot_failed: Snapshot creation failed.
   * - terminated: The sandbox is terminated.
   * 
   * @example
   * running
   */
  state?: string;
  /**
   * @remarks
   * The unique identifier of the team.
   * 
   * @example
   * eea033af-****
   */
  teamID?: string;
  /**
   * @remarks
   * The team name.
   * 
   * @example
   * default
   */
  teamName?: string;
  /**
   * @remarks
   * The QoS version.
   * 
   * @example
   * eco
   */
  teamPlan?: string;
  /**
   * @remarks
   * The unique identifier of the template.
   * 
   * @example
   * v9vjyzw64bsu83vw0dgs
   */
  templateID?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * base
   */
  templateName?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * @example
   * 2000****
   */
  userID?: string;
  /**
   * @remarks
   * The mount configuration.
   */
  volumeMounts?: InnerSandboxVolumeMount;
  static names(): { [key: string]: string } {
    return {
      accessEndpoint: 'accessEndpoint',
      allowInternetAccess: 'allowInternetAccess',
      cpuCount: 'cpuCount',
      diskSizeMB: 'diskSizeMB',
      domain: 'domain',
      endAt: 'endAt',
      envVars: 'envVars',
      envdAccessToken: 'envdAccessToken',
      fcFunctionName: 'fcFunctionName',
      fcInstanceID: 'fcInstanceID',
      fcSessionID: 'fcSessionID',
      generation: 'generation',
      memoryMB: 'memoryMB',
      metadata: 'metadata',
      network: 'network',
      resourceGroupID: 'resourceGroupID',
      resourceTags: 'resourceTags',
      runtime: 'runtime',
      sandboxID: 'sandboxID',
      startedAt: 'startedAt',
      state: 'state',
      teamID: 'teamID',
      teamName: 'teamName',
      teamPlan: 'teamPlan',
      templateID: 'templateID',
      templateName: 'templateName',
      userID: 'userID',
      volumeMounts: 'volumeMounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessEndpoint: 'string',
      allowInternetAccess: 'boolean',
      cpuCount: 'number',
      diskSizeMB: 'number',
      domain: 'string',
      endAt: 'string',
      envVars: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      envdAccessToken: 'string',
      fcFunctionName: 'string',
      fcInstanceID: 'string',
      fcSessionID: 'string',
      generation: 'number',
      memoryMB: 'number',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      network: E2BNetwork,
      resourceGroupID: 'string',
      resourceTags: { 'type': 'array', 'itemType': E2BSandboxResourceTags },
      runtime: InnerSandboxRuntimeConfig,
      sandboxID: 'string',
      startedAt: 'string',
      state: 'string',
      teamID: 'string',
      teamName: 'string',
      teamPlan: 'string',
      templateID: 'string',
      templateName: 'string',
      userID: 'string',
      volumeMounts: InnerSandboxVolumeMount,
    };
  }

  validate() {
    if(this.envVars) {
      $dara.Model.validateMap(this.envVars);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(Array.isArray(this.resourceTags)) {
      $dara.Model.validateArray(this.resourceTags);
    }
    if(this.runtime && typeof (this.runtime as any).validate === 'function') {
      (this.runtime as any).validate();
    }
    if(this.volumeMounts && typeof (this.volumeMounts as any).validate === 'function') {
      (this.volumeMounts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

