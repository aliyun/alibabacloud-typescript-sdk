// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Provide at least one field to be updated. Unprovided fields remain unchanged. You can pass an empty string for the description field to clear the description, or omit it to keep the description unchanged.
   * 
   * This parameter is required.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * Optional. For retries on the same knowledge base with the same client token and identical update content, the accepted result is returned without further modifications. If the content differs, an IdempotencyConflict error is returned.
   * 
   * @example
   * kb-update-001
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

