// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppSupabaseSecretRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WS20250731233102000001
   */
  bizId?: string;
  /**
   * @remarks
   * Key value
   * 
   * @example
   * ***
   */
  secretKey?: string;
  /**
   * @remarks
   * Key name
   * 
   * @example
   * 277356_pre_auth
   */
  secretName?: string;
  /**
   * @remarks
   * Key Type
   * 
   * @example
   * Opaque
   */
  secretType?: string;
  /**
   * @remarks
   * Key Value
   * 
   * @example
   * 1231
   */
  secretValue?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      secretKey: 'SecretKey',
      secretName: 'SecretName',
      secretType: 'SecretType',
      secretValue: 'SecretValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      secretKey: 'string',
      secretName: 'string',
      secretType: 'string',
      secretValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

