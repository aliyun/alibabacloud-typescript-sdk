// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreSecretRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the secret you want to restore.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

