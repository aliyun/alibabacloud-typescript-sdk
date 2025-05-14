// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserIdByOrgIdAndStaffIdShrinkRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  orgId?: number;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'number',
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

