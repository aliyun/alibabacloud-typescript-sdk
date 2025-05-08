// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayServiceResponseBodyDataResultVersions extends $dara.Model {
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * v1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

