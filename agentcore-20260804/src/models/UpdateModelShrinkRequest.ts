// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The model update request body. At least one non-null parameter must be provided among description, contextSize, maxTokens, and capabilities.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * The client token for idempotency. Not currently supported.
   * 
   * @example
   * client-token-1
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

