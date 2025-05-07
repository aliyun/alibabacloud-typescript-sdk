// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecretResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the deleted Secret.
   * 
   * @example
   * 16
   */
  secretId?: number;
  static names(): { [key: string]: string } {
    return {
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

