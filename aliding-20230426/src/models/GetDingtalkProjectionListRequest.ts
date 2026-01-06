// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkProjectionListRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
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

export class GetDingtalkProjectionListRequest extends $dara.Model {
  tenantContext?: GetDingtalkProjectionListRequestTenantContext;
  /**
   * @example
   * PROJ001
   */
  code?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 123456789
   */
  orgId?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 343242
   */
  projectorWorkNo?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      code: 'code',
      currentPage: 'currentPage',
      orgId: 'orgId',
      pageSize: 'pageSize',
      projectorWorkNo: 'projectorWorkNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: GetDingtalkProjectionListRequestTenantContext,
      code: 'string',
      currentPage: 'number',
      orgId: 'number',
      pageSize: 'number',
      projectorWorkNo: 'string',
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

