// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConversaionSpaceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cidB8Pzg****FIWPv2PMA==
   */
  openConversationId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      openConversationId: 'OpenConversationId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openConversationId: 'string',
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

