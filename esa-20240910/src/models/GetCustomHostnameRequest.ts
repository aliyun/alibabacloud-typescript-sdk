// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomHostnameRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234567890123
   */
  hostnameId?: number;
  static names(): { [key: string]: string } {
    return {
      hostnameId: 'HostnameId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostnameId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

