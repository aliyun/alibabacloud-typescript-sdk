// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateRuntimeConfig } from "./PublicTemplateRuntimeConfig";
import { PublicTemplateStatus } from "./PublicTemplateStatus";


export class PublicTemplate extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-08-28T12:00:00.000Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * my-template
   */
  name?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmz7h4ocksp5y
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The template runtime configuration.
   */
  runtimeConfig?: PublicTemplateRuntimeConfig;
  /**
   * @remarks
   * The template build status.
   */
  status?: PublicTemplateStatus;
  /**
   * @remarks
   * The unique identifier of the team.
   * 
   * @example
   * 70d1c834-0383-58d8-97ac-5336eb91abcd
   */
  teamID?: string;
  /**
   * @remarks
   * The team name.
   * 
   * @example
   * my-team
   */
  teamName?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * w0aipmi0rvn5xqdnsihg
   */
  templateID?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      name: 'name',
      resourceGroupID: 'resourceGroupID',
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
      runtimeConfig: PublicTemplateRuntimeConfig,
      status: PublicTemplateStatus,
      teamID: 'string',
      teamName: 'string',
      templateID: 'string',
    };
  }

  validate() {
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

