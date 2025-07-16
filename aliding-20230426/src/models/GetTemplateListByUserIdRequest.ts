// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateListByUserIdRequestTenantContext extends $dara.Model {
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

export class GetTemplateListByUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  offset?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  size?: number;
  tenantContext?: GetTemplateListByUserIdRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      size: 'Size',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      size: 'number',
      tenantContext: GetTemplateListByUserIdRequestTenantContext,
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

