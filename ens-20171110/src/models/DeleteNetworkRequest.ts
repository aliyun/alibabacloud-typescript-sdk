// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteNetworkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network.
   * 
   * This parameter is required.
   * 
   * @example
   * n-5***
   */
  networkId?: string;
  static names(): { [key: string]: string } {
    return {
      networkId: 'NetworkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

