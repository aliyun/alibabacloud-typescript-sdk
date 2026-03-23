// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetCancelRelationFromAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The sender address. This parameter is required.
   * 
   * @example
   * xxx@xxx.com
   */
  fromAddress?: string;
  /**
   * @remarks
   * The ID of the configuration set. This parameter is required.
   * 
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

