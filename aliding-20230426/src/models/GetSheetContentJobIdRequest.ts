// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSheetContentJobIdRequestTenantContext extends $dara.Model {
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

export class GetSheetContentJobIdRequest extends $dara.Model {
  /**
   * @example
   * MNDoBb60VLYDGNPytQe7Gzp4JlemrZQ3
   */
  dentryUuid?: string;
  /**
   * @example
   * dingTalksheetToxlsx
   */
  exportType?: string;
  tenantContext?: GetSheetContentJobIdRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      exportType: 'ExportType',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      exportType: 'string',
      tenantContext: GetSheetContentJobIdRequestTenantContext,
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

