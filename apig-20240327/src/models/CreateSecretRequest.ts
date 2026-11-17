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
   * The KMS key configuration. This parameter is required when secretSource is set to KMS. If this parameter is omitted, the API returns InvalidParameter.IsEmpty(400) with the message "Parameter kmsConfig should not be empty.". This parameter contains two sub-fields: kmsInstanceId (the KMS instance ID) and kmsKeyId (the KMS key ID).
   */
  kmsConfig?: KMSConfig;
  /**
   * @remarks
   * The name of the secret. The name can contain letters, digits, and underscores (_) and can be up to 64 characters in length.
   * 
   * @example
   * my_secret
   */
  name?: string;
  /**
   * @remarks
   * The KMS secret value. This parameter is required. If this parameter is omitted, the API returns InvalidParameter.IsEmpty(400). Because secretSource only supports KMS, you must always provide this parameter in actual calls.
   * 
   * @example
   * apikey-123456xxxxxxxx
   */
  secretData?: string;
  /**
   * @remarks
   * The source of the secret. Currently, only KMS is supported. If you specify other values such as MANUAL, the API returns InvalidParameter.WithValue(400). This parameter is required. If this parameter is not provided, the API also returns InvalidParameter.WithValue(400).
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

