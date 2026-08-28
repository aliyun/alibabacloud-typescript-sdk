// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExternalAgentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * A reserved idempotency token. The backend does not guarantee idempotency in the current version.
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

