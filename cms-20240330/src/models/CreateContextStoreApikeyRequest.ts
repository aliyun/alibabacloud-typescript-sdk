// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextStoreAPIKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the API key. Use this name to identify its purpose.
   * 
   * This parameter is required.
   * 
   * @example
   * Production Service Key
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

