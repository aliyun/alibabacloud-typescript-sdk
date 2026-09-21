// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateRuntimeConfig } from "./PublicTemplateRuntimeConfig";
import { PublicTemplateStatus } from "./PublicTemplateStatus";


export class PublicTemplate extends $dara.Model {
  /**
   * @example
   * 2026-08-20T08:30:00Z
   */
  createdTime?: string;
  /**
   * @example
   * python-data-analysis
   */
  name?: string;
  /**
   * @example
   * rg-****
   */
  resourceGroupID?: string;
  runtimeConfig?: PublicTemplateRuntimeConfig;
  status?: PublicTemplateStatus;
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
   * tm-8f3a2c7b5e14d806
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

