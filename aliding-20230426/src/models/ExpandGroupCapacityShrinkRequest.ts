// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExpandGroupCapacityShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cidt*****Xa4K10w==
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

