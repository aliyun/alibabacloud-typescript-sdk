// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetRelationFromAddressRequest extends $dara.Model {
  /**
   * @example
   * xxx@xxx.com
   */
  fromAddress?: string;
  /**
   * @example
   * xxx
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      fromAddress: 'FromAddress',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromAddress: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

