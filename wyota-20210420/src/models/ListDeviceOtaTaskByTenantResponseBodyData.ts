// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDeviceOtaTaskByTenantResponseBodyDataTenantDeviceOtaTasks } from "./ListDeviceOtaTaskByTenantResponseBodyDataTenantDeviceOtaTasks";


export class ListDeviceOtaTaskByTenantResponseBodyData extends $dara.Model {
  tenantDeviceOtaTasks?: ListDeviceOtaTaskByTenantResponseBodyDataTenantDeviceOtaTasks[];
  static names(): { [key: string]: string } {
    return {
      tenantDeviceOtaTasks: 'TenantDeviceOtaTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantDeviceOtaTasks: { 'type': 'array', 'itemType': ListDeviceOtaTaskByTenantResponseBodyDataTenantDeviceOtaTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tenantDeviceOtaTasks)) {
      $dara.Model.validateArray(this.tenantDeviceOtaTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

