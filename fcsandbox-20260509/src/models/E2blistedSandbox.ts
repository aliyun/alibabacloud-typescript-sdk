// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BListedSandbox extends $dara.Model {
  cpuCount?: number;
  diskSizeMB?: number;
  endAt?: string;
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
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'cpuCount',
      diskSizeMB: 'diskSizeMB',
      endAt: 'endAt',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      diskSizeMB: 'number',
      endAt: 'string',
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
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

