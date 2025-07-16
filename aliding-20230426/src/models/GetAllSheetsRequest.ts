// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAllSheetsRequestTenantContext extends $dara.Model {
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

export class GetAllSheetsRequest extends $dara.Model {
  tenantContext?: GetAllSheetsRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * stxxxx
   */
  workbookId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContext: 'TenantContext',
      workbookId: 'WorkbookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: GetAllSheetsRequestTenantContext,
      workbookId: 'string',
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

