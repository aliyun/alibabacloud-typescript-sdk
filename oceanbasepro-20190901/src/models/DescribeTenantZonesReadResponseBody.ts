// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantZonesReadResponseBodyTenantZones } from "./DescribeTenantZonesReadResponseBodyTenantZones";


export class DescribeTenantZonesReadResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a read-only connection needs to be created for the zone.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
   */
  requestId?: string;
  /**
   * @remarks
   * The request ID.
   */
  tenantZones?: DescribeTenantZonesReadResponseBodyTenantZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantZones: 'TenantZones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantZones: { 'type': 'array', 'itemType': DescribeTenantZonesReadResponseBodyTenantZones },
    };
  }

  validate() {
    if(Array.isArray(this.tenantZones)) {
      $dara.Model.validateArray(this.tenantZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

