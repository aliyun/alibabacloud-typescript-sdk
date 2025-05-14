// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSheetContentJobIdShrinkRequest extends $dara.Model {
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
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      exportType: 'ExportType',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      exportType: 'string',
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

