// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateRuntimeConfig } from "./PublicTemplateRuntimeConfig";
import { PublicTemplateStatus } from "./PublicTemplateStatus";


export class GetTemplateResponseBodyResourceTags extends $dara.Model {
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

export class GetTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. The value is 200 if the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2026-09-19T10:00:00Z
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
   * The name of the template.
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
   * rg-acfmxazb4ph6aiy
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The resource tags.
   */
  resourceTags?: GetTemplateResponseBodyResourceTags[];
  /**
   * @remarks
   * The runtime configuration of the template.
   */
  runtimeConfig?: PublicTemplateRuntimeConfig;
  /**
   * @remarks
   * The status of the template.
   */
  status?: PublicTemplateStatus;
  /**
   * @remarks
   * The team ID.
   * 
   * @example
   * 13b721e6-8cc8-5df2-af13-80316f7508af
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
   * The unique identifier of the template.
   * 
   * @example
   * us7dxqaezw5uu7aa2cm5
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
      code: 'string',
      createdTime: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      resourceGroupID: 'string',
      resourceTags: { 'type': 'array', 'itemType': GetTemplateResponseBodyResourceTags },
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

