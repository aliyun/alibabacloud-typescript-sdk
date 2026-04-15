// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScencegroupFileDownloadurlRequestTenantContext extends $dara.Model {
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

export class GetScencegroupFileDownloadurlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc*****xyz
   */
  downloadCode?: string;
  tenantContext?: GetScencegroupFileDownloadurlRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      downloadCode: 'DownloadCode',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadCode: 'string',
      tenantContext: GetScencegroupFileDownloadurlRequestTenantContext,
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

