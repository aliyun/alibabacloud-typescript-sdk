// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCatalogKmsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  kmsKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsKeyId: 'kmsKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsKeyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

