// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WearOrgHonorShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  honorId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orgId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  wear?: boolean;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      honorId: 'honorId',
      orgId: 'orgId',
      userId: 'userId',
      wear: 'wear',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      honorId: 'string',
      orgId: 'number',
      userId: 'string',
      wear: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

