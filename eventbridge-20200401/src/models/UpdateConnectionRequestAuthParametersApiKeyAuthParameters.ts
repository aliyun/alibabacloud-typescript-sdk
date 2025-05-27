// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConnectionRequestAuthParametersApiKeyAuthParameters extends $dara.Model {
  /**
   * @remarks
   * The key of the API key.
   * 
   * @example
   * name
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The value of the API key.
   * 
   * @example
   * demo
   */
  apiKeyValue?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'ApiKeyName',
      apiKeyValue: 'ApiKeyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      apiKeyValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

