// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { E2BVolumeMount } from "./E2bvolumeMount";


export class E2BListedSandbox extends $dara.Model {
  alias?: string;
  clientID?: string;
  cpuCount?: number;
  diskSizeMB?: number;
  endAt?: string;
  envdVersion?: string;
  memoryMB?: number;
  metadata?: { [key: string]: string };
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
      alias: 'alias',
      clientID: 'clientID',
      cpuCount: 'cpuCount',
      diskSizeMB: 'diskSizeMB',
      endAt: 'endAt',
      envdVersion: 'envdVersion',
      memoryMB: 'memoryMB',
      metadata: 'metadata',
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
      alias: 'string',
      clientID: 'string',
      cpuCount: 'number',
      diskSizeMB: 'number',
      endAt: 'string',
      envdVersion: 'string',
      memoryMB: 'number',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
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

