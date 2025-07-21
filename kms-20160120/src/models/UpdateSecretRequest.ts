// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecretRequestExtendedConfig extends $dara.Model {
  /**
   * @remarks
   * The custom data in the extended configuration of the secret.
   * 
   * > *   If this parameter is specified, the existing extended configuration of the secret is updated.
   * > *   This parameter is unavailable for generic secrets.
   * 
   * @example
   * {"DBName":"app1","Port":"3306"}
   */
  customData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      customData: 'CustomData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.customData) {
      $dara.Model.validateMap(this.customData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRequest extends $dara.Model {
  extendedConfig?: UpdateSecretRequestExtendedConfig;
  /**
   * @remarks
   * The description of the secret.
   * 
   * @example
   * datainfo
   */
  description?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      extendedConfig: 'ExtendedConfig',
      description: 'Description',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedConfig: UpdateSecretRequestExtendedConfig,
      description: 'string',
      secretName: 'string',
    };
  }

  validate() {
    if(this.extendedConfig && typeof (this.extendedConfig as any).validate === 'function') {
      (this.extendedConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

