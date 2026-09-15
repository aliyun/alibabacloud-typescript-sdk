// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContainerConfiguration } from "./ContainerConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { E2BTemplateTag } from "./E2btemplateTag";


export class E2BTemplate extends $dara.Model {
  buildStatus?: string;
  category?: string;
  containerConfiguration?: ContainerConfiguration;
  cpuCount?: number;
  createdAt?: string;
  logConfiguration?: LogConfiguration;
  memoryMB?: number;
  names?: string[];
  networkConfiguration?: NetworkConfiguration;
  public?: boolean;
  resourceGroupID?: string;
  statusReason?: string;
  tags?: E2BTemplateTag[];
  teamID?: string;
  teamName?: string;
  teamPlan?: string;
  templateID?: string;
  updatedAt?: string;
  userID?: string;
  static names(): { [key: string]: string } {
    return {
      buildStatus: 'buildStatus',
      category: 'category',
      containerConfiguration: 'containerConfiguration',
      cpuCount: 'cpuCount',
      createdAt: 'createdAt',
      logConfiguration: 'logConfiguration',
      memoryMB: 'memoryMB',
      names: 'names',
      networkConfiguration: 'networkConfiguration',
      public: 'public',
      resourceGroupID: 'resourceGroupID',
      statusReason: 'statusReason',
      tags: 'tags',
      teamID: 'teamID',
      teamName: 'teamName',
      teamPlan: 'teamPlan',
      templateID: 'templateID',
      updatedAt: 'updatedAt',
      userID: 'userID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildStatus: 'string',
      category: 'string',
      containerConfiguration: ContainerConfiguration,
      cpuCount: 'number',
      createdAt: 'string',
      logConfiguration: LogConfiguration,
      memoryMB: 'number',
      names: { 'type': 'array', 'itemType': 'string' },
      networkConfiguration: NetworkConfiguration,
      public: 'boolean',
      resourceGroupID: 'string',
      statusReason: 'string',
      tags: { 'type': 'array', 'itemType': E2BTemplateTag },
      teamID: 'string',
      teamName: 'string',
      teamPlan: 'string',
      templateID: 'string',
      updatedAt: 'string',
      userID: 'string',
    };
  }

  validate() {
    if(this.containerConfiguration && typeof (this.containerConfiguration as any).validate === 'function') {
      (this.containerConfiguration as any).validate();
    }
    if(this.logConfiguration && typeof (this.logConfiguration as any).validate === 'function') {
      (this.logConfiguration as any).validate();
    }
    if(Array.isArray(this.names)) {
      $dara.Model.validateArray(this.names);
    }
    if(this.networkConfiguration && typeof (this.networkConfiguration as any).validate === 'function') {
      (this.networkConfiguration as any).validate();
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

