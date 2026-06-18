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
  sandboxID?: string;
  startedAt?: string;
  state?: string;
  templateID?: string;
  templateName?: string;
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
      sandboxID: 'sandboxID',
      startedAt: 'startedAt',
      state: 'state',
      templateID: 'templateID',
      templateName: 'templateName',
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
      sandboxID: 'string',
      startedAt: 'string',
      state: 'string',
      templateID: 'string',
      templateName: 'string',
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

