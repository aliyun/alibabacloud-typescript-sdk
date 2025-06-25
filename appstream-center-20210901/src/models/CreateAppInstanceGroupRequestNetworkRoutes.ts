// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceGroupRequestNetworkRoutes extends $dara.Model {
  /**
   * @example
   * 139.196.XX.XX/32
   */
  destination?: string;
  /**
   * @example
   * Shared
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      destination: 'Destination',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

