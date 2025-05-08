// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network.
   * 
   * This parameter is required.
   * 
   * @example
   * n-****
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

