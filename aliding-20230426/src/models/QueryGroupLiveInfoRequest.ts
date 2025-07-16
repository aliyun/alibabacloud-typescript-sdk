// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGroupLiveInfoRequestTenantContext extends $dara.Model {
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

export class QueryGroupLiveInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 333d
   */
  anchorUnionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4d38xxxxx
   */
  liveUuid?: string;
  tenantContext?: QueryGroupLiveInfoRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      anchorUnionId: 'AnchorUnionId',
      liveUuid: 'LiveUuid',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorUnionId: 'string',
      liveUuid: 'string',
      tenantContext: QueryGroupLiveInfoRequestTenantContext,
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

