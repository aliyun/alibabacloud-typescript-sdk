// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExportDeviceInfoOssUrlRequest extends $dara.Model {
  tenantId?: string;
  zoneId?: string;
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'TenantId',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

