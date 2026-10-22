// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMemoryStoreShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The MemoryStore creation request.
   * 
   * This parameter is required.
   */
  bodyShrink?: string;
  /**
   * @remarks
   * The client token.
   * 
   * @example
   * memory-store-create-20260909-001
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

