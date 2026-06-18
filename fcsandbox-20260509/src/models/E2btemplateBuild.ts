// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class E2BTemplateBuild extends $dara.Model {
  buildID?: string;
  cpuCount?: number;
  createdAt?: string;
  diskSizeMB?: number;
  envdVersion?: string;
  finishedAt?: string;
  memoryMB?: number;
  status?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      buildID: 'buildID',
      cpuCount: 'cpuCount',
      createdAt: 'createdAt',
      diskSizeMB: 'diskSizeMB',
      envdVersion: 'envdVersion',
      finishedAt: 'finishedAt',
      memoryMB: 'memoryMB',
      status: 'status',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildID: 'string',
      cpuCount: 'number',
      createdAt: 'string',
      diskSizeMB: 'number',
      envdVersion: 'string',
      finishedAt: 'string',
      memoryMB: 'number',
      status: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

