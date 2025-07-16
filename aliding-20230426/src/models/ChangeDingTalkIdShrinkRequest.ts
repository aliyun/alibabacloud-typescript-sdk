// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeDingTalkIdShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4uf_iw54grufg9
   */
  dingTalkId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dingTalkId: 'DingTalkId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingTalkId: 'string',
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

