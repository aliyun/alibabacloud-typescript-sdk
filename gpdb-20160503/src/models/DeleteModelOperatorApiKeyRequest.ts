// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelOperatorApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API key to delete. The value must be an integer greater than 0. You can obtain the ID by calling ListModelOperatorApiKeys.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  apiKeyId?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'ApiKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

