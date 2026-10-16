// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryStoreRequestBody extends $dara.Model {
  /**
   * @remarks
   * The MemoryStore description. Maximum length: 1,024 characters.
   * 
   * @example
   * Memory store used to save long-term customer preferences
   */
  description?: string;
  /**
   * @remarks
   * The custom memory extraction instructions. Maximum length: 4,096 characters.
   * 
   * @example
   * Extract only long-term preferences explicitly expressed by the user
   */
  extractInstructions?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      extractInstructions: 'extractInstructions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      extractInstructions: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemoryStoreRequest extends $dara.Model {
  /**
   * @remarks
   * The update MemoryStore request.
   * 
   * This parameter is required.
   */
  body?: UpdateMemoryStoreRequestBody;
  /**
   * @remarks
   * The client request token.
   * 
   * @example
   * memory-store-update-20260909-001
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateMemoryStoreRequestBody,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

