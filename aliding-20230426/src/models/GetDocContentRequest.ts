// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocContentRequestTenantContext extends $dara.Model {
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

export class GetDocContentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dentry_uuid
   */
  dentryUuid?: string;
  /**
   * @example
   * markdown
   */
  targetFormat?: string;
  tenantContext?: GetDocContentRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   */
  userToken?: string;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      targetFormat: 'TargetFormat',
      tenantContext: 'TenantContext',
      userToken: 'userToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      targetFormat: 'string',
      tenantContext: GetDocContentRequestTenantContext,
      userToken: 'string',
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

