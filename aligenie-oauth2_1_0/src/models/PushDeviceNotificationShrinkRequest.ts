// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushDeviceNotificationShrinkRequest extends $dara.Model {
  tenantInfoShrink?: string;
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      tenantInfoShrink: 'TenantInfo',
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantInfoShrink: 'string',
      bodyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

