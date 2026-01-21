// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClearLogStoreStorageRequest extends $dara.Model {
  /**
   * @example
   * cn
   */
  site?: string;
  static names(): { [key: string]: string } {
    return {
      site: 'Site',
    };
  }

  static types(): { [key: string]: any } {
    return {
      site: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

