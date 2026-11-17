// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryRequestBody extends $dara.Model {
  /**
   * @remarks
   * The updated string key-value metadata. Provide at least one of Text or Metadata. A maximum of 16 keys are allowed. The maximum length is 64 characters for a key and 1,024 characters for a value.
   * 
   * @example
   * {"topic":"hiking"}
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The updated memory text. Provide at least one of Text or Metadata. The size cannot exceed 32,000 UTF-8 bytes.
   * 
   * @example
   * The user enjoys hiking on weekends
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'metadata',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      text: 'string',
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMemoryRequest extends $dara.Model {
  /**
   * @remarks
   * The request to update a memory.
   * 
   * This parameter is required.
   */
  body?: UpdateMemoryRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateMemoryRequestBody,
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

