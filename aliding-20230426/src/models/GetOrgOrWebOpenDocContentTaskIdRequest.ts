// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrgOrWebOpenDocContentTaskIdRequestTenantContext extends $dara.Model {
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

export class GetOrgOrWebOpenDocContentTaskIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20eMKjyp810mMdK4Hz4B5BA6JxAZB1Gv
   */
  dentryUuid?: string;
  generateCp?: boolean;
  /**
   * @example
   * 0
   */
  scopeType?: number;
  /**
   * @example
   * markdown
   */
  targetFormat?: string;
  tenantContext?: GetOrgOrWebOpenDocContentTaskIdRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      generateCp: 'GenerateCp',
      scopeType: 'ScopeType',
      targetFormat: 'TargetFormat',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      generateCp: 'boolean',
      scopeType: 'number',
      targetFormat: 'string',
      tenantContext: GetOrgOrWebOpenDocContentTaskIdRequestTenantContext,
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

