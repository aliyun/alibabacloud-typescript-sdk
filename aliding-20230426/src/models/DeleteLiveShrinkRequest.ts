// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4d38xxxxx
   */
  liveId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      liveId: 'LiveId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveId: 'string',
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

