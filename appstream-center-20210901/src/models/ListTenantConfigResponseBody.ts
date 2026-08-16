// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTenantConfigResponseBodyTenantConfigModel extends $dara.Model {
  /**
   * @remarks
   * Indicates whether resource expiration reminders are enabled.
   * 
   * @example
   * true
   */
  appInstanceGroupExpireRemind?: boolean;
  /**
   * @example
   * None
   */
  multiSessionSupportType?: string;
  multiSessionSupportedRegions?: string[];
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupExpireRemind: 'AppInstanceGroupExpireRemind',
      multiSessionSupportType: 'MultiSessionSupportType',
      multiSessionSupportedRegions: 'MultiSessionSupportedRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupExpireRemind: 'boolean',
      multiSessionSupportType: 'string',
      multiSessionSupportedRegions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.multiSessionSupportedRegions)) {
      $dara.Model.validateArray(this.multiSessionSupportedRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The user configuration information.
   */
  tenantConfigModel?: ListTenantConfigResponseBodyTenantConfigModel;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tenantConfigModel: 'TenantConfigModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tenantConfigModel: ListTenantConfigResponseBodyTenantConfigModel,
    };
  }

  validate() {
    if(this.tenantConfigModel && typeof (this.tenantConfigModel as any).validate === 'function') {
      (this.tenantConfigModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

