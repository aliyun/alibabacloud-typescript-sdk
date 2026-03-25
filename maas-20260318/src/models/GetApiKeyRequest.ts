// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * API Key ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 3303332
   */
  apiKeyId?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
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

