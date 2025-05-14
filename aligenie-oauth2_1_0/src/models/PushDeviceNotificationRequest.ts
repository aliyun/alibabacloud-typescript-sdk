// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushDeviceNotificationRequestTenantInfo } from "./PushDeviceNotificationRequestTenantInfo";
import { PushDeviceNotificationRequestBody } from "./PushDeviceNotificationRequestBody";


export class PushDeviceNotificationRequest extends $dara.Model {
  tenantInfo?: PushDeviceNotificationRequestTenantInfo;
  body?: PushDeviceNotificationRequestBody;
  static names(): { [key: string]: string } {
    return {
      tenantInfo: 'TenantInfo',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantInfo: PushDeviceNotificationRequestTenantInfo,
      body: PushDeviceNotificationRequestBody,
    };
  }

  validate() {
    if(this.tenantInfo && typeof (this.tenantInfo as any).validate === 'function') {
      (this.tenantInfo as any).validate();
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

