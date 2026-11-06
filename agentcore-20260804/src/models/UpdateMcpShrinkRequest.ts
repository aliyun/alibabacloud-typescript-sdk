// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMcpShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * The client token that is used to ensure request idempotency. This is a reserved query parameter. The current console backend does not read this parameter and does not provide idempotency guarantees such as deduplication or recovery of the original acceptance result based on this token.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426614174000
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

