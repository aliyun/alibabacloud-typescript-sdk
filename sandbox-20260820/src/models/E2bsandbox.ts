// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { E2BNetwork } from "./E2bnetwork";
import { InnerSandboxRuntimeConfig } from "./InnerSandboxRuntimeConfig";
import { InnerSandboxVolumeMount } from "./InnerSandboxVolumeMount";


export class E2BSandbox extends $dara.Model {
  accessEndpoint?: string;
  allowInternetAccess?: boolean;
  cpuCount?: number;
  diskSizeMB?: number;
  domain?: string;
  endAt?: string;
  envVars?: { [key: string]: string };
  envdAccessToken?: string;
  fcFunctionName?: string;
  fcInstanceID?: string;
  fcSessionID?: string;
  generation?: number;
  memoryMB?: number;
  metadata?: { [key: string]: string };
  network?: E2BNetwork;
  resourceGroupID?: string;
  runtime?: InnerSandboxRuntimeConfig;
  sandboxID?: string;
  startedAt?: string;
  state?: string;
  teamID?: string;
  teamName?: string;
  teamPlan?: string;
  templateID?: string;
  templateName?: string;
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

