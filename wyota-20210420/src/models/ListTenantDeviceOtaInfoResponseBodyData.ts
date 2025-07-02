// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTenantDeviceOtaInfoResponseBodyDataTenantDeviceOtaInfos } from "./ListTenantDeviceOtaInfoResponseBodyDataTenantDeviceOtaInfos";


export class ListTenantDeviceOtaInfoResponseBodyData extends $dara.Model {
  tenantDeviceOtaInfos?: ListTenantDeviceOtaInfoResponseBodyDataTenantDeviceOtaInfos[];
  static names(): { [key: string]: string } {
    return {
      tenantDeviceOtaInfos: 'TenantDeviceOtaInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantDeviceOtaInfos: { 'type': 'array', 'itemType': ListTenantDeviceOtaInfoResponseBodyDataTenantDeviceOtaInfos },
    };
  }

  validate() {
    if(Array.isArray(this.tenantDeviceOtaInfos)) {
      $dara.Model.validateArray(this.tenantDeviceOtaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

