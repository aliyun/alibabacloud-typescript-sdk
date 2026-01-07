// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KMSConfig } from "./Kmsconfig";


export class CreateSecretRequest extends $dara.Model {
  description?: string;
  gatewayType?: string;
  kmsConfig?: KMSConfig;
  name?: string;
  secretData?: string;
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

