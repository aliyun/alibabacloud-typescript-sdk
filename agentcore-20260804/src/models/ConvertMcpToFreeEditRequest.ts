// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertMcpToFreeEditRequest extends $dara.Model {
  /**
   * @remarks
   * The reserved query request identifier. The console backend does not read this parameter and does not provide idempotency guarantees, such as deduplication or restoration of the original processing result, based on this identifier.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

