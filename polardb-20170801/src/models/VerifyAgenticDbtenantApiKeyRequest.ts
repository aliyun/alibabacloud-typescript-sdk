// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyAgenticDBTenantApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The plaintext of the API key to be validated.
   * 
   * This parameter is required.
   * 
   * @example
   * pagc_key_cGFnYy1icDFh...kX9mP2vL7wQ3
   */
  apiKey?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

