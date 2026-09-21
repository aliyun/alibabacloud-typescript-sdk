// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { E2BNetwork } from "./E2bnetwork";
import { InnerSandboxRuntimeConfig } from "./InnerSandboxRuntimeConfig";
import { InnerSandboxVolumeMount } from "./InnerSandboxVolumeMount";


export class E2BSandbox extends $dara.Model {
  /**
   * @example
   * sbx-xxxx.ap-southeast-1.sandbox.aliyun.com
   */
  accessEndpoint?: string;
  allowInternetAccess?: boolean;
  /**
   * @example
   * 2
   */
  cpuCount?: number;
  /**
   * @example
   * 10240
   */
  diskSizeMB?: number;
  /**
   * @example
   * ap-southeast-1.sandbox.aliyun.com
   */
  domain?: string;
  /**
   * @example
   * 2026-09-04T02:03:43.826Z
   */
  endAt?: string;
  envVars?: { [key: string]: string };
  /**
   * @example
   * 4b1e9d07-****
   */
  envdAccessToken?: string;
  /**
   * @example
   * template-d391c80b5d1527de
   */
  fcFunctionName?: string;
  /**
   * @example
   * c-6a9d1501-133e6f48-b3f07782dd47
   */
  fcInstanceID?: string;
  /**
   * @example
   * 3a7ecd09-****
   */
  fcSessionID?: string;
  /**
   * @example
   * 2
   */
  generation?: number;
  /**
   * @example
   * 2
   */
  memoryMB?: number;
  metadata?: { [key: string]: string };
  network?: E2BNetwork;
  /**
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  runtime?: InnerSandboxRuntimeConfig;
  /**
   * @example
   * sbx-xxxx
   */
  sandboxID?: string;
  /**
   * @example
   * 2026-09-04T02:02:43.826Z
   */
  startedAt?: string;
  /**
   * @example
   * running
   */
  state?: string;
  /**
   * @example
   * eea033af-****
   */
  teamID?: string;
  /**
   * @example
   * default
   */
  teamName?: string;
  /**
   * @example
   * eco
   */
  teamPlan?: string;
  /**
   * @example
   * v9vjyzw64bsu83vw0dgs
   */
  templateID?: string;
  /**
   * @example
   * base
   */
  templateName?: string;
  /**
   * @example
   * 2000****
   */
  userID?: string;
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

