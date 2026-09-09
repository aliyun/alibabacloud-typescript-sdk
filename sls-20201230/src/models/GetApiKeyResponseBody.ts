// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Logstores that allow writes.
   */
  allowedStores?: string[];
  /**
   * @remarks
   * The API key in plaintext.
   * 
   * @example
   * <apiKey-plaintext>
   */
  apiKey?: string;
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
   * The creation time.
   * 
   * @example
   * 1788420000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the API key.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The status of the API key.
   * 
   * @example
   * Enabled / Disabled
   */
  status?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1788420000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      allowedStores: 'allowedStores',
      apiKey: 'apiKey',
      apiKeyName: 'apiKeyName',
      createTime: 'createTime',
      description: 'description',
      status: 'status',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedStores: { 'type': 'array', 'itemType': 'string' },
      apiKey: 'string',
      apiKeyName: 'string',
      createTime: 'number',
      description: 'string',
      status: 'string',
      updateTime: 'number',
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

