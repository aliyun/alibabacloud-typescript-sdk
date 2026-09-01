// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateRuntimeConfig } from "./PublicTemplateRuntimeConfig";
import { PublicTemplateStatus } from "./PublicTemplateStatus";


export class GetTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2026-08-31T12:00:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
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
   * Id of the request
   * 
   * @example
   * B5AD8B54-4358-5F5B-ACAA-52F2016459C6
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmwxqyrgwabcd
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The runtime configuration of the template.
   */
  runtimeConfig?: PublicTemplateRuntimeConfig;
  /**
   * @remarks
   * The template status.
   */
  status?: PublicTemplateStatus;
  /**
   * @remarks
   * The unique identifier of the team.
   * 
   * @example
   * 88a4c762-b0ce-4661-9413-578b2309e60f
   */
  teamID?: string;
  /**
   * @remarks
   * The team name.
   * 
   * @example
   * codeclaw-localenv
   */
  teamName?: string;
  /**
   * @remarks
   * The unique identifier of the template.
   * 
   * @example
   * tpl-9f3a2b7c8d1e4f5a6b0c7d8e9f1a2b3c
   */
  templateID?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      createdTime: 'createdTime',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
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
      code: 'string',
      createdTime: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
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

