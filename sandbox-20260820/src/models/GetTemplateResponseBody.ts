// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateRuntimeConfig } from "./PublicTemplateRuntimeConfig";
import { PublicTemplateStatus } from "./PublicTemplateStatus";


export class GetTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 2026-09-19T10:00:00Z
   */
  createdTime?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * my-template
   */
  name?: string;
  /**
   * @example
   * B5AD8B54-4358-5F5B-ACAA-52F2016459C6
   */
  requestId?: string;
  /**
   * @example
   * rg-acfmxazb4ph6aiy
   */
  resourceGroupID?: string;
  runtimeConfig?: PublicTemplateRuntimeConfig;
  status?: PublicTemplateStatus;
  /**
   * @example
   * 13b721e6-8cc8-5df2-af13-80316f7508af
   */
  teamID?: string;
  /**
   * @example
   * my-team
   */
  teamName?: string;
  /**
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

