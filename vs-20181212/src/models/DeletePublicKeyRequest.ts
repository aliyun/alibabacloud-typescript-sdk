// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePublicKeyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * appKey
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

