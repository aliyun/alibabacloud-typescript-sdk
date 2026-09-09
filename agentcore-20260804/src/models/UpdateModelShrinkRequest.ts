// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request body for updating the model. At least one non-null parameter must be provided among description, contextSize, maxTokens, and capabilities.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * The client token for idempotence. Not supported.
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

