// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application access point (AAP).
   * 
   * @example
   * aap_test
   */
  aapName?: string;
  static names(): { [key: string]: string } {
    return {
      aapName: 'AapName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aapName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

