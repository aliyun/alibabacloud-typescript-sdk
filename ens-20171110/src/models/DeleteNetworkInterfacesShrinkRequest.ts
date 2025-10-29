// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkInterfacesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the elastic network interfaces (ENIs).
   * 
   * This parameter is required.
   */
  networkInterfaceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceIdsShrink: 'NetworkInterfaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

