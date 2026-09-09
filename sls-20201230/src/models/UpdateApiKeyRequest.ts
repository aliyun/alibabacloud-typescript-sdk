// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The list of Logstores to which data can be written.
   */
  allowedStores?: string[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      allowedStores: 'allowedStores',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedStores: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedStores)) {
      $dara.Model.validateArray(this.allowedStores);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

