// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContainerConfiguration } from "./ContainerConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { NetworkConfiguration } from "./NetworkConfiguration";
import { E2BTemplateTag } from "./E2btemplateTag";


export class E2BTemplate extends $dara.Model {
  /**
   * @example
   * ready
   */
  buildStatus?: string;
  /**
   * @example
   * custom
   */
  category?: string;
  containerConfiguration?: ContainerConfiguration;
  /**
   * @example
   * 2
   */
  cpuCount?: number;
  /**
   * @example
   * 2026-08-20T08:30:00Z
   */
  createdAt?: string;
  logConfiguration?: LogConfiguration;
  /**
   * @example
   * 2048
   */
  memoryMB?: number;
  names?: string[];
  networkConfiguration?: NetworkConfiguration;
  public?: boolean;
  /**
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @example
   * 拉取源镜像失败：认证信息无效
   */
  statusReason?: string;
  tags?: E2BTemplateTag[];
  /**
   * @example
   * 5f4a2c18-****
   */
  teamID?: string;
  /**
   * @example
   * sandbox-dev
   */
  teamName?: string;
  /**
   * @example
   * std
   */
  teamPlan?: string;
  /**
   * @example
   * tm-8f3a2c7b5e14d806
   */
  templateID?: string;
  /**
   * @example
   * 2026-08-21T09:15:30Z
   */
  updatedAt?: string;
  /**
   * @example
   * 9c1d4e72-****
   */
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

