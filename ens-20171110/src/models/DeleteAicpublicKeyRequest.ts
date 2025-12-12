// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAICPublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * Public Key Name
   * 
   * This parameter is required.
   * 
   * @example
   * mykey
   */
  keyName?: string;
  static names(): { [key: string]: string } {
    return {
      keyName: 'KeyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

