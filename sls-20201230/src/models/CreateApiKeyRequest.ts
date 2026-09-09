// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The list of Logstores that the API key is allowed to write to.
   */
  allowedStores?: string[];
  /**
   * @remarks
   * The API key name.
   * 
   * @example
   * demo-apikey-001
   */
  apiKeyName?: string;
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
      apiKeyName: 'apiKeyName',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedStores: { 'type': 'array', 'itemType': 'string' },
      apiKeyName: 'string',
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

