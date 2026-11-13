// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KMSConfig } from "./Kmsconfig";


export class CreateSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the secret.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The gateway type.
   * 
   * @example
   * API
   */
  gatewayType?: string;
  /**
   * @remarks
   * The KMS key configuration information.
   */
  kmsConfig?: KMSConfig;
  /**
   * @remarks
   * The name of the secret. The name can contain letters, digits, and underscores (_) and must not exceed 64 characters in length.
   * 
   * @example
   * my_secret
   */
  name?: string;
  /**
   * @remarks
   * The KMS secret value.
   * 
   * @example
   * apikey-123456xxxxxxxx
   */
  secretData?: string;
  /**
   * @remarks
   * The source of the secret.
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

