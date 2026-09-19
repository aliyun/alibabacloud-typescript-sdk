// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateRuntimeConfig } from "./PublicTemplateRuntimeConfig";
import { PublicTemplateStatus } from "./PublicTemplateStatus";


export class GetTemplateResponseBody extends $dara.Model {
  code?: string;
  createdTime?: string;
  message?: string;
  name?: string;
  requestId?: string;
  resourceGroupID?: string;
  runtimeConfig?: PublicTemplateRuntimeConfig;
  status?: PublicTemplateStatus;
  teamID?: string;
  teamName?: string;
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

