// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlidingAssistantShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  assistantId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'AssistantId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
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

