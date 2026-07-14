// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelOperatorApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The description. Spaces are not allowed, and the value cannot exceed 256 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * test-apikey
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

