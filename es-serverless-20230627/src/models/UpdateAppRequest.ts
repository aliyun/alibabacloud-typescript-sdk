// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAppRequestAuthentication } from "./UpdateAppRequestAuthentication";
import { UpdateAppRequestLimiterInfo } from "./UpdateAppRequestLimiterInfo";
import { UpdateAppRequestNetwork } from "./UpdateAppRequestNetwork";
import { UpdateAppRequestPrivateNetwork } from "./UpdateAppRequestPrivateNetwork";


export class UpdateAppRequest extends $dara.Model {
  applyReason?: string;
  authentication?: UpdateAppRequestAuthentication;
  contactInfo?: string;
  /**
   * @remarks
   * 应用备注
   */
  description?: string;
  limiterInfo?: UpdateAppRequestLimiterInfo;
  network?: UpdateAppRequestNetwork[];
  privateNetwork?: UpdateAppRequestPrivateNetwork[];
  static names(): { [key: string]: string } {
    return {
      applyReason: 'applyReason',
      authentication: 'authentication',
      contactInfo: 'contactInfo',
      description: 'description',
      limiterInfo: 'limiterInfo',
      network: 'network',
      privateNetwork: 'privateNetwork',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReason: 'string',
      authentication: UpdateAppRequestAuthentication,
      contactInfo: 'string',
      description: 'string',
      limiterInfo: UpdateAppRequestLimiterInfo,
      network: { 'type': 'array', 'itemType': UpdateAppRequestNetwork },
      privateNetwork: { 'type': 'array', 'itemType': UpdateAppRequestPrivateNetwork },
    };
  }

  validate() {
    if(this.authentication && typeof (this.authentication as any).validate === 'function') {
      (this.authentication as any).validate();
    }
    if(this.limiterInfo && typeof (this.limiterInfo as any).validate === 'function') {
      (this.limiterInfo as any).validate();
    }
    if(Array.isArray(this.network)) {
      $dara.Model.validateArray(this.network);
    }
    if(Array.isArray(this.privateNetwork)) {
      $dara.Model.validateArray(this.privateNetwork);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

