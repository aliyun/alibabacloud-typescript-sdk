// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RotateTokenPlanKeyRequest extends $dara.Model {
  /**
   * @remarks
   * API Key ID
   * 
   * This parameter is required.
   * 
   * @example
   * ak_123456
   */
  apiKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'ApiKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

