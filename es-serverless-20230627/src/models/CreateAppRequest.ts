// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAppRequestAuthentication } from "./CreateAppRequestAuthentication";
import { CreateAppRequestNetwork } from "./CreateAppRequestNetwork";
import { CreateAppRequestPrivateNetwork } from "./CreateAppRequestPrivateNetwork";
import { CreateAppRequestQuotaInfo } from "./CreateAppRequestQuotaInfo";
import { CreateAppRequestTags } from "./CreateAppRequestTags";


export class CreateAppRequest extends $dara.Model {
  /**
   * @remarks
   * 应用名
   * 
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  authentication?: CreateAppRequestAuthentication;
  /**
   * @remarks
   * This parameter is required.
   */
  chargeType?: string;
  /**
   * @remarks
   * 应用备注
   */
  description?: string;
  network?: CreateAppRequestNetwork[];
  privateNetwork?: CreateAppRequestPrivateNetwork[];
  quotaInfo?: CreateAppRequestQuotaInfo;
  regionId?: string;
  scenario?: string;
  tags?: CreateAppRequestTags[];
  version?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      authentication: 'authentication',
      chargeType: 'chargeType',
      description: 'description',
      network: 'network',
      privateNetwork: 'privateNetwork',
      quotaInfo: 'quotaInfo',
      regionId: 'regionId',
      scenario: 'scenario',
      tags: 'tags',
      version: 'version',
      clientToken: 'clientToken',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      authentication: CreateAppRequestAuthentication,
      chargeType: 'string',
      description: 'string',
      network: { 'type': 'array', 'itemType': CreateAppRequestNetwork },
      privateNetwork: { 'type': 'array', 'itemType': CreateAppRequestPrivateNetwork },
      quotaInfo: CreateAppRequestQuotaInfo,
      regionId: 'string',
      scenario: 'string',
      tags: { 'type': 'array', 'itemType': CreateAppRequestTags },
      version: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.authentication && typeof (this.authentication as any).validate === 'function') {
      (this.authentication as any).validate();
    }
    if(Array.isArray(this.network)) {
      $dara.Model.validateArray(this.network);
    }
    if(Array.isArray(this.privateNetwork)) {
      $dara.Model.validateArray(this.privateNetwork);
    }
    if(this.quotaInfo && typeof (this.quotaInfo as any).validate === 'function') {
      (this.quotaInfo as any).validate();
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

