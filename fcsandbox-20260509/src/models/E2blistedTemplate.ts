// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LogConfiguration } from "./LogConfiguration";
import { E2BTemplateTag } from "./E2btemplateTag";


export class E2BListedTemplate extends $dara.Model {
  aliases?: string[];
  buildStatus?: string;
  cpuCount?: number;
  createdAt?: string;
  lastSpawnedAt?: string;
  logConfiguration?: LogConfiguration;
  memoryMB?: number;
  names?: string[];
  public?: boolean;
  spawnCount?: string;
  statusReason?: string;
  tags?: E2BTemplateTag[];
  templateID?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      buildStatus: 'buildStatus',
      cpuCount: 'cpuCount',
      createdAt: 'createdAt',
      lastSpawnedAt: 'lastSpawnedAt',
      logConfiguration: 'logConfiguration',
      memoryMB: 'memoryMB',
      names: 'names',
      public: 'public',
      spawnCount: 'spawnCount',
      statusReason: 'statusReason',
      tags: 'tags',
      templateID: 'templateID',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: { 'type': 'array', 'itemType': 'string' },
      buildStatus: 'string',
      cpuCount: 'number',
      createdAt: 'string',
      lastSpawnedAt: 'string',
      logConfiguration: LogConfiguration,
      memoryMB: 'number',
      names: { 'type': 'array', 'itemType': 'string' },
      public: 'boolean',
      spawnCount: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': E2BTemplateTag },
      templateID: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliases)) {
      $dara.Model.validateArray(this.aliases);
    }
    if(this.logConfiguration && typeof (this.logConfiguration as any).validate === 'function') {
      (this.logConfiguration as any).validate();
    }
    if(Array.isArray(this.names)) {
      $dara.Model.validateArray(this.names);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

