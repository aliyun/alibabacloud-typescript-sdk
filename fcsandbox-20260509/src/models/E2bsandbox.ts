// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BSandbox extends $dara.Model {
  accessEndpoint?: string;
  cpuCount?: number;
  diskSizeMB?: number;
  domain?: string;
  endAt?: string;
  fcFunctionName?: string;
  fcInstanceID?: string;
  fcSessionID?: string;
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
      accessEndpoint: 'accessEndpoint',
      cpuCount: 'cpuCount',
      diskSizeMB: 'diskSizeMB',
      domain: 'domain',
      endAt: 'endAt',
      fcFunctionName: 'fcFunctionName',
      fcInstanceID: 'fcInstanceID',
      fcSessionID: 'fcSessionID',
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
      accessEndpoint: 'string',
      cpuCount: 'number',
      diskSizeMB: 'number',
      domain: 'string',
      endAt: 'string',
      fcFunctionName: 'string',
      fcInstanceID: 'string',
      fcSessionID: 'string',
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

