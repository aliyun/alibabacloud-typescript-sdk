// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KMSConfig } from "./Kmsconfig";


export class CreateSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the key.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The type of the gateway.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The key configuration information of KMS.
   */
  kmsConfig?: KMSConfig;
  /**
   * @remarks
   * The key name. It can be up to 64 characters in length and can contain letters, digits, and underscores (_).
   * 
   * @example
   * my_secret
   */
  name?: string;
  /**
   * @remarks
   * The value of the KMS credential.
   * 
   * @example
   * apikey-123456xxxxxxxx
   */
  secretData?: string;
  /**
   * @remarks
   * The source of the key.
   * 
   * @example
   * KMS
   */
  secretSource?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      gatewayType: 'gatewayType',
      kmsConfig: 'kmsConfig',
      name: 'name',
      secretData: 'secretData',
      secretSource: 'secretSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gatewayType: 'string',
      kmsConfig: KMSConfig,
      name: 'string',
      secretData: 'string',
      secretSource: 'string',
    };
  }

  validate() {
    if(this.kmsConfig && typeof (this.kmsConfig as any).validate === 'function') {
      (this.kmsConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

