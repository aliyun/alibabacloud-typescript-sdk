// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchMainOrgShrinkRequest extends $dara.Model {
  /**
   * @example
   * 21001
   */
  targetOrgId?: number;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      targetOrgId: 'TargetOrgId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetOrgId: 'number',
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

