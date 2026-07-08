// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { E2BLifecycle } from "./E2blifecycle";
import { E2BNetwork } from "./E2bnetwork";
import { E2BVolumeMount } from "./E2bvolumeMount";


export class E2BSandbox extends $dara.Model {
  accessEndpoint?: string;
  alias?: string;
  allowInternetAccess?: boolean;
  clientID?: string;
  cpuCount?: number;
  diskSizeMB?: number;
  domain?: string;
  endAt?: string;
  envdAccessToken?: string;
  envdVersion?: string;
  fcFunctionName?: string;
  fcInstanceID?: string;
  fcSessionID?: string;
  lifecycle?: E2BLifecycle;
  memoryMB?: number;
  metadata?: { [key: string]: string };
  network?: E2BNetwork;
  resourceGroupID?: string;
  sandboxID?: string;
  startedAt?: string;
  state?: string;
  teamID?: string;
  teamName?: string;
  templateID?: string;
  templateName?: string;
  userID?: string;
  volumeMounts?: E2BVolumeMount[];
  static names(): { [key: string]: string } {
    return {
      accessEndpoint: 'accessEndpoint',
      alias: 'alias',
      allowInternetAccess: 'allowInternetAccess',
      clientID: 'clientID',
      cpuCount: 'cpuCount',
      diskSizeMB: 'diskSizeMB',
      domain: 'domain',
      endAt: 'endAt',
      envdAccessToken: 'envdAccessToken',
      envdVersion: 'envdVersion',
      fcFunctionName: 'fcFunctionName',
      fcInstanceID: 'fcInstanceID',
      fcSessionID: 'fcSessionID',
      lifecycle: 'lifecycle',
      memoryMB: 'memoryMB',
      metadata: 'metadata',
      network: 'network',
      resourceGroupID: 'resourceGroupID',
      sandboxID: 'sandboxID',
      startedAt: 'startedAt',
      state: 'state',
      teamID: 'teamID',
      teamName: 'teamName',
      templateID: 'templateID',
      templateName: 'templateName',
      userID: 'userID',
      volumeMounts: 'volumeMounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessEndpoint: 'string',
      alias: 'string',
      allowInternetAccess: 'boolean',
      clientID: 'string',
      cpuCount: 'number',
      diskSizeMB: 'number',
      domain: 'string',
      endAt: 'string',
      envdAccessToken: 'string',
      envdVersion: 'string',
      fcFunctionName: 'string',
      fcInstanceID: 'string',
      fcSessionID: 'string',
      lifecycle: E2BLifecycle,
      memoryMB: 'number',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      network: E2BNetwork,
      resourceGroupID: 'string',
      sandboxID: 'string',
      startedAt: 'string',
      state: 'string',
      teamID: 'string',
      teamName: 'string',
      templateID: 'string',
      templateName: 'string',
      userID: 'string',
      volumeMounts: { 'type': 'array', 'itemType': E2BVolumeMount },
    };
  }

  validate() {
    if(this.lifecycle && typeof (this.lifecycle as any).validate === 'function') {
      (this.lifecycle as any).validate();
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(Array.isArray(this.volumeMounts)) {
      $dara.Model.validateArray(this.volumeMounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

