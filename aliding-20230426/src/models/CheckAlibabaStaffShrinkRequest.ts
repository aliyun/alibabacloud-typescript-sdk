// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAlibabaStaffShrinkRequest extends $dara.Model {
  /**
   * @example
   * 156****9665
   */
  mobile?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      mobile: 'Mobile',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobile: 'string',
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

