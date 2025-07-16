// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReportUnReadCountRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 1
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetReportUnReadCountRequest extends $dara.Model {
  /**
   * @example
   * null
   */
  request?: { [key: string]: any };
  tenantContext?: GetReportUnReadCountRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tenantContext: GetReportUnReadCountRequestTenantContext,
    };
  }

  validate() {
    if(this.request) {
      $dara.Model.validateMap(this.request);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

