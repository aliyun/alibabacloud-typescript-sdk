// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateRuntimeConfig } from "./PublicTemplateRuntimeConfig";
import { PublicTemplateStatus } from "./PublicTemplateStatus";


export class PublicTemplateResourceTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * project
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * demo
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublicTemplate extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created, in UTC and RFC 3339 format.
   * 
   * @example
   * 2026-08-20T08:30:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The name of the template, which is unique within a team.
   * 
   * @example
   * python-data-analysis
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group to which the team belongs.
   * 
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The resource tags.
   */
  resourceTags?: PublicTemplateResourceTags[];
  /**
   * @remarks
   * The runtime configuration of the template, which determines the specifications and environment of the sandbox instances created from the template.
   */
  runtimeConfig?: PublicTemplateRuntimeConfig;
  /**
   * @remarks
   * The current status of the template.
   */
  status?: PublicTemplateStatus;
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
   * The name of the team.
   * 
   * @example
   * sandbox-dev
   */
  teamName?: string;
  /**
   * @remarks
   * The ID of the sandbox template.
   * 
   * @example
   * tm-8f3a2c7b5e14d806
   */
  templateID?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      name: 'name',
      resourceGroupID: 'resourceGroupID',
      resourceTags: 'resourceTags',
      runtimeConfig: 'runtimeConfig',
      status: 'status',
      teamID: 'teamID',
      teamName: 'teamName',
      templateID: 'templateID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      name: 'string',
      resourceGroupID: 'string',
      resourceTags: { 'type': 'array', 'itemType': PublicTemplateResourceTags },
      runtimeConfig: PublicTemplateRuntimeConfig,
      status: PublicTemplateStatus,
      teamID: 'string',
      teamName: 'string',
      templateID: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceTags)) {
      $dara.Model.validateArray(this.resourceTags);
    }
    if(this.runtimeConfig && typeof (this.runtimeConfig as any).validate === 'function') {
      (this.runtimeConfig as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

