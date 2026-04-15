// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScencegroupFileDownloadurlShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * abc*****xyz
   */
  downloadCode?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      downloadCode: 'DownloadCode',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadCode: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

