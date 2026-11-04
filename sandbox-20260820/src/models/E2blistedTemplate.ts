// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContainerConfiguration } from "./ContainerConfiguration";
import { LogConfiguration } from "./LogConfiguration";
import { E2BTemplateTag } from "./E2btemplateTag";


export class E2BListedTemplate extends $dara.Model {
  /**
   * @remarks
   * The template build status. Valid values:
   * - waiting: Waiting to build.
   * - building: Building.
   * - ready: Build succeeded.
   * - error: Build failed.
   * 
   * @example
   * ready
   */
  buildStatus?: string;
  /**
   * @remarks
   * The template category. Valid values:
   * - builtin: A system built-in template.
   * - custom: A user-created template.
   * 
   * @example
   * custom
   */
  category?: string;
  /**
   * @remarks
   * The container image configuration of the template.
   */
  containerConfiguration?: ContainerConfiguration;
  /**
   * @remarks
   * The CPU specification of the sandbox instance, in cores.
   * 
   * @example
   * 2
   */
  cpuCount?: number;
  /**
   * @remarks
   * The creation time in UTC, in RFC 3339 format.
   * 
   * @example
   * 2026-08-20T08:30:00Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The Function Compute function name that the template currently points to. This value is empty when the template is in a failed state.
   * 
   * @example
   * sandbox-tm-8f3a2c7b5e14d806
   */
  functionName?: string;
  /**
   * @remarks
   * The log delivery configuration of the template.
   */
  logConfiguration?: LogConfiguration;
  /**
   * @remarks
   * The memory specification of the sandbox instance, in MB.
   * 
   * @example
   * 2048
   */
  memoryMB?: number;
  /**
   * @remarks
   * The list of template names, including the template name and all its aliases.
   */
  names?: string[];
  /**
   * @remarks
   * Indicates whether the template is public to all teams.
   */
  public?: boolean;
  /**
   * @remarks
   * The Alibaba Cloud resource group ID to which the team belongs.
   * 
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The desensitized description of the reason why the template build failed. This value is empty when the build succeeds.
   * 
   * @example
   * Failed to pull the source image: invalid authentication credentials
   */
  statusReason?: string;
  /**
   * @remarks
   * The list of template labels. Each label points to a specific build.
   */
  tags?: E2BTemplateTag[];
  /**
   * @remarks
   * The ID of the team to which the resource belongs, in UUID format.
   * 
   * @example
   * 5f4a2c18-****
   */
  teamID?: string;
  /**
   * @remarks
   * The team name.
   * 
   * @example
   * sandbox-dev
   */
  teamName?: string;
  /**
   * @remarks
   * The team plan specification. Valid values:
   * - eco: economy.
   * - std: standard.
   * - pro: professional.
   * - ent: enterprise.
   * 
   * @example
   * std
   */
  teamPlan?: string;
  /**
   * @remarks
   * The sandbox template ID.
   * 
   * @example
   * tm-8f3a2c7b5e14d806
   */
  templateID?: string;
  /**
   * @remarks
   * The last update time in UTC, in RFC 3339 format.
   * 
   * @example
   * 2026-08-21T09:15:30Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The user ID of the resource creator, in UUID format.
   * 
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
      functionName: 'functionName',
      logConfiguration: 'logConfiguration',
      memoryMB: 'memoryMB',
      names: 'names',
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
      functionName: 'string',
      logConfiguration: LogConfiguration,
      memoryMB: 'number',
      names: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

